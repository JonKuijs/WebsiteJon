var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

function uitklappen(){
  menu.classList.toggle('uitklap');
};

hamburger.addEventListener('click', uitklappen)
