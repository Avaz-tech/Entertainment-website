import "../styles/global.scss";

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
  logoImg.classList.add("logo");
  const logoText = document.createElement("span");
  logoText.textContent = "Uflicks";

  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);
  logoText.classList.add("logo-text");

  // Navigation
  const nav = document.createElement("nav");

  const menuList = document.createElement("ul");
  menuList.id = "menuitem";

  const menuItems = [
    { text: "Home", href: "index.html" },
    { text: "Movies", href: "movies.html" },
    { text: "Tv Shows", href: "tvshows.html" },
    { text: "Documentaries", href: "documentaries.html" },
    { text: "Contact", href: "contact.html" },
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
  const hamburgerIcon = document.createElement("i");
  hamburgerIcon.classList.add("fa", "fa-bars");

  // Subscribe section
  const subscribeDiv = document.createElement("div");
  subscribeDiv.classList.add("nav-toolbar", "subscribe", "flex");

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  searchContainer.innerHTML = `
      <input type="text" name="search" "search" class="search-input" placeholder="Search for movies..." />
      <i class="fas fa-search search-btn" />
    `;

  const userIcon = document.createElement("i");
  userIcon.id = "playbtn";
  userIcon.classList.add("fas", "fa-user");

  const subscribeBtn = document.createElement("button");
  subscribeBtn.classList.add("btn", "subscribe-btn");
  subscribeBtn.textContent = "SUBSCRIBE";

  subscribeDiv.appendChild(searchContainer);
  subscribeDiv.appendChild(userIcon);
  subscribeDiv.appendChild(subscribeBtn);
  subscribeDiv.appendChild(hamburgerIcon);

  const mobileNavContainer = document.createElement("div");
  mobileNavContainer.classList.add("mobile-menu-container");
  mobileNavContainer.classList.add("mobile-nav-closed");
  const mobileMenuHeader = document.createElement("div");
  mobileMenuHeader.classList.add("mob-menu-header");
  const cloneLogoContainer = logoContainer.cloneNode(true);
  mobileMenuHeader.appendChild(cloneLogoContainer);
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("close-icon", "fa", "fa-close");
  closeIcon.id = "close-icon-mobile-nav";
  mobileMenuHeader.appendChild(closeIcon);

  mobileNavContainer.appendChild(mobileMenuHeader);

  const clonedNav = nav.cloneNode(true);
  mobileNavContainer.appendChild(clonedNav);

  const mobileNavBackdrop = document.createElement("div");
  mobileNavBackdrop.classList.add("mobile-nav-backdrop");
  subscribeDiv.appendChild(mobileNavBackdrop);

  subscribeDiv.appendChild(mobileNavContainer);

  // Assemble the navbar
  navbarFlex.appendChild(logoContainer);
  navbarFlex.appendChild(nav);

  navbarFlex.appendChild(subscribeDiv);

  navbarContainer.appendChild(navbarFlex);

  // Add the navbar to the body
  const header = document.getElementById("header");
  header.innerHTML = navbarContainer.outerHTML;

  // Navbar links
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to handle click event on navbar links
  function handleNavClick(event) {
    // event.preventDefault();
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");

    localStorage.setItem("activeLink", this.getAttribute("href"));
  }

  // Add click event listener to each navbar link
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);

    const storedActiveLink = localStorage.getItem("activeLink");

    if (link.getAttribute("href") === storedActiveLink) {
      link.classList.add("active");
    }
  });

  const mobileNavBackdropInstance = document.querySelector(
    ".mobile-nav-backdrop"
  );
  const mobileNavContainerInstance = document.querySelector(
    ".mobile-menu-container"
  );

  const hamburgerIconInstance = document.querySelector(".fa-bars");

  hamburgerIconInstance.addEventListener("click", function () {
    mobileNavContainerInstance.classList.remove("mobile-nav-closed");
    mobileNavContainerInstance.classList.add("mobile-nav-open");
    mobileNavBackdropInstance.classList.add("visible");
  });
  // Add event listener to mobile nav close icon

  const closeIconMobileNav = document.getElementById("close-icon-mobile-nav");

  closeIconMobileNav.addEventListener("click", function () {
    mobileNavContainerInstance.classList.remove("mobile-nav-open");
    mobileNavBackdropInstance.classList.remove("visible");
    mobileNavContainerInstance.classList.add("mobile-nav-closed");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
