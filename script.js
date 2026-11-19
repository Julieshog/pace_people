// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");
const svg = document.querySelector(".svg");

const cof = document.querySelector("#details-cof");
const bun = document.querySelector("#details-bun");
const t = document.querySelector("#details-t");

if (svg && cof && bun && t) {
  cof.addEventListener("toggle", updateSvgPosition);
  bun.addEventListener("toggle", updateSvgPosition);
  t.addEventListener("toggle", updateSvgPosition);
  updateSvgPosition();
}

function updateSvgPosition() {
  console.log("updateSvgPosition");
  const openDetails = document.querySelector(".accordion-item details[open]");

  if (openDetails) {
    /*  console.log(openDetails.dataset.position); */

    svg.dataset.position = openDetails.dataset.position;
  } else {
    delete svg.dataset.position;
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
