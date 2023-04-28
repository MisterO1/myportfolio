// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})

// hide navbar when click on navbar link
const navlinks = document.querySelectorAll("header nav a");
navlinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    })
})

// Scroll section active link
const sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach((sec)=>{
        const top = window.scrollY;
        const secTop = sec.offsetTop - 230;
        const secHeight = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if((secTop <= top) && (top < secTop + secHeight)){
            navlinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`header nav a[href="#${id}"] `).classList.add("active");
                // document.querySelector('header nav a[href*='+ id +']').classList.add("active");
            })
        }
    })
    // header sticky border-bottom effect
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 1000);
}

//  Scroll reveal animation
ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 100
})
ScrollReveal().reveal(".home-content, .about-content, .heading",{origin: "top"});
ScrollReveal().reveal(".home-img, .about-img, .services-container, .projects-container, .contact form",{origin: "bottom"});
ScrollReveal().reveal(".home-content h2, .about-img",{origin: "left"});
ScrollReveal().reveal(".home-content p, .about-content p",{origin: "right"});

// typed animation text
var typed = new Typed(".text-typed",{
    strings: ["Bachelor Student","Front-end Developper","Youtuber 😁"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    startDelay : 200,
    loop : true  // to repeat
})
