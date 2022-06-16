//Start Navbar

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 150) {
            $('nav').addClass('scroll');
        } else {
            $('nav').removeClass('scroll');
        }
    });
});

// End Navbar





var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}