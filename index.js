// CONSTANTES

const cantNumCarton = 15;
const maxValor = 90;
const listaNumTotal = [];

// TARJETONES

let player = [];
let cpu =[];

// FUNCIONES

function generarTarjeton(max) {
  let cartoon=[]
  let num, ver
  max++;
  for(let i=0;i<cantNumCarton;i++){
    num = Math.floor(Math.random() * max);
    ver = repetido(num,cartoon);
    if (ver) i--;
    else {
      cartoon.push(num)
    }
  }
  return cartoon
}

function repetido(num, cartoon) {
  for (let i = 0; i < cartoon.length; i++) {
    if (num == cartoon[i]) {
      return true;
    }
  }
  return false;
}



for (let i = 0; i < 90; i++) {
  listaNumTotal[i] = i + 1;
}

player= generarTarjeton(maxValor);
cpu = generarTarjeton(maxValor);

console.log(player,cpu)