const divMenu = document.getElementById("div-menu"),
  closeNav = document.getElementById("nav-close"),
  toggleNav = document.getElementById("toggle-nav"),
  navLinks = document.querySelectorAll(".nav-link");

toggleNav.addEventListener("click", function () {
  divMenu.classList.add("show-menu");
  closeNav.style.display = "block";
});
closeNav.addEventListener("click", function () {
  divMenu.classList.remove("show-menu");
  closeNav.style.display = "";
});

const linksList = () => {
  divMenu.classList.remove("show-menu");
  closeNav.style.display = "";
};

navLinks.forEach((n) => n.addEventListener("click", linksList));

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home-infos,.footer-container,.footer-group`);
sr.reveal(`.home-img`, { origin: "bottom", delay: 700 });
sr.reveal(`.logo-img, .program-card, .pricing-card`, { interval: 100 });
sr.reveal(`.choose-img,.calculate-content`, { origin: "left" });
sr.reveal(`.choose-content,.calculate-img`, { origin: "right" });

const showScroll = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", showScroll);

const calculateCm = document.getElementById("calculate-cm"),
  calculateKg = document.getElementById("calculate-kg"),
  calculateMessage = document.getElementById("calculate-message"),
  calculateForm = document.getElementById("calculate-form"),
  calculateButton = document.querySelector("calculate-button");

const calculateBmi = (e) => {
  e.preventDefault();
  if (calculateCm.value == "" || calculateKg.value == "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    calculateMessage.textContent = "Fill in the height and the weight";
  } else {
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const Bmi = Math.round(kg / (cm * cm));
    if (Bmi < 18.5) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `your Bmi is ${Bmi} and you are skinny !`;
    } else if (Bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `your Bmi is ${Bmi} and you are healthy !`;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `your Bmi is ${Bmi} and you are overweight!`;
    }
  }
  setTimeout(() => {
    calculateMessage.textContent = "";
  }, 2000);
};
calculateForm.addEventListener("submit", calculateBmi);

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();
  if (contactUser.value == "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "you have to enter your email";
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  }
  // emailjs.sendForm(serviceID, templateID, templateParams, publicKey);
  emailjs
    .sendForm(
      "service_y2l6wys",
      "template_vg9r6ld",
      "#contact-form",
      "Tsj0IYpPfm7QRYrya"
    )
    .then(
      () => {
        // show message and add color
        contactMessage.classList.add("color-green");
        contactMessage.textContent = "You registered successfully";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      },
      (error) => {
        alert("OOPS, something went wrong ...", error);
      }
    );
  contactUser.value = "";
};
contactForm.addEventListener("submit", sendEmail);

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".div-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
