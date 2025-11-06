async function getProducts(API) {
  const res = await fetch(API);
  return res.json();
}

async function createProduct(API, body) {
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      let errorMessage = "Unknown error";
      try {
        const errorData = await res.json();
        errorMessage = errorData.message
      } catch (err) {
               // fallback to keep error message as "Unknown Error"

      }
      throw new Error(errorMessage);
    }

    return await res.json(); 
  } catch (err) {
    throw err; 
  }
}
async function deleteProduct(API, id) {
  return fetch(`${API}/${id}`, { method: "DELETE" });
}

async function updateProduct(API, id, body) {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      let errorMessage = "Unknown error";
      try {
        const errorData = await res.json();
        errorMessage = errorData.message 
      } catch (err) {
        // fallback to keep error message as "Unknown Error"
      }
      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
}