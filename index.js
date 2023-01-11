var button = document.getElementsByClassName("drum")
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",function(event){
        var buttontext = button[i].innerHTML;
        drumsound(buttontext)
    })
    
}
document.addEventListener('keypress',function(event){
    drumsound(event.key)
})

function drumsound(key){
    if(key=='w'){
        var wsound= new Audio("w.mp3")
        wsound.play()
    }
    else  if(key=='a'){
        var asound= new Audio("a.mp3")
        asound.play()
    }
    else  if(key=='s'){
        var ssound= new Audio("s.mp3")
        ssound.play()
    }
    else  if(key=='d'){
        var dsound= new Audio("d.mp3")
        dsound.play()
    }
    else  if(key=='j'){
        var jsound= new Audio("j.mp3")
        jsound.play()
    }
    else  if(key=='k'){
        var ksound= new Audio("k.mp3")
        ksound.play()
    }

    else  if(key=='l'){
        var lsound= new Audio("l.mp3")
        lsound.play()
    }


}