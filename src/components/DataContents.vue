<template>
<div class="container">
    <div v-if="sliderItem==1" >
        orders
    </div>
    <div v-if="sliderItem==2" >
        pack Activation
    </div>
</div>    
</template>

<script>
export default {
    props:["sliderItem"]
}
</script>

<style scoped>
    .container{
        width:100%;
        height:100%;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>