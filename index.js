let tl = new TimelineMax({ paused: true });

tl.to(".nav-container", 1, {
  left: 0,
  ease: "expo.inOut",
});

tl.staggerFrom(
  ".menu > div",
  0.8,
  {
    y: 100,
    opacity: 0,
    ease: "expo.inOut",
  },
  "0.1",
  "-=0.1"
);
tl.reverse();

document.addEventListener("DOMContentLoaded", function () {
  var menuOpen = document.querySelector(".menu-open");
  menuOpen.addEventListener("click", function () {
    tl.play();
  });

  var menuClose = document.querySelector(".menu-close");
  menuClose.addEventListener("click", function () {
    tl.reverse();
  });
  //item1----------------------------------

  document.querySelector(".item-1").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#0770A8";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-1").addEventListener("mouseover", function () {
    document.querySelector(".nav-container").style.backgroundColor = "#A5D5E1";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-1").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  document.querySelector(".item-1").addEventListener("mouseout", function () {
    document.querySelector(".nav-container").style.backgroundColor = "";
  });

  // item2------------------------------------------------
  document.querySelector(".item-2").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#8a84ad";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-2").addEventListener("mouseover", function () {
    document.querySelector(".nav-container").style.backgroundColor = "#c9c9c9";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-2").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  document.querySelector(".item-2").addEventListener("mouseout", function () {
    document.querySelector(".nav-container").style.backgroundColor = "";
  });
  //item3------------------------------------------------------
  document.querySelector(".item-3").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#b76375";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-3").addEventListener("mouseover", function () {
    document.querySelector(".nav-container").style.backgroundColor = "#ffa3b5";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-3").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  document.querySelector(".item-3").addEventListener("mouseout", function () {
    document.querySelector(".nav-container").style.backgroundColor = "";
  });
  //item4------------------------------------------------
  document.querySelector(".item-4").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#6b6b6b";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-2").addEventListener("mouseover", function () {
    document.querySelector(".nav-container").style.backgroundColor = "#bababa";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-4").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  document.querySelector(".item-4").addEventListener("mouseout", function () {
    document.querySelector(".nav-container").style.backgroundColor = "";
  });
  //item5--------------------------------------------------
  document.querySelector(".item-5").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#8464B1";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-5").addEventListener("mouseover", function () {
    document.querySelector(".nav-container").style.backgroundColor = "#a0dfff";
    this.style.transition = "all 300ms ease-in-out";
  });
  document.querySelector(".item-5").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  document.querySelector(".item-5").addEventListener("mouseout", function () {
    document.querySelector(".nav-container").style.backgroundColor = "";
  });
});
