function getYearCopyright() {
  const copyTime = document.querySelector(".copy-time");
  copyTime.textContent = new Date().getFullYear();
}

getYearCopyright();

const openBtn = document.querySelector(".sidebar__nav-btn-open");
const closeBtn = document.querySelector(".sidebar__nav-btn-close");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
// const sideBar = document.querySelector(".sidebar");
// Menu functionality

const settingNavSticky = function () {
  sideBar.classList.add("nav-response");
};

const openMenu = function () {
  sideBar.classList.add("nav-open");
  overlay.classList.remove("hidden");
};

const closeMenu = function () {
  sideBar.classList.remove("nav-open");
  overlay.classList.add("hidden");
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && sideBar.classList.contains("nav-open")) {
    closeMenu();
  }
});

document
  .querySelector(".sidebar__main-nav")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("sidebar__main-nav-link")) {
      e.preventDefault();
      const id = e.target.getAttribute("href");
      if (!id) return;
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// document.addEventListener("click", function (e) {
//   if (e.target && sideBar.classList.contains("nav-open")) {
//     closeMenu();
//   }
// });

// event listeners

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
