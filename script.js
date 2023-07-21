// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// download cv button
let CVbtn = document.querySelector(".CVBtn");
CVbtn.onclick = function () {
  window.open("cv/resume.html");
}

//hire me
let hireBtn = document.querySelector(".hireBtn");
hireBtn.onclick = function () {
  window.open("https://www.linkedin.com/in/vanshajgupta01/");
}

//lets chat 
let chatBtn = document.querySelector(".chatBtn");
chatBtn.onclick = function () {
  window.open("chat/index.html");
}

//--------------------------------------------------------------------------------

function openContentBox(url) {
  window.open(url, '_blank');
}

var boxes = document.querySelectorAll('.box');

boxes.forEach(function (box) {
  box.addEventListener('click', function () {
    var url;
    if (box.classList.contains('web-development')) {
      url = 'projects/index.html';
    } else if (box.classList.contains('photography')) {
      url = 'photography/index.html';
    } else if (box.classList.contains('stocks')) {
      url = 'stocks/index.html';
    } else if (box.classList.contains('sketches')) {
      url = 'sketches/index.html';
    } else if (box.classList.contains('blogs')) {
      url = 'blogs/index.html';
    } else if (box.classList.contains('poetry')) {
      url = 'poetry/index.html';
    }
    openContentBox(url);
  });
});





