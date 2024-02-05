const numbers = [1, 2, 3, 4, 5];
const mapThrough = numbers.map(function (number) {
  return number * number;
});
console.log(mapThrough);
const names = ["Muhammad", "Idris", "Hud", "Saleh", "Yusuf"];
const nameThrough = names.map((name) => {
  return name.toUpperCase();
});
console.log(nameThrough);
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const mapPokemon = pokemon.map((dino) => {
  return `<p>${dino}</p>`;
});
console.log(mapPokemon);
