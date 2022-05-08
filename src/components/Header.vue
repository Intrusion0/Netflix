<template>
    <header>
        <nav>
            <section id="nav-left">
                <img src="../assets/logo.png" alt="logo">
                <ul>
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Serie TV
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Film
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Nuovi e popolari
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            La mia lista
                        </a>
                    </li>
                </ul>
            </section>

            <section id="nav-right">

            </section>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
        test: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

header {
    width: 100%;
    height: 68px;
    background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;

    nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;

        section {
            display: flex;
            align-items: center;
        }

        section#nav-left {
            width: 70%;

            img {
                width: 8%;
                margin-right: 35px;
            }

            ul {
                display: flex;
                list-style: none;

                li {
                    margin-right: 17px;
                    font-size: 14px;
                    font-weight: 700;

                    &:first-child {

                        a {
                            color: #fff;
                        }
                    }

                    a {
                        text-decoration: none;
                        color: #dedede;
                    }
                }
            }
        }

        section#nav-right {
            width: 30%;
            // debug
            background-color: red;
        }
    }

}



</style>
