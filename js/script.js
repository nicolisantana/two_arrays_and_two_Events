function Funcaogatinho() {
    document.body.style.backgroundColor='#f8ca91';
}
function Funcaogatinho1() {
    document.body.style.backgroundColor='#8cb4fd';
}
function Funcaogatinho2(){
    document.body.style.backgroundColor = '#ece098';
}
function Funcaogatinho3(){
    document.body.style.backgroundColor = '#b90000';
}

nomesCats= new Array;

for(x=0;x<=3;x++){
    nomesCats[x] = prompt("Digite o " + (x+1) + "º nome do gatinho:");
}

document.write(nomesCats.sort());


 