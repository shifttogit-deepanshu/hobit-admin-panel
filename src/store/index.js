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
        console.log("got this data............")
        })
        .catch(function (error) {
        console.log(error);
        });
    }
  }
}

const pack = {
  state: {packKey:1,packdata:[],course:null,searcheduser:[]}, 
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
  setSearchedUser(state,user){
    state.searcheduser = [...state.searcheduser,user]
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
 
        console.log(response.data);
        commit("setPackData",response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pack,
    orders
  }
})
