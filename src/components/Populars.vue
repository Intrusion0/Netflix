<template>
  <section id="populars"> 
    <h2> I pi&ugrave; popolari su Netflix</h2>

    <div class="container-slider">
      <button type="button" id="btn-left1" class="btn-nav moveLeft">
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
      <div class="slider" id="mySlider">
        <div v-for="detail, i in details" :key="i" id="movie0" class="movie">
          <img v-if="detail.backdrop_path" :src="imgUrl + detail.backdrop_path" :alt="detail.title">
          <img v-else src="@/assets/default-card.png" alt="">
        </div>
      </div>
      <button type="button" id="btn-right1" class="btn-nav moveRight">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Populars',

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
