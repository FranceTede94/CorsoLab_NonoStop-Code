/*
inverti i colori dei div senza modificare la funzione aggiornaColore()
*/ 

let color1="#813B7C";
let color2="#59D044";

document.addEventListener("DOMContentLoaded",function(){
    
    aggiornaColore();
    document.querySelector("button").onclick=function(){
    invertiColori()
    }   
});


/*NON MODIFICARE QUESTA FUNZIONE*/
function aggiornaColore(){
    document.querySelector("#uno").style.backgroundColor=color1;
    document.querySelector("#due").style.backgroundColor=color2;
}


function invertiColori() {
    document.querySelector("#uno").style.backgroundColor=color2;
    document.querySelector("#due").style.backgroundColor=color1;
}