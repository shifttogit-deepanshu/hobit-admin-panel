<template>
    <a @click="()=>clicked(data.UID)" class="main-container">
        <div class="packcourse--container">
        
        <div class="packcourse--image__container"><img v-bind:src="data.bannerImage" class="packcourse--image"/></div>
        <div class="packcourse--uid">{{data.UID}}</div>
        <div class="packcourse--details">
            <div class="packcourse--name">{{data.name}}</div>
            <div class="packcourse--details__top">
                <div class="packcourse--category">{{data.category}}</div>
                <div class="packcourse--language">{{data.language}}</div>
            </div>
            <div class="packcourse--price__container">
                <div></div><div class="packcourse--price">₹ {{data.androidPrice}}</div>
            </div>
        </div>
        </div>
    </a>
</template>

<script>
export default {
    props:["data"],
    methods:{
        clicked:function(id){
            console.log("iid.....",id)
            this.$store.commit("setCourse",id)
        }
    }
}
</script>

<style scoped>
    .main-container{
        color:rgba(39, 39, 39, 0.795);
    }
    .packcourse--container{
        width:250px;
        margin:10px;
        border:1px solid rgba(136, 136, 136, 0.524);
        border-radius:10px;
        box-shadow: 0px 0px rgb(194, 194, 194);
        background-color:rgba(204, 204, 204, 0.08);
    }
    .packcourse--image__container{
        width:250px;
        height:200px;
        /* object-fit: cover; */
        overflow:hidden;
        background-color: black;
    }
    .packcourse--image{
        width:250px;
        height:200px;
        object-fit: cover;
        opacity:0.9;
    }
    .packcourse--image:hover{
        opacity:0.7;
        transition-duration: 0.5s;
    }
    .packcourse--details{
        padding:0px 10px;
        box-sizing: border-box;
    }
    .packcourse--name{
        font-size:17px;
        font-weight:700;
        color:#8C62D3;
    }
    .packcourse--uid{
        padding:10px;
        font-weight:700;
    }
    .packcourse--category{
        color:rgba(54, 54, 54, 0.648);
        font-weight:700;
    }
    .packcourse--details__top{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:10px;
    }
    .packcourse--price__container{
        width:100%;
        display: flex;
        margin-top:30px;
        justify-content: space-between;
    }
    .packcourse--price{
        font-size:23px;
        font-weight:900;   
        color:#8C62D3;
    }
</style>