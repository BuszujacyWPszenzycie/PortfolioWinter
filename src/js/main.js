// Function for picture in About section

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

// Function for items in Portfolio

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

// COURSES - not used in final project, keep for future

// const section = document.querySelector('.courses')
// const line = document.querySelector('.resizable-line')
// const sectionHeight = section.offsetHeight

// window.addEventListener('scroll', function () {
// 	const coursesItems = document.querySelectorAll('.courses__item')
// 	const scrollPosition = window.scrollY + 500
// 	const sectionTop = section.offsetTop
// 	const sectionBottom = sectionTop + sectionHeight
// 	const scrollPercentage = Math.max(0, Math.min((scrollPosition - sectionTop) / sectionHeight, 1))
// 	const lineHeight = `${scrollPercentage * 100}%`
// 	coursesItems.forEach(item => {
// 		const itemPercenageHeight = item.offsetTop / sectionHeight

// 		if (itemPercenageHeight + 0.2 < scrollPercentage) {
// 			item.style.transform = 'translateX(0px)'
// 		} else {
// 			item.style.transform = 'translateX(-2000px)'
// 		}
// 	})

// 	line.style.height = lineHeight
// })
