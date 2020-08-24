var light = document.getElementById('lightbulb');

light.addEventListener('click', function(light){
  light.target.classList.toggle('bulb-on')
})
