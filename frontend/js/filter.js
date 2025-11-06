let allItems = []; 
let filteredItems = [];

function filterByName(event) {
  const term = event.target.value.trim().toLowerCase();
  filteredItems = !term
    ? allItems
    : allItems.filter(item => item.productName.toLowerCase().includes(term));

  render(list, filteredItems);
  paginator.refresh();
}