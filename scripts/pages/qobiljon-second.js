document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  });
});
