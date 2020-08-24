var light = document.getElementById('nightmode-button');

light.addEventListener('click', function(light){
  light.target.classList.toggle('nightmode-on');
})
