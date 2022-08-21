<template>
    <a @click="()=>deleteUser(user)">
        <div class="user">
            <div><a-icon type="delete" /></div>
            <div class="even">
                {{user.name}}
            </div>
            <div class="even">
                <span class="grey">{{user.uid}}</span>
            </div>
            <div class="even">
                {{user.email}}
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props:["user"],
    methods:{
        deleteUser:function(userObj){
            console.log(userObj)
            this.$store.commit("deleteSelectedUser",{uid:userObj.uid})
        }
    }
}
</script>

<style scoped>
    .user{
        padding:20px;
        border:1px solid #8C62D3;
        width:100%;
        color:#8C62D3;
        display:flex;
        align-items: center;
    }
    .user:hover{
        background-color:#b6a4d520;        
    }
    .grey{
        color:rgb(115, 115, 115);
    }
    .even{
        width:100%;
        display: flex;
        padding:0px 20px;
    }
    @media only screen and (max-width: 1500px) {   
    .user{
        flex-direction: column;  
        justify-content: space-around;
        align-items: center;
        padding:10px;
    }
    .even{
        line-break:auto;
    }
    }
</style>