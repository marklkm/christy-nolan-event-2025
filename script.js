/* General scripts including the top of page button */

/* Scrool to top button */

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("backToTop");
  if (window.pageYOffset > 300) {
    // Show the button after 300px of scrolling
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

/* audio controls */
var audio = document.getElementById("myAudio");
audio.onerror = function () {
  alert(
    "Audio file could not be loaded. Please try a different browser or download the file."
  );
};
