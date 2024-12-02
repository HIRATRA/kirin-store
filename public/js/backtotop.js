document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  // Show button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  });

  // Scroll to top when clicking the button
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
