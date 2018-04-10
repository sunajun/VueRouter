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
      <router-link to="/hi1">Hi1</router-link>|
      <router-link to="/saj">saj</router-link>|
      <router-link to="/bbbb">瞎写的</router-link>|
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

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
      this.$router.push('/');
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
