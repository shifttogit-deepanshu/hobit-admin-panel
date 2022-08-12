<template>
<div class="container">
    <OrdersData v-if="sliderItem==1"/>
    <PackActivation v-if="sliderItem==2"/>
</div>    
</template>

<script>
import PackActivation from "./PackActivation.vue"
import OrdersData from "./OrdersData.vue"

export default {
    props: ["sliderItem"],
    components: { OrdersData, PackActivation }
}
</script>

<style scoped>
    .container{
        width:100%;
        height:100%;
    }
</style>