<template>
  <div>
    <a-input-search placeholder="Enter Phone Number" style="width: 500px" @change="onChange" @search="onSearch" size="large" type="number"/>
    <!-- <br /><br />
    <a-input-search placeholder="input search text" enter-button @search="onSearch" />
    <br /><br />
    <a-input-search
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
    <br /><br />
    <a-input-search placeholder="input search text" size="large" @search="onSearch">
      <a-button slot="enterButton">
        Custom
      </a-button> -->
    <!-- </a-input-search> -->
  </div>
</template>

<script>

import axios from "axios"

function getUser(value){
   var config = {
        method: 'get',
        url: `https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/getUsersByPhoneNumber?phoneNumber=%2B91${value}`,
        headers: { 
          'Authorization': 'Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba'
        }
      };

      axios(config)
      .then(function (response) {
        console.log("got....................",response.data);
      })
      .catch(function (error) {
        console.log("error...........",error);
      });
}

export default {
  methods: {
    onSearch(value) {      
      getUser(value)
    },
    onChange(val) {
      getUser(val.target.value)
    },
  },
};
</script>