<!-- eslint-disable-next-line no-console-->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div>
    <div class="wrapper">
      <div class="container-fluid">
        <div style="padding: 8px"></div>
        <h2 style="text-align: center">
          <span class="badge bg-secondary">Anime</span>
          <span class="badge bg-info">{{ Menu }}</span>
        </h2>
        <br />
        <div class="row row-cols-5 g-2">
          <div class="col" v-for="item in ListCard" :key="item.mal_id">
            <div class="card">
            <div class="card-header bg-secondary text-white" ><b class="titlesSet">{{item.title}}</b></div>
        
              <img  :src="item.images.jpg.image_url"  style="width: 90%; height: 17vw;"/> 
              <div class="card-body">
                <h5 class="card-title DescriptionSet" >{{ item.title }}</h5>
                <div id="summary">
                 <p class="card-text collapse" id="collapseSummary">{{ item.synopsis }}</p>
                </div>
              </div>

              <div class="card-footer">
                <button v-b-modal.modal-1  v-b-modal="('modal-1' + item.mal_id)" class="btn btn-info">Read More..</button>
              
                   <b-modal :id="('modal-1' + item.mal_id)" ok-only>
                    <template #modal-title>
                        {{ item.title }} 
                      </template>
                    <div class="d-block text-left">
                      <img  :src="item.images.jpg.image_url"  class="img-fluid" alt="Responsive image" style="width: 70%; height: 18vw; text-align: center;"/> 
                      <p class="my-4">{{ item.synopsis }}</p>
                    </div>
                  </b-modal>
                     &nbsp;&nbsp;
                     <small class="text-muted">{{ item.type }}</small>
                 
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
  name: "ListData",
  data() {
    return {
      ListCard: [],
      Menu: "",
      modalShow: false
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get("type");
    var url = "https://api.jikan.moe/v4/anime";
    var search = urlParams.get("search");
    if (type) {
      url += "?type=" + type;
      this.Menu = type;
    }
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        this.ListCard = res.data;
        if (search) {
          this.ListCard = res.data.filter((row) => {
            if (row.title.indexOf(search) > -1) {
              return row;
            } else {
              return null;
            }
          });
        }

        // console.log(mal_id)
      });
  },
};
</script>

<style>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

html,
body {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: #fff;

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
  margin-bottom: 15px;
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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.25s;
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.img-card {
  width: 100%;
  height: 200px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: block;
  overflow: hidden;
}
.img-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.25s ease;
}
.card-content {
  padding: 15px;
  text-align: left;
}
.card-title {
  margin-top: 0px;
  font-weight: 400;
  font-size: 1.3em;
}
.card-title a {
  color: #000;
  text-decoration: none !important;
}

#summary {
  font-size: 14px;
  line-height: 1.5;
}

#summary p.collapse:not(.show) {
    height: 65px !important;
    overflow: hidden;
  
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
}

#summary p.collapsing {
    min-height: 65px !important;
}
.titlesSet {
  white-space: nowrap; 
  width: 250px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  
}

.DescriptionSet {
  white-space: nowrap; 
  width: 300px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  
}


</style>
