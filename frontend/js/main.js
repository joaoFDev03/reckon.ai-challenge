const API = "http://localhost:3000/products";
const list = document.getElementById("products");
const form = document.getElementById("product-form");
const paginationNumbers = document.getElementById("pagination-numbers");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const paginationSelect = document.getElementById("pagination-items");
const searchInput = document.querySelector('input[type="search"]');

const paginator = paginate({
  paginationNumbers,
  paginatedList: list,
  paginationLimit: Number(paginationSelect.value),
  prevButton,
  nextButton
});


function showError(message, container) {
  container.textContent = message;
}

async function load() {
  allItems = await getProducts(API);
  filteredItems = allItems;
  render(list, filteredItems);
  paginator.paginationLimit = Number(paginationSelect.value);
  paginator.refresh();
}
function openEditModal(product) {
  // load model with product info
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal">
      <h2>Edit Product</h2>
      <label>Name: <input id="modal-name" value="${product.productName}" /></label>
      <label>Price: <input id="modal-price" type="number" value="${product.price}" /></label>
      <label>Description: <textarea id="modal-description">${product.description}</textarea></label>
      <p id="modal-error" style="color:red; font-size:0.9rem; min-height:1.2em;"></p>
      <div class="modal-actions">
        <button id="modal-save">Save</button>
        <button id="modal-cancel">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const errorContainer = modal.querySelector("#modal-error");

  // Cancel
  modal.querySelector("#modal-cancel").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); }); // click outside to close

  // Save
  modal.querySelector("#modal-save").addEventListener("click", async () => {
    const updatedProduct = {
      productName: modal.querySelector("#modal-name").value.trim(),
      price: Number(modal.querySelector("#modal-price").value),
      description: modal.querySelector("#modal-description").value.trim()
    };


   if (!updatedProduct.productName) return showError("Product name is mandatory", errorContainer);
    if (isNaN(updatedProduct.price) || updatedProduct.price <= 0) return showError("Invalid price", errorContainer);

    try {
      await updateProduct(API, product._id, updatedProduct);
      modal.remove();
      await load();
    } catch (err) {
      showError(err.message, errorContainer);
    }
  });
}
function openDeleteModal(product) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal">
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete <strong>${product.productName}</strong>?</p>
      <div class="modal-actions">
        <button id="modal-confirm">Delete</button>
        <button id="modal-cancel">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector("#modal-cancel").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); });
  modal.querySelector("#modal-confirm").addEventListener("click", async () => {
    await deleteProduct(API, product._id);
    modal.remove();
    await load();
  });
}
// CRUD
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const body = Object.fromEntries(fd);

    // clear namespaces
  body.productName = body.productName.trim();
  body.price = Number(body.price);

  const errorLabel = document.getElementById("error-label");
  showError("", errorLabel);


  // validation
 if (!body.productName) return showError("Product name is mandatory", errorLabel);
  if (isNaN(body.price) || body.price <= 0) return showError("Invalid price", errorLabel);

  try {
    await createProduct(API, body);
    form.reset();
    await load();
  } catch (err) {

    errorLabel.innerText = err.message;
  }
});


list.addEventListener("click", async e => {
  const id = e.target.dataset.id;
  if (!id) return;

  const product = filteredItems.find(p => p._id === id);
  if (!product) return;

  if (e.target.classList.contains("edit")) openEditModal(product);
  if (e.target.classList.contains("del")) openDeleteModal(product);
});
// Filter
searchInput.addEventListener("input", filterByName);

// Changes items per page
paginationSelect.addEventListener("change", () => {
  paginator.paginationLimit = Number(paginationSelect.value);
  paginator.refresh();
});

// Initialize
window.addEventListener("load", load);
