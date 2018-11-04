console.log("testing");

var aboutMe = document.querySelector("#aboutMe");
var portfolio = document.querySelector("#portfolio");
var contact = document.querySelector("#contact");

var aboutMeId = document.querySelector("#aboutMeId");
var portfolioId = document.querySelector("#portfolioId");
var contactId = document.querySelector("#contactId");

aboutMe.addEventListener("click", function() {
    console.log("CLICK!!!");
    portfolioId.classList.remove("section-portfolio-show");
    portfolioId.classList.add("section-portfolio");
    contactId.classList.remove("section-contact-show");
    contactId.classList.add("section-contact");
    aboutMeId.classList.remove("section-about-me");
    aboutMeId.classList.add("section-about-me-show");
})

portfolio.addEventListener("click", function() {
    console.log("CLICK!!!");
    aboutMeId.classList.remove("section-about-me-show");
    aboutMeId.classList.add("section-about-me");
    contactId.classList.remove("section-contact-show");
    contactId.classList.add("section-contact");
    portfolioId.classList.remove("section-portfolio");
    portfolioId.classList.add("section-portfolio-show");
})

contact.addEventListener("click", function() {
    console.log("CLICK!!!");
    aboutMeId.classList.remove("section-about-me-show");
    aboutMeId.classList.add("section-about-me");
    portfolioId.classList.remove("section-portfolio-show");
    portfolioId.classList.add("section-portfolio");
    contactId.classList.remove("section-contact");
    contactId.classList.add("section-contact-show");
})