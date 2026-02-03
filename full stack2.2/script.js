const products = [
    { name: "Wireless Headphones", price: "$129.99", category: "electronics" },
    { name: "Cotton T-Shirt", price: "$24.99", category: "clothing" },
    { name: "Bluetooth Speaker", price: "$89.99", category: "electronics" },
    { name: "Denim Jeans", price: "$59.99", category: "clothing" }
];

const productContainer = document.getElementById("products");
const categorySelect = document.getElementById("category");

function displayProducts(filter) {
    productContainer.innerHTML = "";

    const filteredProducts = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
            <span class="tag ${product.category}">
                ${product.category}
            </span>
        `;

        productContainer.appendChild(card);
    });
}

categorySelect.addEventListener("change", () => {
    displayProducts(categorySelect.value);
});

// Initial load
displayProducts("all");
