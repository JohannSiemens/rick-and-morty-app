export function createPagination() {
  const pagination = document.createElement("span");
  pagination.classList.add("navigatino__pagination");
  pagination.setAttribute("data-js", "pagination");
  pagination.textContent = "1 / 1";

  return pagination;
}
