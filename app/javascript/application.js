// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
//= require jquery3
//= require popper
//= require bootstrap
import "bootstrap"

//javascript navbar
$(document).ready(function() {
  $(".navbar").hide().fadeIn(1000).slideDown(1000);
});



const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  });
});
$(document).ready(function(){
  $('.accordion-header').click(function(){
    $(this).find('.fa-caret-down').toggleClass('rotate');
  });
});
