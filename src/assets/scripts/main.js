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
  recipeDiv.innerHTML = `<h3>${recipe.name}</h3><ul class='list-ingredientes'>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>`;
  container.appendChild(recipeDiv);
});
