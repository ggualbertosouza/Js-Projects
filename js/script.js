var time

var h = 0
var m = 0
var s = 0
var mm = 0

function start(){
    time = setInterval(()=>{timer()}, 10)
}

function pause(){
    clearInterval(time)
}

function restart(){
    clearInterval(time)
    h = 0
    m = 0
    s = 0
    mm = 0
    document.querySelector('.cronometro').innerHTML = '00:00:00:00'
}
function timer(){
   mm++

   if(mm == 100){
    mm = 0
    s++
   }

   if(s == 60){
    s = 0
    m++
   }

   if(m == 60){
    m = 0
    h++
   }

    var numero = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (mm < 10 ? '0' + mm : mm)
    document.querySelector('.cronometro').innerHTML = numero
    
}

