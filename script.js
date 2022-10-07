const menu = document.getElementById('menu')
const navigate = document.getElementById('navigate')
const closeMenu = document.getElementById('close-btn')  
const link = document.querySelectorAll('#link')

menu.addEventListener('click', (e) => {
  e.preventDefault()
  navigate.classList.toggle('show-nav')
})

closeMenu.addEventListener('click', (e) => {
  e.preventDefault()
  navigate.classList.remove('show-nav')
})

link.forEach(e  => {
  e.addEventListener('click', () => {
    navigate.classList.remove('show-nav')
  })
})
