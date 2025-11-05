function filterByName(event) {
  const searchTerm = event.target.value.trim().toLowerCase();
  const listItems = document.querySelectorAll("ul#products li");

  listItems.forEach((item) => {
    item.style.display = "revert";

    if (!item.innerText.toLowerCase().includes(searchTerm)) {
      item.style.display = "none";
    }
  });
}

