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

// Activar el botono de hamburguesa
const menuToggle = document.querySelector('.header__menuToggle');
const nav = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('navbar--active');
});

// Ingredientes de la receta
const recipes = [
  { name: 'Principales', 
    ingredients: ['Harina de trigo', 'Agua', 'AOVE', 'Sal', '1 tomate', '3 champiñones', '1 berenjena', '1 tomate en salmuera', '4 Sepionets (calamares pequeños)', '1 pescadilla pequeña']
  },
  { name: 'Opcionales',
    ingredients: ['1 Alcachofa', '1 patata', '1 pimiento en salmuera', 'Alioli']
  },
];
// Div de la receta para poner datos
const container = document.getElementById('recipe-container');

recipes.forEach(recipe => {
  const recipeDiv = document.createElement('div');
  recipeDiv.innerHTML = `<h3>${recipe.name}</h3><ul class='list-ingredients'>${recipe.ingredients.map(ing => `<li class='list-ingredients__items'>${ing}</li>`).join('')}</ul>`;
  container.appendChild(recipeDiv);
});

// Ingredientes de la receta
const pasosRecta = [
  {
    name: 'Preparación de la Receta',
    icono: 'fa fa-hands',
    pasos: [
      'En primer lugar, en una cazuela honda vertemos 7 vasos de agua, 1 vaso de aceite de oliva y un poquito de sal. A continuación, lo ponemos al fuego y dejamos que hierva.',
      'Mientras hierve, pelamos y troceamos las verduras en rodajas. Reservamos para después.',
      'A continuación, preparamos la masa. En un bol grande echamos la harina y poco a poco vertemos el agua que hemos hervido sin dejar de remover. Nos ponemos un poquito de aceite de oliva en las manos y amasamos hasta que quede una masa homogénea y sin grumos.',
      'Una vez lista la masa, formamos las bolas para preparar los minxos. Ponemos las bolas sobre un papel de horno, alargamos y estiramos con las manos hasta que quede completamente plana. Cuando terminemos hacemos los bordes.',
      'Salamos las verduras y las ponemos por encima de la masa. A continuación, ponemos los calamares y por último la pescadilla. Añadimos un buen chorro de aceite de oliva y horneamos a 200ºC durante 15 minutos.',
      'Pasado ese tiempo, comprobamos que el minxo esté doradito y lo sacamos del horno.',
      'Y a quien le guste, acompañarlo de un buen alioli casero.',
      'Receta realizada por mi amiga Sandra y publicada en Canal Cocina. <a title="Canal Cocina" href="https://canalcocina.es/receta/minxo-destapt-1"><i class="fab fa-youtube"></i></a>'
    ]
  }  
];
// Div de la receta para poner datos
const containerPreparcion = document.getElementById('preparacion-receta');

pasosRecta.forEach(paso => {
  const rectaDiv = document.createElement('div');
  rectaDiv.innerHTML = `<h1 class="uoc-title"><i class="${paso.icono}"></i> ${paso.name}</h1>${paso.pasos.map(ps => `<p>${ps}</p>`).join('')}`;
  containerPreparcion.appendChild(rectaDiv);
});

// Boton de vuelta al inicio
const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});