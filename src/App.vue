<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
}
}
</script>

<style lang="scss">

// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section#populars, section#tops, section#top10 {
  position: relative;
  padding: 28px 0;
}

h2 {
  color: #e5e5e5;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 32px;
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


</style>
