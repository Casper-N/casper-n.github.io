document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => setActiveNav(link));
  });
});

const setActiveNav = (link) => {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));
  console.log("Setting active: ", link);
  link.classList.add("active");
};
