
function paginate({ paginationNumbers, paginatedList, paginationLimit = 10, prevButton = null, nextButton = null }) {
  if (!paginationNumbers || !paginatedList) {
    console.warn("paginate: elementos obrigatórios em falta");
    return {
      refresh() {},
      goto() {}
    };
  }

  let currentPage = 1;
  let pageCount = 1;

  function getListItems() {
    return Array.from(paginatedList.querySelectorAll("li"));
  }

  function buildButtons() {
    // Recreate buttons 
    paginationNumbers.innerHTML = "";
    const items = getListItems();
    pageCount = Math.max(1, Math.ceil(items.length / paginationLimit));

    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.className = "pagination-number";
      btn.textContent = i;
      btn.dataset.pageIndex = i;
      btn.setAttribute("aria-label", `Page ${i}`);
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

    //Update active state buttons
    paginationNumbers.querySelectorAll(".pagination-number").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.pageIndex) === currentPage);
    });

    // prev / next
    if (prevButton) prevButton.disabled = currentPage === 1;
    if (nextButton) nextButton.disabled = currentPage === pageCount || pageCount === 0;
  }

  function goto(page) {
    // clamp
    if (page < 1) page = 1;
    if (page > pageCount) page = pageCount;
    currentPage = page;
    updateUI();
  }

  function next() { goto(currentPage + 1); }
  function prev() { goto(currentPage - 1); }

  // wire prev/next buttons once
  if (prevButton) prevButton.addEventListener("click", prev);
  if (nextButton) nextButton.addEventListener("click", next);

  // Rebuild pagination state and buttons
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
    next,
    prev
  };
}
