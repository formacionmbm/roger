function toUpperCase(){
let texto=document.getElementById("texto").value;
document.getElementById("texto").value=texto.toUpperCase();
}

function toUpperCasePropioElemento(element){
    element.value=texto.toUpperCase();
}

let elemento = document.getElementById("texto");

elemento.addEvetListener("keyup",(event) =>{
    event.target.value=event.target.value.toUpperCase(); 
});