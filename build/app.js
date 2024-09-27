const productForm = document.querySelector("#productForm");
const productList = document.querySelector("#productList");
const nameInput = productForm.querySelector("#name");
const priceInput = productForm.querySelector("#price");
const typeInput = productForm.querySelector("#type");
const dateInput = productForm.querySelector("#date");
class Product {
    name;
    price;
    type;
    date;
    constructor(name, price, type, date) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.date = date;
    }
}
let products = JSON.parse(localStorage.getItem("products") || "[]");
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProduct = new Product(nameInput.value, priceInput.value, typeInput.value, dateInput.value);
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts(products);
});
const renderProducts = (productsToRender) => {
    productList.innerHTML = "";
    productsToRender.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("product-card");
        li.innerHTML = `
      <h3>${product.name}</h3>
      <span>Price: $${product.price}</span>
      <p>Type: ${product.type}</p> 
      <p>Sending Date: ${product.date}</p>
    `;
        productList.append(li);
    });
};
renderProducts(products);
