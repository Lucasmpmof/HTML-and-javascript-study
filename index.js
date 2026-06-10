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
  let inputTexto = document.getElementById("coloração");
  let espaçoCor = document.getElementById("espaço");
  espaçoCor.style.backgroundColor = inputTexto.value;
}

function Salvar() {
  if (contador_num == 0) {
    num_salvo1.innerText = count + "- 0";
    num_salvo1 = count;
    count = 0;
    contador_num = +1;
  } else if (contador_num == 1) {
    num_salvo2.innerText = num_salvo1 + "-" + count;
    count = 0;
    contador_num = +1;
    console.log(count);
  } else if (contador_num == 2) {
    num_salvo1.innerText = count + "- 0";
    num_salvo1 = count;
    contador_num = 0;
  }
}
