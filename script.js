let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = document.getElementById('cart-count');
  if (count) count.textContent = cart.length;
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');

  if (!cartItems) return;

  cartItems.innerHTML = '';
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + " - $" + item.price;
    cartItems.appendChild(li);
    sum += item.price;
  });

  total.textContent = sum;
}

updateCartCount();
displayCart();