new Glide('.glide', {
    type: 'carousel',
	perView: 2,
	breakpoints: {
		799: {
			perView: 1
		}
	},
    startAt: 0,
    autoplay: false,
    perTouch: 1,
    gap: 20,
    touchDistance: 1,
}).mount()


const dots = document.querySelectorAll('.dot')
if(window.innerWidth < 800) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            if(!dot.nextElementSibling.classList.contains('active')) {
                dot.nextElementSibling.classList.add('active')
            } else {
                dot.nextElementSibling.classList.remove('active')
            }
        })
    })
} else {
    dots.forEach(dot => {
        dot.addEventListener('mouseenter', () => {
            dot.nextElementSibling.classList.add('active')
        })
        dot.nextElementSibling.addEventListener('mouseover', () => {
            dot.nextElementSibling.classList.add('active')
        })
        dot.nextElementSibling.addEventListener('mouseleave', () => {
            dot.nextElementSibling.classList.remove('active')
        })
        dot.addEventListener('mouseleave', () => {
            dot.nextElementSibling.classList.remove('active')
        })
    })
}

const slideOff = document.querySelectorAll('#puppies .animate-slide-off')
const zoomIn = document.querySelectorAll('#puppies .animate-zoom-in')

const elementsToObserve = [...slideOff, ...zoomIn]
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('animate-slide-off')) {
            window.innerWidth > 800 ? slideIn(entry.target) : zoom(entry.target)
            // slideIn(entry.target)
        } else if (entry.isIntersecting && entry.target.classList.contains('animate-zoom-in')){
            // window.innerWidth > 800 ? zoom(entry.target) : ''
            zoom(entry.target)
        }
    })
},
{ 
    threshold: 0.5
})

const slideIn = (target) => {
    target.querySelector('.foto').style.transform = 'translate(30px, 0)'
    target.querySelector('.text_wrapper').style.transform = 'translate(-30px, 0)'
}
const slideOut = (target) => {
    target.querySelector('.foto').style.transform = 'translate(-30px, 0)'
    target.querySelector('.text_wrapper').style.transform = 'translate(30px, 0)'
}
const zoom = (target) => {
    target.querySelector('img').style.transform = 'scale(1.1)'
}
elementsToObserve.forEach(element => {
    observer.observe(element)
})
