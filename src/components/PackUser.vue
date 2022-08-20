<template>
  <div class="select">
    <div class="head">Select User</div>
    <div>
        <a-input placeholder="Enter Phone Number" style="width: 100%" @change="(e)=>onChange(e)" @search="(value)=>onSearch(value)" size="large" type="number" />     
        <FoundUser v-if="foundUsers.UID" v-bind:user="foundUsers"/>
        <LadingSpinner v-if="isLoading"/>
    </div>  
  </div>  
</template>

<script>

import axios from "axios"
import FoundUser from "./FoundUser.vue"
import LadingSpinner from "./LadingSpinner.vue";

export default {
    data() {
        return {
            foundUsers: {},
            isLoading:false
        };
    },
    methods: {
        onChange: function (e) {
           this.isLoading=true
           this.foundUsers = {}
            var config = {
                method: "get",
                url: `https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/getUsersByPhoneNumber?phoneNumber=%2B91${e.target.value}`,
                headers: {
                    "Authorization": "Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba"
                }
            };
            axios(config)
                .then((response) => {
                  console.log(response.data)
                this.foundUsers = response.data;
                this.isLoading=false
                // this.dataSource = !changeText ? [] : response.data;
            })
                .catch(function (error) {
                console.log(error);
                this.isLoading=false
            });
        },
        onSearch: function (val) {
          this.foundUsers = {}
            var config = {
                method: "get",
                url: `https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/getUsersByPhoneNumber?phoneNumber=%2B91${val}`,
                headers: {
                    "Authorization": "Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba"
                }
            };
            axios(config)
                .then((response) => {
                this.foundUsers = response.data;
                console.log(response.data)
                // this.dataSource = !searchText ? [] : response.data;
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    },
    components: { FoundUser, LadingSpinner }
}
</script>

<style scoped>
    .select{
        width:50%;
        border-right:1px solid #8C62D3;
        height:100%;
        padding:30px;
    }
    .head{
        color:#8C62D3;
        font-size:24px;
        margin-bottom:20px;
    }
</style>