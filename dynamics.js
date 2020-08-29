//-- Dynamic Width, Margin, & Centering --//
var windowWidth = window.innerWidth;

var bio = document.getElementById("bio");
var bioWidth = (350 / windowWidth) * 100;
bio.style.width = bioWidth+"%";

//var bioLeftMargin =  3 * windowWidth / 100;
var bioLeftMargin =  (windowWidth / 37.5);
bio.style.marginLeft = bioLeftMargin+"%";

var triborder = document.getElementById("triangle-border");
var triborderWidth = (225 / windowWidth) * 100;
triborder.style.width = triborderWidth+"%";

//update bio centering
if((bioWidth >= 27)) {
  bio.style.textAlign = "center";
  bio.style.marginLeft = "auto";
  bio.style.marginRight = "auto";
} else {
  bio.style.textAlign = "right";
}

$(window).resize(function() {
  // update window
  windowWidth = window.innerWidth; 

  // update bio width
  bioWidth = (350 / windowWidth) * 100;
  bio.style.width = bioWidth+"%";

  //update bio margin
  var bioLeftMargin =  (windowWidth / 37.5);
  bio.style.marginLeft = bioLeftMargin+"%";

  //update bio centering
  if((bioWidth >= 27)) {
    bio.style.textAlign = "center";
    bio.style.marginLeft = "auto";
    bio.style.marginRight = "auto";
  } else {
    bio.style.textAlign = "right";
  }

  //update triangle border
  triborderWidth = (225 / windowWidth) * 100
  triborder.style.width = triborderWidth+"%";

});