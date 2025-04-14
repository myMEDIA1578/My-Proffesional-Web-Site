const quotes = [
    '“It’s fine to celebrate success but it is more important to heed the lessons of failure.”- Bill Gates, Co-founder of Microsoft',
    '“The biggest risk is not taking any risk… In a world that’s changing really quickly, the only strategy that is guaranteed to fail, is not taking risks.” - Mark Zuckerberg, Co-founder of Facebook',
    '“If you are competitor-focused, you have to wait until there is a competitor doing something. Being customer-focused allows you to be more pioneering.” - Jeff Bezos, Founder of Amazon',
    '“The best way to predict the future is to invent it.”  - Alan Kay, computer scientist, Xerox',
    '"Growth and comfort do not coexist." - Ginni Rometty, CEO of IBM',
    '“Trust is a serious problem, we have to get to a new level of transparency – only through radical transparency will we get to radical new levels of trust.” - Marc R. Benioff, CEO of SalesForce'

 
];
console.log("Script_access");

const quoteElem = document.getElementById("quote");

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElem.textContent = quotes[randomIndex];
}

function fadeQuoteChange() {
    // Fade out
    quoteElem.style.color = '#000000';

    setTimeout(() => {
        showRandomQuote();
        // Fade text in (restore color)
        quoteElem.style.color = '#ffffffe2';
    }, 1000);
}


showRandomQuote();
setInterval(fadeQuoteChange, 20000);




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
/*
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000); // Change image every 2 seconds
}

*/