

new Glide('.glide', {
    type: 'carousel',
	perView: 2,
	breakpoints: {
		800: {
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
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        if(!dot.nextElementSibling.classList.contains('active')) {
            dot.nextElementSibling.classList.add('active')
        } else {
            dot.nextElementSibling.classList.remove('active')
        }
    })
})


