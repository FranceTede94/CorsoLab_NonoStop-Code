/*
crea la scacchiera con un ciclo for.
Se hai bisogno modifica il file css a tuo piacimento
*/ 

document.addEventListener("DOMContentLoaded", function(){

    for(let i=0; i<64;i++){
    document.querySelector("#scacchiera ul").innerHTML += "<li>"+"</li>";
    }
    
    let lista = document.querySelectorAll("li");
    console.log(lista);

    for(let i=0;i<lista.length;i++){
        if ((i + Math.floor(i/8))% 2 == 0)
        {
            lista[i].style.backgroundColor="black";
        }   
    }
    
    });


