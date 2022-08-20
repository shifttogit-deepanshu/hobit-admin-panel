<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider width="300" v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu mode="inline" :default-selected-keys="['1']" @select="({item,key,selectedKeys})=>slider_select(key)">
        <a-menu-item key="1">
          <a-icon type="dollar" />
          <span>Orders</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="check-square" />
          <span>Pack Activation</span>
        </a-menu-item>
        <!-- <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
        
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <HeaderButtons v-bind:selectedKey="sliderItem"/>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '20px', background: '#fff', minHeight: '280px' ,height:'100%'}"
      >
        <DataContents v-bind:sliderItem="sliderItem"/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import HeaderButtons from '@/components/HeaderButtons.vue';
import DataContents from '@/components/DataContents.vue';

export default {
    data() {
        return {
            collapsed: false,
            sliderItem:1
        };
    },
    methods:{
      slider_select:function(key){
        this.sliderItem = key
      }
    },
    components: { HeaderButtons, DataContents }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout-sider-dark{
    background: #8C62D3;
}
.ant-layout{
  min-height:100vh;
}
.ant-menu{
  background: #825cc5;
  color:white
}
.ant-menu-item:hover{
  /* color:#684a9d!important;
  background-color:#966ae4; */
  color:white;
}
.ant-menu-item-selected:hover{
  color:#684a9d
}
.ant-menu-item-selected{
  background-color: white!important;
  color:#684a9d;
}
.ant-layout-header{
  display:flex
}
.trigger:hover{
  color: #684a9d !important;
}
.trigger{
    font-size:24px !important;
}
</style>

