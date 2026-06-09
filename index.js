let num = document.getElementById("numero");
let count = 0;

let num_salvo1 = document.getElementById("num1");
let num_salvo2 = document.getElementById("num2");
let contador_num = 0;
function Change() {
  count = count + 1;
  num.innerText = count;
}

function Resetar() {
  count = 0;
  num.innerText = count;
}

function Salvar() {
  if (contador_num == 0) {
    num_salvo1.innerText = count;
    count = 0;
    contador_num = +1;
  }
  if (contador_num == 1) {
    num_salvo2.innerText = count;
    count = 0;
    contador_num = -1;
    console.log(count);
  }
}
