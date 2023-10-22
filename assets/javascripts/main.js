window.onload = function () {
  // Nav

  var nav = document.querySelector('.navbar');
  var navOffset = nav.offsetHeight;

  var links = document.querySelectorAll('.navbar .nav-link');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      console.log(link);
      var href = this.getAttribute('href');

      event.preventDefault();
      window.location.hash = href;

      var targetElement = document.querySelector(href);
      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navOffset,
        behavior: 'smooth',
      });
    });
  });

  // End Nav //

  // Animate Elements

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        //entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('[data-behavior~=animate]');
  hiddenElements.forEach((el) => observer.observe(el));

  // End Animate Elements
};
