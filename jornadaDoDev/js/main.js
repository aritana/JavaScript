
//getElementsById
document.getElementById("logradouro").innerHTML="Rua dos humanos, número zero";
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
var carro ={
 make:"Ford",
 model: 'Mustang'  ,
 year:'1969'
};
//ou
var mycar = new Object();
mycar.make = 'Ford';
mycar.model = 'Mustang';
mycar.year='1969';
console.log(carro, mycar);

//Arrays
var frutaPortugues = 1;
var frutaEspanhol=0;
fruta =[["naranja","lemon"],["laranja","limão"]];
console.log(fruta[frutaEspanhol][0]);

//forEach, map e while.
var classeJs =  document.getElementsByClassName('js');

for(let i=0;  i < classeJs.length; i++) {
  console.log("curso: " + classeJs[i].innerHTML);
}

array = [1,2,3];
array.forEach(element => {
  console.log(element);
});

array.map(function(element, index) 
{
  console.log(index, element );
});

//Funções

function minhaFuncao(objeto)
{
  objeto.make =  "Fiat";
  objeto.country='Brazil';
}
var meuCarro =  {make: "Honda", model: "Accord", year: 1998};
var x, y;
x =  meuCarro.make;
y =  minhaFuncao(meuCarro);
console.log(meuCarro);

//funçao anônima
  //não precisa ter um nome.
  var soma =  function(a,b){
    return a+b;
  }

  var total =  soma(3,2);
  console.log(total);

  function map(total, x){
      y = 5;
      return total(x,y);
  }

  function soma(a,b){
    return a+b;
  }

  console.log(map(soma,9));

  //eventos onload
  window.onload = function(){
    console.log("Pagina Carregada com sucesso!");
  }

  //Evento click
  //console.log(document.getElementById("btn"));
  var btn = document.getElementById("btn");
  btn.addEventListener('click',function(){
    console.log("clique");
  });

  //Hover, mouseover
  //Eventos: keyUP
  var linguagens =  document.getElementById("li");
  linguagens.addEventListener("change", function(){
      var options = this.options;
      var itemAtual = this.selectedIndex;
      console.log(options[itemAtual].text);

  });

  var search = document.getElementById('search');
  search.addEventListener("keyup",function(){
      var result = document.getElementById('result');
      result.innerHTML = this.value;
      console.log(this.value);
  });
  var form= document.querySelector("form");

  //console.log(form.elements[1]);

  form.addEventListener("submit",function(){
    console.log(this.elements);
    for(let i =0; i < this.elements.length; i++){
       var element = this.elements[i];
       if(element ==""){
         this.elements[i].classList.add("error");
       }
    }
  });

  //ArrowFunction

  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]