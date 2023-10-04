// <!-- Swiper -->

// var swiper = new Swiper(".app-img-swiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//   },

//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

var swiper = new Swiper(".app-img-swiper", {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  slidesPerView: "auto",
  speed: 5000,

  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
});

var swiper = new Swiper(".Slider-Work", {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  slidesPerView: "auto",
  speed: 5000,

  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
});

// var swiper = new Swiper(".slide-skills", {
//   loop: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },

//   slidesPerView: "auto",
//   speed: 15000,

//   grabCursor: true,
//   mousewheelControl: true,
//   keyboardControl: true,
// });

// arwwo

let arwwo = document.querySelector(".arwwo");
arwwo.classList.remove("active");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    arwwo.classList.add("active");
  } else {
    arwwo.classList.remove("active");
  }
});
arwwo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// -----------

let cli1 = document.querySelectorAll(".cli1 h3");
let sp = document.querySelectorAll(".s-p");

let count = 0;
for (let i = 0; i < cli1.length; i++) {
  let dataVaule = cli1[i].getAttribute("data-value");

  let setin = setInterval(() => {
    sp[i].innerHTML = count++;

    if (sp[0].innerHTML == dataVaule) {
      clearInterval(setin);
    }
    if (sp[1].innerHTML == dataVaule) {
      clearInterval(setin);
    }
    if (sp[2].innerHTML == dataVaule) {
      clearInterval(setin);
    }
  }, 5 / dataVaule);
}

// ----2

// let st = document.querySelectorAll(".st h4");
// let Sstack = document.querySelectorAll(".s-stack");

// let count2 = 0;
// for (let i = 0; i < st.length; i++) {
//   let dataVaule2 = st[i].getAttribute("data-value");

//   let setin2 = setInterval(() => {
//     Sstack[i].innerHTML = count2++;

//     if (Sstack[0].innerHTML == dataVaule2) {
//       clearInterval(setin2);
//     }
//     if (Sstack[1].innerHTML == dataVaule2) {
//       clearInterval(setin2);
//     }
//     if (Sstack[2].innerHTML == dataVaule2) {
//       clearInterval(setin2);
//     }
//     if (Sstack[3].innerHTML == dataVaule2) {
//       clearInterval(setin2);
//     }
//   }, 5 / dataVaule2);

//   setTimeout(() => {
//     Sstack[i].innerHTML = dataVaule2;
//   }, 5);
// }

// ------------------

let headerli = document.querySelectorAll("header nav li");
let RascoGlitch = document.querySelectorAll(".Rasco-Glitch");

let sec = document.querySelectorAll(".sec");

headerli.forEach((element) => {
  element.addEventListener("click", function () {
    removeactiveli();
    element.classList.add("active");
  });
});
headerli[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

headerli[1].addEventListener("click", function () {
  window.scrollTo({
    top: sec[0].offsetTop - 100,
    behavior: "smooth",
  });
});

headerli[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});

headerli[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});

headerli[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});

for (let i = 0; i < RascoGlitch.length; i++) {
  RascoGlitch[i].addEventListener("click", function () {
    window.scrollTo({
      top: sec[4].offsetTop - 100,
      behavior: "smooth",
    });
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactiveli();
    headerli[0].classList.add("active");
  }

  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactiveli();
    headerli[1].classList.add("active");
  }

  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactiveli();
    headerli[2].classList.add("active");
  }

  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactiveli();
    headerli[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactiveli();
    headerli[4].classList.add("active");
  }
});

function removeactiveli() {
  headerli.forEach((element) => {
    element.classList.remove("active");
  });
}


// ------------------


//
let liphone = document.querySelector(".li-phone");
let closeicophone = document.querySelector(".close-ico-phone");

let tooglei = document.querySelector(".toogle-i");
tooglei.addEventListener("click", function () {
  liphone.classList.add("active");
});
closeicophone.addEventListener("click", function () {
  liphone.classList.remove("active");
});


// -------------


let navphoneli = document.querySelectorAll(".nav-phone li");

navphoneli.forEach((element) => {
  element.addEventListener("click", function () {
    removeactiveliphone();
    element.classList.add("active");
    liphone.classList.remove("active");
  });
});
navphoneli[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navphoneli[1].addEventListener("click", function () {
  window.scrollTo({
    top: sec[0].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[5].addEventListener("click", function () {
  window.scrollTo({
    top: sec[4].offsetTop - 100,
    behavior: "smooth",
  });
});






window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactiveliphone();
    navphoneli[0].classList.add("active");
  }

  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[1].classList.add("active");
  }

  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[2].classList.add("active");
  }

  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[4].classList.add("active");
  }
  if (window.scrollY >= sec[4].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[5].classList.add("active");
  }

});

function removeactiveliphone() {
  navphoneli.forEach((element) => {
    element.classList.remove("active");
  });
}