// Dummy product data
let products = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    if (productName && quantity && price) {
        const product = {
            name: productName,
            quantity: quantity,
            price: price
        };

        products.push(product);
        displayProducts();
        clearForm();
    } else {
        alert('Please fill in all fields');
    }
}

function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<strong>${product.name}</strong> - Quantity: ${product.quantity}, Price: ${product.price}`;
        productsSection.appendChild(productDiv);
    });
}

function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
}

// You can enhance this script to handle user authentication, payment integration, and more.
