'use strict'

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['politics', 'funny'] },
  { id: 2, url: 'img/2.jpg', keywords: ['dog', 'cute'] },
  { id: 3, url: 'img/3.jpg', keywords: ['babies', 'cute'] },
]

function setImg() {
  return gImgs
}

function getImgs() {
  return gImgs
}

function renderGallery() {
  const imgGallery = getImgs()
  let strHtmls = imgGallery.map(
    (image) =>
      `<img title="photo of ${image.keywords}" src="${image.url}" alt="Meme category: ${image.keywords}" onerror="this.src='assets/img/error.png'" onclick="onSelectImg(this)")"></article>`
  )
  document.querySelector('.gallery-container').innerHTML = strHtmls.join('')
}

function onSelectImg(elImg) {
  coverCanvasWithImg(elImg)
  renderMeme()
}

function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}
