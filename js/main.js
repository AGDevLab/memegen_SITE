'use strict'

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  console.log('gCtx:', gCtx)
  // renderMeme()

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
}
