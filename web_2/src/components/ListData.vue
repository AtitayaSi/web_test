<!-- eslint-disable vue/valid-template-root -->
<template>
 <div>
 
<div class="wrapper">
  <div class="container-fostrap">
    <div style="padding: 10px;"></div>

    <h1 style="text-align: center;"><span class="badge bg-secondary">Anime</span> <span class="badge bg-info">{{Menu}}</span></h1>
    <br/>
    <div class="row row-cols-4 g-4" >
    <div class="col" v-for="item in ListCard" :key="item.mal_id">
      <div class="card border-info">
        <img :src="item.images.jpg.image_url" class="card-img-top" alt="Hollywood Sign on The Hill">
        <div class="card-body">
          <!--<h5 class="card-title">{{ item.title }}</h5>-->
          <h5 class="card-title"><span class="badge badge-secondary">{{item.title}}</span></h5>
            <p class="card-text"  >{{ item.synopsis}}</p>
         <!--- <p class="collapse" id="collapseExample" aria-expanded="false">{{item.synopsis}}</p>-->
        </div>
        <div class="card-read-more">
         <!--- <a href="#collapseExample" class="btn btn-link btn-block collapsed" data-toggle="modal" data-target="#exampleModal">
          </a>-->
      </div>
      </div>
    </div>
  </div>
</div>
</div>


</div>
</template>

<script>

export default {
    name:"ListData",
    data(){
      return{
         "ListCard":[],
         "Menu":""
      }
     },
     mounted (){

      // eslint-disable-next-line no-undef
      var urlParams = new URLSearchParams(window.location.search);
      var type = urlParams.get('type');
      var url = 'https://api.jikan.moe/v4/anime'
      var search = urlParams.get('search');
     if(type){
              url+='?type='+type
              this.Menu = type
     }
      console.log(url)

     fetch(url)
    .then(res => res.json()) 
    .then(res => {
      
        console.log(res.data);
        this.ListCard = res.data;
        if(search){  
          this.ListCard = res.data.filter((row) => {
             if(row.title.indexOf(search) > -1) 
               {
                  return row
               }else{
                  return null
               }
            })
         }

         // console.log(mal_id) 
    })
    }
   
  }
  
</script>


<style>
  .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
  
}@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

html,
body {
  -moz-box-sizing: border-box;
       box-sizing: border-box;
  height: 100%;
  width: 100%; 
  background: #FFF;

  font-weight: 200;
  font-family: Arial, Helvetica, sans-serif;
}
 
.wrapper {
  display: table;
  height: 100%;
  width: 100%;
}

.container-fostrap {
  display: table-cell;
  padding: 1em;
  text-align: left;
  vertical-align: middle;
}
.fostrap-logo {
  width: 100px;
  margin-bottom:15px
}
h1.heading {
  color: #fff;
  font-size: 1.15em;
  font-weight: 900;
  margin: 0 0 0.5em;
  color: #505050;
}
@media (min-width: 450px) {
  h1.heading {
    font-size: 3.55em;
  }
}
@media (min-width: 760px) {
  h1.heading {
    font-size: 3.05em;
  }
}
@media (min-width: 900px) {
  h1.heading {
    font-size: 3.25em;
    margin: 0 0 0.3em;
  }
} 
.card {
  display: block; 
    margin-bottom: 20px;
    line-height: 1.5;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    transition: box-shadow .25s; 
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.img-card {
  width: 100%;
  height:200px;
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display:block;
    overflow: hidden;
}
.img-card img{
  width: 100%;
  height: 200px;
  object-fit:cover; 
  transition: all .25s ease;
} 
.card-content {
  padding:15px;
  text-align:left;
}
.card-title {
  margin-top:0px;
  font-weight: 400;
  font-size: 1.3em;
}
.card-title a {
  color: #000;
  text-decoration: none !important;
}
/*.card-read-more {
  border-top: 1px solid #D4D4D4;
}
.card-read-more a {
  text-decoration: none !important;
  padding:10px;
  font-weight:500;
  text-transform: uppercase
}
#readmore {
  font-size: 1rem;
  line-height: 1.5;
}


#readmore #collapseExample.collapse:not(.show) {
  display: block;
  height: 3rem;
  overflow: hidden;
}

#readmore #collapseExample.collapsing {
  height: 3rem;
}

#readmore a.collapsed::after {
  content: 'Read More';
}

#readmore a:not(.collapsed)::after {
  content: 'Read Less';
}*/
</style>