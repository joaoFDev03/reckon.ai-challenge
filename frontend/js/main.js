const API = "http://localhost:3000/products";
const list = document.getElementById("products");
const form = document.getElementById("product-form");
const paginationNumbers = document.getElementById("pagination-numbers");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const paginator = paginate({
  paginationNumbers,
  paginatedList: list,
  paginationLimit: 5, 
  prevButton,
  nextButton
});

async function load() {
  const data = await getProducts(API);
  render(list, data);

  paginator.refresh();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const body = Object.fromEntries(fd);
  body.price = Number(body.price);
  if (!body.productName || isNaN(body.price)) return alert("Invalid form");
  await createProduct(API, body);
  form.reset();
  await load();
});

list.addEventListener("click", async (e) => {
  const id = e.target.dataset.id;
  if (!id) return;
  if (e.target.classList.contains("del")) {
    await deleteProduct(API, id);
    await load();
    return;
  }
  if (e.target.classList.contains("edit")) {
    const productName = prompt("Name?");
    const price = Number(prompt("Price?"));
    const description = prompt("Description?");
    await updateProduct(API, id, { productName, price, description });
    await load();
  }
});

window.addEventListener("load", () => {
  load();
});
