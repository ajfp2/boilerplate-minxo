/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const recipes = [
  { name: 'Paella', ingredients: ['Arroz', 'Mariscos', 'Azafrán'] },
  { name: 'Tortilla de Patatas', ingredients: ['Patatas', 'Huevos', 'Cebolla'] },
];

const container = document.getElementById('recipe-container');

recipes.forEach(recipe => {
  const recipeDiv = document.createElement('div');
  recipeDiv.innerHTML = `<h2>${recipe.name}</h2><ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>`;
  container.appendChild(recipeDiv);
});
