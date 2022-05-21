<template>
  <section id="populars"> 
    <h2> I pi&ugrave; popolari su Netflix</h2>

    <div class="row">
      <div v-for="detail, i in details" :key="i" class="card">
        <img :src="imgUrl + detail.poster_path" :alt="detail.title">
      </div>
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
       imgUrl: "https://image.tmdb.org/t/p/w500",
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
