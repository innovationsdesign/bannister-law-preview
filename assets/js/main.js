const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    if (answer) {
      answer.hidden = expanded;
    }
  });
});

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 300);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
