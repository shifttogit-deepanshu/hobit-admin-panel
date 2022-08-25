<template>
    <div class="otpform">
        <div>dkjglkdsnfklnslkfnlkdfnhdlkfnlgknrsdelkndrgl;</div>
        <!-- <input type="text" v-model="otp" />
        <a-button 
           @click="verifyOtp"
            :disabled="otp === ''"
            size="large" ghost block>Verify OTP</a-button>  -->
     </div>
</template>

<script>
export default {
    props:["pageKey"]
}
</script>

<style scoped>
    .otpform{
        width:100%;
    }
</style>
     