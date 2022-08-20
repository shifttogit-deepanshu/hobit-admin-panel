<template>
<div class="orderContainer--container">
  <div class="orderContainer--section__top">
      <div>
        <span class="order--bold">Order Id: </span>{{order.orderId}}
      </div>
      <div>
        <div>{{order.created | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</div>      
      </div>
  </div>
  <div class="orderContainer--section__bottom">
    <div class="order--user-profile">
      <div>
        <img v-if="order.ProfileImage" v-bind:src="order.ProfileImage" class="profile-image" />
         <div v-if="!order.ProfileImage" class="profile-image__unknown" ></div>
      </div>      
      <div v-if="order.userName!=''" class="order--username">{{order.userName}}</div>
      <div v-if="order.userName==' '" class="order--username order--username__unknown">Unknown</div>
    </div>   
    <div v-if="pay || orderType==3" class="order--razorID"><span class="order--bold">Payment ID: </span>{{order.razorpay_payment_id}}</div>     
    <div class="order--amount"><span class="order--bold">Amount: </span>₹ {{order.amount}}</div>
    <div class="order--status__fail order--status" v-if="orderType==1" >
      <div class="order--status__text">Failed</div>
      <a-icon type="close-circle" theme="filled" class="order--symbol__fail"/>
    </div>
     <div class="order--status__open order--status" v-if="orderType==2" >
      <div class="order--status__text">Pending</div>
      <a-icon type="exclamation-circle" theme="filled" class="order--symbol__open"/>
    </div>
    <div class="order--status__close order--status" v-if="orderType==3" >
      <div class="order--status__text">Successful</div>
      <a-icon type="check-circle" theme="filled" class="order--symbol__close"/>
    </div>
  </div>
</div>
</template>


<script>
export default {
    props:["order","orderType","pay"],
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
    .orderContainer--section__top{
      padding:10px 20px;
      box-sizing: border-box;
      display:flex;
      justify-content: space-between;
      align-items: center;
      border:1px solid rgb(233, 233, 233);
    }
    .orderContainer--section__bottom{
      padding:20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* background-color:rgba(233, 233, 233, 0.234) ; */
      /* background-color: #8b62d30d; */
    }
    .order--bold{
      font-weight:700;
    }
    .profile-image{
      height:40px;
      width:40px;
      border-radius:50%;
    }
    .profile-image__unknown{
      background-color:rgba(187, 187, 187, 0.711);
      height:40px;
      width:40px;
      border-radius:50%;
    }
    .order--username{
      font-weight:700;
      margin-left:10px;
    }
    .order--user-profile{
      display: flex;
      align-items: center;
      display:flex;
      align-items: center;
      width:100%;
    }
    .order--razorID{
      width:100%;
    }
    .order--amount{
      width:100%;
    }
    .order--symbol__fail{
      color:#fd4c49;
      font-size:25px;
      }
    .order--status{
      display:flex;
      justify-content: center;
      align-content: center;
      height:100%;
    }
    .order--status__fail{      
      color:#fd4c49;
    }
    .order--symbol__open{
      font-size:25px;
      color:rgb(209, 209, 0);
    }
    .order--status__open{
      color:rgb(209, 209, 0);
    }
    .order--symbol__close{
      font-size:25px;
      color:rgb(0, 187, 0);
    }
    .order--status__close{
      color:rgb(0, 187, 0);
    }
    .order--status__text{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right:20px;
      font-weight:700;
    }
    .order--username__unknown{
      color:rgb(187, 187, 187);
    }
    .orderContainer--container{
      background-color:white;
    }
    
</style>