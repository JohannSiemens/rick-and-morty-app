export function createSearchBar() {
  const form = document.createElement("form");
  form.classList.add("search-bar");
  form.setAttribute("acion", "");
  form.setAttribute("data-js", "search-bar");

  const input = document.createElement("input");
  input.classList.add("search-bar__input");
  input.setAttribute("name", "query");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "search characters");
  input.setAttribute("aria-label", "character name");
  form.append(input);

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");
  form.append(button);

  const image = document.createElement("img");
  image.classList.add("search-bar__icon");
  image.setAttribute("src", "assets/magnifying-glass.png");
  image.setAttribute("alt", "");
  button.append(image);

  return form;
}
