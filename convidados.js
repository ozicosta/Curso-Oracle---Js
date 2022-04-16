/*
var nome  = prompt("Digite seu nome: ");
var idade = prompt( nome + ", digite sua idade: ");
var irmao = prompt("Agora digite a idade de seu irmão: ")
document.write(nome + ", a média de idade entre voce e seu irmão é: " + idade/irmao);
 */
function pulaLinha() {

  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}
var nome = prompt("Informe seu nome: ");
// parseInt = converte string em numero
var convidados = parseInt(prompt  ("Digite o numero de convidados: "));
var vips = parseInt(prompt  ("Digite o numero de vips: "));

var total = convidados + vips;
mostra("O número total de convidados são: " + Math.round(total));

if(total >= 20){
  mostra(nome + ", você ultrapassou a lista de convidados!!")
}
if(total <= 19 && total >= 10){
  mostra(nome + ", quantidade de convidados adequada!");
}
if(total <=9 && total >=1){
  mostra(nome + ", acrescente mais nomes na lista!!");
}
else
  mostra(nome + ", você precisa de ao menos 1 convidado!!");

