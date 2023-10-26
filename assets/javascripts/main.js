window.onload = function () {
  // Nav

  var nav = document.querySelector('.navbar');
  var navOffset = nav.offsetHeight;

  var links = document.querySelectorAll(
    '.navbar .nav-link, [data-behavior~=cta]'
  );
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var href = this.getAttribute('href');
      var isCTA = this.getAttribute('data-behavior') === 'cta';

      event.preventDefault();
      window.location.hash = href;

      var targetElement = document.querySelector(href);
      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          navOffset,
        behavior: 'smooth',
      });

      // Clear active class added to nav-links by BS5 ScrollSpy
      let lastPos = null;
      requestAnimationFrame(checkPos);
      function checkPos() {
        const newPos = targetElement.getBoundingClientRect().top;
        if (newPos === lastPos && isCTA) {
          document.querySelectorAll('.nav-link').forEach(function (link) {
            link.classList.remove('active');
          });
        } else {
          lastPos = newPos;
          requestAnimationFrame(checkPos);
        }
      }
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
