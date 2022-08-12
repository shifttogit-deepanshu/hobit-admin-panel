<template>
    <div>
        <div><OrderContainer v-bind:order="{orderId:'Order Id', amount:'Amount', userName:'User', created:'Time'}" v-bind:orderType="4"/></div>
        <div v-bind:key="order.orderId" v-for="order in orderData">
            <OrderContainer v-bind:order="order" v-bind:orderType="orderType"/>
        </div>       
         <!-- <div>{{orderData[0]}}</div> -->
    </div>
</template>

<script>
import OrderContainer from "./OrderContainer.vue";

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
    components: { OrderContainer }
}
</script>

<style scoped>

</style>