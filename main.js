// animate to scroll
console.log("main start");
AOS.init();

//scroll to top btn
if(window.scrollY<50){
  document.getElementById("scrollToTop").style.display = "none";
} else {
  document.getElementById("scrollToTop").style.display = "block";
}
window.addEventListener("scroll", function(){
  const nav=document.getElementById("basicExampleNav");
  nav.classList.remove('show-menu');
  if(window.scrollY<50){
    document.getElementById("scrollToTop").style.display = "none";
  } else {
    document.getElementById("scrollToTop").style.display = "block";
  }
});

// toggle menu
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const nav=document.getElementById("basicExampleNav");
const navbar=document.getElementById("navbar");
menuBtn.addEventListener('click',()=>{
  nav.classList.toggle('show-menu');
})
closeMenuBtn.addEventListener('click',()=>{
  nav.classList.remove('show-menu');
})

// menu-links active hover
const navLink=document.querySelectorAll('.nav-link');
function linkAction(){
  // active link
  navLink.forEach(link=>link.classList.remove('active'));
  this.classList.add('active');
  // hide menu
  nav.classList.remove('show-menu');
}
navLink.forEach(link=>link.addEventListener('click',linkAction));


console.log("main end")