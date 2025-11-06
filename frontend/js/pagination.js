function paginate({ 
    paginationNumbers,   //  where pagination buttons will be rendered
    paginatedList, // Contain the list of <li> items to paginate
    paginationLimit = 10, // Number of items per page, default = 10
    prevButton = null,  // button to go to the previous page
    nextButton = null // button to go to the next page
}) {
  let currentPage = 1;
  let pageCount = 1;

  function getListItems() {
    return Array.from(paginatedList.querySelectorAll("li"));
  }

  function buildButtons() {
    paginationNumbers.innerHTML = "";
    const items = getListItems();
    pageCount = Math.max(1, Math.ceil(items.length / paginationLimit));

    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.className = "pagination-number";
      btn.textContent = i;
      btn.dataset.pageIndex = i;
      btn.addEventListener("click", () => goto(i));
      paginationNumbers.appendChild(btn);
    }
  }

  function updateUI() {
    const items = getListItems();
    const start = (currentPage - 1) * paginationLimit;
    const end = currentPage * paginationLimit;

    items.forEach((item, idx) => {
      item.classList.toggle("hidden", !(idx >= start && idx < end));
    });

    paginationNumbers.querySelectorAll(".pagination-number").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.pageIndex) === currentPage);
    });

    if (prevButton) prevButton.disabled = currentPage === 1;
    if (nextButton) nextButton.disabled = currentPage === pageCount || pageCount === 0;
  }

  function goto(page) {
    if (page < 1) page = 1;
    if (page > pageCount) page = pageCount;
    currentPage = page;
    updateUI();
  }
  if (prevButton) prevButton.addEventListener("click", () => goto(currentPage - 1));
  if (nextButton) nextButton.addEventListener("click", () => goto(currentPage + 1));

  function refresh() {
    buildButtons();
    if (currentPage > pageCount) currentPage = pageCount;
    if (currentPage < 1) currentPage = 1;
    updateUI();
  }

  refresh();

  return {
    refresh,
    goto,
    next: () => goto(currentPage + 1),
    prev: () => goto(currentPage - 1),
    get paginationLimit() { return paginationLimit; },
    set paginationLimit(v) { paginationLimit = Number(v); }
  };
}
