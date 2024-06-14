'use strict'

var gElCanvas
var gCtx

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics'] },
  { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog'] },
]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red',
    },
  ],
}
var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

// function renderMeme() {
//   gElCanvas = document.querySelector('canvas')
//   gCtx = gElCanvas.getContext('2d')
//   console.log('gCtx:', gCtx)
// }
// console.log(gMeme)
// console.log(gMeme.lines)

// var gMemeText = gMeme.lines
// console.log(gMemeText[0].size)

function getMeme() {
  // const memeInfo = gMeme.lines
  // const src = elImg.src
  // console.log(src)

  // // const msgInput = prompt('input Text')
  // const msgInput = memeInfo[0].txt
  // renderMeme(src, msgInput)

  return gMeme
}

function renderMeme() {
  const meme = getMeme()
  const memeInfo = meme.lines
  const msgInput = memeInfo[0].txt

  const src = gImgs[0].url
  console.log(src)

  const showEditor = document.querySelector('.editor')
  showEditor.showModal()
  const elImg = new Image()
  elImg.src = src
  drawText(msgInput, gElCanvas.width / 2, gElCanvas.height / 2)
}

function setLineTxt() {
  let inputField = document.getElementById('myInput')
  const meme = getMeme()
  const memeInfo = meme.lines
  memeInfo[0].txt = inputField.value
  console.log(memeInfo[0].txt)
  renderMeme()
}

function getMemeById(idx) {}

function coverCanvasWithImg(elImg) {
  gElCanvas.width = elImg.naturalWidth
  gElCanvas.height = elImg.naturalHeight

  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
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
