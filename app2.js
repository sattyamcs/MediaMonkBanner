let slidePosition=0;
const numSlides= document.getElementsByClassName('slide')
const totalSlides= numSlides.length
// Buttons refrences
console.log("Testng")
const PrevButton=document.querySelector('#arrow_prev')
const NextButton=document.getElementById('arrow_next')

PrevButton.addEventListener('click',()=>{
    moveToPrevSlide();
})

NextButton.addEventListener('click',()=>{
    moveToNextSlide();
})
function updateSlidePosition(){
    for(let slide of numSlides){
        slide.classList.remove('crousel_item_visible')
        slide.classList.add('crousel_item_hidden')
    }
    numSlides[slidePosition].classList.add('crousel_item_visible')
}

function moveToPrevSlide(){
    if(slidePosition===0){
        slidePosition=0
    }else{
        slidePosition--
    }
    updateSlidePosition();
}

function moveToNextSlide(){
    //For checking the slide at the last
    if(slidePosition===totalSlides){
        slidePosition=0
    }else{
        slidePosition++
    }
    updateSlidePosition();
}