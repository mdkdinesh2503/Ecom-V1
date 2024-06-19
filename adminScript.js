// Product Display starts here

let products = null;
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showProducts();
  });

function showProducts() {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<a href="adminViewProducts.html">
                        <div class="product-list" title="${product.title}">
                          <img src="${product.image}" />
                          <h3>${product.title}...</h3>
                          <a href="adminViewProducts.html" class="product-btn">view <i class="fas fa-eye"></i></a>
                        </div>
                      </a>`;

    document.getElementById("admin-products").appendChild(div);
  });
}

// Product Display ends here
