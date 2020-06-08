// theme toggle function, toggles through light and dark mode
(function () {
  let themeToggle = document.getElementById("theme-toggle");
  themeToggle.onclick = function (event) {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("data-theme", "light");
    }
  };
})();
