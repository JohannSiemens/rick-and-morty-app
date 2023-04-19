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

async function fetchCharacters() {
  try {
    const characterResponse = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    if (characterResponse.ok) {
      const characterData = await characterResponse.json();
      const maxPage = characterData.info.pages;
      const page = 1;
      pagination.textContent = `${page} / ${maxPage}`;
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

function nextPage(data) {}

nextButton.addEventListener("click", () => {
  let page = 1;
});

fetchCharacters();

const searchQuery = "";
