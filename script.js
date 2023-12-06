const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); 

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%) `
}


function goToSlide(index) { 
    currentIndex = index; 
    showSlide(currentIndex); 
    updateDots(); 
} 


function goToNextSlide() {
    currentIndex = (currentIndex +1) % slides.length;
    showSlide(currentIndex)
    updateDots();
}
function goToPrevSlide() {
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex)
    updateDots();
}
function updateDots() { 
    dots.forEach((dot, index) => { 
        dot.classList.toggle("active", index === currentIndex); 
    }); 
} 
prevButton.addEventListener('click', goToPrevSlide)
nextButton.addEventListener('click', goToNextSlide)
dots.forEach((dot, index) => { 
    dot.addEventListener("click", () => { 
        goToSlide(index); 
    }); 
}); 
showSlide(currentIndex);
updateDots(); 

document.querySelectorAll(".mainmain").forEach(parallaxWrap =>
    parallaxWrap.addEventListener("mousemove", ({ clientX, clientY }) => {
      parallaxWrap.style.setProperty("--x", clientX);
      parallaxWrap.style.setProperty("--y", clientY);
    }),
  );


  function toggleBurgerMenu() {
    var navLeftUl = document.querySelector('.nav__left_ul');
    navLeftUl.style.display = (navLeftUl.style.display === 'none' || navLeftUl.style.display === '') ? 'block' : 'none';
  }