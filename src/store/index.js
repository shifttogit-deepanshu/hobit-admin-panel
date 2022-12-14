import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

const orders = {
  state: {data:[],orderKey:1},
  mutations: {
   setOrderData(state,data){
    state.data = data
   },
   setOrderKey(state,key){
    state.orderKey=key
    }
  },
  actions: {
    getOrderData({commit},payload){
      // console.log(commit)
      const key = payload.key
      let reqType

      if(key==1){
        reqType="failed"
      }
      else if(key==2){
        reqType="open"
      }
      else if(key==3){
        reqType="close"
      }

      let config = {
        method: 'get',
        url: `https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/orderDetails?orderType=${reqType}`,
        headers: { 
            'Authorization': 'Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba'
        }
        };

        axios(config)
        .then(function (response) {
        // console.log(response.data);
        response.data.sort((a, b) => {
          return b.created - a.created;
        });
        commit('setOrderData',response.data)
        })
        .catch(function (error) {
        console.log(error);
        });
    }
  }
}

const pack = {
  state: {packKey:1,packdata:[],course:"",selectedUsers:[]}, 
  mutations: {
    setPackData(state,packdata){
      state.packdata=packdata
    },
    setPackKey(state,key){
      state.packKey=key
  },
  setCourse(state,course){
    state.course=course
  },
  deleteCourse(state){
    state.course=""
  },
  setSelectedUsers(state,user){
    const index = state.selectedUsers.findIndex(obj => obj.uid === user.uid)

    if (index === -1) {
      state.selectedUsers = [...state.selectedUsers,user]
    }
  },
  deleteSelectedUser(state,user){
    state.selectedUsers= state.selectedUsers.filter((item) => item.uid !== user.uid);
  }
},
  actions: {
    getPackData({commit},payload){
      // console.log(commit)
      const key = payload.key
      let packType

      if(key==1){
        packType="Course"
      }
      else if(key==2){
        packType="workshop"
      }
      else if(key==3){
        packType="live"
      }

      let config = {
        method: 'get',
        url: `https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/getPackDetails?type=${packType}`,
        headers: { 
          'Authorization': 'Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba'
        }
      };

      axios(config)
      .then(function (response) {
        response.data.sort((a, b) => {
          return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
        });
        response.data.sort((a, b) => {
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        });
        // response.data.forEach(item=>{
        //   if(item.startDate){
        //     console.log(new Date(item.startDate).getTime())
        //   }
        // })
        // if(response.data.startDate){
        //   console.log(response.data.startDate)
        // }
        console.log(response.data);
        commit("setPackData",response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}

const login = {
  state: {pageKey:0},
  mutations: {
    setPageKey(state,key){
     state.pageKey = key
    }
   },
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    pack,
    orders
  }
})
