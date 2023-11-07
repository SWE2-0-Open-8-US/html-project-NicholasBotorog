const slides = document.querySelectorAll('.slide')
const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')

let counter = 0 

slides.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`
})

const next = () => { 
    counter++ 
    slideImage()
}

const previous = () => { 
    counter--
    slideImage()
}

const slideImage = () => { 
    slides.forEach((slide) =>{
        slide.style.transform =`translateX(${counter * 100}%)`
    })
}

// setInterval(slideImage, 1000)


btnNext.addEventListener('click', next)
btnPrev.addEventListener('click', previous)