let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY; // Corrected typo: scrolly to scrollY
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) { // Corrected condition: top <= offset + height to top < offset + height
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };


<script>
  const form = document.getElementById('contact-form');
  const popup = document.getElementById('success-popup');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset(); // Clear form fields
        popup.style.display = 'block'; // Show success popup
        // Optionally hide after a few seconds
        setTimeout(() => {
          popup.style.display = 'none';
        }, 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }).catch(error => {
      alert("There was a problem submitting the form.");
    });
  });
</script>