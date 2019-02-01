// Baskets item post
const basketsBtn = document.querySelectorAll('.baskets-item-know a')
const basketsItem = document.querySelectorAll('.baskets-item')
const basketsClose = document.querySelectorAll('.baskets-item-post')

for (let i = 0; i < basketsBtn.length; i++) {
    basketsBtn[i].addEventListener('click', function(e) {
        for (let ii = 0; ii < basketsItem.length; ii++) {
          if (ii !== i) 
          basketsItem[ii].classList.remove('active')
        }
        basketsItem[i].classList.toggle('active');

        basketsClose[i].addEventListener('click',function(e){
            basketsItem[i].classList.remove('active')
        })
    })
}