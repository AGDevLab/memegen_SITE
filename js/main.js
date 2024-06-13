'use strict'

var gElCanvas
var gCtx
var gCurrShape = 'line'

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  console.log('gCtx:', gCtx)

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
}

function drawLine(
  x,
  y,
  xEnd = gElCanvas.width / 2,
  yEnd = gElCanvas.height / 2
) {
  gCtx.beginPath()
  gCtx.moveTo(x, y)
  gCtx.lineTo(xEnd, yEnd)
  gCtx.lineWidth = 3
  gCtx.strokeStyle = 'limegreen'
  gCtx.stroke()
}

function drawTriangle(x, y) {
  gCtx.beginPath()

  gCtx.moveTo(x, y)
  gCtx.lineTo(x + 80, y + 80)
  gCtx.lineTo(x - 20, y + 100)
  // gCtx.lineTo(x, y)
  gCtx.closePath()
  gCtx.lineWidth = 2

  gCtx.fillStyle = 'orangered'
  gCtx.fill()
  gCtx.strokeStyle = 'blue'
  gCtx.stroke()
}

function drawRect(x, y) {
  gCtx.beginPath()
  gCtx.strokeStyle = 'purple'
  gCtx.fillStyle = 'royalblue'

  gCtx.lineWidth = 3
  gCtx.rect(x, y, 120, 120)
  gCtx.fill()
  gCtx.stroke()
  //* THE SAME
  // gCtx.fillRect(x, y, 120, 120)
  // gCtx.strokeRect(x, y, 120, 120)
}

function drawArc(x, y) {
  gCtx.beginPath()
  gCtx.lineWidth = 10

  //* The x,y cords of the center , The radius, The starting angle, The ending angle, in radians
  // gCtx.arc(x, y, 70, 0, Math.PI) //* draws a circle
  gCtx.arc(x, y, 70, 0, Math.PI * 2) //* draws a circle
  gCtx.fillStyle = 'red'
  gCtx.fill()
  gCtx.strokeStyle = 'green'
  gCtx.stroke()
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = 'black'
  gCtx.font = '40px Arial'
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function onClearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  //* We may clear part of the canvas
  // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  //* Changing the canvas dimension clears the canvas
  gElCanvas.width = elContainer.clientWidth - 40 //* Subtracting 20px padding from each side
  drawText('Drawing text!', gElCanvas.width / 2, gElCanvas.height / 2)
}

function onSetShape(shape) {
  gCurrShape = shape
  const elShapeTitle = document.querySelector('.shape-title')
  elShapeTitle.innerText = capitalize(gCurrShape)
}

function onDraw(ev) {
  // const offsetX = ev.offsetX
  // const offsetY = ev.offsetY
  const { offsetX, offsetY } = ev
  // console.log('offsetX, offsetY:', offsetX, offsetY)

  switch (gCurrShape) {
    case 'line':
      drawLine(offsetX, offsetY)
      break
    case 'triangle':
      drawTriangle(offsetX, offsetY)
      break
    case 'rect':
      drawRect(offsetX, offsetY)
      break
    case 'circle':
      drawArc(offsetX, offsetY)
      break
    case 'text':
      drawText('Hello', offsetX, offsetY)
      break
  }
}

function getCanvasCenter() {
  return {
    x: gElCanvas.width / 2,
    y: gElCanvas.height / 2,
  }
}

function capitalize(txt) {
  return txt.charAt(0).toUpperCase() + txt.substring(1)
}

const showButton = document.getElementById('showDialog')
const favDialog = document.getElementById('favDialog')
const outputBox = document.querySelector('output')
const selectEl = favDialog.querySelector('select')
const confirmBtn = favDialog.querySelector('#confirmBtn')

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => {
  editor.showModal()
})
