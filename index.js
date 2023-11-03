const slide = document.querySelectorAll('.slide')
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')

let count = 0 

slide.forEach((slide, index)=>{
    slide.computedStyleMap.left = `${index * 100}%`
})

const next = () => { 
    counter++ 
    slideContent()
}

const previous = () => { 
    counter--
    slideContent()
}

const slideContent = () => { 
    slides.forEach(slide =>{
        slide.style.transform =`transalteX(-${counter * 100}%)`
    })
}

// btnNext.addEventListener('click', next)
// btnPrev.addEventListener('click', previous)