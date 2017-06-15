var showDropdown = false;
var menuItems = document.getElementsByClassName("menu-items")[0];

document
  .getElementsByClassName("hamburger")[0]
  .addEventListener("click", function() {
    if (showDropdown) {
      menuItems.style.display = "none";
      showDropdown = false;
    } else {
      menuItems.style.display = "block";
      showDropdown = true;
    }
  });
