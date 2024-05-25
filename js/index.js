/*código para el slider*/

/* const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex = slideIndex <= 0 ? slides.length - 1 : slideIndex - 1;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  slideIndex = slideIndex >= slides.length - 1 ? 0 : slideIndex + 1;
  updateSlidePosition();
});

function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  sliderContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}
 */

/*Código para el menú responsive*/

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",
  ()=>{nav.classList.add("visible");}
);

cerrar.addEventListener("click",
  ()=> {nav.classList.remove("visible");}
)