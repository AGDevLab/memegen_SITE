'use strict'

var gElCanvas
var gCtx

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
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

function renderMeme(elGalleryImg) {
  const meme = getMeme()
  const memeInfo = meme.lines
  const msgInput = memeInfo[0].txt

  const src = elGalleryImg.src
  const showEditor = document.querySelector('.editor')
  // console.log(showEditor)
  showEditor.showModal()
  const elImg = new Image()
  elImg.src = src
  coverCanvasWithImg(elImg)
  drawText(msgInput, gElCanvas.width / 2, gElCanvas.height / 2)
}

function setLineTxt() {
  // Get the input element by its ID
  let inputField = document.getElementById('myInput')
  const meme = getMeme()
  const memeInfo = meme.lines
  // const msgInput = memeInfo[0].txt

  // Get the value of the input field
  memeInfo[0].txt = inputField.value
  console.log(memeInfo[0].txt)

  // renderMeme()

  // return value
}

function coverCanvasWithImg(elImg) {
  // fixed sizing probably wrong, to be checked later, continuing development
  // gElCanvas.width = 500
  // gElCanvas.height =
  //   (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
  // console.dir(elImg)

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
