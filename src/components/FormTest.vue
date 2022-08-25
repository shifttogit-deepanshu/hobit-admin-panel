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
import router from "../router/index"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline.user,this.formInline.password);
      const auth = getAuth();
        signInWithEmailAndPassword(auth, this.formInline.user, this.formInline.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("auth.....................",user)
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log("auth..............",error)
        });

      router.push({ path: '/dashboard' })
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
        color:rgb(69, 69, 69);
    }
    .submit{
        margin:20px 0px;
    }
    .label{
        color:rgb(69, 69, 69);
        font-size: 16px;
        font-weight:700;
    }
    .ant-btn-background-ghost:hover{
        background-color:#CB6CE4!important;
        color:white;
        
    }
    .ant-btn{
        color:#CB6CE4;
        border-color: #CB6CE4;
    }
    a-form-model{
        width:100%;
    }
</style>