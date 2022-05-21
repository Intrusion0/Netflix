<template>
  <section id="tops"> 
    <h2> I titoli del momento</h2>

    <div class="row">
      <div v-for="detail, i in details" :key="'A' + i" class="card">
        <img :src="imgUrl + detail.poster_path" :alt="detail.title">
      </div>
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
       imgUrl: "https://image.tmdb.org/t/p/w500",
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
