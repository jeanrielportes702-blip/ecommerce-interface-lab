// Product Class + Data (REQUIRED again per file)
class Product {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const products = [
  new Product(1, "Wireless Headphones", 59.99, "img1.jpg"),
  new Product(2, "Smart Watch", 129.99, "img2.jpg"),
  new Product(3, "Bluetooth Speaker", 39.99, "img3.jpg"),
  new Product(4, "Gaming Mouse", 25.99, "img4.jpg"),
  new Product(5, "Mechanical Keyboard", 79.99, "img5.jpg"),
  new Product(6, "Laptop Stand", 19.99, "img6.jpg"),
  new Product(7, "USB-C Hub", 29.99, "img7.jpg"),
  new Product(8, "External SSD", 99.99, "img8.jpg"),
  new Product(9, "Webcam", 49.99, "img9.jpg"),
  new Product(10, "Desk Lamp", 34.99, "img10.jpg")
];

// Cart state
let cart = [];

// Event Delegation
document.body.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON' && event.target.dataset.id) {
    const id = parseInt(event.target.dataset.id);

    const product = products.find(p => p.id === id);

    cart.push({ ...product, quantity: 1 });

    renderCart();
  }
});

// Render Cart
const cartList = document.querySelector('.cart-items');
const totalDisplay = document.querySelector('.total');

function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement('li');

    const name = document.createElement('span');
    name.textContent = item.name;

    const qty = document.createElement('input');
    qty.type = "number";
    qty.value = item.quantity;
    qty.min = 0;

    qty.addEventListener('change', () => {
      const newQty = parseInt(qty.value);

      if (newQty === 0) {
        cart = cart.filter((_, i) => i !== index);
      } else {
        cart[index].quantity = newQty;
      }

      renderCart();
    });

    li.appendChild(name);
    li.appendChild(qty);
    cartList.appendChild(li);
  });

  // Calculate total
  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}
