export function createPreviousButton() {
  const previousButton = document.createElement("button");
  previousButton.classList.add("button", "button--prev");
  previousButton.setAttribute("data-js", "button-prev");

  return previousButton;
}

export function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");

  return nextButton;
}
