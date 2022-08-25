<template>
  <div class="login-page-container">
    <div class="login-form">
      <FormHolder />
    </div>
    <div class="logo-holder">
      <LogoHolder />
    </div>
  </div>
</template>

<script>
import LogoHolder from '../components/LogoHolder.vue'
import FormHolder from "@/components/FormHolder.vue"


export default {
  components:{
    LogoHolder,
    FormHolder
}
}
</script>


<style scoped>
  .login-page-container{
    display: flex;
    height:100vh;
    width:100vw;
  }
  .login-form{
    width:40%;
    height:100%;
  }
  .logo-holder{
    width:60%;
    height:100%
  }

   @media only screen and (max-width: 900px) {
        .login-page-container{ 
                flex-direction: column-reverse;
            }
        .logo-holder{
                width:100%;
                height:120px;
                z-index:100
        }
         .login-form{
          width:100%;
        }
     }
</style>