
function pulaLinha() {

  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

function sorteia(n)
{
  return Math.round(Math.random() * n);
}

var number = sorteia(100);
var user = parseInt(prompt("Se já pensou num valor, digite: "));


if(number == user){
  mostra("Parabéns!! Você acertou");
}else{
  var cont = 1

  while(cont <= 10) {
    mostra("Eii amigo você errou, tente novamente. <br>O numero pensado foi: " + number);
    // cont = cont + 1
  }
  
}




