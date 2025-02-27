// function modoOscuroClaro() -> lista para personalizar los colores individualmente!!!
var a = "oscuro";
var b = "claro";

function modoOscuro() {
document.getElementById("sec-oscura").style.backgroundColor="#141414";
document.getElementById("sec-oscura").style.color="#29F209";
document.getElementById("experiencia").style.backgroundColor="#1E1E1E";
document.getElementById("experiencia").style.color="#7DA0A3";
document.getElementById("experiencia").style.boxShadow = "7px 7px 15px lightblue";
document.getElementById("habilidades").style.backgroundColor="#1E1E1E";
document.getElementById("habilidades").style.color="#ADB385";
document.getElementById("habilidades").style.boxShadow = "7px 7px 15px lightyellow";
document.getElementById("formacion").style.backgroundColor="#1E1E1E";
document.getElementById("formacion").style.color="#B38774";
document.getElementById("formacion").style.boxShadow = "7px 7px 15px rgb(255, 134, 134)";
document.getElementById("header-js").style.backgroundColor="#272822";
document.getElementById("footer-js").style.backgroundColor="#2A2A2A";
}

function modoClaro() {
document.getElementById("sec-oscura").style.backgroundColor="#f5f5f5";
document.getElementById("sec-oscura").style.color="#000000";
document.getElementById("experiencia").style.backgroundColor="white";
document.getElementById("experiencia").style.color="black";
document.getElementById("experiencia").style.boxShadow = "7px 7px 15px rgb(206, 203, 203)";
document.getElementById("habilidades").style.backgroundColor="white";
document.getElementById("habilidades").style.color="black";
document.getElementById("habilidades").style.boxShadow = "7px 7px 15px rgb(206, 203, 203)";
document.getElementById("formacion").style.backgroundColor="white";
document.getElementById("formacion").style.color="black";
document.getElementById("formacion").style.boxShadow = "7px 7px 15px rgb(206, 203, 203)";
document.getElementById("header-js").style.backgroundColor="#003F8E";
document.getElementById("footer-js").style.backgroundColor="#003F8E";
}

function modoOscuroClaro(){    
     if(b == a){
        modoClaro();
        document.getElementById("boton").value = "MODO OSCURO";
        a="oscuro"; 
    } else{
        modoOscuro();
        document.getElementById("boton").value = "MODO CLARO";
        a=b;
    } 
}

function fechaJs(){ //ahora incorpore <br> para salto de linea que era necesario
    var fechaActual= new Date().toLocaleDateString('es-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}); 
    document.getElementById("txt-fecha").innerHTML="estás visitando la página el: <br />" + fechaActual;   
}
fechaJs();    // creada la función por si la tengo que llamar en varias pag/partes   

// Get the button:
let mybutton = document.getElementById("myBtn");

// Aparece el boton cuando se baja scrolleando a 20px (o +) desde el principio de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando se hace click en el boton, se scrollea hacia el principio de la página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari (Apple)
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}