const headerToggle = document.querySelector('.header-toggle')
const menu = document.querySelector('.header-nav')
const header = document.querySelector('.header')
const body = document.querySelector('body')

headerToggle.onclick = function(e){
    header.classList.toggle('active')
    body.classList.toggle('stop-scrolling')
}

