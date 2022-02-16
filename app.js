const carouselSlide = document.querySelector('.carousel-slides');
const carouselImages = document.querySelectorAll('.carousel-slides img')

//Button
const prevBtn = document.querySelector('#arrow_prev')
const nextBtn = document.querySelector('#arrow_next')

//Counter
let counter= 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//Button Listeners
 
nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform ='translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform ='translateX(' + (-size * counter) + 'px)';

});

//Sliding Transitions
carouselSlide.addEventListener('transitionend',()=>{
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition="none";
        counter = carouselImages.length-2;
        carouselSlide.style.transform ='translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition="none";
        counter = carouselImages.length-counter;
        carouselSlide.style.transform ='translateX(' + (-size * counter) + 'px)';
    }
})