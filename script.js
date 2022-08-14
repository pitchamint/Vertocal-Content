const slideContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-content');
const sliderLeft = document.querySelector('.left-content');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');


const sliderLength = sliderRight.querySelectorAll('div').length;

let activeIndex = 0;

upButton.addEventListener('click',()=>changeImage("up"))
downButton.addEventListener('click',()=> changeImage("down"));

function changeImage(direction){
    const slideHeight = slideContainer.clientHeight;
    if(direction == "up"){
        activeIndex++;
        if(activeIndex>sliderLength-1){
            activeIndex = 0;
        }
    }else if(direction == "down"){
        activeIndex--;
        if(activeIndex<0){
            activeIndex = sliderLength-1;
        }
    }
    sliderLeft.style.transform = `translateY(-${activeIndex*slideHeight}px)`;
    sliderRight.style.transform = `translateY(-${activeIndex*slideHeight}px)`;
}

