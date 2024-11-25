// Counter for cart items
function updateCartCounter() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.getElementById('cart-counter');
  cartCounter.textContent = cart.length;
}

// Call the function when the page loads to update the counter
window.addEventListener('DOMContentLoaded', updateCartCounter);
