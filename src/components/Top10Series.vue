<template>
  <section id="top10"> 
    <h2> Top 10 delle serie TV in Italia oggi</h2>

    <div class="row">
      <div v-for="detail, i in details" :key="'A' + i" class="card">
        <div> 
            <img :src="getNumberImg(i)" alt="">
        </div>
     
        <img :src="imgUrl + detail.poster_path" :alt="detail.title">
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
    .card {

        .number {
            font-size: 200px;
            color: black;
        }
    }
}

</style>
