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
            <div class="activate-btn" v-if="selectedUser.length>0">Activate</div>       
        </a>
    </div>
</template>

<script>
import ShowUsers from './ShowUsers.vue'

export default {
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