<template>
  <main> 
    <div class="container">
      <!-- aggiungere container 60px -->
      <div class="divisor">

      </div>
      <!-- Jumbo -->
      <div class="jumbotron">
        <div class="jumbo-container">
          <img src="../assets/test.png" alt="test">

          <div class="cta">
            <button>
              <span>
                <i class="fas fa-play"></i>
              </span>

              <span>
                Riproduci
              </span>
            </button>

            <button class="info-button">
              <span>
                <i class="fa-solid fa-info info"></i>
              </span>

              <span>
                Altre info
              </span>
            </button>
          </div>
        </div>
      </div>

      <Trendings :details="trendings"/>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import Trendings from './Trendings.vue'


export default {
  components: { Trendings },
  name: 'Main',

  data() {
    return {
        test: '',
        apiUrl: 'https://api.themoviedb.org/3/',
        apiKey: '?api_key=16cc96ba36cde80dcf11f479cce8e348',
        apiTrending: 'trending/all/day',
        trendings: [],
    }
  },

  mounted() {
    this.getTrending()
  },

  methods: {
    getTrending() {
      axios.get(this.apiUrl + this.apiTrending + this.apiKey)
          .then((r) => {
            this.trendings = r.data.results;
              console.log(r.data.results);
          })
          .catch((e) => console.error(e));
    }
  }
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
        }

        .cta {
          position: absolute;
          top: 56%;
          left: 60px;
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
</style>
