let num = 1;
let resultado;
let armazena;
let mostrar = document.getElementById("mostrar");
let h1 = document.getElementById('h1');

function calculo(num) {
  mostrar.innerHTML = "";
  document.getElementById("escolha").innerHTML = "";
  document.getElementById("voltar").style.visibility = "visible";
  h1.innerHTML = `Tabuada do número ${num}`;

  for (let i = 1; i < 10; i++) {
    resultado = num * i;
    armazena = `${num} x ${i} = ${resultado}`;
    mostrar.innerHTML += armazena + "<br>";
  }
}
