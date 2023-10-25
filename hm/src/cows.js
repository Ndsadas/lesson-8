'use strict'

const productButton = document.querySelectorAll('.productButton')

productButton.forEach((button) => {
	button.addEventListener('click', getProductId)
})

function getProductId(event) {
	const productId = event.currentTarget.id
	addProductInBasket(productId)
}	