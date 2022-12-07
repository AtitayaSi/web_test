<!-- eslint-disable vue/no-multiple-template-root -->
<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../../src/assets/devel.png" width="40" height="40" class="d-inline-block align-top" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="http://localhost:8080">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item" v-for="arr in Menu" :key="arr">
            <a class="nav-link" v-bind:href='"http://localhost:8080/?type="+ arr'>{{arr}}</a>
       </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" >
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          <div class="collapse fade" id="searchForm">
            <input id="search" type="search" class="form-control border-0 bg-light" placeholder="search" />
          </div>
        </form>
      </div>
    </nav>
 

</div>
</template>

<script>

export default {
  name: 'App', 
  data(){
      return{
        images:[],
        Menu:["TV","Movie"]
        
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
