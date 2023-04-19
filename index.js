import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
let currentPage = 1;
let maxPage = 1;
let searchQuery = "";

async function fetchCharacters(apiPage, searchQuery) {
  try {
    const characterResponse = await fetch(
      `https://rickandmortyapi.com/api/character?page=${apiPage}&name=${searchQuery}`
    );
    if (characterResponse.ok) {
      const characterData = await characterResponse.json();
      maxPage = characterData.info.pages;
      pagination.textContent = `${currentPage} / ${maxPage}`;
      const characterList = characterData.results;
      characterList.forEach((character) =>
        cardContainer.append(createCharacterCard(character))
      );
    } else {
      console.log("Bad Response from API");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchCharacters(currentPage, searchQuery);

nextButton.addEventListener("click", () => {
  if (currentPage === maxPage) {
    alert("You have reached the last page");
  } else {
    currentPage++;
    pagination.textContent = `${currentPage} / ${maxPage}`;
    cardContainer.innerHTML = "";
    fetchCharacters(currentPage, searchQuery);
  }
});

prevButton.addEventListener("click", () => {
  if (currentPage === 1) {
    alert("You have reached the first page");
  } else {
    currentPage--;
    pagination.textContent = `${currentPage} / ${maxPage}`;
    cardContainer.innerHTML = "";
    fetchCharacters(currentPage, searchQuery);
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  searchQuery = formElements.query.value;
  cardContainer.innerHTML = "";
  fetchCharacters(null, searchQuery);
  currentPage = 1;
  searchBar.focus();
});
