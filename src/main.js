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
const header =  document.querySelector("header");
let activeIndex = 0; // the current page on the slider
let index1 = 0; // Indicatori Populars
let index2 = 8; // Indicatori Tops
let index3 = 16; // Indicatori Top10Series
let index4 = 18; // Indicatori Upcomings


// Change header background-color at scroll
window.addEventListener('scroll', () => {
  
  if (window.scrollY > 10) {
    header.style.backgroundColor = `rgb(20, 20, 20)`;
    header.style.backgroundImage = 'none';
    header.style.transition =  'background-color .4s';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.backgroundImage = 'linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))';
    header.style.transition =  'background-color .4s';
  }
  console.log(window.scrollY);
})


// Scroll Left button
btnLeft.forEach(btn => {
  btn.addEventListener("click", () => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 5.11; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

    slideLeft(btn.id, scrollDistance, 'btn-left1', 'btn-left2', 'btn-left3', 'btn-left4');
  });
});


// Scroll Right button
btnRight.forEach(btn => {
  btn.addEventListener("click", () => {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 5.11; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)
    console.log(`movieWidth = ${movieWidth}`);
    console.log(`scrolling right ${scrollDistance}`);

    slideRight(btn.id, scrollDistance, 'btn-right1', 'btn-right2', 'btn-right3', 'btn-right4');
  })
});

// ---------------
// FUNCTIONS
// ---------------

// Update the indicators that show which page we're currently on
function updateIndicators(index) {

  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");
}

// Element Scroll
function scroll(sliderN, movement) {

  sliderN.scrollBy({
    top: 0,
    left: movement,
    behavior: "smooth",
  });
}

// Check index
function checkIndex(index, Number = null) {

  switch (index) {
    case 'index1':
      index1 = Number;
      activeIndex = Number;
      break;
    case 'index2':
      index2 = Number;
      activeIndex = Number;
      break;
    case 'index3':
      index3 = Number;
      activeIndex = Number;
      break;
    case 'index4':
      index4 = Number;
      activeIndex = Number;
      break;
    case '--index1':
      activeIndex = --index1;
      break;
    case '--index2':
      activeIndex = --index2;
      break;
    case '--index3':
      activeIndex = --index3;
      break;
    case '--index4':
      activeIndex = --index4;
      break;
    case '++index1':
      activeIndex = ++index1;
      break;
    case '++index2':
      activeIndex = ++index2;
      break;
    case '++index3':
      activeIndex = ++index3;
      break;
    case '++index4':
      activeIndex = ++index4;
      break;
  }
}

