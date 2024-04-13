document.addEventListener("DOMContentLoaded", function () {
  // Navbar container
  const navbarContainer = document.createElement("div");
  navbarContainer.classList.add("container");

  // Navbar flex container
  const navbarFlex = document.createElement("div");
  navbarFlex.classList.add("navbar-flex");

  // Logo container
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logoImg = document.createElement("img");
  logoImg.src = ""; // Add your logo source here
  logoImg.alt = "Logo";

  logoContainer.appendChild(logoImg);

  // Navigation
  const nav = document.createElement("nav");

  const menuList = document.createElement("ul");
  menuList.id = "menuitem";

  const menuItems = [
    { text: "Home", href: "index.html" },
    { text: "Movies", href: "movies.html" },
    { text: "Tv Shows", href: "dramas.html" },
    { text: "Video", href: "contact.html" },
    { text: "Account", href: "premium.html" },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("nav-link");
    link.href = item.href;
    link.textContent = item.text;
    menuItem.appendChild(link);
    menuList.appendChild(menuItem);
  });

  nav.appendChild(menuList);

  // Hamburger icon
  const hamburgerIcon = document.createElement("span");
  hamburgerIcon.classList.add("fa", "fa-bars");

  // Subscribe section
  const subscribeDiv = document.createElement("div");
  subscribeDiv.classList.add("subscribe", "flex");

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fas", "fa-search");

  const userIcon = document.createElement("i");
  userIcon.id = "palybtn"; // assuming this is a typo and should be "playbtn" instead of "palybtn"
  userIcon.classList.add("fas", "fa-user");

  const subscribeBtn = document.createElement("button");
  subscribeBtn.textContent = "SUBSCRIBE";

  subscribeDiv.appendChild(searchIcon);
  subscribeDiv.appendChild(userIcon);
  subscribeDiv.appendChild(subscribeBtn);

  // Assemble the navbar
  navbarFlex.appendChild(logoContainer);
  navbarFlex.appendChild(nav);
  navbarFlex.appendChild(hamburgerIcon);
  navbarFlex.appendChild(subscribeDiv);

  navbarContainer.appendChild(navbarFlex);

  // Add the navbar to the body
  const header = document.getElementById("header");
  header.innerHTML = navbarContainer.outerHTML;

  // Navbar links
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to handle click event on navbar links
  function handleNavClick(event) {
    console.log("Click me");
    // Remove 'active' class from all navbar links
    navLinks.forEach((link) => link.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");
  }

  // Add click event listener to each navbar link
  navLinks.forEach((link) => link.addEventListener("click", handleNavClick));
});
