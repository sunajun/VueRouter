<template>
  <div>
    <h2>{{msg}}</h2>
    <p>{{$route.params.username}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'he',
    data () {
      return {
        msg: 'i am He page'
      }
    }
  }
</script>

<style>

</style>
