const menuOpenButton = document.querySelector('#menu-open-button');

const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
});

menuCloseButton.addEventListener('click', () => {
   menuOpenButton.click();
});

//
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:  true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            sliderPerView: 1
        },
        768: {
            sliderPerView: 2
        },
        1024: {
            sliderPerView: 3
        }
    }
    }
);
const nomRegex=/^[a-zA-Z\s]{2,}$/;
const emailRegex=/^[a-zA-Z0-9%._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const textRegex=/^[a-zA-Z0-9\s]*$/;
document.getElementById("enter-n").addEventListener("input", (e) => {
    validateField(e.target, nomRegex, "nameError", "The name is invalid");
});

document.getElementById("enter-e").addEventListener("input", (e) => {
    validateField(e.target, emailRegex, "emailError", " the email is invalide");
});

document.getElementById("enter-t").addEventListener("input", (e) => {
    validateField(e.target, textRegex, "textError", "the message is invalid");
});

function validateField(input, regex, errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    if (!regex.test(input.value)) {
        errorElement.textContent = errorMessage;
        document.getElementById("submitBtn").disabled = true;
    } else {
        errorElement.textContent = "";
        document.getElementById("submitBtn").disabled = !isFormValid();
    }
}

function isFormValid() {
    return (
        nomRegex.test(document.getElementById("enter-n").value) &&
        emailRegex.test(document.getElementById("enter-e").value) &&
        textRegex.test(document.getElementById("enter-t").value) // Use textRegex here
    );
}
document.getElementById("submitBtn").addEventListener("click", () => {
    if (isFormValid()) {
        // Hide errors and show success message
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("textError").textContent = "";
        document.getElementById("successMessage").style.display = "block";

        // Optionally clear the form
        document.getElementById("contactForm").reset();
    }
});









