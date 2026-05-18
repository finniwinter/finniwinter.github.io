/* BACK TO TOP */
const mybutton = document.getElementById("btn-back-to-top");

// Show or hide the button based on scroll position
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};

// Smooth scroll to top
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Event listeners
window.addEventListener("scroll", scrollFunction);
mybutton.addEventListener("click", backToTop);
