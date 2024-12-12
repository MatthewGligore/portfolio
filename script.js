document.addEventListener("DOMContentLoaded", function () {
    const terms = ["Web Developer", "UI Designer", "Tech Enthusiast", "Code Creator", "Design Innovator"];
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
