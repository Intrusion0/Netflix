import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const slider = document.querySelectorAll(".slider");
const btnLeft = document.querySelectorAll(".moveLeft");
const btnRight = document.querySelectorAll(".moveRight");
const indicators = document.querySelectorAll(".indicator");
let activeIndex = 0; // the current page on the slider

// Update the indicators that show which page we're currently on
function updateIndicators(index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");
}


// Scroll Left button
btnLeft.forEach(element => {
  element.addEventListener("click", () => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 5.11; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

    if (element.id == 'btn-left1') {
      console.log('TEST');
      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
        // CREARE FUNZIONE PER TUTTO!!!!!
      });
    }

    if (element.id == 'btn-left2') {
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
        // CREARE FUNZIONE PER TUTTO!!!!!
      });
    }

    if (element.id == 'btn-left3') {
      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
        // CREARE FUNZIONE PER TUTTO!!!!!
      });
    }

    activeIndex = (activeIndex - 1);
    updateIndicators(activeIndex);
  });
});


// Scroll Right button
btnRight.forEach(element => {
  element.addEventListener("click", () => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 5.11; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)
    console.log(`movieWidth = ${movieWidth}`);
    console.log(`scrolling right ${scrollDistance}`);
    // if we're on the last page
    if (activeIndex == 7) {

      if (element.id == 'btn-right1') {
        slider[0].scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        // CREARE FUNZIONE PER TUTTO!!!!!
      }

      if (element.id == 'btn-right2') {
        slider[1].scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        // CREARE FUNZIONE PER TUTTO!!!!!
      }

      if (element.id == 'btn-right3') {
        slider[2].scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        // CREARE FUNZIONE PER TUTTO!!!!!
      }

      activeIndex = 1;
      updateIndicators(activeIndex);
    } else {

      if (element.id == 'btn-right1') {
        slider[0].scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        // CREARE FUNZIONE PER TUTTO!!!!!
      }

      if (element.id == 'btn-right2') {
        slider[1].scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        // CREARE FUNZIONE PER TUTTO!!!!!
      }

      if (element.id == 'btn-right3') {
        slider[2].scrollBy({
          top: 0,
          left: +scrollDistance,
          behavior: "smooth",
        });
        // CREARE FUNZIONE PER TUTTO!!!!!
      }

      activeIndex = (activeIndex + 1);
      console.log(activeIndex);
      updateIndicators(activeIndex);
    }
  })
});

// CREARE 2 FUNZIONI - 1 per il scrollBY e - 1 per il controllo dell'id