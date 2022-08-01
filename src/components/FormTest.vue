<template>
     <a-form-model :model="formInline" @submit="handleSubmit" @submit.native.prevent>
        <a-form-model-item>
             <div>
                <div class="label">username</div>
                <a-input ref="userNameInput" v-model="formInline.user" placeholder="Enter Username" size="large">
                <a-icon slot="prefix" type="user" />
                <a-tooltip slot="suffix" title="Enter Username">
                    <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                </a-tooltip>
                </a-input>
            </div>
        </a-form-model-item>   

        <a-form-model-item>
            <div>
                <div class="label">password</div>
                <a-input-password ref="userNameInput" v-model="formInline.password" placeholder="Enter Password" size="large">
                <a-icon slot="prefix" type="lock" />
                </a-input-password>
            </div>
        </a-form-model-item>     
    
        <div class="forgot-button">
            <a class="login-form-forgot" href="">
                Forgot password
            </a>    
        </div> 
        
        <a-form-model-item>
            <div class="submit"> 
                <a-button 
                    html-type="submit"
                    :disabled="formInline.user === '' || formInline.password === ''"
                    size="large" ghost block>Log In</a-button>       
                <!-- <a-button disabled>
                Default(disabled)
                </a-button> -->
            </div>   
        </a-form-model-item> 
     </a-form-model>  
</template>

<script>
export default {
    data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(e.target.user);
    },
  },
}
</script>

<style scoped>
    .forgot-button{
        width:100%;
        text-align: right;
    }
    .login-form-forgot{
        color:white;
    }
    .submit{
        margin:20px 0px;
    }
    .label{
        color:white;
        font-size: 16px;
        font-weight:700;
    }
    .ant-btn-background-ghost:hover{
        background-color:white!important;
        color:#014BAE
        
    }
    .ant-btn{
        color:white;
        border-color: white;
    }
</style>