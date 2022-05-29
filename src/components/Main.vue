<template>
  <main> 
    <div class="container">
      <!-- aggiungere container 60px -->
      <div class="divisor">

      </div>
      <!-- Jumbo -->
      <div class="jumbotron">
        <div class="jumbo-container">
          <img :src="imgUrl + randomJumbo.backdrop_path" :alt="randomJumbo.title">


          <div class="cta">

            <!-- VIDEO TEST -->

            <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/iNgtmGG5FYQ?controls=0&autoplay=1" frameborder="0"></iframe> -->

            <!-- OPPURE questo sotto che è deprecato -->

            <!-- <embed src="https://www.youtube.com/embed/iNgtmGG5FYQ?autoplay=1"
                   width="200" height="200" title="Everytime You Go Away - Paul Young"> -->


            <div class="container-info">
              <h1> {{ randomJumbo.name || randomJumbo.title }} </h1>

              <p>
                {{ randomJumbo.overview }}
              </p>
            </div>

            <div class="container-buttons">
              <button>
                <span>
                  <i class="fas fa-play"></i>
                </span>
  
                <span> Riproduci </span>
              </button>
  
              <button class="info-button">
                <span>
                  <i class="fa-solid fa-info info"></i>
                </span>
  
                <span> Altre info </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Populars :details="populars"/>
      <Tops :details="tops"/>
      <Top-10-series :details="top10Series"/>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import Populars from './Populars.vue'
import Tops from './Tops.vue'
import Top10Series from './Top10Series.vue'


export default {
  components: { Populars, Tops, Top10Series },
  name: 'Main',

  data() {
    return {
        apiUrl: 'https://api.themoviedb.org/3/',
        apiKey: '?api_key=16cc96ba36cde80dcf11f479cce8e348',
        apiLanguage:'&language=it-IT',
        apiPage:'&page=1',
        apiMovie: 'movie/',
        apiSeries: 'tv/',
        apiPopulars: 'popular',
        apiTops: 'top_rated',
        apiTop10Series: 'airing_today',
        popularsSeries: [],
        popularsMovies: [],
        topSeries: [],
        topMovies: [],
        populars: [],
        tops: [],
        top10Series: [],
        randomJumbo: " ",
        imgUrl: "https://image.tmdb.org/t/p/original",
    }
  },

  mounted() {
    this.getPopular();
    this.getTop();
    this.getTop10Series();
  },

  methods: {
    async getPopular() {
      // Series
      await axios.get(this.apiUrl + this.apiSeries + this.apiPopulars + this.apiKey + this.apiLanguage + this.apiPage)
          .then((r) => {
            this.popularsSeries = r.data.results;
              console.log('series', r.data.results);
          })
          .catch((e) => console.error(e));
      
      // Movies
      await axios.get(this.apiUrl + this.apiMovie + this.apiPopulars + this.apiKey + this.apiLanguage + this.apiPage)
          .then((r) => {
            this.popularsMovies = r.data.results;
              console.log('movies',  r.data.results);
          })
          .catch((e) => console.error(e));
      // shuffle array
      this.populars = [...this.popularsSeries, ...this.popularsMovies];

     this.randomJumbo = this.populars[Math.floor(Math.random()*this.populars.length)];
    },

    async getTop() {
       // Series
      await axios.get(this.apiUrl + this.apiSeries + this.apiTops + this.apiKey + this.apiLanguage + this.apiPage)
          .then((r) => {
            this.topSeries = r.data.results;
              console.log('series', r.data.results);
          })
          .catch((e) => console.error(e));
      
      // Movies
      await axios.get(this.apiUrl + this.apiMovie + this.apiTops + this.apiKey + this.apiLanguage + this.apiPage)
          .then((r) => {
            this.topMovies = r.data.results;
              console.log('movies',  r.data.results);
          })
          .catch((e) => console.error(e));
      // shuffle array
      this.tops = [...this.topSeries, ...this.topMovies];
    },

   async getTop10Series() {
       // Series
      await axios.get(this.apiUrl + this.apiSeries + this.apiTop10Series + this.apiKey + this.apiLanguage + this.apiPage)
          .then((r) => {
            this.top10Series = r.data.results;
            this.top10Series.splice(9, 10);
              console.log('top10', r.data.results);
          })
          .catch((e) => console.error(e));

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

main {
  background-color: #141414;
  
  .container {
    margin-left: 60px;

    div.divisor {
      height: 900px;
    }
    div.jumbotron {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;

      .jumbo-container {
        position: relative;

        img {
          width: 100%;
          height: 1080px;
          object-fit: cover;
        }

        .cta {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 56%;
          left: 60px;

          .container-info {

            h1 {
              color: #fff;
            }

            p {
              width: 38%;
              color: #fff;
              margin: 20px 0;
              font-size: 23px;
              text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }

          .container-buttons {
            display: flex;

            button {
              border: 0;
              font-size: 25px;
              font-weight: 600;
              border-radius: 4px;
              margin-right: 15px;
              padding: 12px 45px;
              display: flex;
              align-items: center;
              cursor: pointer;

              span i {
                  font-size: 38px;
                  margin-right: 10px;
              }
            }

            .info-button {
              color: #fff;
              background-color: rgba(109, 109, 110, 0.7);

              .info {
                font-size: 26px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
