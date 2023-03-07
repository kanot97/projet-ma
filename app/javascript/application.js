// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

//= require jquery3
//= require popper
//= require bootstrap


//javascript navbar
$(document).ready(function() {
  $(".navbar").hide().fadeIn(1000).slideDown(1000);
});

//javascript accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionHeaders.forEach(otherHeader => {
        const otherAccordionContent = otherHeader.nextElementSibling;
        if (otherAccordionContent.style.display === 'block') {
          otherAccordionContent.style.display = 'none';
        }
      });
      accordionContent.style.display = 'block';
    }
  });
});

$(document).ready(function(){
  $('.accordion-header').click(function(){
    $(this).find('.fa-caret-down').toggleClass('rotate');
  });
});

// Récupération des éléments
const parallaxImage = document.querySelector('.parallax-image');
const parallaxContent = document.querySelector('.parallax-content');

// Fonction de parallaxe
function parallaxEffect() {
  const scrollTop = window.pageYOffset; // Position de scroll de la fenêtre
  const parallaxHeight = parallaxImage.offsetHeight; // Hauteur de l'image

  // Effet de parallaxe
  if (scrollTop <= parallaxHeight) {
    parallaxImage.style.transform = 'translate3d(0, ' + scrollTop / 3 + 'px, 0)';
    parallaxContent.style.transform = 'translate3d(0, ' + scrollTop / 2 + 'px, 0)';
  }
}

// Écouteur d'événement de scroll
window.addEventListener('scroll', parallaxEffect);
