// Subscribe feature (Footer) with input validation
document.querySelectorAll('.subscribe-button').forEach((button) => {
  button.addEventListener('click', () => {
    const email = document.getElementById('subscribe-email').value;

    if (email === '') {
      alert('Please enter your email address.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for subscribing');
    }
  });
});

// Function to validate email format using a regex
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Add to Cart functionality (Gallery Page)
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const itemName = event.target.dataset.item;
    addToCart(itemName);
  });
});

function addToCart(itemName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(itemName);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${itemName} has been added to the cart`);
}

// View Cart functionality (Gallery Page)
document.getElementById('view-cart').addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length > 0) {
    alert(`Items in your cart: \n${cart.join(', ')}`);
  } else {
    alert('Your cart is empty.');
  }
});

// Clear Cart functionality (Gallery Page)
document.getElementById('clear-cart').addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length > 0) {
    localStorage.removeItem('cart');
    alert('Cart cleared');
  } else {
    alert('No items to clear');
  }
});

// Process Order functionality (Gallery Page)
document.getElementById('process-order').addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length > 0) {
    localStorage.removeItem('cart');
    alert('Thank you for your order');
  } else {
    alert('Cart is empty');
  }
});

// Form submission feature with validation (About Us/Contact Page)
document
  .getElementById('feedback-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Check for empty fields and invalid input
    let validationPassed = true; // Track whether the validation passes

    // Validate all fields
    if (name === '') {
      alert('Please enter your name.');
      validationPassed = false; // Validation failed
    }
    if (phone === '') {
      alert('Please enter your phone number.');
      validationPassed = false; // Validation failed
    } else if (!validatePhone(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      validationPassed = false; // Validation failed
    }
    if (email === '') {
      alert('Please enter your email address.');
      validationPassed = false; // Validation failed
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      validationPassed = false; // Validation failed
    }
    if (feedback === '') {
      alert('Please provide your feedback.');
      validationPassed = false; // Validation failed
    }

    // If all fields are valid, show the thank you message
    if (validationPassed) {
      alert('Thank you for your message!');

      // Optionally store feedback in session storage (can be removed if not needed)
      sessionStorage.setItem(
        'feedback',
        JSON.stringify({ name, phone, email, feedback })
      );

      // Reset the form if needed
      document.getElementById('feedback-form').reset();
    }
  });

// Function to validate phone format (simple format validation)
function validatePhone(phone) {
  const re = /^[0-9]{10}$/; // Example validation for 10-digit phone number
  return re.test(String(phone));
}

// Function to validate email format using a regex
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
