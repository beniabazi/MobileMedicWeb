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

/* ======== Pop Up Quote Selector ================= */
/* 
var countryStateCityinfo = {
  Phone: {
    "Apple": {
      "iPhone X": ["AfterMarket(Soft OLED) Screen = $169",
        "Back Glass = $99",
        "Battery Replacement = $99",
        "Back Camera = $149",
        "Charging Port = $119"],

      "iPhon_XS": ["AfterMarket(Soft OLED) Screen = $169",
        "Back Glass = $99",
        "Battery Replacement = $99",
        "Back Camera = $149",
        "Charging Port = $119"],
     
      iPhone_15_Pro_MAX: ["6429", "6432"]
    },
    Samsung: {
      Hobart: ["7000", "7520"],
      Burnie: ["7320", "7315"]
    },
  },




  Tablet: {
    Bavaria: {
      Munich: ["80331", "80333", "80335"],
      Numemberg: ["90402", "90403", "90404"]
    }
  }


}

window.onload = function(){
  const selectCountry = document.getElementById('country'),
  selectState = document.getElementById('state'),
  selectCity = document.getElementById('city'),
  selectZip = document.getElementById('zip'),
  selects = document.querySelectorAll('select')

  selectState.disabled = true
  selectCity.disabled = true
  selectZip.disabled = true

  selects.forEach(select => {
    if(select.disabled == true){
      select.style.cursor = "auto"
    }
    else{
      select.style.cursor = "pointer"
    }
  })


  //drop down functions
for(let country in countryStateCityinfo){
  /* console.log(country); */
 /*  selectCountry.options[selectCountry.options.length] = new Option(country, country)
}

//country change
selectCountry.onchange = (e) =>{
  selectState.disabled = false
  selectCity.disabled = true
  selectZip.disabled = true

  selects.forEach(select => {
    if(select.disabled == true){
      select.style.cursor = "auto"
    }
    else{
      select.style.cursor = "pointer"
    }
  })

  selectState.length = 1
  selectCity.length = 1
  selectZip.length = 1
  
  for(let state in countryStateCityinfo[e.target.value]){
    console.log(state);
    selectState.options[selectState.options.length] = new Option(state, state)
  }


}

//state change
selectState.onchange = (e) =>{
  selectCity.disabled = false
  selectZip.disabled = true

  selects.forEach(select => {
    if(select.disabled == true){
      select.style.cursor = "auto"
    }
    else{
      select.style.cursor = "pointer"
    }
  })

  selectCity.length = 1
  selectZip.length = 1

  for(let city in countryStateCityinfo[selectCountry.value][e.target.value]){
    console.log(city);
    selectCity.options[selectCity.options.length] = new Option(city, city)
  }
}

//city change
selectCity.onchange = (e) =>{
selectZip.disabled = false

selects.forEach(select => {
  if(select.disabled == true){
    select.style.cursor = "auto"
  }
  else{
    select.style.cursor = "pointer"
  }
})

selectZip.length = 1

let zips = countryStateCityinfo[selectCountry.value][selectState.value][e.target.value]

for(let i=0; i<zips.length; i++){
  selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
}
}

}

 */

/* ========= Email Script ============== */

 function sendEmail() {
            Email.send({
            Host: "smtp.elasticemail.com",
            Username : "admin@mobilemedic.au",
            Password : "2DD2EAFEC7C58CC0496DFD25A6261FBA8307",
            To : 'admin@mobilemedic.au',
            From : document.getElementById('email').value,
            Subject : "New Booking Request",
            Body : 'Name:' + document.getElementById('name').vaalue
               + '<br> Email:' + document.getElementById('email').value
               + '<br> Phone:' + document.getElementById('phone').value
               + '<br> Message:' + document.getElementById('message').value
               }).then(
               message => alert('Sent Successfully')
               );
         }

