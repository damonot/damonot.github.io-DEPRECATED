//-- Dynamic Width, Margin, & Centering --//
var windowWidth = window.innerWidth;

var bio = document.getElementById("bio");
var popout = document.getElementById("popout");
var bioWidth = (350 / windowWidth) * 100;

var popoutWidth = bioWidth;
bio.style.width = bioWidth+"%";
popout.style.width = popoutWidth+"%";

//var bioRightMargin =  3 * windowWidth / 100;
var bioRightMargin = (windowWidth / 42.5);
bio.style.marginRight = bioRightMargin+"%";
popout.style.marginRight = bioRightMargin+"%";

// triangle border
var triborder = document.getElementById("triangle-div");
var triborderWidth = (225 / windowWidth) * 100;
triborder.style.width = triborderWidth+"%";

//update bio/popout centering
if((bioWidth >= 27)) {
  bio.style.textAlign = "center";
  bio.style.marginLeft = "auto";
  bio.style.marginRight = "auto";

  popout.style.textAlign = bio.style.textAlign;
  popout.style.marginLeft = bio.style.marginLeft;
  popout.style.marginRight = bio.style.marginRight;

} else {
  bio.style.textAlign = "right";
  popout.style.textAlign = "right";
}

$(window).resize(function() {
  // update window
  windowWidth = window.innerWidth; 

  // update bio/popout width
  bioWidth = (350 / windowWidth) * 100;
  bio.style.width = bioWidth+"%";
  popout.style.width = bioWidth+"%";

  //update bio margin
  var bioRightMargin =  (windowWidth / 42.5);
  bio.style.marginRight = bioRightMargin+"%";
  popout.style.marginRight = bioRightMargin+"%";

  //update bio centering
  if((bioWidth >= 27)) {
    bio.style.textAlign = "center";
    bio.style.marginRight = "auto";
    bio.style.marginRight = "auto";

    popout.style.textAlign = bio.style.textAlign;
    popout.style.marginLeft = bio.style.marginLeft;
    popout.style.marginRight = bio.style.marginRight;

  } else {
    bio.style.textAlign = "right";
    popout.style.textAlign = "right";
  }

  //update triangle border
  triborderWidth = (225 / windowWidth) * 100
  triborder.style.width = triborderWidth+"%";

});