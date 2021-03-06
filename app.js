const menuChoice = document.querySelectorAll('.menu_choice')
const menu = document.querySelector('.menu')
const menuBox = document.querySelector('.menu_box')
const pause_block = document.querySelector('.pause_block')
const real_age = document.querySelector('.real_age')
const choice = document.querySelectorAll('.choice')
const blocksQuestions = document.querySelectorAll('.real_age__boxes')
const conslusion = document.querySelector('.conslusion_btn')
const result = document.querySelector('.result')

let menu_count = false

menu.addEventListener('click', () => {
	if (window.screen.width <= 480) {
		if (menu_count == false) {
			menuBox.style.display = 'block'
			menu_count = true
		} else {
			menuBox.style.display = 'none'
			menu_count = false
		}
		
	}
})

menuChoice.forEach(item => {
	item.addEventListener('click', () => {
			if (item.dataset.menu == 'age') {
				pause_block.style.display = 'none'
				real_age.style.display = 'block'
				toGuessAge()
			}
	})
})

function toGuessAge() {
	let count = 0
	let pos = 0
	blocksQuestions.forEach( item => {
		item.addEventListener('click', (event) => {
			if (event.target.classList.contains('choice')) {
				if ( item.classList.contains('used')) {
					return
				} else {
					event.target.classList.add('selected')
					count = count + +event.target.dataset.count
					console.log(count)
					item.classList.add('used')
					pos++
				}
			}
		})
	})

	conslusion.addEventListener('click', () => {
		if ( pos == 6) {
			result.style.display = 'flex'
			result.textContent= `Ваш реальный возраст -  ${count}`
		}
	})
}

