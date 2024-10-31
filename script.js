let movingElement = document.getElementById('box')
let burningElement = document.getElementById('bati')
let flameburn = document.getElementById('flame2')
let candle = document.getElementById('candle')
let content = document.getElementById('content')
let song = document.getElementById('song')
let sparkle = document.getElementById('sparkles')
sparkle.style.display = 'none'
content.style.display = " none"
const targetx = 132.77
const targety = 454.99
movingElement.addEventListener("touchmove",(e)=>{
  e.preventDefault()
  setTimeout(function() {
  song.play()
}, 100);
  Array.from(e.changedTouches).forEach(touch=>{
    movingElement.style.top = `${(touch.pageY)}px`
    movingElement.style.left = `${touch.pageX}px`
    console.log(movingElement.style.top )
    if(Math.abs(touch.pageX-targetx)<10 && Math.abs(touch.pageY-targety)<10 ){
  flameburn.style.display='block'
  sparkle.style.display = 'block'
      movingElement.style.display = 'none'
     content.style.display = 'block'
     candle.style.background = "red"
     
  }
  
  })
})

