var dev = 0

document.querySelector(".chang-arrow").addEventListener("click",function(){
    if(dev == 0){
        document.querySelector(".expanded-contant").style.display="none"
        document.querySelector(".chang-arrow").innerHTML='<i class="fa-solid fa-angle-up"></i>'
        dev = 1
    }
    else{
        document.querySelector(".expanded-contant").style.display=""
        document.querySelector(".chang-arrow").innerHTML='<i class="fa-solid fa-angle-down"></i>'
        dev = 0
    }
})


var dev = 0

document.querySelector(".chang-arrow2").addEventListener("click",function(){
    if(dev == 0){
        document.querySelector(".hidden").style.display="none"
        document.querySelector(".chang-arrow2").innerHTML='<i class="fa-solid fa-angle-up"></i>'
        dev = 1
    }
    else{
        document.querySelector(".hidden").style.display=""
        document.querySelector(".chang-arrow2").innerHTML='<i class="fa-solid fa-angle-down"></i>'
        dev = 0
    }
})

var dev = 0

document.querySelector(".chang-arrow3").addEventListener("click",function(){
    if(dev == 0){
        document.querySelector(".hid2").style.display="none"
        document.querySelector(".chang-arrow3").innerHTML='<i class="fa-solid fa-angle-up"></i>'
        dev = 1
    }
    else{
        document.querySelector(".hid2").style.display=""
        document.querySelector(".chang-arrow3").innerHTML='<i class="fa-solid fa-angle-down"></i>'
        dev = 0
    }
})

var dev=0

document.querySelector(".slidebtn").addEventListener("click",function(){
    document.querySelector(".sidbar").classList.toggle('active')
    document.querySelector(".sc").classList.toggle('hidcontent')
    document.querySelector(".jb").classList.toggle('hidcontent')
    if(dev == 0){
    document.querySelector(".slidebtn").innerHTML='<i class="fa-solid fa-arrow-right"></i>'
    dev=1
    }
    else{
        document.querySelector(".slidebtn").innerHTML='<i class="fa-solid fa-arrow-left"></i>' 
        dev=0
    }
})