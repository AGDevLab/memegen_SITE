'use strict'

function coverCanvasWithImg(elImg) {
  gElCanvas.height =
    (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

//* Let's use the image natural width and height
function drawImg3() {
  const elImg = new Image()
  elImg.src = 'img/square.jpg'
  // elImg.src = 'img/wide.jpg'
  // elImg.src = 'img/tall.jpg'
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
  }
}
