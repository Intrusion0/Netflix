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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

// TESTTTTTT PER IL VIDEO
.ytp-chrome-bottom { // Questa classe sarebbe per i controls nel video
  display: none;
}

.ytp-bezel-text-hide {
  display: none; // Questa invece per il cerchio al centro quando clicchi sul video che appare e scompare
}


// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

section#populars, section#tops, section#top10 {
  position: relative;
  padding: 28px 0;
}

h2 {
  color: #e5e5e5;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 29px;
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
