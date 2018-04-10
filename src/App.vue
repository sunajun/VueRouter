<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="goHome">回到首页</button>
    </div>
    <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/params/12/中国航母正式下水试航">params</router-link>|
      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/goParams/145/国庆节房价稳定">goParams</router-link>|
      <router-link to="/Hi">Hi</router-link>|
      <router-link to="/hi1">Hi1</router-link>|
      <router-link to="/saj">saj</router-link>|
      <router-link to="/bbbb">瞎写的</router-link>|
      <router-link to="/Hi/Hi1">Hi页面1</router-link> |
      <router-link to="/Hi/Hi2">Hi页面2</router-link> |
      <router-link :to="{name:'He',params:{username:'sunajun'}}">He 传参</router-link> |
      <router-link to="/More">单页面多路由</router-link> |
    </div>
    <transition name="fade" mode="out-in"> <!-mode过渡模式->
      <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack:function () {
      this.$router.go(-1);
    },
    goForward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/'); //这个编程式导航都作用就是跳转
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
