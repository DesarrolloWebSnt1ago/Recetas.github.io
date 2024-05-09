const header = document.querySelector("header");
const i = document.querySelector("i.fa-xmark");

i.addEventListener("mouseover", function () {
  const ul = document.querySelector("ul.categorias");
  ul.style.display = "none";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "white";
    header.style.transition = ".3s";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
