// Product Class
class Product {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

// Product Data (10 items)
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

// Select container
const productContainer = document.querySelector('.product-grid');

// Render products
products.forEach(product => {
  const card = document.createElement('article');

  const img = document.createElement('img');
  img.src = product.image;

  const title = document.createElement('h3');
  title.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = `$${product.price}`;

  const button = document.createElement('button');
  button.textContent = "Add to Cart";
  button.setAttribute('data-id', product.id);

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(button);

  productContainer.appendChild(card);
});
