
//getElementsById
document.getElementById("logradouro").innerHTML="Rua dos bobos número zero";
document.getElementById("timePequeno").innerHTML= "<h2>Atlético Mineiro</h2>";

//getElementsByClass
document.getElementsByClassName("timeGrande").innerHTML="Melhores do Mundo: Cruzeiro e Manchester";
document.getElementsByClassName("timeGrande")[0].innerHTML="Cruzeiro Cabuloso";
console.log(document.getElementsByClassName("timeGrande"));

//getElementsByTagName
console.log(document.getElementsByTagName("p"));
document.getElementsByTagName("p")[0].innerHTML="Rua dos cristais brilhosos";

//querySelector: Simplificação dos métodos anteriores
console.log(document.querySelector("#escritor1"));
console.log(document.querySelector(".escritor2"));//acessa apenas o primeiro elemento da classe
console.log(document.querySelector("p.escritor3"));//classe pertencente ao parágrafo

//querySelectAll: Seleciona todos os elementos, cria um node list, um array de leitura para acessar todos os elementos.
console.log(
   document.querySelectorAll(".filho")
 
);
console.log(
    document.getElementById("pai").querySelectorAll(".filho")[0].innerHTML//especifica melhor caso houver um paiX, paiY
);
//createElement
var img = document.createElement("img");
img.src="http://lorempixel.com/400/200";
document.getElementById("imagem1").innerHTML="<img src='"+img.src+"'alt='Girl in a jacket' width='500' height='600'>";
console.log(img);

//appendChild
var versa = document.createElement("p");
var sentra = document.createElement("p");
versa.innerHTML="versa";
sentra.innerHTML="sentra";

document.getElementById("nissan").appendChild(versa);
document.getElementById("nissan").appendChild(sentra);

//removeChild
var logan= document.createElement("p");
logan.innerHTML = "logan";

document.getElementById("nissan").removeChild(versa);//remove versa
document.getElementById("nissan").appendChild(logan);

//ParentNode: acessa o elemento pai de algum elemento que acessei
console.log("Parent Node");
console.log(document.querySelector(".elementos").parentNode);

//tipos de dados: string, number, undefined (não  encontrado), null: sem valor, boolean: true ou falso.
var  teste= "teste"; // string
console.log(typeof(teste));
teste = -2.5;
console.log(typeof(teste));
teste =  null; 
if(teste){ console.log("Not null") } else { console.log("Could be null") } ;//https://medium.com/javascript-in-plain-english/how-to-check-for-null-in-javascript-dffab64d8ed5
console.log(typeof(teste));
teste = true;
console.log(typeof(teste));

//Declarações: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals
 //Var: declara uma variável, opcionalmente, inicializando-a com um valor.
 //Let: declara uma variável local de escopo do bloco, inicializando-a com um valor.
 //const : declara uma constante de escopo de bloco, apenas de leitura.
   //um identificador em js deve começar com letra, _ ou $ (case sensitive)
   //uma variável declarada com var ou let sem especificar o valor inicial tem o valor undefined, utilizo undefined para testar se a var tem valor, se comporta como fasle.
     //uma tentativa de acesar uma variável não declarda resultará uma exceção referenceError.

     //Escopo: global: fora de função, local: dentro da função.
//14:Objetos
