/* =========================
   NETFLIX CLONE JS
   ========================= */

/* FAQ Toggle */
const faqs = document.querySelectorAll(".faqbox");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

/* Email Validation */
const buttons = document.querySelectorAll(".btn3");
const inputs = document.querySelectorAll("input[type='text']");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const email = inputs[index].value.trim();

    if (email === "") {
      alert("Please enter your email address");
    } 
    else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
    } 
    else {
      alert("Welcome to Netflix 🎬");
      inputs[index].value = "";
    }
  });
});

/* Navbar shadow on scroll */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.9)";
  } else {
    nav.style.background = "transparent";
  }
});