//  Left slider carousel
function slideLeft(btnId, scrollDistance, btn1, btn2, btn3, btn4) {

  if ((activeIndex == 0 && index1 == 0)) { // Sezione Populars

    if (btnId == btn1) {

      scroll(slider[0], +scrollDistance * 7);
      checkIndex('index1', 7);
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 > 8) { // Sezione Tops

      scroll(slider[1], -scrollDistance);
      checkIndex('--index2');
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 8) {

      scroll(slider[1], +scrollDistance * 7);
      checkIndex('index2', 15);
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 > 16) { // Sezione Top10

      scroll(slider[2], -scrollDistance);
      checkIndex('--index3');
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 16) {

      scroll(slider[2], +scrollDistance * 2);
      checkIndex('index3', 17);
      updateIndicators(activeIndex);

    }

    if (btnId == btn4 && index4 > 18) {

      scroll(slider[3], -scrollDistance);
      checkIndex('--index4');
      updateIndicators(activeIndex);

    } else if (btnId == btn4 && index4 == 18) {

      scroll(slider[3], +scrollDistance * 4);
      checkIndex('index4', 21);
      updateIndicators(activeIndex);

    }

  } else if ((activeIndex == 8 && index2 == 8)) { // Sezione Tops

    if (btnId == btn2) { // Sezione Tops

      scroll(slider[1], +scrollDistance * 7);
      checkIndex('index2', 15);
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 > 0) { // Sezione Populars

      scroll(slider[0], -scrollDistance);
      checkIndex('--index1');
      updateIndicators(activeIndex);
      
    } else if (btnId == btn1 && index1 == 0) {

      scroll(slider[0], +scrollDistance * 7);
      checkIndex('index1', 7);
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 > 16) { // Sezione Top10

      scroll(slider[2], -scrollDistance);
      checkIndex('--index3');
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 16) {

      scroll(slider[2], +scrollDistance * 2);
      checkIndex('index3', 17);
      updateIndicators(activeIndex);
    }

    if (btnId == btn4 && index4 > 18) { // Sezione Upcomings

      scroll(slider[3], -scrollDistance);
      checkIndex('--index4');
      updateIndicators(activeIndex);

    } else if (btnId == btn4 && index4 == 18) {

      scroll(slider[3], +scrollDistance * 4);
      checkIndex('index4', 21);
      updateIndicators(activeIndex);

    }

  } else if ((activeIndex == 16 && index3 == 16)) { // Sezione Top10
    
    if (btnId == btn3) { // Sezione Top10

      scroll(slider[2], +scrollDistance * 2);
      checkIndex('index3', 17);
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 > 8) { // Sezione Tops

      scroll(slider[1], -scrollDistance);
      checkIndex('--index2');
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 8) {

      scroll(slider[1], +scrollDistance * 7);
      checkIndex('index2', 15);
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 > 0) { // Sezione Populars

      scroll(slider[0], -scrollDistance);
      checkIndex('--index1');
      updateIndicators(activeIndex);

    } else if (btnId == btn1 && index1 == 0) {

      scroll(slider[0], +scrollDistance * 7);
      checkIndex('index1', 7);
      updateIndicators(activeIndex);
    }

    if (btnId == btn4 && index4 > 18) { // Sezione Upcomings 

      scroll(slider[3], -scrollDistance);
      checkIndex('--index4');
      updateIndicators(activeIndex);

    } else if (btnId == btn4 && index4 == 18) {

      scroll(slider[3], +scrollDistance * 4);
      checkIndex('index4', 21);
      updateIndicators(activeIndex);

    }

  } else if ((activeIndex == 18 && index4 == 18)) { // Sezione Upcomings
    
    if (btnId == btn4) { // Sezione Upcomings

      scroll(slider[3], +scrollDistance * 4);
      checkIndex('index4', 21);
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 > 8) { // Sezione Tops

      scroll(slider[1], -scrollDistance);
      checkIndex('--index2');
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 8) {

      scroll(slider[1], +scrollDistance * 7);
      checkIndex('index2', 15);
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 > 0) { // Sezione Populars

      scroll(slider[0], -scrollDistance);
      checkIndex('--index1');
      updateIndicators(activeIndex);

    } else if (btnId == btn1 && index1 == 0) {

      scroll(slider[0], +scrollDistance * 7);
      checkIndex('index1', 7);
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 > 16) { // Sezione Top10

      scroll(slider[2], -scrollDistance);
      checkIndex('--index3');
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 16) {

      scroll(slider[2], +scrollDistance * 2);
      checkIndex('index3', 17);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn4 && index4 == 18 && activeIndex != index4) { // Button 4 - Sezione Upcomings
    
    if (btnId == btn4) { // Sezione Upcomings

      scroll(slider[3], +scrollDistance * 4);
      checkIndex('index4', 21);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn3 && index3 == 16 && activeIndex != index3) { // Button 3 - Sezione Top10

    if (btnId == btn3) { // Sezione Top10

      scroll(slider[2], +scrollDistance * 2);
      checkIndex('index3', 17);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn2 && index2 == 8 && activeIndex != index2) { // Button 2 - Sezione Tops

    if (btnId == btn2) { // Sezione Tops

      scroll(slider[1], +scrollDistance * 7);
      checkIndex('index2', 15);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn1 && index1 == 0 && activeIndex != index1) { // Button 1 - Sezione Populars

    if (btnId == btn1) {

      scroll(slider[0], +scrollDistance * 7);
      checkIndex('index1', 7);
      updateIndicators(activeIndex);
    }

  } else {

    if (btnId == btn1) { // Sezione Populars

      scroll(slider[0], -scrollDistance);
      checkIndex('--index1');
      updateIndicators(activeIndex);
    }

    if (btnId == btn2) { // Sezione Tops

      scroll(slider[1], -scrollDistance);
      checkIndex('--index2');
      updateIndicators(activeIndex);
    }

    if (btnId == btn3) { // Sezione top10

      scroll(slider[2], -scrollDistance);
      checkIndex('--index3');
      updateIndicators(activeIndex);
    }

    if (btnId == btn4) { // Sezione Upcomings

      scroll(slider[3], -scrollDistance);
      checkIndex('--index4');
      updateIndicators(activeIndex);
    }
  }
}

// Right slider carousel
function slideRight(btnId, scrollDistance, btn1, btn2, btn3, btn4) {

  if ((activeIndex == 7 && index1 == 7)) { // Sezione Populars

    if (btnId == btn1) {

      scroll(slider[0], -scrollDistance * 7);
      checkIndex('index1', 0);
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 < 15) { // Sezione Tops

      scroll(slider[1], +scrollDistance);
      checkIndex('++index2');
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 15) {

      scroll(slider[1], -scrollDistance * 7);
      checkIndex('index2', 8);
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 < 17) { // Sezione Top10

      scroll(slider[2], +scrollDistance);
      checkIndex('++index3');
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 17) {

      scroll(slider[2], -scrollDistance * 2);
      checkIndex('++index3', 16);
      updateIndicators(activeIndex);

    }
    
    if (btnId == btn4 && index4 < 21) { // Sezione Upcomings

      scroll(slider[3], +scrollDistance);
      checkIndex('++index4');
      updateIndicators(activeIndex);

    } else if (btnId == btn4 && index4 == 21) {

      scroll(slider[3], -scrollDistance * 4);
      checkIndex('++index4', 18);
      updateIndicators(activeIndex);

    }

  } else if ((activeIndex == 15 && index2 == 15)) { // Sezione Tops

    if (btnId == btn2) { // Sezione Tops

      scroll(slider[1], -scrollDistance * 7);
      checkIndex('index2', 8);
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 < 7) { // Sezione Populars

      scroll(slider[0], +scrollDistance);
      checkIndex('++index1');
      updateIndicators(activeIndex);
      
    } else if (btnId == btn1 && index1 == 7) {

      scroll(slider[0], -scrollDistance * 7);
      checkIndex('index1', 0);
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 < 17) { // Sezione Top10

      scroll(slider[2], +scrollDistance);
      checkIndex('++index3');
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 17) {

      scroll(slider[2], -scrollDistance * 2);
      checkIndex('index3', 16);
      updateIndicators(activeIndex);
    }

    if (btnId == btn4 && index4 < 21) { // Sezione Upcomings

      scroll(slider[3], +scrollDistance);
      checkIndex('++index4');
      updateIndicators(activeIndex);

    } else if (btnId == btn4 && index4 == 21) {

      scroll(slider[3], -scrollDistance * 4);
      checkIndex('++index4', 18);
      updateIndicators(activeIndex);

    }

  } else if ((activeIndex == 17 && index3 == 17)) { // Sezione Top10
    
    if (btnId == btn3) { // Sezione Top10

      scroll(slider[2], -scrollDistance * 2);
      checkIndex('index3', 16);
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 < 15) { // Sezione Tops

      scroll(slider[1], +scrollDistance);
      checkIndex('++index2');
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 15) {

      scroll(slider[1], -scrollDistance * 7);
      checkIndex('index2', 8);
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 < 7) { // Sezione Populars

      scroll(slider[0], +scrollDistance);
      checkIndex('++index1');
      updateIndicators(activeIndex);

    } else if (btnId == btn1 && index1 == 7) {

      scroll(slider[0], -scrollDistance * 7);
      checkIndex('index1', 0);
      updateIndicators(activeIndex);
    }

    if (btnId == btn4 && index4 < 21) { // Sezione Upcomings

      scroll(slider[3], +scrollDistance);
      checkIndex('++index4');
      updateIndicators(activeIndex);

    } else if (btnId == btn4 && index4 == 21) {

      scroll(slider[3], -scrollDistance * 4);
      checkIndex('++index4', 18);
      updateIndicators(activeIndex);

    }

  } else if ((activeIndex == 15 && index2 == 15)) { // Sezione Tops

    if (btnId == btn2) { // Sezione Tops

      scroll(slider[1], -scrollDistance * 7);
      checkIndex('index2', 8);
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 < 7) { // Sezione Populars

      scroll(slider[0], +scrollDistance);
      checkIndex('++index1');
      updateIndicators(activeIndex);
      
    } else if (btnId == btn1 && index1 == 7) {

      scroll(slider[0], -scrollDistance * 7);
      checkIndex('index1', 0);
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 < 17) { // Sezione Top10

      scroll(slider[2], +scrollDistance);
      checkIndex('++index3');
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 17) {

      scroll(slider[2], -scrollDistance * 2);
      checkIndex('index3', 16);
      updateIndicators(activeIndex);
    }

    if (btnId == btn4 && index4 < 21) { // Sezione Upcomings

      scroll(slider[3], +scrollDistance);
      checkIndex('++index4');
      updateIndicators(activeIndex);

    } else if (btnId == btn4 && index4 == 21) {

      scroll(slider[3], -scrollDistance * 4);
      checkIndex('++index4', 18);
      updateIndicators(activeIndex);

    }

  } else if ((activeIndex == 21 && index4 == 21)) { // Sezione Upcomings
    
    if (btnId == btn4) { // Sezione Upcomings

      scroll(slider[3], -scrollDistance * 4);
      checkIndex('index4', 18);
      updateIndicators(activeIndex);
    }

    if (btnId == btn2 && index2 < 15) { // Sezione Tops

      scroll(slider[1], +scrollDistance);
      checkIndex('++index2');
      updateIndicators(activeIndex);

    } else if (btnId == btn2 && index2 == 15) {

      scroll(slider[1], -scrollDistance * 7);
      checkIndex('index2', 8);
      updateIndicators(activeIndex);
    }

    if (btnId == btn1 && index1 < 7) { // Sezione Populars

      scroll(slider[0], +scrollDistance);
      checkIndex('++index1');
      updateIndicators(activeIndex);

    } else if (btnId == btn1 && index1 == 7) {

      scroll(slider[0], -scrollDistance * 7);
      checkIndex('index1', 0);
      updateIndicators(activeIndex);
    }

    if (btnId == btn3 && index3 < 17) { // Sezione Top10

      scroll(slider[2], +scrollDistance);
      checkIndex('++index3');
      updateIndicators(activeIndex);

    } else if (btnId == btn3 && index3 == 17) {

      scroll(slider[2], -scrollDistance * 2);
      checkIndex('index3', 16);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn4 && index4 == 21 && activeIndex != index4) {

    if (btnId == btn4) { // Sezione Upcomings

      scroll(slider[3], -scrollDistance * 4);
      checkIndex('index4', 18);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn3 && index3 == 17 && activeIndex != index3) {

    if (btnId == btn3) { // Sezione Top10

      scroll(slider[2], -scrollDistance * 2);
      checkIndex('index3', 16);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn2 && index2 == 15 && activeIndex != index2) {

    if (btnId == btn2) { // Sezione Tops

      scroll(slider[1], -scrollDistance * 7);
      checkIndex('index2', 8);
      updateIndicators(activeIndex);
    }

  } else if (btnId == btn1 && index1 == 7 && activeIndex != index1) {

    if (btnId == btn1) {

      scroll(slider[0], -scrollDistance * 7);
      checkIndex('index1', 0);
      updateIndicators(activeIndex);
    }
    
  } else {

    if (btnId == btn1) { // Sezione Populars

      scroll(slider[0], +scrollDistance);
      checkIndex('++index1');
      updateIndicators(activeIndex);
    }

    if (btnId == btn2) { // Sezione Tops

      scroll(slider[1], +scrollDistance);
      checkIndex('++index2');
      updateIndicators(activeIndex);
    }

    if (btnId == btn3) { // Sezione top10

      scroll(slider[2], +scrollDistance);
      checkIndex('++index3');
      updateIndicators(activeIndex);
    }

    if (btnId == btn4) { // Sezione Upcomings

      scroll(slider[3], +scrollDistance);
      checkIndex('++index4');
      updateIndicators(activeIndex);
    }
  }
}