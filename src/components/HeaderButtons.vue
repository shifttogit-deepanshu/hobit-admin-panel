<template>
<div>
    <div v-if="selectedKey==1" class="header-btns--container">
    <a-button type="primary" v-bind:class="[orderType==1?'failed--active':'failed']" @click="()=>orderBtnClicked(1)">
            Failed
    </a-button>
     <a-button type="primary" v-bind:class="[orderType==2?'open--active':'open']" @click="()=>orderBtnClicked(2)">
            Open
    </a-button>
    <a-button type="primary" v-bind:class="[orderType==3?'closed--active':'closed']" @click="()=>orderBtnClicked(3)">
            Closed
    </a-button>    
</div>     
<div v-if="selectedKey==2">
    <div v-if="packCourse.length==0">
        <a-button type="primary" v-bind:class="[packType==1?'btn--active':'btn']" @click="()=>packBtnClicked(1)">
            Course
    </a-button>
    <a-button type="primary" v-bind:class="[packType==2?'btn--active':'btn']" @click="()=>packBtnClicked(2)">
            Workshop
    </a-button>
    <a-button type="primary" v-bind:class="[packType==3?'btn--active':'btn']" @click="()=>packBtnClicked(3)">
            Live
    </a-button>
    </div>    
    <a v-if="packCourse.length!=0" class="back-btn" @click="()=>this.$store.commit('deleteCourse')">
         <a-icon type="left" />Change Course
    </a> 
</div>   
</div>
</template>

<script>

export default {
    props:["selectedKey"],
    computed:{
        orderType() {
            return this.$store.state.orders.orderKey
        },
        packType() {
            return this.$store.state.pack.packKey
        },
        packCourse() {
            return this.$store.state.pack.course
        }
    },
    methods:{
        orderBtnClicked:function(key){
            console.log("clicked",key)
            this.$store.commit('setOrderKey',key)
            this.$store.dispatch('getOrderData',{key})
        },
        packBtnClicked:function(key){
            console.log("clicked",key)
            this.$store.commit('setPackKey',key)
            this.$store.dispatch('getPackData',{key})
        }
    }
}
</script>

<style scoped>
    .failed{
        color:#fd4c49;
        border-color:#fd4c49;
        background: white;
    }
    .failed--active{
        background:#fd4c49;
        border-color:#fd4c49;
        color: white;
    }
    .failed:hover{
        background:#ff3430;
        color: white;
    }
    .open{
        color:rgb(209, 209, 0);
        border-color:rgb(209, 209, 0);
        background: white;
    }
    .open--active{
        border-color:rgb(209, 209, 0);
        color:white;
        background:rgb(209, 209, 0);
    }
    .open:hover{
        color:white;
        background:rgb(182, 182, 0);
    }
    .closed{
        color:rgb(0, 187, 0);
        border-color:rgb(0, 187, 0);
        background: white;
    }
     .closed--active{
        border-color:rgb(0, 187, 0);
        background:rgb(0, 187, 0);
        color: white;
    }
    .closed:hover{
        background:rgb(0, 154, 0);
        color: white;
    }    
    .btn{
        color:#8C62D3;
        border-color:#8C62D3;
        background: white;        
    }
    .btn--active{
        border-color:#8C62D3;
        color: white;
        background:#8C62D3;       
    }
    .btn:hover{
        color: white;
        background:#8C62D3;
    }
    .ant-btn{
        margin:0px 20px;
        font-weight: 500;   
    }
    .back-btn{
        color:#8C62D3;
        font-size:18px;
    }

    @media only screen and (max-width: 900px) {        
    .ant-btn{
        margin:7px;
    }
}

</style>