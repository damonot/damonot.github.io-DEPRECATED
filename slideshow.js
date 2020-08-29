var imgidx = 0;
    var imgtoggle = false;

    var images = [
      './img/biophoto1.jpg',
      './img/biophoto2.jpg',
      './img/biophoto3.jpg',
      './img/biophoto4.jpg'
    ];

    // initialize loading the next image in background
    window.nextImage = function() {
      imgtoggle = !imgtoggle;

      imgidx = (imgidx + 1) % images.length;

      if (imgtoggle)
        document.getElementById('img2').src = images[imgidx];
      else
        document.getElementById('img1').src = images[imgidx];;
    }

    // trigger crossfade and start timer
    window.fadeImage = function() {
      if (imgtoggle) {
        document.getElementById('img2').style.opacity = '1.0'; 
        document.getElementById('img1').style.opacity = '0.0';
      } else {
        document.getElementById('img2').style.opacity = '0.0';
        document.getElementById('img1').style.opacity = '1.0';
      }
      window.setTimeout(nextImage, 8000);
    }

    // load first image
    document.getElementById('img1').src = images[0];