<template>
  <main> 
    <!-- aggiungere container 60px -->
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
              <i class="far fa-info-circle"></i>
            </span>

            <span>
              Altre info
            </span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',

  data() {
    return {
        test: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

main {
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
          }
          
        }
      }
    }
}
</style>
