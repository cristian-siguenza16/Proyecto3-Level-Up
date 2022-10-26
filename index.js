const body = document.getElementById("body");
const btnAleatorio = document.getElementById("aleatorio");
const color = document.getElementById("color");

const colores = ["White", "Blue", "Red", "Green", "Darkblue", "Darkgreen", "Orange", "Purple", "Yellow", "Pink", "Indigo"];

btnAleatorio.addEventListener('click', aleatorio);
function aleatorio() {
    colorAleatorio = colores[Math.floor(Math.random() * 11)];
    color.innerText = colorAleatorio;
    body.style = "background-color: " + colorAleatorio;
    btnAleatorio.style.borderColor = "black";
}
