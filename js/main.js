
$(function() {
  $(".accordion-click .accordion-item").on("click", function(e) {
      e.preventDefault();
      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).find(".para").slideUp();
      } else {
          $(".accordion-click .accordion-item").removeClass("active");
          $(".accordion-click .para").slideUp();
          $(this).addClass("active");
          $(this).find(".para").slideDown();
      }
  });
});


$(document).ready(function () {
  $('.card-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* -----------------------------------------------------banner slider------------------------------------------------ */
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
  })

  /* ------------------------------------------------------------------------------------------------------------- */
  $('.advisor-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* -------------------------------------------------------------------------------------------------------------- */
  $('.two-wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $(".counter").counterUp({
    delay: 10,

    time: 1200
  })
});




let menubar = document.querySelector('.menu-bar')
let nav = document.querySelector('.menu')
let second = document.querySelector('.second')
let first = document.querySelector(".first")
let third = document.querySelector(".third")

let icon = document.querySelector(".search-icon")
let inputForm = document.querySelector(".input-form")



let all = document.querySelector(".all")
let investment = document.querySelector(".investment")
let planning = document.querySelector(".planning")
let business = document.querySelector(".business")
let firstimg = document.querySelector(".firstimg")
let secondimg = document.querySelector(".secondimg")
let thirdimg = document.querySelector(".thirdimg")
let fourthimg = document.querySelector(".fourthimg")
let fifthimg = document.querySelector(".fifthimg")
let sixthimg = document.querySelector(".sixthimg")

investment.addEventListener("click", function () {
  console.log("run")

  secondimg.style.display = "block";
  firstimg.style.display = "block";
  thirdimg.style.display = "none";
  fourthimg.style.display = "none";
  fifthimg.style.display = "none";
  sixthimg.style.display = "none";
  investment.classList.add("active");
  all.classList.remove("active");
  planning.classList.remove("active")
})
all.addEventListener("click", function () {
  all.classList.add("active")
  investment.classList.remove("active")
  planning.classList.remove("active");
  business.classList.remove("active")
  secondimg.style.display = "block";
  firstimg.style.display = "block";
  thirdimg.style.display = "block";
  fourthimg.style.display = "block";
  fifthimg.style.display = "block";
  sixthimg.style.display = "block";
})
planning.addEventListener("click", function () {
  thirdimg.style.display = "block";
  fourthimg.style.display = "block";
  firstimg.style.display = "none";
  secondimg.style.display = "none";
  fifthimg.style.display = "none";
  sixthimg.style.display = "none";
  planning.classList.add("active");
  all.classList.remove("active");
  investment.classList.remove("active")
  business.classList.remove("active")
})
business.addEventListener("click", function () {
  thirdimg.style.display = "none";
  fourthimg.style.display = "none";
  firstimg.style.display = "none";
  secondimg.style.display = "none";
  fifthimg.style.display = "block";
  sixthimg.style.display = "block";
  business.classList.add("active");
  all.classList.remove("active");
  investment.classList.remove("active");
  planning.classList.remove("active");

})













icon.addEventListener("click", function () {

  if (inputForm.style.visibility = "hidden") {
    inputForm.style.visibility = "visible"
    inputForm.style.transition = ".5s ease in out"
  } else (inputForm.style.visibility = "hidden")
})


menubar.addEventListener("click", function () {
  console.log("as")
  if (nav.style.display === "block") {
    nav.style.display = "none";
    second.style.opacity = "1";
    first.style.transform = "rotate(0deg)";
    third.style.transform = "rotate(0deg)";

  }
  else (nav.style.display = "block",
    second.style.opacity = "0",
    first.style.transform = "rotate(-32deg)",
    third.style.transform = "rotate(30deg)"
  )

})
/* ---------------------------------------chart.js------------------------------------------- */
















