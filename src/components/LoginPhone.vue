<template>
     <div>
        <a-form-model :model="formInline" @submit="handleSubmit" @submit.native.prevent v-if="!pageKey">
        <a-form-model-item>
             <div>
                <div class="label">Phone</div>
                <a-input ref="phoneInput" v-model="formInline.phone" placeholder="Enter Phone Number" size="large">
                <a-icon slot="prefix" type="user" />
                <a-tooltip slot="suffix" title="Enter Phone Number">
                    <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                </a-tooltip>
                </a-input>
            </div>
        </a-form-model-item>   
        <a-form-model-item>
            <div class="submit"> 
                <a-button 
                    html-type="submit"
                    :disabled="formInline.phone === ''"
                    size="large" ghost block>Get OTP</a-button>       
                <!-- <a-button disabled>
                Default(disabled)
                </a-button> -->
            </div>   
            <div id="recaptcha-container"></div>
        </a-form-model-item> 
     </a-form-model> 
    <div v-if="pageKey">
        <a-form-model :model="formOtp" @submit="verifyOtp" @submit.native.prevent>
        <a-form-model-item>
             <div>
                <div class="label">OTP</div>
                <a-input ref="otp" v-model="formOtp.otp" placeholder="Enter OTP Received" size="large">
                <a-icon slot="prefix" type="user" />
                <a-tooltip slot="suffix" title="Enter OTP received on SMS">
                    <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                </a-tooltip>
                </a-input>
            </div>
             <a-button 
                html-type="submit"
                :disabled="formOtp.otp === ''"
                size="large" ghost block>Verify OTP</a-button>
        </a-form-model-item>   
       </a-form-model>
     </div>
     </div>     
     
</template>

<script>
import router from "../router/index"
import { getAuth,RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import axios from "axios"
// import InputOtp from "./InputOtp.vue";

export default {
    data() {
        return {
            formInline: {
                phone: ""
            },
            formOtp:{
                otp: ""
            },
            recaptchaWidgetId: "",
            confirmation: {}
        };
    },
    methods: {
        generateRecaptcha() {
            let parent = document.getElementById("recaptcha-container");
            let recaptcha = document.createElement("div");
            recaptcha.setAttribute("id", "recaptcha");
            parent.appendChild(recaptcha);
            this.recaptchaVerifier = new RecaptchaVerifier("recaptcha", {
                size: "normal",
                callback: (response) => { console.log(response); },
            }, getAuth());
            this.recaptchaVerifier.render().then((widgetId) => {
                this.recaptchaWidgetId = widgetId;
            });
        },
        handleSubmit() {
            this.generateRecaptcha();
            const appverifier = this.recaptchaVerifier;
            signInWithPhoneNumber(getAuth(), "+91" + this.formInline.phone, appverifier).then(confirmation => {
                this.confirmation = confirmation;
                this.$store.commit('setPageKey',1)
                console.log(confirmation);
            });
        },
        verifyOtp() {
            console.log(Number(this.formOtp.otp))
            this.confirmation.confirm(Number(this.formOtp.otp)).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user);
                var config = {
                    method: 'get',
                    url: `https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/authIsAdmin?userUID=${user.uid}`,
                    headers: { 
                        'Authorization': 'Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba'
                    }
                    };

                    axios(config)
                    .then((response)=> {
                        if(response.data){
                            router.push('/dashboard')
                        }
                        else{
                            alert("User doesn't have the required permissions")
                        }
                    console.log(JSON.stringify("data...........",response.data));
                    })
                    .catch(function (error) {
                    console.log("error...........",error);
                    });

                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log(error);
                alert("Error! Please try again")
            });
        }
    },
    computed: {
        pageKey(){
            return this.$store.state.login.pageKey;
        }
    },
    // components: { InputOtp }
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
    .otpform{
        width:100%;
    }
</style>