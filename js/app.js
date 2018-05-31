window.sr = ScrollReveal();
sr.reveal('.navbar' , {
  duration:2000,
  origin:'bottom'
});
sr.reveal('.header-content-left' , {
  duration:2000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.header-content-right' , {
  duration:2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.header-btn' , {
  duration:2000,
  origin:'bottom',
  delay:1000
});
sr.reveal('#testimonial' , {
  duration:2000,
  origin:'left',
  distance:'300px',
  viewFactor:0.1
});


// smoth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault();

//   $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//   }, 500);
// });