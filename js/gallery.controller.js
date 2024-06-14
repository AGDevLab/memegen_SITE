'use strict'

// funny cats babies dogs politics actors angry sarcasm say listen

var gImgs = [
  {
    id: 1,
    url: 'Assets/IMAGES/fixed_img/1.jpg',
    keywords: ['politics', 'funny'],
  },
  { id: 2, url: 'Assets/IMAGES/fixed_img/2.jpg', keywords: ['dogs', 'cute'] },
  {
    id: 3,
    url: 'Assets/IMAGES/fixed_img/3.jpg',
    keywords: ['babies', 'funny'],
  },
  { id: 4, url: 'Assets/IMAGES/fixed_img/4.jpg', keywords: ['cats', 'cute'] },
  {
    id: 5,
    url: 'Assets/IMAGES/fixed_img/5.jpg',
    keywords: ['babies', 'funny'],
  },
  { id: 6, url: 'Assets/IMAGES/fixed_img/6.jpg', keywords: ['actors', 'say'] },
  { id: 7, url: 'Assets/IMAGES/fixed_img/7.jpg', keywords: ['babies', 'cute'] },
  {
    id: 8,
    url: 'Assets/IMAGES/fixed_img/8.jpg',
    keywords: ['actors', 'listen'],
  },
  { id: 9, url: 'Assets/IMAGES/fixed_img/9.jpg', keywords: ['babies', 'cute'] },
  {
    id: 10,
    url: 'Assets/IMAGES/fixed_img/10.jpg',
    keywords: ['politics', 'funny'],
  },
  { id: 11, url: 'Assets/IMAGES/fixed_img/11.jpg', keywords: ['say', 'angry'] },
  {
    id: 12,
    url: 'Assets/IMAGES/fixed_img/12.jpg',
    keywords: ['actors', 'say'],
  },
  {
    id: 13,
    url: 'Assets/IMAGES/fixed_img/13.jpg',
    keywords: ['actors', 'sarcasm'],
  },
  {
    id: 14,
    url: 'Assets/IMAGES/fixed_img/14.jpg',
    keywords: ['actors', 'say'],
  },
  {
    id: 15,
    url: 'Assets/IMAGES/fixed_img/15.jpg',
    keywords: ['actors', 'sarcasm'],
  },
  {
    id: 16,
    url: 'Assets/IMAGES/fixed_img/16.jpg',
    keywords: ['actors', 'sarcasm'],
  },
  {
    id: 17,
    url: 'Assets/IMAGES/fixed_img/17.jpg',
    keywords: ['politics', 'say'],
  },
  {
    id: 18,
    url: 'Assets/IMAGES/fixed_img/18.jpg',
    keywords: ['politics', 'funny'],
  },
]

function getImgs() {
  return gImgs
}

function renderGallery() {
  const imgGallery = getImgs()
  let strHtmls = imgGallery.map(
    (image) =>
      `<img title="photo of ${image.keywords}" data-id="${image.id}" data-keywords="${image.keywords}" src="${image.url}" alt="Meme category: ${image.keywords}" onerror="this.src='Assets/IMAGES/util/returnnull.jpg'" onclick="onSelectImg(this)")"></article>`
  )
  document.querySelector('.gallery-container').innerHTML = strHtmls.join('')
}

function onSelectImg(elImg) {
  console.log(elImg)
  console.log(elImg.dataset.id)
  console.log(elImg.dataset.keywords)
  gMeme = setCurrMeme(+elImg.dataset.id)

  setImg(elImg)
  renderMeme()
}

function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}
