let total = 0;

function addToCart(name, price) {
const cartList = document.getElementById('cartList');
const totalDisplay = document.getElementById('total');

const li = document.createElement('li');
li.textContent = `${name} - $${price}`;
cartList.appendChild(li);

total += price;
totalDisplay.textContent = total;
}