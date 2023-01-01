var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
let myIndex = 0;
carousel();

function carousel() {
  const x = document.getElementsByClassName("mySlides");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";

  setTimeout(carousel, 10000);
}

const header_input = document.querySelector(".header-input");
const header_input1 = document.querySelector(".header-input1");
const display_input = document.querySelector(".search_popup");
const search_input = document.querySelector(".search_popup-input");
const search_close = document.querySelector(".search_pop-close");

header_input.addEventListener("click", () => {
  display_input.classList.add("search_popup-display");
  header_input.classList.add("header-input-display");
  search_input.focus();
});
header_input1.addEventListener("click", () => {
  display_input.classList.add("search_popup-display");
  header_input1.classList.add("header-input-display");
  search_input.focus();
});
search_close.addEventListener("click", () => {
  display_input.classList.remove("search_popup-display");
  header_input.classList.remove("header-input-display");
  header_input1.classList.remove("header-input-display");
});

const nav_shop = document.querySelector(".nav_shop");
const shop_show = document.querySelector(".shop_show");
const nav_more = document.querySelector(".nav_more");
const more_dropdown = document.querySelector(".more_dropdown");
nav_shop.addEventListener("mouseover", () => {
  shop_show.classList.add("shop_show1");
});
nav_more.addEventListener("mouseover", () => {
  more_dropdown.classList.add("more_dropdown1");
});

function remove() {
  if (shop_show.classList.contains("shop_show1")) {
    shop_show.classList.remove("shop_show1");
  }
  if (more_dropdown.classList.contains("more_dropdown1")) {
    more_dropdown.classList.remove("more_dropdown1");
  }
}
function moreremove() {
  if (more_dropdown.classList.contains("more_dropdown1")) {
    more_dropdown.classList.remove("more_dropdown1");
  }
}
function shopremove() {
  if (shop_show.classList.contains("shop_show1")) {
    shop_show.classList.remove("shop_show1");
  }
}

const list = document.querySelector(".lists");
const menu = document.querySelector(".menu");
const list_link = document.querySelector(".lists_link");
const menu_link = document.querySelector(".menu_link");
// const list_link1 = document.querySelector(".lists_link1")
// const menu_link1 = document.querySelector(".menu_link1")
const body = document.querySelector("body");
menu.addEventListener("click", () => {
  menu_link.classList.add("menu_link1");
  list_link.classList.add("lists_link1");
  menu.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
  list.style.backgroundColor = "rgba(128, 128, 128, 0.7)";
});
list.addEventListener("click", () => {
  menu_link.classList.remove("menu_link1");
  list_link.classList.remove("lists_link1");
  list.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
  menu.style.backgroundColor = "rgba(128, 128, 128, 0.7)";
});

const bar = document.querySelector(".bar");
const left_aside = document.querySelector(".left_aside");

bar.addEventListener("click", () => {
  left_aside.classList.add("left_aside-display");
  body.style.overflow = "hidden";
});

const bar_close = document.querySelector(".bar_close");
bar_close.addEventListener("click", () => {
  left_aside.classList.remove("left_aside-display");
  body.style.overflow = "scroll";
});
const moreicon = document.querySelector(".moreicon");
const moreplus = document.querySelector(".moreplus");
moreicon.addEventListener("click", () => {
  if (moreicon.classList.contains("fa-plus")) {
    moreicon.classList.add("fa-minus");
    moreicon.classList.remove("fa-plus");
    moreplus.classList.add("moreplus1");
    // body.style.overflow = "scroll";
  } else {
    moreicon.classList.remove("fa-minus");
    moreicon.classList.add("fa-plus");
    moreplus.classList.remove("moreplus1");
  }
});

const logadd = document.querySelector(".logadd");
const login = document.querySelector(".login");
const cross = document.querySelector(".cross");
logadd.addEventListener("click", () => {
  login.classList.add("login1");
});
cross.addEventListener("click", () => {
  login.classList.remove("login1");
});
const logadd3 = document.querySelector(".logadd3");
const login3 = document.querySelector(".login3");
const cross3 = document.querySelector(".cross3");
logadd3.addEventListener("click", () => {
  login3.classList.add("login4");
});
cross3.addEventListener("click", () => {
  login3.classList.remove("login4");
});
const right_aside = document.querySelector(".right_aside");
const cart = document.querySelector(".cart");

const cart1 = document.querySelector(".cart5");
const cart_close = document.querySelector(".cart_close");

cart.addEventListener("click", () => {
  right_aside.classList.add("right_aside1");
});
cart_close.addEventListener("click", () => {
  right_aside.classList.remove("right_aside1");
});
cart1.addEventListener("click", () => {
  right_aside.classList.add("right_aside1");
});
cart_close.addEventListener("click", () => {
  right_aside.classList.remove("right_aside1");
});

const strtbtn = document.querySelector(".strtbtn");
const header_banner = document.querySelector(".header_banner");
const collections = document.querySelector(".collections");
strtbtn.addEventListener("click", () => {
  header_banner.style.display = "none";
  collections.style.display = "block";
  right_aside.classList.remove("right_aside1");
});

//

const btnLogin=document.querySelector(".btn_login");

btnLogin.addEventListener("click",function(){
  window.location.assign("/headers/loginpage/login.html","_self");
})

