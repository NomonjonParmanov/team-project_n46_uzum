const productsRow = document.querySelector(".products-row");
const searchInput = document.querySelector(".search-input");
const totalProducts = document.querySelector(".total-products");

let search = "";

function getProductCard({ id, images, name, description, price }) {
  return `
    <div class="product-card">
    <div class="product-card-body">
      <img
        src="${images[0]}"
        alt="${name}"
      />
    </div>
    <div class="product-card-footer">
      <h3><a href="product.html">${name}</a></h3>
      <p><i>${description}</i></p>
      <p><i>${price}</i></p>
      <button onClick="addToCart(${id})"><b> Add to the card </b></button>
    </div>
  </div>
    `;
}

function getProducts() {
  let resutls = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );

  totalProducts.textContent = resutls.length;

  productsRow.innerHTML = "";
  if (resutls.length !== 0) {
    resutls.map((pr) => {
      productsRow.innerHTML += getProductCard(pr);
    });
  } else {
    productsRow.innerHTML = `<div>
    No product
    </div>`;
  }
}

getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});

function addToCart(id) {
  let product = products.find((pr) => pr.id === id);
  let check = cart.find((pr) => pr.id === id);

  if (check) {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartTotal();
}
