<template>
<div>
<!-- <div v-bind:key="transaction.orderId" v-for="transaction in order"> -->
     <div v-bind:class="getClass(orderType)">
        <!-- <div v-if="orderType==1" class="icon-fail"><a-icon slot="prefix" type="close" /></div>
        <div v-if="orderType==2" class="icon-open"><a-icon type="exclamation" /></div>
        <div v-if="orderType==3" class="icon-close"><a-icon slot="prefix" type="check" /></div>
        <div v-if="orderType==4" class="icon-close"><a-icon slot="prefix" type="check" /></div> -->
        <div class="orderitem">{{order.orderId}}</div>
        <div class="orderitem">{{order.amount}}</div>
        <div class="orderitem"><span class="bold">{{order.userName}}</span></div>
        <div class="orderitem">{{order.created | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</div>
     </div>
    <!-- <div>..................................{{order.data}}</div> -->
</div>   
<!-- </div> -->
</template>

<script>
export default {
    props:["order","orderType"],
    methods:{
      getClass:function(orderType){
        if(orderType==1){
          return "fail"
        }
        else if(orderType==2){
          return "open"
        }
        else if(orderType==3){
          return "close"
        }
        else if(orderType==4){
          return "head"
        }
      }
    }
}
</script>

<style scoped>
    .orderitem{
      padding:20px;
      width:100%;
    }
    .fail{
      display: flex;
      border:1px solid rgba(207, 0, 0, 0.728);
      color:rgb(207, 0, 0);
      background-color: rgba(207, 0, 0, 0.028);
      margin:1px;
      border-radius:5px;
      align-items: center;
    }
    .open{
      display: flex;
      border:1px solid rgba(113, 121, 0, 0.718);
      color:rgb(113, 121, 0);
      background-color: rgba(183, 196, 0, 0.049);
      margin:1px;
      border-radius:5px;
      align-items: center;
    }
    .close{
      display: flex;
      border:1px solid rgb(0, 145, 34);
      color:rgb(0, 145, 34);
      background-color: rgba(0, 145, 34, 0.048);
      margin:1px;
      border-radius:5px;
      align-items: center;
    }
    .head{
      display: flex;
      color:#8C62D3;
      font-weight: 700;
    }
    .bold{
      font-weight: 900;
    }
    .icon-fail{
      background-color:rgba(207, 0, 0, 0.728);
      padding:5px;
      border-radius:50%;
      color:white;
      font-weight: 900;
      margin:20px;
    }
</style>