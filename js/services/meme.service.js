'use strict'

function coverCanvasWithImg(elImg) {
  const showEditor = document.querySelector('.editor')
  console.log(showEditor)
  showEditor.showModal()

  // fixed sizing probably wrong, to be checked later, continuing development
  // gElCanvas.width = 500
  // gElCanvas.height =
  //   (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
  // console.dir(elImg)

  gElCanvas.width = elImg.naturalWidth
  gElCanvas.height = elImg.naturalHeight

  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
  drawText('placeHolder Text test', gElCanvas.width / 2, gElCanvas.height / 2)
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'green'
  gCtx.fillStyle = 'white'
  gCtx.font = '40px Arial'
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}
