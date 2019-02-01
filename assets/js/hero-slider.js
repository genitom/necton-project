let heroIndex = 1;

showItem(heroIndex);

function plusIndex(n){
    showItem(heroIndex += n)
}
function currentSlide(n){
    showItem(heroIndex = n)
}
function showItem(n){
    let item = document.querySelectorAll('.hero-carousel-item')
    let dots = document.querySelectorAll('.hero-dot')
    if(n > item.length){
        heroIndex = 1
    }
    if(n < 1){
        heroIndex = item.length
    }
    for(let i = 0; i < item.length; i++){
        item[i].classList.remove('active')
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '')
    }
    dots[heroIndex-1].className += ' active';
    item[heroIndex-1].classList.toggle('active')
}

autoSlide()
function autoSlide(){
    let item = document.querySelectorAll('.hero-carousel-item')
    let dots = document.querySelectorAll('.hero-dot')
    for(let i = 0; i < item.length; i++){
        item[i].classList.remove('active')
        dots[i].className = dots[i].className.replace(' active', '')
    }
    if(heroIndex > item.length){
        heroIndex = 1
    }
    dots[heroIndex-1].className += ' active';
    item[heroIndex-1].classList.toggle('active')
    heroIndex++;
}
setInterval(autoSlide,8000)
