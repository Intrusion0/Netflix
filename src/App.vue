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

:root {
  --movie-width: 15.5vw;
  --arrow-width: 50px;
}
@media only screen and (max-width: 1000px) {
  :root {
    --movie-width: 25vw;
  }
}

.container-slider {
  position: relative;
}
/*
*
* THE SLIDER CONTAINER
*
*********************************/
.slider {
  display: flex;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
}
/*
*
* SLIDER INDICATORS
*
*********************************/
.container-indicators {
  width: auto;
  position: absolute;
  right: 50px;
  top: -25px;
  visibility: hidden;
}

.indicator {
  width: 15px;
  height: 2px;
  background-color: grey;
  display: inline-block;
  margin-right: 2px;
}

.indicator.active {
  background-color: white;
}
/*
*
* MOVIE ELEMENTS!
*
*********************************/
.movie {
  display: inline-block;
  width: 293px;
  height: 163px;
  min-width: 293px;
  position: relative;
  margin-right: 8px;
  border-radius: 4px;
}

.movie:nth-of-type(1) {
  margin-left: 0;
}

.movie img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 4px;
}

.movie:hover > img {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

/*
*
* BUTTONS
*
*********************************/
.btn-nav {
  width: var(--arrow-width);
  height: auto;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  color: white;
  top: 0;
  z-index: 5;
  visibility: hidden;

  & > i {
    font-size: 30px;
  }
}

.moveLeft {
  left: 0;
}

.moveRight {
  right: 0;
}

.container-slider:hover .btn-nav,
.container-slider:hover .container-indicators {
  visibility: visible;
  cursor: pointer;
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
