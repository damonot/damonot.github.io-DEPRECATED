//-- Nightmode --//
var light = document.getElementById('nightmode-button');
var bg = document.getElementById("page-background");
light.addEventListener('click', 
  function(light) {
    light.target.classList.toggle('nightmode-on');
    bg.classList.toggle('body-dark');
  }
)