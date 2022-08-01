<template>
    <div class="logo-holder--container">
        <div class="logo-container">
            <img src="../assets/logo.png"/>
        </div>        
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    .logo-holder--container{
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-image: white; */
        background-image: linear-gradient(-45deg,#014BAE,#CB6CE4);
    }
    .logo-container{
        background-color: white;
        padding:50px;
        border-radius: 50%;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.291);
    }
</style>