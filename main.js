var light = document.getElementById('nightmode-button');
var bg = document.getElementById("page-background");
light.addEventListener('click', 
  function(light) {
    light.target.classList.toggle('nightmode-on');
    bg.classList.toggle('body-dark');
  }
)

var windowWidth = window.innerWidth;
var bio = document.getElementById("bio");
var bioWidth = (300 / windowWidth) * 100;
bio.style.width = bioWidth+"%";

//var bioLeftMargin =  3 * windowWidth / 100;
var bioLeftMargin =  (windowWidth / 35);
bio.style.marginLeft = bioLeftMargin+"%";
console.log("margin: "+bioLeftMargin)

//update bio centering
if((bioWidth >= 50)) {
  bio.style.textAlign = "center";
} else {
  bio.style.textAlign = "right";
}

$(window).resize(function() {
  // update window
  windowWidth = window.innerWidth; 
  //console.log("window: "+windowWidth);

  // update bio width
  bioWidth = (300 / windowWidth) * 100;
  bio.style.width = bioWidth+"%";
  //console.log("bio width: "+bioWidth);

  //update bio margin
  var bioLeftMargin =  (windowWidth / 35);
  bio.style.marginLeft = bioLeftMargin+"%";
  //console.log("margin: "+bioLeftMargin)

  //update bio centering
  if((bioWidth >= 50)) {
    bio.style.textAlign = "center";
  } else {
    bio.style.textAlign = "right";
  }
});

console.log(window.innerWidth);
//var biowidth = (20 / screenwidth);
//