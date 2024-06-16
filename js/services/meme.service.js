'use strict'

const STORAGE_KEY = 'memesDB'
let gElCanvas, gCtx, gMemes, gCurrMeme, gFilterBy, gCurrImgUrl, gColor
// gColor = '#ff0000'
let gStroke = true

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

var gKeywordSearchCountMap = {
  funny: 12,
  cats: 16,
  babies: 2,
  dogs: 1,
  politics: 1,
  actors: 1,
  angry: 1,
  sarcasm: 1,
  say: 1,
  listen: 1,
}

function getMeme() {
  return gMeme
}

function setCurrMeme(imgId) {
  const memes = getMemes()
  const meme = memes.find((meme) => imgId === meme.selectedImgId)

  return meme
}

function getMemes() {
  return gMemes
}

function setMemes() {
  const memes = gImgs.map(
    (meme) =>
      (meme = {
        selectedImgId: meme.id,
        lineCount: 0,
        selectedLineIdx: 0,
        keywords: meme.keywords,
        lines: [
          {
            txt: [],
            size: 0,
            color: 0,
          },
        ],
      })
  )
  return memes
}

function renderMeme() {
  const memeEditor = document.querySelector('.editor')
  memeEditor.showModal()
  const cancelFocusInput = document.querySelector('.text-input')
  cancelFocusInput.blur()
  getText()

  saveMeme()
}

function filterBy(elFilterWords) {
  const memes = gMemes
  gFilterBy = memes.filter((meme) =>
    meme.keywords.some((keyword) => keyword.includes(elFilterWords))
  )

  setImgs(gFilterBy)
  renderGallery()
}

function setLineTxt() {
  let inputField = document.querySelector('.text-input')
  const meme = getMeme()
  const memeInfo = meme.lines

  if (!meme.lineCount) {
    memeInfo[0].txt.push(inputField.value)
    meme.lineCount++
  } else if (meme.lineCount <= 3) {
    memeInfo[0].txt.push(inputField.value)
    meme.lineCount++
  }

  renderMeme()
}

function getText() {
  const meme = getMeme()
  const memeInfo = meme.lines
  const msgInput = memeInfo[0].txt

  const yPositions = [6, 3, 2]
  const totalLines = Math.min(msgInput.length, yPositions.length)

  msgInput.slice(0, totalLines).forEach((msg, idx) => {
    const yPos = gElCanvas.height / yPositions[idx]
    drawText(msg, gElCanvas.width / 2, yPos)
  })
}

function setImg(elImg) {
  gElCanvas.width = elImg.naturalWidth
  gElCanvas.height = elImg.naturalHeight

  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
  // resizeCanvas()
}

function drawText(text, x, y) {
  gCtx.lineWidth = 3
  gCtx.strokeStyle = 'green'
  gCtx.fillStyle = gColor ? gColor : 'white'
  gCtx.font = '80px Arial'
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'
  gCtx.fillText(text, x, y)
  if (gStroke) gCtx.strokeText(text, x, y)
}

function triggerColorPicker() {
  document.getElementById('favcolor').click()
}

function setStroke() {
  gStroke = !gStroke
  if (!gStroke) {
    const btnStrokeBg = document.querySelector('.btn-text-stroke')
    btnStrokeBg.style.backgroundColor = 'black'
  } else {
    const btnStrokeBg = document.querySelector('.btn-text-stroke')
    btnStrokeBg.style.backgroundColor = 'white'
  }
  return gStroke
}

function openColorPicker() {
  var colorPickerInput = document.getElementById('colorPickerInput')

  colorPickerInput.click()

  colorPickerInput.addEventListener('input', function () {
    gColor = colorPickerInput.value

    var colorPickerImg = document.querySelector('.color-picker-img')
    colorPickerImg.style.backgroundColor = gColor
  })
}
