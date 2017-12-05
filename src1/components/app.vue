<template>
    <div>
        <mt-header title="vue项目实战">
             <mt-button icon="more" slot="right"></mt-button>
         </mt-header>
            <router-view></router-view>
            <mt-tabbar v-model="selected">
  <mt-tab-item id="tab1">
    <img slot="icon" src="../static/img/index.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="../static/img/vip.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="../static/img/shopcart.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="../static/img/find.png">
    查找
  </mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      selected:''
    };
  }
};
</script>
<style scoped>

</style>