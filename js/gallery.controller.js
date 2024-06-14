'use strict'

// funny cats babies dogs politics actors angry sarcasm say listen

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['politics', 'funny'] },
  { id: 2, url: 'img/2.jpg', keywords: ['dogs', 'cute'] },
  { id: 3, url: 'img/3.jpg', keywords: ['babies', 'funny'] },
  { id: 4, url: 'img/4.jpg', keywords: ['cats', 'cute'] },
  { id: 5, url: 'img/5.jpg', keywords: ['babies', 'funny'] },
  { id: 6, url: 'img/6.jpg', keywords: ['actors', 'say'] },
  { id: 7, url: 'img/7.jpg', keywords: ['babies', 'cute'] },
  { id: 8, url: 'img/8.jpg', keywords: ['actors', 'listen'] },
  { id: 9, url: 'img/9.jpg', keywords: ['babies', 'cute'] },
  { id: 10, url: 'img/10.jpg', keywords: ['politics', 'funny'] },
  { id: 11, url: 'img/11.jpg', keywords: ['say', 'angry'] },
  { id: 12, url: 'img/12.jpg', keywords: ['actors', 'say'] },
  { id: 13, url: 'img/13.jpg', keywords: ['actors', 'sarcasm'] },
  { id: 14, url: 'img/14.jpg', keywords: ['actors', 'say'] },
  { id: 15, url: 'img/15.jpg', keywords: ['actors', 'sarcasm'] },
  { id: 16, url: 'img/16.jpg', keywords: ['actors', 'sarcasm'] },
  { id: 17, url: 'img/17.jpg', keywords: ['politics', 'say'] },
  { id: 18, url: 'img/18.jpg', keywords: ['politics', 'funny'] },
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
