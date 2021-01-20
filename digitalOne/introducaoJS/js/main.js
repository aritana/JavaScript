/*var nome = "Aritana Noara";
var idade = 34;
var frase =  "Japão é o melhor time do  mundo";
var frase2 =  frase.replace ("Japão","Brasil");
//alert("Hello world " +  nome);
//alert (idade + " anos se esforçando para servir ao país.");

console.log(idade);
console.log(idade + 1);
console.log(frase2);
console.log(frase.toUpperCase());

//Listas
var lista = [ "maçã","pera", "uva"];
lista.push("abacate");//adiciona no final
console.log(lista);

lista.pop();//retira do fim
console.log(lista);
console.log("Tamanho da lista: "+ lista.length);
console.log("Reverso:" + lista.reverse());

//to string
console.log(lista);
console.log("ToString: " + lista.toString());
console.log("ToString[0]: " + lista.toString()[0]);
console.log("lista.join: " + lista.join(" * "));

//dicionário, como um json.
var dicFruta = {nome:"maçã", cor:"vermelha"};
console.log(dicFruta);
console.log(dicFruta.nome + "-"+dicFruta.cor);

//lista de dicionários

var dicFrutas = [{nome:"maçã", cor:"vermelha"},{nome:"goiaba", cor:"vermelha"},{nome:"laranja", cor:"amarela"}];
console.log(dicFrutas[2].nome);

//condicional, laço e date.

var idade = 12;// prompt("Qual sua idade");
if (idade >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor e idade");
}

var count = 0;
while(count < 5){
    console.log(count);
    count ++;
}

var i ;
for(i =0; i<5; i++){
    console.log(i);
}

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Domingo";
weekday[1] = "Segunda";
weekday[2] = "Terça";
weekday[3] = "Quarta";
weekday[4] = "Quinta";
weekday[5] = "Sexta";
weekday[6] = "Sábado";

var n = weekday[d.getDay()];
console.log(n);
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));


//funções

function soma(a, b){
    return a + b;
}

console.log(soma(5,6));

//função para fazer replace
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

console.log(setReplace("Aritana é bem vendido","Aritana","Pipocas Aritana"));
*/

function aviso(){
    //alert("Obrigado por clicar");
    //document.getElementById("click1");
    //console.log(document.getElementById("click1"));
    document.getElementById("click1").innerHTML="<b></br>Obrigado por clicar</b>";

}
function redirecionar(){
    window.open("https://www.folha.uol.com.br/");
    //window.location.href="https://g1.globo.com/";
}
function mousemove(element){
    //document.getElementById("mouse").innerHTML="Obrigado por passar o mouse";
    element.innerHTML="Obrigado por passar o mouse";
    
}
function mouseout(element){
    //document.getElementById("mouse").innerHTML="Passe o mouse aqui";
    element.innerHTML="Passe o mouse aqui";
}

function load(){
    console.log("Página carregada");
}

function change(element){
    console.log(element.value);
}