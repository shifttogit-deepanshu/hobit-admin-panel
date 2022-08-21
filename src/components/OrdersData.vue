<template>
    <div>
        <div class="content">
        <!-- <div class="head">
            <OrderContainer v-if="orderType==3" v-bind:order="{orderId:'Order Id', amount:'Amount', userName:'User', created:'Time',razorpay_payment_id:'Payment Id'}" v-bind:orderType="4" v-bind:pay="true"/>
            <OrderContainer v-if="orderType!=3" v-bind:order="{orderId:'Order Id', amount:'Amount', userName:'User', created:'Time'}" v-bind:orderType="4" v-bind:pay="false"/>
        </div> -->
        <div v-if="orderData.length!=0">
            <div class="orderContainer" v-bind:key="order.orderId" v-for="order in orderData">
                <OrderContainer v-bind:order="order" v-bind:orderType="orderType"/>
            </div> 
        </div> 
        <div v-if="orderData.length==0" class="loading--overlay">
                <LadingSpinner />
        </div>         
         <!-- <div>{{orderData[0]}}</div> -->
    </div>
    </div>    
</template>

<script>
import OrderContainer from "./OrderContainer.vue";
import LadingSpinner from "./LadingSpinner.vue";

export default {
    computed: {
        orderData() {
            return this.$store.state.orders.data;
        },
        orderType(){
            return this.$store.state.orders.orderKey;
        }
    },
    mounted() {
        this.$store.dispatch('getOrderData',{key:1})
    },
    components: { OrderContainer, LadingSpinner }
}
</script>

<style scoped>
.content{
    height:90vh;
    overflow:scroll;
    position:relative;
}
.head{
    position: sticky;
    top:0
}
.loading--overlay{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align:center;
}
/* .orderContainer{
    margin-bottom:5px;
} */

</style>