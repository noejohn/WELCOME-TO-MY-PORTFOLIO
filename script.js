function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  const darkModeToggle = document.getElementById("darkModeToggle");

  darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
  