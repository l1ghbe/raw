const text1 = document.querySelector('.title-text-1'),
      text2 = document.querySelector('.title-text-2'),
      text3 = document.querySelector('.title-text-3')

const links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
    })
})
const images = document.querySelectorAll('.image-parallax')
const cursor = document.querySelector('.cursor')


let cursorEvents = {
    x: 0,
    y: 0
}

document.addEventListener('mousemove', e => {
    cursorEvents.x = e.clientX 
    cursorEvents.y = e.clientY
    
    cursor.style.transform = `translate(${cursorEvents.x}px, ${cursorEvents.y}px)`
})

window.addEventListener('mousemove', e => {
    

    images.forEach(image => {
        let movingValue = image.getAttribute('data-speed')
        let x = e.clientX * movingValue / 250
        let y = e.clientY * movingValue / 250
        if (window.innerWidth > 978) {
            image.style.transform = `translate(${x}px, ${y}px)`

        }        
    })
    
    
})

const tlText = gsap.timeline({defaults: {duration: 1, ease: 'Bounce.easeOut'}})

window.addEventListener('load', () => {
    tlText.from(text1, { scale: 0, delay: .4 })
        .from(text2, { scale: 0 })
        .from(text3, { scale: 0 })

    gsap.from('.logo', {
        duration: 1,
        opacity: 0,
        y: -150,
        delay: 3
    })
    gsap.from('.navigation-item', {
        duration: 1.5,
        opacity: 0,
        y: -150,
        stagger: .1,
        delay: 3.1
    })
    gsap.from('.main-links', {
        duration: 1,
        y: '100%',
        delay: 3.5,
        ease: 'easeOut',

    })
    if (window.innerHeight < 642) {
        gsap.from('.main-links', {
            duration: 1,
            x: '-150%',
            delay: 3.5,
            ease: 'easeOut',

        })
    }
    gsap.from('.main-description-text', {
        duration: 1,
        x: -150,
        delay: 3.6,
        opacity: 0
    })
    gsap.from('.image-parallax', {
        duration: 1,
        opacity: 0,
        delay: 4,
        stagger: 0.3,
        y: 50
    })
})

// gsap.from('.logo', {
//     duration: 1,
//     opacity: 0,
//     y: -150,
//     delay: 3
// })
// gsap.from('.navigation-item', {
//     duration: 1.5,
//     opacity: 0,
//     y: -150,
//     stagger: .1,
//     delay: 3.1
// })
// gsap.from('.main-links', {
//     duration: 1,
//     y: '100%',
//     delay: 3.5,
//     ease: 'easeOut',

// })
// if (window.innerHeight < 642) {
//     gsap.from('.main-links', {
//         duration: 1,
//         x: '-150%',
//         delay: 3.5,
//         ease: 'easeOut',

//     })
// }
// gsap.from('.main-description-text', {
//     duration: 1,
//     x: -150,
//     delay: 3.6,
//     opacity: 0
// })
// gsap.from('.image-parallax', {
//     duration: 1,
//     opacity: 0,
//     delay: 4,
//     stagger: 0.3,
//     y: 50
// })
        
if (window.innerWidth < 768) {
    document.querySelector('.cursor').classList.display = 'none'
    
}