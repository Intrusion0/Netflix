<template>
  <main>
    <!-- Jumbo -->
    <div class="jumbotron">
        <img src="../assets/test.png" alt="test">
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

        img {
            width: 100%;
        }
    }
}
</style>
