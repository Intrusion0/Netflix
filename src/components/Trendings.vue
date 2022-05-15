<template>
  <section id="trendings"> 
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
  name: 'Trendings',

  props: {
      details: Array
  },

  data() {
    return {
       imgUrl: "https://image.tmdb.org/t/p/w200",
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section#trendings {
  position: relative;

  h2 {
    color: #fff;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 35px;
  }

  .row {
    display: flex;

    .card {
      height: 200px;
      width: 325px;
      min-width: 325px;
      border-radius: 4px;
      margin-right: 8px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }
  }


}

</style>
