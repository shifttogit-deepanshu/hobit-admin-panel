<template>
    <div class="login-form--container">
        <div class="login-form--content">
            <div class="head">Admin Login</div>
            <FormTest/>
        </div>        
    </div>
</template>

<script>
import FormTest from './FormTest.vue';

export default {
    components: { FormTest }
}
</script>

<style scoped>
    .login-form--container{
        /* background-image: linear-gradient(-45deg,#014BAE,#CB6CE4); */
        background-color: white;
        width:100%;
        height:100%;
        box-shadow: 2px 0px 5px black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:10%;
    }
    .login-form--content{
        flex: auto;
    }
    .head{
        color:rgb(69, 69, 69);
        font-size: 30px;
        align-self: flex-start;
        margin-bottom:50px;
    }
</style>