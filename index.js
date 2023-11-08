//! Project Slider 1 
const slidesProject1 = document.querySelectorAll('.slide-1')
const btnNext1 = document.querySelector('#next-slider-1')
const btnPrev1 = document.querySelector('#prev-slider-1')
let counter1 = 1

slidesProject1.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`
})


const next1 = () => { 
    if(counter1 === 0){
        counter1 = -2
    } else {
        counter1++
    }
    slideImage()
}

const previous1 = () => { 
   if(counter1 === -2){
    counter1 = 0
    } else {
        counter1--
    }
    slideImage()
}

const slideImage = () => { 
    slidesProject1.forEach((slide) =>{
        slide.style.transform =`translateX(${counter1 * 100}%)`
    })
}

btnNext1.addEventListener('click', next1)
btnPrev1.addEventListener('click', previous1)


//! Project Slider 2 
const slidesProject2 = document.querySelectorAll('.slide-2')
const btnNext2 = document.querySelector('#next-slider-2')
const btnPrev2 = document.querySelector('#prev-slider-2')
let counter2 = 1

slidesProject2.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`
})


const next2 = () => { 
    if(counter2 === 0){
        counter2 = -2
    } else {
        counter2++
    }
    slideImage2()
}

const previous2 = () => { 
   if(counter2 === -2){
    counter2 = 0
    } else {
        counter2--
    }
    slideImage2()
}

const slideImage2 = () => { 
    slidesProject2.forEach((slide) =>{
        slide.style.transform =`translateX(${counter2 * 100}%)`
    })
}

btnNext2.addEventListener('click', next2)
btnPrev2.addEventListener('click', previous2)


//! Project Slider 3 
const slidesProject3 = document.querySelectorAll('.slide-3')
const btnNext3 = document.querySelector('#next-slider-3')
const btnPrev3 = document.querySelector('#prev-slider-3')
let counter3 = 1

slidesProject3.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`
})


const next3 = () => { 
    if(counter3 === 0){
        counter3 = -2
    } else {
        counter3++
    }
    slideImage3()
}

const previous3 = () => { 
   if(counter3 === -2){
    counter3 = 0
    } else {
        counter3--
    }
    slideImage3()
}

const slideImage3 = () => { 
    slidesProject3.forEach((slide) =>{
        slide.style.transform =`translateX(${counter3 * 100}%)`
    })
}

btnNext3.addEventListener('click', next3)
btnPrev3.addEventListener('click', previous3)
