let cart = document.querySelectorAll(".recipes1")
let description = document.querySelectorAll('.description')
let q = document.querySelectorAll('.description1')

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', function(){
        description[i].classList.toggle('active')
    })    
}
for (let i = 0; i < description.length; i++) {
    description[i].addEventListener('click', function() {
        description[i].classList.toggle('active')
    })
}
q.forEach(item=>{
    item.addEventListener('click', function(e){
        e.stopPropagation()
    })
})