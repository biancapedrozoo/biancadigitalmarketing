// Initialize Swiper Carousel
const swiper = new Swiper(".portfolio-carousel", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

// Formspree Form Handling
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Obrigado pela sua mensagem! Entrarei em contato em breve.";
            status.style.color = "var(--pink)";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! Houve um problema ao enviar seu formulário."
                }
                status.style.color = "red";
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! Houve um problema ao enviar seu formulário.";
        status.style.color = "red";
    });
}

form.addEventListener("submit", handleSubmit)

