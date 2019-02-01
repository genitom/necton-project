const target = document.querySelectorAll('[data-anime]')


//window -> janela do navegador
//window.innerHeight * 3 / 4  fica em um tamanho adequado pra animaçao
function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4; // ou window.pageYOffset + 500
    target.forEach(function(element){
        console.log(element)
        if((windowTop) > element.offsetTop){
            element.classList.add('animate')
        }
        else{
            element.classList.remove('animate')
        }
    })
}
window.addEventListener('scroll', function(){
    animeScroll()
})