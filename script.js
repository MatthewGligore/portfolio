document.addEventListener("DOMContentLoaded", function () {
    const terms = ["Full-Stack Developer", "UI/UX Designer", "Product Manager", "Game Developer"];
    let termIndex = 0;
    let charIndex = 0;
    const span = document.querySelector(".typed-text");

    function type() {
        if (charIndex < terms[termIndex].length) {
            span.textContent = span.textContent.replace('_', terms[termIndex].charAt(charIndex - 1));  // Remove the extra space if present
            span.textContent += terms[termIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 1) {
            span.textContent = span.textContent.slice(0, -1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            span.textContent = '_';  // Add an extra space when text is empty
            termIndex = (termIndex + 1) % terms.length;
            setTimeout(type, 1000);
        }
    }

    if (terms.length) type();
});

document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contact-button');
    const contactFormContainer = document.getElementById('contact-form-container');

    contactButton.addEventListener('click', function () {
        contactFormContainer.classList.add('visible');
    });

    document.addEventListener('click', function (event) {
        if (!contactFormContainer.contains(event.target) && event.target !== contactButton) {
            contactFormContainer.classList.remove('visible');
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email logic (You need a backend service to actually send the email)
        // Example: Using EmailJS (https://www.emailjs.com/)
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: email,
            message_html: message
        }).then(function (response) {
            alert('Your message has been sent!');
            contactFormContainer.classList.remove('visible');
        }, function (error) {
            alert('Failed to send the message. Please try again later.');
        });

        // Clear form fields
        contactForm.reset();
    });
});

