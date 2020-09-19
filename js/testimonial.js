const testimonials = [
  {
    name: "Viezh, Robert",
    profile_pic_path: "media/people/person-1.svg",
    location: "Warsaw, Poland",
    rating: "4.5",
    message:
      "Wow... I am very happy with this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN is the best",
  },
  {
    name: "Yessica, Christy",
    profile_pic_path: "media/people/person-2.svg",
    location: "Shanxi, China",
    rating: "4.5",
    message:
      "I like it because I can connect with high speeds even when I travel far",
  },
  {
    name: "Kim Young, Jou",
    profile_pic_path: "media/people/person-3.svg",
    location: "Seoul, South Korea",
    rating: "4.5",
    message:
      "Great product to have for my business that currently requires a virtual private network that has high security",
  },
]

let testimonialItems = document.querySelector(".testimonial-items")
let itemLinks = document.querySelector(".item-links")

testimonials.forEach((testimonial, i) => {
  let testimonialItem = document.createElement("div")
  testimonialItem.className = `testimonial-item ${i === 0 ? "selected" : ""}`
  testimonialItem.innerHTML = `
    <div class="person-info-rating">
    <div class="person-info">
        <div class="person-icon-ctr">
        <img src="${testimonial.profile_pic_path}" />
        </div>
        <div class="person-info-text">
        <p class="person-name">${testimonial.name}</p>
        <p class="person-location">${testimonial.location}</p>
        </div>
    </div>
    <div class="person-rating">
        <p>${testimonial.rating}</p>
        <div class="rating-icon-ctr">
        <img src="media/rating-star.svg" />
        </div>
    </div>
    </div>
    <div class="person-testimonial">
    <p>"${testimonial.message}".</p>
    </div>
    `
  testimonialItems.appendChild(testimonialItem)

  let itemLink = document.createElement("div")
  itemLink.className = `item-link ${i === 0 && "selected"}`

  itemLinks.appendChild(itemLink)
})

let testimonialItemsList = document.querySelectorAll(".testimonial-item")
let itemLinkList = document.querySelectorAll(".item-link")
let selectedIndex = 0

function selectTestimonial(index) {
  testimonialItemsList[selectedIndex].classList.remove("selected")
  itemLinkList[selectedIndex].classList.remove("selected")

  selectedIndex = index

  let testimonialListItem = testimonialItemsList[selectedIndex]
  testimonialListItem.classList.add("selected")

  testimonialItems.scrollBy(
    testimonialListItem.offsetLeft -
      testimonialItems.offsetLeft -
      testimonialItems.scrollLeft,
    0
  )

  itemLinkList[selectedIndex].classList.add("selected")
}

itemLinkList.forEach((itemLink, i) => {
  itemLink.onclick = () => selectTestimonial(i)
})

document.querySelector(".slider-btn.right").onclick = () => {
  let index =
    selectedIndex === testimonialItemsList.length - 1 ? 0 : selectedIndex + 1
  selectTestimonial(index)
}

document.querySelector(".slider-btn.left").onclick = () => {
  let index =
    selectedIndex === 0 ? testimonialItemsList.length - 1 : selectedIndex - 1
  selectTestimonial(index)
}
