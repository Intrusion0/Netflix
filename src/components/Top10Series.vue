<template>
  <section id="top10"> 
    <h2> Top 10 delle serie TV in Italia oggi</h2>

    <div class="container-slider">
      <button type="button" id="btn-left3" class="btn-nav moveLeft">
        <i class="fas fa-angle-left"></i>
      </button>
      <div class="container-indicators">
        <div class="indicator active" data-index=0></div>
        <div class="indicator" data-index=1></div>
        <div class="indicator" data-index=2></div>
        <div class="indicator" data-index=3></div>
        <div class="indicator" data-index=4></div>
        <div class="indicator" data-index=5></div>
        <div class="indicator" data-index=6></div>
        <div class="indicator" data-index=7></div>
      </div>
      <div class="slider" id="mySlider1">
        <div v-for="detail, i in details" id="movie0" class="top10 movie" :key="'B' + i">
          <div> 
              <img :src="getNumberImg(i)" :alt="i">
          </div>
          <div class="container-img">
              <img v-if="detail.backdrop_path" :src="imgUrl + detail.backdrop_path" class="serie-image" :alt="detail.title">
              <img v-else src="@/assets/default-card.png" alt="">
          </div>
        </div>
      </div>
      <button type="button" id="btn-right3" class="btn-nav moveRight">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Top10Series',

  props: {
      details: Array
  },

  data() {
    return {
       imgUrl: "https://image.tmdb.org/t/p/w500",
       svgImage: " ",
    }
  },
  methods: {
      getNumberImg(i) {
          var images = require.context('../assets/', false, /\.svg$/);

          if(i === 0) {
            return images('./svgexport-8' + ".svg");
          } else if(i===1){
            return images('./svgexport-9' + ".svg");
          } else if(i===2){
            return images('./svgexport-10' + ".svg");
          } else if(i===3){
            return images('./svgexport-11' + ".svg");
          } else if(i===4){
            return images('./svgexport-12' + ".svg");
          } else if(i===5){
            return images('./svgexport-13' + ".svg");
          } else if(i===6){
            return images('./svgexport-14' + ".svg");
          } else if(i===7){
            return images('./svgexport-15' + ".svg");
          } else if(i===8){
            return images('./svgexport-16' + ".svg");
          } else if(i===9){
            return images('./svgexport-17' + ".svg");
          } 
          
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#top10 {

  .top10 {
    margin-right: 5px;
  }
  .movie {
    display: flex;
    height: 206px;

    .container-img {
      width: 45%;

      .serie-image {
        width: 100%;
      }
      
    }
  }

}

</style>
