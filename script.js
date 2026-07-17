// ================= PRELOADER =================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.display = "none";

    }

});

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// ================= MOBILE MENU AUTO CLOSE =================

const navLinksMobile = document.querySelectorAll(".navbar a");

navLinksMobile.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

// ================= DARK / LIGHT MODE =================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }
    else{

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }

});

// ================= TYPING ANIMATION =================

const typingText = document.querySelector(".typing");


const words = [
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Freelancer"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect(){

    const currentWord = words[wordIndex];


    if(!deleting){

        typingText.textContent =
        currentWord.substring(0, charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1000);

            return;

        }

    }
    else{

        typingText.textContent =
        currentWord.substring(0, charIndex--);


        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(typeEffect,100);

}


typeEffect();

// ================= SCROLL TOP BUTTON =================

const scrollTopBtn = document.getElementById("scrollTop");


window.addEventListener("scroll", () => {


    if(window.scrollY > 300){

        scrollTopBtn.style.display = "flex";

    }
    else{

        scrollTopBtn.style.display = "none";

    }


});



scrollTopBtn.addEventListener("click", () => {


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



// ================= SMOOTH SCROLL =================


document.querySelectorAll(".navbar a").forEach(link => {


    link.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



// ================= ACTIVE NAVBAR =================


const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navbar a");



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });



});

// ================= PORTFOLIO FILTER =================

const filterButtons = document.querySelectorAll(".portfolio-filter button");

const portfolioCards = document.querySelectorAll(".portfolio-card");


filterButtons.forEach(button => {


    button.addEventListener("click", () => {


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter = button.dataset.filter;


        portfolioCards.forEach(card => {


            const category = card.dataset.category;


            if(filter === "all" || filter === category){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }


        });


    });


});

// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".section, .portfolio-card, .service-card, .skill-card, .education-card, .testimonial-card"
);


function reveal(){

    revealElements.forEach(element => {


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }


    });

}


window.addEventListener("scroll", reveal);

reveal();

// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit", function(){

    setTimeout(()=>{
        alert("Message sent successfully! 🚀");
    },500);

});

}

// ================= CUSTOM CURSOR =================

const cursor = document.querySelector(".custom-cursor");


document.addEventListener("mousemove", (e)=>{


    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";


});

