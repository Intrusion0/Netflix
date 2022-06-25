<template>
  <footer>
    <div class="container-footer">
      <div id="social-media">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
      </div>

      <div id="footer-nav">
        <div>
          <a href="#">Audiodescrizione</a>
          <a href="#">Rapporti con gli investitori</a>
          <a href="#">Note legali</a>
        </div>

        <div>
          <a href="#">Centro assistenza</a>
          <a href="#">Opportunit&agrave;</a>
          <a href="#">Preferenze per i cookie</a>
        </div>

        <div>
          <a href="#">Carte regalo</a>
          <a href="#">Condizioni di utilizzo</a>
          <a href="#">Informazioni sull'azienda</a>
        </div>

        <div>
          <a href="#">Media Center</a>
          <a href="#">Privacy</a>
          <a href="#">Contattaci</a>
        </div>
      </div>

      <div id="copyright">
        <div>
          <button>Codice di servizio</button>
        </div>

        <div>
          © 1997-2022 Netflix, Inc. {b77bc74f-48be-4d99-9e0f-eed620bfa9d5}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
        test: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer {
    background-color: #141414;
    padding-bottom: 15px;

    .container-footer {
      width: 50%;
      margin: 0 auto;
      padding-top: 100px;

      #social-media {
        margin: 0 0 10px 15px;
        i {
          margin-right: 30px;
          cursor: pointer;
          color: #fff;
          font-size: 25px;
        }
      }

      #footer-nav {
        display: flex;
        justify-content: space-between;

        div {

          a {
            display: block;
            text-decoration: none;
            color: grey;
            margin: 10px 0;
            
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      #copyright {
        color: grey;

        button {
          border: 1px solid grey;
          background: transparent;
          color: grey;
          padding: 8px 7px;
          font-size: 13px;
          margin: 20px 0;
        }

        div:last-child {
          font-size: 14px;
        }
      }
    }
  }
</style>
