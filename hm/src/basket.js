'use strict'

const extValueEl = document.querySelector('.extValueElem');
const extIconBasket = document.querySelector('.extIconWrap');
const basketInfo = document.querySelector('.basketInfo');
const basketTotalPriceInBasket = document.querySelector('.basketTotal');



let basket = {};
function addProductInObject(productId) {
	if(!(productId in basket)) {
		basket[productId] = 1
	} else {
		basket[productId]++
	}
}

function addProductInBasket(productId) {
	basketValue()
	addProductInObject(productId)
	renderProductInBasket(productId)
	addInBasketTotalPrice()
}

function basketValue() {
	extValueEl.textContent++
}

extIconBasket.addEventListener('click', openOrCloseBasket)
function openOrCloseBasket() {
	document.querySelector('.basket').classList.toggle('hidden')
}

function markupBasketElem(productId) {
 let markupEl =  `
 <div class="basketRow">
 <div>${products[productId].name}</div>
 <div class = "basketCount" data-productId = "${productId}">1</div>
 <div>${products[productId].price}</div>
 <div class = "basketTotalPrice" data-productId = "${productId}">${products[productId].price}</div>
</div>
 `
 basketInfo.insertAdjacentHTML('afterend', markupEl)
}

function renderProductInBasket(productId) {
	let productExit = document.querySelector(`.basketCount[data-productId="${productId}"]`);
	if(productExit){
		basketCountValue(productExit)
		basketTotalPriceValue(productId)
	} else {
		markupBasketElem(productId)
		
	}
}

function basketCountValue(productExit) {
	productExit.textContent++
}

function basketTotalPriceValue(productId) {
	const totalPriceInBasket = document.querySelector(`.basketTotalPrice[data-productId ="${productId}"]`)
	let totalPrice = (basket[productId] * products[productId].price).toFixed(2);
	totalPriceInBasket.textContent = totalPrice
}

function addInBasketTotalPrice() {
	let totalSum = 0;
	for( let productId in basket) {
		totalSum += (basket[productId] * products[productId].price)
	}
	basketTotalPriceInBasket.textContent = 'Итого: ' + 	totalSum.toFixed(2)
}




