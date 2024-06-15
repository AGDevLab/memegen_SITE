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
  //* We may clear part of the canvas
  // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
}

function onCloseEditor() {
  const memeEditor = document.querySelector('.editor')
  const closeBtn = document.querySelector('.close')
  closeBtn.addEventListener('click', () => {
    memeEditor.close()
  })
}

function resizeCanvas() {
  const elContainer = document.querySelector('canvas')
  //* Changing the canvas dimension clears the canvas
  gElCanvas.width = elContainer.clientWidth - 40 //* Subtracting 20px padding from each side
}

// function onDraw(ev) {
//   // const offsetX = ev.offsetX
//   // const offsetY = ev.offsetY
//   const { offsetX, offsetY } = ev
//   // console.log('offsetX, offsetY:', offsetX, offsetY)

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
  filterBy(filterWords.value)
}

// function onSetFilterBy(inputElement) {
//   const searchQuery = inputElement.value
//   console.log('Search query:', searchQuery)
//   // Handle the search query as needed
// }

// // const showButton = document.getElementById('showDialog')
// // const editor = document.getElementById('.editor')
// // const outputBox = document.querySelector('output')
// // const selectEl = editor.querySelector('select')
// // const confirmBtn = editor.querySelector('#confirmBtn')

// // "Show the dialog" button opens the <dialog> modally
// showButton.addEventListener('click', () => {
//   editor.showModal()
// })
