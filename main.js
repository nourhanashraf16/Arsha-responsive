const closeBtn = document.querySelector(".closeBtn");
const nav = document.querySelector(".parent");
const openBtn = document.querySelector(".openBtn");
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  nav.style.display = "none";
});
openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  nav.style.display = "";
});
