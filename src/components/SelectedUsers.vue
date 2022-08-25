<template>
    <div class="container">
        <div class="head">Details:</div>
        <div class="course-container">
            <div class="course-head">Course:</div>
            <div class="course-name">{{selectedCourse}}</div>
        </div>
        <div class="head">Users:</div>
        <div :key="user.uid" v-for="user in selectedUser">
            <ShowUsers v-bind:user="user" v-bind:canDeleted="true"/>
        </div> 
        <a>
            <div @click="activatePack" class="activate-btn" v-if="selectedUser.length>0">Activate</div>       
        </a>
    </div>
</template>

<script>
import ShowUsers from './ShowUsers.vue'
import { notification } from 'ant-design-vue'
import axios from "axios"

export default {    
    methods:{
        activatePack: function() {
            let type
            let course = this.$store.state.pack.course
            let packKey = this.$store.state.pack.packKey
            if(packKey==1){
                type="Course"
            }
            else if(packKey==2){
                type="workshop"
            }
            else if(packKey==3){
                type="live"
            }
            this.$store.state.pack.selectedUsers.forEach(user=>{
                    var data = JSON.stringify({
                    uid: user.uid,
                    type ,
                    name: course
                    });

                    var config = {
                    method: 'post',
                    url: 'https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/packActivation?',
                    headers: { 
                        'Authorization': 'Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba', 
                        'Content-Type': 'application/json'
                    },
                    data : data
                    };

                    axios(config)
                    .then((response)=> {
                    console.log(JSON.stringify(response.data));
                    this.$store.commit("deleteSelectedUser",{uid:user.uid})
                    notification.open({
                                message: 'Pack Activated',
                                description:
                                'Pack successfully Activated for the User '+ user.uid,
                                onClick: () => {
                                console.log('Notification Clicked!');
                                },
                            });
                    })
                    .catch((error)=> {
                    console.log(error);
                    alert("Error! Courses not Added for id: ", user.uid)
                    });

            })            
        }
    },
    computed: {
        selectedUser() {
            console.log("users.........", this.$store.state.pack.selectedUsers);
            return this.$store.state.pack.selectedUsers;
        },
        selectedCourse(){
            return this.$store.state.pack.course;
        }
    },
    components: { ShowUsers }
}
</script>

<style scoped>
    .container{
        width:50%;
        padding:30px;
    }
    .activate-btn{
        margin-top:10px;
        background-color:#8C62D3;
        color:white;
        padding:20px 50px;
        width:fit-content;
    }
    .head{
        color:#8C62D3;
        font-size:24px;
        margin-bottom:20px;
    }
    .course-container{
        padding:20px;
        background-color:#8b62d318 ;
        font-size:18px;
        margin-bottom:20px;
    }
    .course-head{
        color:#8C62D3;
        font-size:18px;
    }
    .course-name{
        color:rgb(84, 84, 84);
        font-size:18px;
    }
     @media only screen and (max-width: 1500px) {   
        .container{
            width:100%;  
        }

     }
</style>