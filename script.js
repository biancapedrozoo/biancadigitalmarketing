/*
 * Bianca Digital Marketing - JavaScript
 */

// ===== CURSOR PERSONALIZADO =====
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

if (cursor && cursorDot) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .portfolio-card, .portfolio-item, .swiper-slide').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ===== MENU MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Fechar menu ao clicar num link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// ===== SWIPER CAROUSEL =====
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper(".portfolio-carousel", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== FORMSPREE FORM HANDLING =====
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    try {
      const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        if (status) {
          status.innerHTML = "Obrigado pela sua mensagem! Entrarei em contato em breve.";
          status.style.color = "#CC3479";
        }
        form.reset();
      } else {
        const errorData = await response.json();
        if (status) {
          if (errorData.errors) {
            status.innerHTML = errorData.errors.map(error => error.message).join(", ");
          } else {
            status.innerHTML = "Oops! Houve um problema ao enviar seu formulário.";
          }
          status.style.color = "red";
        }
      }
    } catch (error) {
      if (status) {
        status.innerHTML = "Oops! Houve um problema ao enviar seu formulário.";
        status.style.color = "red";
      }
    }
  });
}

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
});
