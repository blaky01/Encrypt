/*function hide(){
	document.getElementById("imgcartoon").style.display = "none";
}*/

function encrypt() {
  

    var text = document.getElementById("inptext").value.toLowerCase();
    const acento = /[àèìòùáéíóúâêîôûäëïöü]/gm;
    const spcaracter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gm;
        
   
   if(text.match(acento) || text.match(spcaracter) || text==""){
            swal("Algo salio mal", "Por favor, procure que las letras no estén acentuadas, que no haya ningin"+ 
                "caracter especial o que el area de encriptado/desencriptado no se encuencuente vacia", "error");
        }
    else{
        var encryptxt = text.replace(/e/gim, "enter");
    var encryptxt = encryptxt.replace(/o/gim, "ober");
    var encryptxt = encryptxt.replace(/i/gim, "imes");
    var encryptxt = encryptxt.replace(/a/gim, "ai");
    var encryptxt = encryptxt.replace(/u/gim, "ufat");
    /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
       "g" se utiliza para alterar una sentencia completa
       "i" es para que no se distinga entre minusculas y mayusculas
       "m" es para alterar o modificar varias lineas*/
    document.getElementById("mensaje").style.backgroundImage = "none";
    document.getElementById("mensaje").innerHTML = encryptxt;
    }
}

function desencrypt() {
    var text = document.getElementById("inptext").value.toLowerCase();
    const acento = /[àèìòùáéíóúâêîôûäëïöü]/gm;
    const spcaracter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gm;
        
   
   if(text.match(acento) || text.match(spcaracter) || text==""){
            swal("Algo salio mal", "Por favor, procure que las letras no estén acentuadas, que no haya ningin"+ 
                "caracter especial o que el area de encriptado/desencriptado no se encuencuente vacia", "error");
    }else
    {
    var desencryptxt = text.replace(/enter/gim, "e");
    var desencryptxt = desencryptxt.replace(/ober/gim, "o");
    var desencryptxt = desencryptxt.replace(/imes/gim, "i");
    var desencryptxt = desencryptxt.replace(/ai/gim, "a");
    var desencryptxt = desencryptxt.replace(/ufat/gim, "u");
     /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        "g" se utiliza para alterar una sentencia completa
        "i" es para que no se distinga entre minusculas y mayusculas
        "m" es para alterar o modificar varias lineas*/
   document.getElementById("mensaje").style.backgroundImage = "none";
    document.getElementById("mensaje").innerHTML = desencryptxt;
}
}

function copy(){
    var contenido = document.querySelector(".msj");
    contenido.select();
    document.execCommand("copy");
}