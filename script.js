// ======= Menu Toggle Logic =======
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ======= Active Nav on Scroll =======
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        let activeLink = document.querySelector('header nav a[href*=' + id + ']');
        if (activeLink) activeLink.classList.add('active');
      });
    }
  });
};

// ======= Contact Form Submission Logic =======
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');
  const popup = document.getElementById('success-popup');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset();
          if (popup) {
            popup.style.display = 'block';
            setTimeout(() => popup.style.display = 'none', 5000);
          }
        } else {
          alert("Something went wrong. Please try again.");
        }
      }).catch(error => {
        alert("There was a problem submitting the form.");
      });
    });
  }
});
