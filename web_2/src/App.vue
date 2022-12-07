<template>
 <div >
    <NavBar/>
    <Listdata/>
  </div>
</template>

<script>
import NavBar   from './components/Card.vue'
import Listdata from './components/ListData.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    Listdata
  }
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
