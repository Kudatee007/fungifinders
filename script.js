const toggleBtn = document.querySelector(".hamburger");
const dropDown = document.querySelector(".nav-links");

toggleBtn.onclick = function () {
    dropDown.classList.toggle("active");
}