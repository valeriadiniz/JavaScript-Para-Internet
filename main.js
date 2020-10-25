function clicou(){
  document.getElementById("agradecimento").innerHTML =  "<b>Obrigado por clicar</b>";
// o innerHTML permite não só colocar texto como colocar elementos html também

  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar");
}

function clicou1(){
  window.open("https://github.com/valeriadiniz");
  //window.location.href = "https://github.com/valeriadiniz"; //esse abre na mesma guia aberta
}

function trocar(elemento){
  elemento.innerHTML = "Obrigado por passar o mouse aqui";
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui";
  //alert("trocar texto");
}

function voltar(elemento){
  elemento.innerHTML = "Passe o mouse aqui";
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("página carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);
}







/*
var validar = 0;

function validaIdade(idade) {
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = 22;
//var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(validar);
*/

/*function soma(n1, n2) {
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

console.log(soma(5,10));
//alert(soma(5, 10));
console.log(setReplace("Vai Brasil", "Brasil", "Corinthians"));
//alert(setReplace("Vai Brasil", "Brasil", "Corinthians"));
*/

/*
var d = new Date();
//alert(d);
//console.log(d);
console.log(d.getMinutes); //get da para puxar dia, hora, minutos etc separados o mês deve ser acrescentado + 1
*/

/*
var count;

for(count=0; count <= 5; count++){
    //alert(count);/desta forma será exibido um pop-up com ok a cada número do laço
    console.log(count);
};
*/

/*var count = 0;

while (count <= 6){
    console.log(count);
    //alert(count); //desta forma será exibido um pop-up com ok a cada número do laço
    count++;
};
*/

/*
var idade = prompt("Qual a sua idade?"); // aqui funciona como uma pergunta pop-up
//var idade = 18;

if (idade >= 18) {
    console.log("maior de idade");
}else{
    console.log("menor de idade")
};
*/

/*
//lista de dicionários
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log("frutas");
//alert(frutas[1].nome);
console.log(frutas[1].cor);
*/

/*
//dicionário
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);
//console.log(fruta.nome);
*/

/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString);
//console.log(lista[0]); //imprime maça
//console.log(lista.toString()[0]); //imprime o primeiro caractere da string m
//console.log(lista.join (" ")); //transforma elementos em string mas você pode definir a "separação" dos elementos do array
*/

/*var nome = "Valéria Diniz";
var idade = 29;
var idade2 = 10;
var frase = "Brasil é o melhor time do mundo"

//alert(nome + "tem" + idade + "anos"); //concatenando strings com +
//alert(idade + idade2); // se fosse var idade2 = "10"; daria valores diferentes pois o valor seria uma string

console.log(nome);
console.log(idade + idade2);
//console.log(frase.toLowerCase()); //ou console.log(frase.toUpperCase()); 
console.log(frase.replace("Brasil","Corinthians"));
//alert(frase.replace("Brasil", "Corinthians"));
*/
