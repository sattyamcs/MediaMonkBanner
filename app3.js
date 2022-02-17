let slidePosition=0;  //Initialising slidePositions
const Slides= document.getElementsByClassName('crousel_item') //Images Refrenes
const totalSlides= Slides.length
// Buttons refrences
console.log("Testing Console")
const PrevButton=document.getElementById('arrow_prev')
const NextButton=document.getElementById('arrow_next')

//Adding event Listener to both buttons 
PrevButton.addEventListener('click',()=>{
    moveToPrevSlide();
})

NextButton.addEventListener('click',()=>{
    moveToNextSlide();
})
//Function for adding and removing the CSS visible and hidden class
function updateSlidePosition(){
    for(let slide of Slides){
        console.log(slide)
        slide.classList.remove('crousel_item_visible')
        slide.classList.add('crousel_item_hidden')
    }
    Slides[slidePosition].classList.add('crousel_item_visible')
}

//Defining function passed to buttons. 
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