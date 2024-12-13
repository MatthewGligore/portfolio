// event listener to change text in hero section

document.addEventListener("DOMContentLoaded", function () {
  const terms = [
    "Web Developer",
    "UI Designer",
    "Tech Enthusiast",
    "Code Creator",
    "Design Innovator",
  ];
  let termIndex = 0;
  let charIndex = 0;
  const span = document.querySelector(".typed-text");

  function type() {
    if (charIndex < terms[termIndex].length) {
      span.textContent = span.textContent.replace(
        "_",
        terms[termIndex].charAt(charIndex - 1)
      ); // Remove the extra space if present
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
      span.textContent = "_"; // Add an extra space when text is empty
      termIndex = (termIndex + 1) % terms.length;
      setTimeout(type, 1000);
    }
  }

  if (terms.length) type();
});

//

window.addEventListener("scroll", function (event) {
  var video = document.getElementById("project-media");
  var scroll = this.scrollY;
  console.log(scroll);
  console.log(video.src);

  if (scroll >= 600 && scroll < 930) {
    this.document.querySelector(".one").classList.add("in-view");
    changeSource("media/video/video.mp4");
  } else {
    this.document.querySelector(".one").classList.remove("in-view");
  }
  if (scroll >= 930 && scroll < 1130) {
    this.document.querySelector(".two").classList.add("in-view");
    changeSource("media/video/video_one.mp4");
  } else {
    this.document.querySelector(".two").classList.remove("in-view");
  }
  if (scroll >= 1130 && scroll < 1330) {
    this.document.querySelector(".three").classList.add("in-view");
    changeSource("media/video/video_two.mp4");
  } else {
    this.document.querySelector(".three").classList.remove("in-view");
  }
  if (scroll >= 1330 && scroll < 1830) {
    this.document.querySelector(".four").classList.add("in-view");
    changeSource("media/video/video_three.mp4");
  } else {
    this.document.querySelector(".four").classList.remove("in-view");
  }

  function changeSource(url) {
    var video = document.getElementById("project-media");
    if (
      video.src ==
      "https://matthewgligore.github.io/portfolio/" + url
    ) {
      return;
    }
    video.src = url;
    video.play();
  }
});
