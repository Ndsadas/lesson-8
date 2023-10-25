const products = []
let productCart = document.querySelectorAll('.cardInfo')

productCart.forEach((cards) => {
	let name = cards.querySelector('.cardTitle').innerText;
	let text = cards.querySelector('.cardText').innerText;
	let price = +cards.querySelector('.productPriseValue').innerText;

	products.push({
		name,
		text,
		price
	});
})