// CONSTANTES

const cantNumCarton = 15;
const maxValor = 90;
const listaNumTotal = [];

// TARJETONES

let player = [];
let cpu = [];

// FUNCIONES

function generarTarjeton(max) {
  let cartoon = [];
  let num, ver;
  max++;
  for (let i = 0; i < cantNumCarton; i++) {
    num = Math.floor(Math.random() * max);
    ver = repetido(num, cartoon);
    if (ver) i--;
    else {
      cartoon.push(num);
    }
  }
  return cartoon;
}
//Función encontrar si un numero es repetido
function repetido(num, cartoon) {
  for (let i = 0; i < cartoon.length; i++) {
    if (num == cartoon[i]) {
      return true;
    }
  }
  return false;
}
//Función mostar en pantalla el cartón del jugador
function CreateCartoonPlayer(player) {
  const cartoonPlayer = document.getElementById("player");
  const fragmentPlayer = document.createDocumentFragment();
  let template = document.querySelector("#div-cartoon").content;
  const divPlayer = document.createElement("div");
  divPlayer.setAttribute("class", "bodyPlayer");

  const tituloPlayer = document.createElement("h2");
  tituloPlayer.setAttribute("class", "tituloPlayer");
  tituloPlayer.textContent = "PLAYER";
  cartoonPlayer.appendChild(tituloPlayer);

  player.forEach((num) => {
    template.querySelector(".numCartoon p").textContent = num;
    const clone = template.cloneNode(true);
    fragmentPlayer.appendChild(clone);
  });

  divPlayer.appendChild(fragmentPlayer);
  cartoonPlayer.appendChild(divPlayer);
}

//Función mostar en pantalla el cartón del CPU

function CreateCartoonCPU(cpu) {
  const cartoonCPU = document.getElementById("cpu");
  const fragmentCPU = document.createDocumentFragment();
  let template = document.querySelector("#div-cartoon").content;
  const divCPU = document.createElement("div");
  divCPU.setAttribute("class", "bodyCPU");

  const tituloCPU = document.createElement("h2");
  tituloCPU.setAttribute("class", "tituloCPU");
  tituloCPU.textContent = "CPU";
  cartoonCPU.appendChild(tituloCPU);

  cpu.forEach((num) => {
    template.querySelector(".numCartoon p").textContent = num;
    const clone = template.cloneNode(true);
    fragmentCPU.appendChild(clone);
  });

  divCPU.appendChild(fragmentCPU);
  cartoonCPU.appendChild(divCPU);
}

//Mostar imagen circular en pantalla

function CreateCircle() {
  const seccionCircle = document.getElementById("ball");
  const imageCenter = document.createElement("img");
  imageCenter.setAttribute("src", "./images/circle-gray.jpg");
  imageCenter.setAttribute("class", "ball");
  seccionCircle.appendChild(imageCenter);
}

//Detectar click en el circulo

function detectarClickCirculo() {
  const container = document.querySelector(".container");
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("ball")) {
      generarAleatorio()
    }
  });
}

function generarAleatorio(){

}

player = generarTarjeton(maxValor);
cpu = generarTarjeton(maxValor);

//ESTRUCTURA PAGINA

//generar estructura player

CreateCartoonPlayer(player);
CreateCartoonCPU(cpu);
CreateCircle();
let arrayNum =[]
detectarClickCirculo()
