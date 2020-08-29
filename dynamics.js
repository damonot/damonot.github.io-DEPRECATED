//-- Dynamic Width, Margin, & Centering --//
var windowWidth = window.innerWidth;
var bio = document.getElementById("bio");
var bioWidth = (300 / windowWidth) * 100;
bio.style.width = bioWidth+"%";

//var bioLeftMargin =  3 * windowWidth / 100;
var bioLeftMargin =  (windowWidth / 35);
bio.style.marginLeft = bioLeftMargin+"%";

//update bio centering
if((bioWidth >= 25)) {
  bio.style.textAlign = "center";
  bio.style.margin = "auto";
} else {
  bio.style.textAlign = "right";
}

$(window).resize(function() {
  // update window
  windowWidth = window.innerWidth; 

  // update bio width
  bioWidth = (300 / windowWidth) * 100;
  bio.style.width = bioWidth+"%";

  //update bio margin
  var bioLeftMargin =  (windowWidth / 35);
  bio.style.marginLeft = bioLeftMargin+"%";

  //update bio centering
  if((bioWidth >= 25)) {
    bio.style.textAlign = "center";
    bio.style.margin = "auto";
  } else {
    bio.style.textAlign = "right";
  }
});