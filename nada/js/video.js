const video=document.querySelector('video')

const iniciar = document.querySelector('#btn-play')
iniciar.addEventListener('click',()=>{
   video.play()
})
const pause = document.querySelector('#btn-pause')
pause.addEventListener('click',()=>{
  video.pause()
})

const modal=document.querySelector('.modal-menu')

const btnmodal=document.querySelector('#close-modal')
btnmodal.addEventListener('click',()=>{
  modal.classList.add('remove-me')
})

const btnad =document.querySelector('#add-modal')
btnad.addEventListener('click',()=>{
  modal.classList.remove('remove-me')
})