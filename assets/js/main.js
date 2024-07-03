/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER FAVORITES ===============*/
const swiperFavorites = new Swiper(".favorites__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(
  ".home__data, .favourites__containner, .footer__container, .home__buttons"
);
sr.reveal(".home__circle, .home__image", { delay: 600, scale: 0.5 });
sr.reveal(".care__img, .contact__img", { origin: "left" });
sr.reveal(".care__list, .contact__data", { origin: "right" });
sr.reveal(".banner__item", { interval: "100" });

/* ======== Pop Up Quote ================= */

const openQuoteButtons = document.querySelectorAll("[data-quote-target]");
const closeQuoteButtons = document.querySelectorAll("[data-close-button]");

const openRepairButtons = document.querySelectorAll("[data-quote-target]");
const closeRepairButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openQuoteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quote = document.querySelector(button.dataset.quoteTarget);
    openQuote(quote);
  });
});
closeQuoteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quote = button.closest(".quote");
    closeQuote(quote);
  });
});
openRepairButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const repair = document.querySelector(button.dataset.repairTarget);
    openRepair(repair);
  });
});
closeRepairButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const repair = button.closest(".repair");
    closeRepair(repair);
  });
});

overlay.addEventListener("click", () => {
  const quote = document.querySelectorAll(".quote.active");
  quote.forEach((quote) => {
    closeQuote(quote);
  });
});
overlay.addEventListener("click", () => {
  const repair = document.querySelectorAll(".repair.active");
  repair.forEach((repair) => {
    closeRepair(repair);
  });
});

function openQuote(quote) {
  if (quote == null) return;
  quote.classList.add("active");
  overlay.classList.add("active");
}
function closeQuote(quote) {
  if (quote == null) return;
  quote.classList.remove("active");
  overlay.classList.remove("active");
}
function openRepair(repair) {
  if (repair == null) return;
  repair.classList.add("active");
  overlay.classList.add("active");
}
function closeRepair(repair) {
  if (repair == null) return;
  repair.classList.remove("active");
  overlay.classList.remove("active");
}
