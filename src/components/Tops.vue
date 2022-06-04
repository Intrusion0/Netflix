<template>
  <section id="tops"> 
    <h2> I titoli del momento</h2>

    <div class="container-slider">
      <button type="button" id="btn-left2" class="btn-nav moveLeft">
        <i class="fas fa-angle-left"></i>
      </button>
      <div class="container-indicators">
        <div class="indicator active" data-index=8></div>
        <div class="indicator" data-index=9></div>
        <div class="indicator" data-index=10></div>
        <div class="indicator" data-index=11></div>
        <div class="indicator" data-index=12></div>
        <div class="indicator" data-index=13></div>
        <div class="indicator" data-index=14></div>
        <div class="indicator" data-index=15></div>
      </div>
      <div class="slider" id="mySlider1">
        <div v-for="detail, i in details" :key="i" id="movie0" class="movie">
          <img v-if="detail.backdrop_path" :src="imgUrl + detail.backdrop_path" :alt="detail.title">
          <img v-else src="@/assets/default-card.png" alt="">
        </div>
      </div>
      <button type="button" id="btn-right2" class="btn-nav moveRight">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Tops',
 
  props: {
      details: Array
  },

  data() {
    return {
       imgUrl: "https://image.tmdb.org/t/p/original",
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
