const navLinks = document.querySelector('.navLinks')
const openBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.cancel-btn')
const container = document.querySelector('.cont')

const body = document.querySelector('body')
openBtn.addEventListener('click',() => {
   navLinks.classList.add('active')

   body.classList.add('noscroll')
   
})
closeBtn.addEventListener('click',() => {
   navLinks.classList.remove('active')
   body.classList.remove('noscroll')
   


})