//-- Dynamic Width, Margin, & Centering --//
var windowWidth = window.innerWidth;

var textbox = document.getElementById("bio");
var textboxWidth = (350 / windowWidth) * 100;
textbox.style.width = textboxWidth+"%";

//var textboxLeftMargin =  3 * windowWidth / 100;
var textboxLeftMargin =  (windowWidth / 37.5);
textbox.style.marginLeft = textboxLeftMargin+"%";

var triborder = document.getElementById("triangle-div");
var triborderWidth = (225 / windowWidth) * 100;
triborder.style.width = triborderWidth+"%";

//update textbox centering
if((textboxWidth >= 27)) {
  textbox.style.textAlign = "center";
  textbox.style.marginLeft = "auto";
  textbox.style.marginRight = "auto";
} else {
  textbox.style.textAlign = "right";
}

$(window).resize(function() {
  // update window
  windowWidth = window.innerWidth; 

  // update textbox width
  textboxWidth = (350 / windowWidth) * 100;
  textbox.style.width = textboxWidth+"%";

  //update textbox margin
  var textboxLeftMargin =  (windowWidth / 37.5);
  textbox.style.marginLeft = textboxLeftMargin+"%";

  //update textbox centering
  if((textboxWidth >= 27)) {
    textbox.style.textAlign = "center";
    textbox.style.marginLeft = "auto";
    textbox.style.marginRight = "auto";
  } else {
    textbox.style.textAlign = "right";
  }

  //update triangle border
  triborderWidth = (225 / windowWidth) * 100
  triborder.style.width = triborderWidth+"%";

});