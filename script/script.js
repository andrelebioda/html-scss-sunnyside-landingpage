const button = document.querySelector('.toggle')
const navMenu = document.querySelector('.menu')

button.addEventListener('click', () => {
  button.classList.toggle('active')
  navMenu.classList.toggle('show')
})
