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
let index1 = 0; // Indicatori Populars
let index2 = 8; // Indicatori Tops
let index3 = 16; // Indicatori Top10Series

// Scroll Left button
btnLeft.forEach(btn => {
  btn.addEventListener("click", () => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 5.11; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

    slideLeft(btn.id, scrollDistance, 'btn-left1', 'btn-left2', 'btn-left3');
  });
});


// Scroll Right button
btnRight.forEach(btn => {
  btn.addEventListener("click", () => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 5.11; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)
    console.log(`movieWidth = ${movieWidth}`);
    console.log(`scrolling right ${scrollDistance}`);

    slideRight(btn.id, scrollDistance, 'btn-right1', 'btn-right2', 'btn-right3');
  })
});


// FUNCTIONS
// ---------------

// Update the indicators that show which page we're currently on
function updateIndicators(index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");

  console.log(indicators, newActiveIndicator);
}

//  Left slider carousel
function slideLeft(btnId, scrollDistance, btn1, btn2, btn3) {

  if ((activeIndex == 0 && index1 == 0)) { // Sezione Populars

    if (btnId == btn1) {

      slider[0].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 7;
      activeIndex = 7;
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 > 8) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index2;
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 8) {
      slider[1].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 15;
      activeIndex = 15;
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 > 16) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index3;
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 16) {

      slider[2].scrollBy({
        top: 0,
        left: +scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 17;
      activeIndex = 17;
      updateIndicators(activeIndex);

    }
  } else if ((activeIndex == 8 && index2 == 8)) { // Sezione Tops

    if (btnId == btn2) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 15;
      activeIndex = 15;
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 > 0) { // Sezione Populars
      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index1;
      updateIndicators(activeIndex);
      
    } else if (btnId == btn1 && index1 == 0) {

      slider[0].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 7;
      activeIndex = 7;
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 > 16) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index3;
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 16) {

      slider[2].scrollBy({
        top: 0,
        left: +scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 17;
      activeIndex = 17;
      updateIndicators(activeIndex);
    }

  } else if ((activeIndex == 16 && index3 == 16)) { // Sezione Top10
    
    if (btnId == btn3) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: +scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 17;
      activeIndex = 17;
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 > 8) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index2;
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 8) {
      slider[1].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 15;
      activeIndex = 15;
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 > 0) { // Sezione Populars
      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index1;
      updateIndicators(activeIndex);

    } else if (btnId == btn1 && index1 == 0) {

      slider[0].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 7;
      activeIndex = 7;
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn3 && index3 == 16 && activeIndex != index3) { // Button 3 - Sezione Top10

    if (btnId == btn3) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: +scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 17;
      activeIndex = 17;
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn2 && index2 == 8 && activeIndex != index2) { // Button 2 - Sezione Tops

    if (btnId == btn2) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 15;
      activeIndex = 15;
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn1 && index1 == 0 && activeIndex != index1) { // Button 1 - Sezione Populars

    if (btnId == btn1) {

      slider[0].scrollBy({
        top: 0,
        left: +scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 7;
      activeIndex = 7;
      updateIndicators(activeIndex);
    }

  } else {

    if (btnId == btn1) { // Sezione Populars
      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index1;
      updateIndicators(activeIndex);
    }

    if (btnId == btn2) { // Sezione Tops
      console.log('ciao');
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index2;
      updateIndicators(activeIndex);
    }

    if (btnId == btn3) { // Sezione top10
      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: "smooth",
      });

      activeIndex = --index3;
      updateIndicators(activeIndex);
    }
  }
}

// Right slider carousel
function slideRight(btnId, scrollDistance, btn1, btn2, btn3) {

  if ((activeIndex == 7 && index1 == 7)) { // Sezione Populars

    if (btnId == btn1) {

      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 0;
      activeIndex = 0;
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 < 15) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index2;
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 15) {
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 8;
      activeIndex = 8;
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 < 17) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index3;
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 17) {

      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 16;
      activeIndex = 16;
      updateIndicators(activeIndex);

    }
  } else if ((activeIndex == 15 && index2 == 15)) { // Sezione Tops

    if (btnId == btn2) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 8;
      activeIndex = 8;
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 < 7) { // Sezione Populars
      slider[0].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index1;
      updateIndicators(activeIndex);
      
    } else if (btnId == btn1 && index1 == 7) {

      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 0;
      activeIndex = 0;
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 < 17) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index3;
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 17) {

      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 16;
      activeIndex = 16;
      updateIndicators(activeIndex);
    }

  } else if ((activeIndex == 17 && index3 == 17)) { // Sezione Top10
    
    if (btnId == btn3) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 16;
      activeIndex = 16;
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 < 15) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index2;
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 15) {
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 8;
      activeIndex = 8;
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 < 7) { // Sezione Populars
      slider[0].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index1;
      updateIndicators(activeIndex);

    } else if (btnId == btn1 && index1 == 7) {

      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 0;
      activeIndex = 0;
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn3 && index3 == 17 && activeIndex != index3) {

    if (btnId == btn3) { // Sezione Top10
      slider[2].scrollBy({
        top: 0,
        left: -scrollDistance * 2,
        behavior: "smooth",
      });

      index3 = 16;
      activeIndex = 16;
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn2 && index2 == 15 && activeIndex != index2) {

    if (btnId == btn2) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index2 = 8;
      activeIndex = 8;
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn1 && index1 == 7 && activeIndex != index1) {

    if (btnId == btn1) {

      slider[0].scrollBy({
        top: 0,
        left: -scrollDistance * 7,
        behavior: "smooth",
      });

      index1 = 0;
      activeIndex = 0;
      updateIndicators(activeIndex);
    }
    
  } else {

    if (btnId == btn1) { // Sezione Populars
      slider[0].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index1;
      updateIndicators(activeIndex);
    }

    if (btnId == btn2) { // Sezione Tops
      slider[1].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index2;
      updateIndicators(activeIndex);
    }

    if (btnId == btn3) { // Sezione top10
      slider[2].scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });

      activeIndex = ++index3;
      updateIndicators(activeIndex);
    }
  }

}

// CREARE 2 FUNZIONI - 1 per il scrollBY e - 1 per il controllo dell'id