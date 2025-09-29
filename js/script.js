// hamburger menu ==============>=
const hamburger = document.querySelector(".hamburger"),
  navItems = document.querySelector(".nav-items"),
  span1 = document.querySelector(".hamburger span:nth-child(1)"),
  span2 = document.querySelector(".hamburger span:nth-child(2)"),
  span3 = document.querySelector(".hamburger span:nth-child(3)");

hamburger.addEventListener("click", function () {
  navItems.classList.toggle("active-items");
  span1.classList.toggle("span-satu");
  span2.classList.toggle("span-dua");
  span3.classList.toggle("span-tiga");
});

// klik diluar nav untuk menghilangkan
const navBar = document.querySelector("nav");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    navItems.classList.remove("active-items");
    span1.classList.remove("span-satu");
    span2.classList.remove("span-dua");
    span3.classList.remove("span-tiga");
  }
});

// disable scroll-------
// tidak boleh scroll ke bawah-----

// const rootElement = document.querySelector(":root");

// function disableScroll() {
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//   window.onscroll = function () {
//     window.scrollTo(scrollTop, scrollLeft);
//   };
//   rootElement.style.scrollBehavior = "auto";
// }

// function enableScroll() {
//   window.onscroll = function () {};
//   rootElement.style.scrollBehavior = "smooth";
//   localStorage.setItem("opened", "true");
// }

// // jika sudah dibuka, maka scrol tidak disable
// // if (!localStorage.getItem("opened")) {
// //   disableScroll();
// // }
// disableScroll();

// Punyaku Lock Window Awal
// Menonaktifkan scroll ==============>=
function disableScroll() {
  window.addEventListener("scroll", preventDefault, { passive: false });
  window.addEventListener("wheel", preventDefault, { passive: false });
  window.addEventListener("touchmove", preventDefault, { passive: false });
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
  localStorage.setItem("opened", "true");
  window.removeEventListener("scroll", preventDefault);
  window.removeEventListener("wheel", preventDefault);
  window.removeEventListener("touchmove", preventDefault);
  window.removeEventListener("keydown", preventDefaultForScrollKeys);
}

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  // Mencegah tombol yang menyebabkan scroll
  //  9 = Tab
  // 32 = Spacebar
  // 33 = Page Up
  // 34 = Page Down
  // 35 = End
  // 36 = Home

  // 37–40 = Panah kiri/atas/kanan/bawah
  const keys = [9, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
  }
}

// Aktifkan
disableScroll();
if (localStorage.getItem("opened")) {
  enableScroll();
}
// Nyalakan kembali jika ingin
// enableScroll();
