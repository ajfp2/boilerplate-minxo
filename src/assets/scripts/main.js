/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// +( function() {
//   const university = "UOC";
//   console.log(`Hello, ${university}!`);
// } )();

const menuToggle = document.querySelector('.header__menuToggle');
const nav = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('navbar--active');
});

const recipes = [
  { name: 'Principales', 
    ingredients: ['Harina de trigo', 'Agua', 'AOVE', 'Sal', '1 tomate', '3 champiñones', '1 berenjena', '1 tomate en salmuera', '4 Sepionets (calamares pequeños)', '1 pescadilla pequeña']
  },
  { name: 'Opcionales',
    ingredients: ['1 Alcachofa', '1 patata', '1 pimiento en salmuera', 'Alioli']
  },
];

const container = document.getElementById('recipe-container');

recipes.forEach(recipe => {
  const recipeDiv = document.createElement('div');
  recipeDiv.innerHTML = `<h3>${recipe.name}</h3><ul class='list-ingredients'>${recipe.ingredients.map(ing => `<li class='list-ingredients__items'>${ing}</li>`).join('')}</ul>`;
  container.appendChild(recipeDiv);
});

const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});