// FOR THE STICKY HEADER
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// FOR THE SLIDESHOW

function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
      showSlides(slideIndex -= 1);
    } else {
     showSlides(slideIndex += 1); 
    }
    if (n === -1){
      myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
      myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}



var slideIndex = 1;

var myTimer;

var slideshowContainer;




function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 6000);
})

function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 6000);
    showSlides(slideIndex = n);
  }