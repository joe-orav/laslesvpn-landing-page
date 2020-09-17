let navTogglerBtn = document.querySelector("#nav-toggler-btn")
let loginTogglerBtn = document.querySelector("#login-toggler-btn")
let bodyOverlay = document.querySelector(".body-overlay")
let navMenu = document.querySelector("nav")
let loginMenu = document.querySelector(".header-sign-btns")

function toggleMenu(menu) {
  if (!menu.classList.contains("show") && !menu.classList.contains("hide")) {
    menu.classList.add("show")
  } else if (menu.classList.contains("show")) {
    menu.classList.replace("show", "hide")
  } else {
    menu.classList.replace("hide", "show")
  }
  bodyOverlay.classList.toggle("show")
}

navTogglerBtn.onclick = () => {
  if (loginMenu.classList.contains("show")) toggleMenu(loginMenu)
  toggleMenu(navMenu)
}

loginTogglerBtn.onclick = () => {
  if (navMenu.classList.contains("show")) toggleMenu(navMenu)
  toggleMenu(loginMenu)
}

bodyOverlay.onclick = () => {
  bodyOverlay.classList.remove("show")
  navMenu.classList.replace("show", "hide")
  loginMenu.classList.replace("show", "hide")
}

window.onresize = () => {
  if (window.innerWidth >= 1020 && navMenu.classList.contains("show")) {
    bodyOverlay.classList.remove("show")
    navMenu.classList.remove("show")
  }

  if (window.innerWidth >= 600 && loginMenu.classList.contains("show")) {
    loginMenu.classList.remove("show")
    bodyOverlay.classList.remove("show")
  }
}