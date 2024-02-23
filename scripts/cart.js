const cartRow = document.querySelector(".cart-container");

function getCartCard({ id, images, name, price, description, quantity }) {
  return `
    <div class="cart-card">
        <div class="cart-card-img">
            <img src="${images[0]}" alt="${name}">
        </div>
        <div class="cart-card-content">
            <h3>${name}</h3>
            <h3>${price} $</h3>
            <h3>${description}</h3>
            <button onClick="decreaseQuantity(${id})">-</button>
            <span>${quantity}</span>
            <button onClick="increaseQuantity(${id})">+</button>
        </div>
    </div>
    `;
}

function getCartProducts() {
  cartRow.innerHTML = "";
  cart.map((pr) => {
    cartRow.innerHTML += getCartCard(pr);
  });
}

getCartProducts();

function increaseQuantity(id) {
  cart = cart.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}

function decreaseQuantity(id) {
  let product = cart.find((pr) => pr.id === id);

  if (product.quantity === 1) {
    let isDelete = confirm("Do you wont to delete this product?");
    if (isDelete) {
      cart = cart.filter((pr) => pr.id !== id);
      getCartTotal();
    }
  } else {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}
