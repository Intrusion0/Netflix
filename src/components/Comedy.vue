<template>
  <section id="comedy"> 
    <h2> Commedie TV </h2>

    <div class="container-slider">
      <button type="button" id="btn-left5" class="btn-nav moveLeft">
        <i class="fas fa-angle-left"></i>
      </button>
      <div class="container-indicators">
        <div class="indicator active" data-index=22></div>
        <div class="indicator" data-index=23></div>
        <div class="indicator" data-index=24></div>
        <div class="indicator" data-index=25></div>
      </div>
      <div class="slider" id="mySlider">
        <div v-for="detail, i in details" :key="i" id="movie0" class="movie">
          <img v-if="detail.backdrop_path" :src="imgUrl + detail.backdrop_path" :alt="detail.title">
          <img v-else src="@/assets/default-card.png" alt="">
        </div>
      </div>
      <button type="button" id="btn-right5" class="btn-nav moveRight">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Comedy',

  props: {
      details: Array
  },

  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/original",
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
