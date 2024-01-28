// function getScrollPosition() {
// 	var scrollPosition = window.scrollY || window.pageYOffset
// 	console.log('Scroll Position:', scrollPosition, 'pixels from the top')
// }

window.addEventListener('scroll', function () {
	let scrollValue = window.scrollY
	const aboutImg = document.querySelector('.about__img')
	let scaleValue = 0.9 + scrollValue / 3000
	if (parseFloat(scaleValue) > 1.1) {
		aboutImg.style.transform = 'scale(1.1)'
	} else {
		aboutImg.style.transform = 'scale(' + scaleValue + ')'
	}
})

// PORTFOLIO

window.addEventListener('scroll', function () {
	const allPortfolioItems = document.querySelectorAll('.portfolio__item')
	let scrollValue = window.scrollY
	let scaleValue = 0.5 + scrollValue / 5000
	let opacityValue = 0.5 + scrollValue / 7000
	allPortfolioItems.forEach(item => {
		if (parseFloat(scaleValue) > 1.1) {
			item.style.transform = 'scale(1.1)'
		} else {
			item.style.transform = 'scale(' + scaleValue + ')'
		}
		item.style.opacity = opacityValue
	})
})

// COURSES

const coursesItems = document.querySelectorAll('.courses__item')

window.addEventListener('scroll', checkItems)

checkItems()

function checkItems() {
	const triggerBottom = (window.innerHeight / 5) * 4

	coursesItems.forEach(course => {
		const boxTop = course.getBoundingClientRect().top

		if (boxTop < triggerBottom) {
			course.classList.add('show')
		} else {
			course.classList.remove('show')
		}
	})
}

// DIV FROM THE TOP
// const bg = document.querySelector('.opening')

// function setTopDivPosition() {
// 	let scrollPosition = window.scrollY
// 	bg.style.top = scrollPosition + 'px'
// 	console.log(bg.style.top)
// }

// setTopDivPosition()

// LOADING PAGE

const loadText = document.querySelector('.opening__counter')
const bg = document.querySelector('.opening')
const body = document.querySelector('body')
const pageWrapper = document.querySelector('.page__wrapper')
const footer = document.querySelector('.footer')

let load = 0

let int = setInterval(shadowFunction, 30)

function shadowFunction() {
	let scrollPosition = window.scrollY
	bg.style.top = scrollPosition + 'px'

	load++

	if (load > 99) {
		clearInterval(int)
		body.style.overflow = 'visible'
		body.style.overflowX = 'hidden'
		pageWrapper.style.display = 'block'
		bg.style.display = 'none'
	}

	loadText.innerText = `${load}%`
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
	pageWrapper.style.opacity = scale(load, 0, 100, 0, 1)
	footer.style.opacity = scale(load, 0, 100, 0, 1)
	// bg.style.backgroundColor = `blur(${scale(load, 0, 100, 30, 0)}px)`
	bg.style.backgroundColor = `rgba(0,0,0,${scale(load, 0, 100, 0.99, 0)})`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
