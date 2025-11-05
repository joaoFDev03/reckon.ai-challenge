async function getProducts(API) {
  const res = await fetch(API);
  return res.json();
}

async function createProduct(API, body) {
  return fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

async function deleteProduct(API, id) {
  return fetch(`${API}/${id}`, { method: "DELETE" });
}

async function updateProduct(API, id, body) {
  return fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

