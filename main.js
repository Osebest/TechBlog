let ele1 = document.getElementById("primaryNav");
function openSideMenu() {
  document.getElementById("hamburgerBtn").classList.toggle("open");
  document.body.classList.toggle("show");
  if (ele1.style.display === "block") {
    ele1.style.display = "none";
  } else {
    ele1.style.display = "block";
  };
};


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}