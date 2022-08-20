<template>
    <a><div @click="()=>clicked(data.uid)" class="pack">{{data.uid}}</div></a>
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
    .pack{
        padding:20px;
        border:1px solid #9877d1;
        display: flex;
        justify-content:space-between;
        align-items: center;
        color:#8C62D3;
        border-radius:5px;
        margin:1px;
        font-weight:700;
    }
    .pack:hover{
        background:#8b62d31a;
    }
</style>