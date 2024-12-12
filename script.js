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


document.addEventListener('DOMContentLoaded', function () {
    const feedbackButton = document.getElementById('feedback-button');
    const feedbackContainer = document.getElementsByClassName('feedback-container');

    feedbackButton.addEventListener('click', function () {
        feedbackContainer.classList.add('visible');
    });

    document.addEventListener('click', function (event) {
        if (!feedbackContainer.contains(event.target) && event.target !== feedbackButton) {
            feedbackContainer.classList.remove('visible');
        }
    });

    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        document.getElementById("message").textContent = "Submitting..";
        document.getElementById("message").style.display = "block";
        document.getElementById("submit-button").disabled = true;

        // Collect the form data
        var formData = new FormData(this);
        var keyValuePairs = [];
        for (var pair of formData.entries()) {
            keyValuePairs.push(pair[0] + "=" + pair[1]);
        }

        var formDataString = keyValuePairs.join("&");

        // Send a POST request to your Google Apps Script
        fetch(
            "https://script.google.com/macros/s/AKfycbyNxDZE-OrTP7l6jyBAkNiF4T7qS7b9ip6eO7xV8NDvAYEnnxVNH0k-7YiQVB2Sr78m/exec",
            {
                redirect: "follow",
                method: "POST",
                body: formDataString,
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
            }
        )
            .then(function (response) {
                // Check if the request was successful
                if (response) {
                    return response; // Assuming your script returns JSON response
                } else {
                    throw new Error("Failed to submit the form.");
                }
            })
            .then(function (data) {
                // Display a success message
                document.getElementById("message").textContent =
                    "Data submitted successfully!";
                document.getElementById("message").style.display = "block";
                document.getElementById("message").style.backgroundColor = "green";
                document.getElementById("message").style.color = "beige";
                document.getElementById("submit-button").disabled = false;
                document.getElementById("form").reset();

                setTimeout(function () {
                    document.getElementById("message").textContent = "";
                    document.getElementById("message").style.display = "none";
                }, 2600);
            })
            .catch(function (error) {
                // Handle errors, you can display an error message here
                console.error(error);
                document.getElementById("message").textContent =
                    "An error occurred while submitting the form.";
                document.getElementById("message").style.display = "block";
            });
    });
});


