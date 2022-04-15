// Navbar Fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNavbar = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNavbar) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
  }
};

// Humberger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger menu
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Toggle
const toggle = document.querySelector('#toggle');
const html = document.querySelector('html');

toggle.addEventListener('click', function () {
  if (toggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// toggle switch based mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  toggle.checked = true;
} else {
  toggle.checked = false;
}

// Event Navbar when clicked
const beranda = document.querySelector('#beranda');
const tentang = document.querySelector('#tentang');
const portofolio = document.querySelector('#portofolio');
const blogku = document.querySelector('#blogku');
const klien = document.querySelector('#klien');
const kontak = document.querySelector('#kontak');

beranda.addEventListener('click', function () {
 beranda.classList.add('teal');
 tentang.classList.remove('teal');
 portofolio.classList.remove('teal');
 blogku.classList.remove('teal');
 klien.classList.remove('teal');
 kontak.classList.remove('teal');
});


tentang.addEventListener('click', function () {
 tentang.classList.add('teal');
 beranda.classList.remove('teal');
 portofolio.classList.remove('teal');
 blogku.classList.remove('teal');
 klien.classList.remove('teal');
 kontak.classList.remove('teal');
});

portofolio.addEventListener('click', function () {
 portofolio.classList.add('teal');
 tentang.classList.remove('teal');
 beranda.classList.remove('teal');
 blogku.classList.remove('teal');
 klien.classList.remove('teal');
 kontak.classList.remove('teal');
});

blogku.addEventListener('click', function () {
 blogku.classList.add('teal');
 tentang.classList.remove('teal');
 portofolio.classList.remove('teal');
 beranda.classList.remove('teal');
 klien.classList.remove('teal');
 kontak.classList.remove('teal');
});


klien.addEventListener('click', function () {
 klien.classList.add('teal');
 tentang.classList.remove('teal');
 portofolio.classList.remove('teal');
 blogku.classList.remove('teal');
 beranda.classList.remove('teal');
 kontak.classList.remove('teal');
});

kontak.addEventListener('click', function () {
 kontak.classList.add('teal');
 tentang.classList.remove('teal');
 portofolio.classList.remove('teal');
 blogku.classList.remove('teal');
 klien.classList.remove('teal');
 beranda.classList.remove('teal');
});