function render(list, items) {
  list.innerHTML = "";

  items.forEach(product => {
    const li = document.createElement("li");
    li.className = "card-container";
    
    li.innerHTML = `
      <div class="card">
        <div class="card-content">
          <h1>${product.productName}</h1>
          <p class="price">${product.price}€</p>
          <p>${product.description ?? ""}</p>
        </div>
        <div class="card-actions">
          <button class="edit" data-id="${product._id}">Edit</button>
          <button class="del" data-id="${product._id}">Delete</button>
        </div>
      </div>
    `;

    list.appendChild(li);
  });
}