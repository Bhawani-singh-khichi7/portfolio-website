/// ===============================
// PORTFOLIO V2 SCRIPT
// ===============================


// Mobile Menu

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if(navToggle && navLinks){

    navToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

}



// Typing Animation

const typedLine = document.getElementById("typedLine");

const message =
"Building modern websites with HTML, CSS, JavaScript & Python.";

let i = 0;


function typeEffect(){

    if(typedLine && i < message.length){

        typedLine.textContent += message.charAt(i);

        i++;

        setTimeout(typeEffect,45);

    }

}


window.addEventListener("load",()=>{

    typeEffect();

});




// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
".skill-card, .project-card, .contact-card, .section"
);


const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });


},{threshold:0.15});



revealElements.forEach(element=>{

    element.classList.add("hidden");

    revealObserver.observe(element);

});




// Navbar shadow on scroll

const nav = document.querySelector(".nav");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        nav.style.background="rgba(7,11,23,.95)";

    }else{

        nav.style.background="rgba(7,11,23,.75)";

    }

});



// Footer Year

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}
