<template>
    <a @click="()=>selectUser(user)">
        <div class="user">
            <div>
                {{user.Name}}
            </div>
            <div class="grey">
                {{user.UID}}
            </div>
            <div>
                {{user.Email_ID}}
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props:["user"],
    methods:{
        selectUser:function(user){
            this.$store.commit("setSelectedUsers",{name:user.Name,uid:user.UID,email:user.Email_ID})
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
        justify-content: space-around;
        align-items: center;
    }
    .user:hover{
        background-color:#b6a4d520;        
    }
    .grey{
        color:rgb(115, 115, 115);
    }
     @media only screen and (max-width: 1500px) {   
    .user{
        flex-direction: column;  
        padding:10px;
        justify-content: initial;
        align-items: initial;
    }

    }
</style>