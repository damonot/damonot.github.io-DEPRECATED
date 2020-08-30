//-- Slideshow --//
var tri_click = document.getElementById("triangle-div");
var tri_img = document.getElementById("triangle-img");
var imgs = [
  "./img/network.png",
  "./img/guitar.png",
  "./img/photo.png"];

var hrefs = [];
var nextIndex = 0;
tri_img.src = imgs[nextIndex];
var href = hrefs[nextIndex];
setTimeout(fadeimg, 5000);

function showimg() {
  nextIndex = (nextIndex + 1) % imgs.length;
  tri_img.src = imgs[nextIndex];
  href = hrefs[nextIndex];
  tri_img.style.opacity = "1"
  setTimeout(fadeimg, 15000)
}

function fadeimg() {
  tri_img.style.opacity = "0"
  setTimeout(showimg, 3500);
}