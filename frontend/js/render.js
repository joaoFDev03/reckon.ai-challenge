function render(list, items) {
  list.innerHTML = "";
  items.forEach((p) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="card">
        <div class="card-content">
          <h1>${p.productName}</h1>
          <p class="price">${p.price}€</p>
          <p>${p.description ?? ""}</p>
        </div>

        <div class="card-actions">
          <button class="edit" data-id="${p._id}">Edit</button>
          <button class="del" data-id="${p._id}">Delete</button>
        </div>
      </div>
    `;
    list.appendChild(li);
  });
}
