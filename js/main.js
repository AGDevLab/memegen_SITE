'use strict'

function onInit() {
  renderMeme()

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
}
