const products = [
    { id: 1, name: "Smartphone", price: 699, image: "https://raw.githubusercontent.com/YashwantSinghPayaal/Final-Project-and-Optimization/refs/heads/main/S2.webp" },
    { id: 2, name: "Headphones", price: 199, image: "https://raw.githubusercontent.com/YashwantSinghPayaal/Final-Project-and-Optimization/refs/heads/main/H2.webp" },
    { id: 3, name: "Watch", price: 299, image: "https://raw.githubusercontent.com/YashwantSinghPayaal/Final-Project-and-Optimization/refs/heads/main/W3.webp" },
    { id: 4, name: "Camera", price: 999, image: "https://raw.githubusercontent.com/YashwantSinghPayaal/Final-Project-and-Optimization/refs/heads/main/Camera4.webp" },
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });
    totalPrice.textContent = `Total: $${total}`;
}

window.onload = renderProducts;