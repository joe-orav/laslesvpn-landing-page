let header = document.querySelector("header")

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    let element = document.querySelector(this.getAttribute("href"));
    window.scrollTo(0, element.offsetTop - header.clientHeight)

    if (window.innerWidth <= 1020) {
      bodyOverlay.classList.toggle("show")
      navMenu.classList.replace("show", "hide")
    }

  })
})
