const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact__form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Get form field values
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const subject = form.querySelector('input[name="subject"]');
    const message = form.querySelector('textarea[name="message"]');

    let isValid = true;

    // Name validation
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "Enter a valid email");
      isValid = false;
    }

    // Subject validation
    if (subject.value.trim() === "") {
      showError(subject, "Subject is required");
      isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
      showError(message, "Message cannot be empty");
      isValid = false;
    }

    if (!isValid) return;

    // If valid, send the form
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        Toastify({
          text: "Message sent successfully!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#4CAF50"
        }).showToast();
        form.reset();
      } else {
        Toastify({
          text: "Failed to send message!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#f44336"
        }).showToast();
      }
    }).catch(() => {
      Toastify({
        text: "Network error!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "#f44336"
      }).showToast();
    });
  });

  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
      error = document.createElement("div");
      error.className = "error";
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
  }
});





