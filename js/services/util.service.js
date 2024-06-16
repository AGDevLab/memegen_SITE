'use strict'

function saveMeme() {
  gElCanvas = document.querySelector('canvas')
  const dataUrl = gElCanvas.toDataURL()
  //   console.log('dataUrl:', dataUrl)

  //   const link = document.createElement('a')
  //   link.href = dataUrl
  console.log('saved')

  saveToStorage('savedMeme', dataUrl)
}

function downloadCanvas() {
  gElCanvas = document.querySelector('canvas')
  const dataUrl = gElCanvas.toDataURL()
  //   console.log('dataUrl:', dataUrl)

  const link = document.createElement('a')
  link.href = dataUrl
  link.download = 'meme.jpg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function makeId(length = 6) {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var id = ''

  for (var i = 0; i < length; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return id
}

function makeLorem(wordCount = 100) {
  const words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''

  while (wordCount-- > 0) {
    txt += words[getRandomInt(0, words.length)] + ' '
  }
  return txt
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}
