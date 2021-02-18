console.log("start observer");

const headerSection=document.querySelector('#header-section');
const aboutSection=document.querySelector('#about-section');
const productSection=document.querySelector('#products-section');
const contactSection=document.querySelector('#contact-section');

const homeLink=document.querySelector(".home-link");
const aboutLink=document.querySelector(".about-link");
const contactLink=document.querySelector(".contact-link");
const productsLink=document.querySelector(".products-link");

const options={
  threshold:0.25
};

// const activeItemObserver=new IntersectionObserver((entries,activeItemObserver)=>{
//   entries.forEach(e=>{
//     if(!e.isIntersecting){
//       return;
//     }
//     console.log(e.target);
//     navLink.forEach(link=>link.classList.remove('active'));
//     e.target.classList.add("active");
//   })
// },options); 

// navLink.forEach((link)=>{
//   activeItemObserver.observe(link)
// })


const homeObserver=new IntersectionObserver((entries,homeObserver)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting){
      return;  
    }
    console.log("home");
    navLink.forEach(link=>link.classList.remove('active'));
    homeLink.classList.add("active");
  })
},options);

const aboutObserver=new IntersectionObserver((entries,aboutObserver)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting){
      return;  
    }
      console.log("about");
      navLink.forEach(link=>link.classList.remove('active'));
      aboutLink.classList.add("active");
  })
},options);

const contactObserver=new IntersectionObserver((entries,contactObserver)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting){
      return;  
    }
      console.log("contct");
      navLink.forEach(link=>link.classList.remove('active'));
      contactLink.classList.add("active");
  })
},options);

const productsObserver=new IntersectionObserver((entries,productsObserver)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting){
      return;  
    }
      console.log("products");
      navLink.forEach(link=>link.classList.remove('active'));
      productsLink.classList.add("active");
    
  })
},options);

homeObserver.observe(headerSection);
aboutObserver.observe(aboutSection);
productsObserver.observe(productSection);
contactObserver.observe(contactSection);

console.log("in observer end");