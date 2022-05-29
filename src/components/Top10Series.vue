<template>
  <section id="top10"> 
    <h2> Top 10 delle serie TV in Italia oggi</h2>

    <div class="row">
      <div v-for="detail, i in details" class="card card-top10" :key="'A' + i">
        <div> 
            <img :src="getNumberImg(i)" :alt="i">
        </div>
     
        <div class="container-img">
            <img :src="imgUrl + detail.backdrop_path" class="serie-image" :alt="detail.title">
        </div>
      </div>
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
  .card-top10 {
    display: flex;
    height: 206px;
    
    .number {
      font-size: 200px;
      color: black;
    }

    .container-img {
      width: 45%;

      .serie-image {
        width: 100%;
      }
      
    }
  }

}

</style>
