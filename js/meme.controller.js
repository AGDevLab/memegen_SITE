'use strict'

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  gMemes = setMemes()
  renderGallery()

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
}

function onClearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function onCloseEditor() {
  const memeEditor = document.querySelector('.editor')
  const closeBtn = document.querySelector('.close')
  closeBtn.addEventListener('click', () => {
    memeEditor.close()
  })
}

function resizeCanvas() {
  // gElCanvas = document.querySelector('canvas')
  // gCtx = gElCanvas.getContext('2d')

  // Save the current canvas content
  const elContainer = document.querySelector('.canvas-container')
  const oldWidth = gElCanvas.width
  const oldHeight = gElCanvas.height
  const imageData = gCtx.getImageData(0, 0, oldWidth, oldHeight)

  // Create an off-screen canvas to hold the old content
  const offScreenCanvas = document.createElement('canvas')
  const offScreenCtx = offScreenCanvas.getContext('2d')
  offScreenCanvas.width = oldWidth
  offScreenCanvas.height = oldHeight
  offScreenCtx.putImageData(imageData, 0, 0)

  // Resize the canvas
  gElCanvas.width = elContainer.clientWidth - 40
  gElCanvas.height = elContainer.clientHeight - 40

  // Draw the saved content to the resized canvas
  gCtx.drawImage(
    offScreenCanvas,
    0,
    0,
    oldWidth,
    oldHeight,
    0,
    0,
    gElCanvas.width,
    gElCanvas.height
  )
}

// function onDraw(ev) {
//   // const offsetX = ev.offsetX
//   // const offsetY = ev.offsetY
//   const { offsetX, offsetY } = ev
//   // ('offsetX, offsetY:', offsetX, offsetY)

//   switch (gCurrShape) {
//     case 'line':
//       drawLine(offsetX, offsetY)
//       break
//     case 'triangle':
//       drawTriangle(offsetX, offsetY)
//       break
//     case 'rect':
//       drawRect(offsetX, offsetY)
//       break
//     case 'circle':
//       drawArc(offsetX, offsetY)
//       break
//     case 'text':
//       drawText('Hello', offsetX, offsetY)
//       break
//   }
// }

function getCanvasCenter() {
  return {
    x: gElCanvas.width / 2,
    y: gElCanvas.height / 2,
  }
}

function onSetFilterBy(filterWords) {
  filterBy(filterWords.value.toLowerCase())
}

function renderImg(src = 'Assets/IMAGES/fixed_img/1.jpg') {
  const elImg = new Image()
  elImg.src = src

  setImg(elImg)
}
