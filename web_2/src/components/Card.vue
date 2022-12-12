<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-success" >
      <div class="container-fluid">
       <a class="navbar-brand" href="#">

          <img
          src="../../src/assets/devel.png"
          width="40"
          height="40"
          class="d-inline-block align-top"
          alt=""
        />

        </a>

        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
           <li class="nav-item">
              <a class="nav-link active" href="http://localhost:8080">Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item" v-for="arr in Menu" :key="arr">
              <a class="nav-link" data-toggle="collapse"  v-bind:href="'http://localhost:8080/?type=' + arr">{{ arr }}</a>
            </li>

          </ul>
          <form class="d-flex" id="searchForm" data-toggle="collapse">
            <input class="form-control me-sm-2" type="search"  name="search"  placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0"  type="submit">Search</button>
  
          </form>
        </div>
      </div>
      
    </nav>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      images: [],
      Menu: ["TV", "Movie"],
    };
  },
};
</script>


