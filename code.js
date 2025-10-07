window.addEventListener("load", () => {
  const loader = document.getElementById("cube-loader");
  const site = document.getElementById("site-content");
  const homeButton = document.querySelector(".home-button");

  setTimeout(() => {
    loader.style.display = "none";          // Hide spinning cube
    site.classList.add("show");              // Show content
    homeButton.style.display = "inline-block"; // Show home button
  }, 3000);
});