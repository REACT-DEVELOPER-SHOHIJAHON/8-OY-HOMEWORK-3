const productForm = document.querySelector("#productForm") as HTMLFormElement;
const productList = document.querySelector("#productList") as HTMLUListElement;
const nameInput = productForm.querySelector("#name") as HTMLInputElement;
const priceInput = productForm.querySelector("#price") as HTMLInputElement;
const typeInput = productForm.querySelector("#type") as HTMLInputElement;
const dateInput = productForm.querySelector("#date") as HTMLInputElement;

class Product {
  name: string;
  price: string;
  type: string;
  date: string;
  
  constructor(name: string, price: string, type: string, date: string) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.date = date;
  }
}

let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newProduct = new Product(
    nameInput.value,
    priceInput.value,
    typeInput.value,
    dateInput.value,
  );

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  renderProducts(products);
});

const renderProducts = (productsToRender: Product[]) => {
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



