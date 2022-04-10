
const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', onClick)
  
function onClick() {
  
    hamburger.classList.toggle('is-active')
    console.log('Did this trigger?')
  }

