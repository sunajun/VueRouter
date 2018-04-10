<template>
    <div class="view">
      <h1>{{ msg }}</h1>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'i am Hi page'
      }
    }
  }
</script>

<style scoped>

</style>
