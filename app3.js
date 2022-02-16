let slidePosition=0;
const Slides= document.getElementsByClassName('crousel_item')
const totalSlides= Slides.length
// Buttons refrences
console.log("Testng")
const PrevButton=document.getElementById('arrow_prev')
const NextButton=document.getElementById('arrow_next')

PrevButton.addEventListener('click',()=>{
    moveToPrevSlide();
})

NextButton.addEventListener('click',()=>{
    moveToNextSlide();
})
function updateSlidePosition(){
    for(let slide of Slides){
        console.log(slide)
        slide.classList.remove('crousel_item_visible')
        slide.classList.add('crousel_item_hidden')
    }
    Slides[slidePosition].classList.add('crousel_item_visible')
}

function moveToPrevSlide(){
    if(slidePosition===0){
        slidePosition=totalSlides-1
    }else{
        slidePosition--
    }
    updateSlidePosition();
}

function moveToNextSlide(){
    //For checking the slide at the last
    if(slidePosition===totalSlides-1){
        slidePosition=0
    }else{
        slidePosition++
    }
    updateSlidePosition();
}