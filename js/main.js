// popover
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// gender select
let radioBtn1, radioBtn2, radioBtn3, genderSelect;

if (document.querySelector("#flexRadioDefault1") != null) {
  radioBtn1 = document.querySelector("#flexRadioDefault1");
  radioBtn1.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
}

if (document.querySelector("#flexRadioDefault2") != null) {
  radioBtn2 = document.querySelector("#flexRadioDefault2");
  radioBtn2.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
}

if (document.querySelector("#flexRadioDefault3") != null) {
  radioBtn3 = document.querySelector("#flexRadioDefault3");
  radioBtn3.addEventListener("change", () => {
    genderSelect.classList.remove("d-none");
  });
}

if (document.querySelector("#genderSelect") != null)
  genderSelect = document.querySelector("#genderSelect");

  // carsoul
  const myCarouselElement = document.querySelector("#carouselExampleControls");

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    touch: false,
  });