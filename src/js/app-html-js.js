console.log('//--- js ok ---\\\\');
//var v1 = document.getElementById('divTeste');
//console.log(v1.innerHTML);

var d1 = document.getElementById('divString');

var palavra = 'palavra ou frase';
var palavraDT = typeof(palavra); //--string
console.log(palavraDT);
var palavraObjeto = new String('palavra2');
var palavraObjetoDT = typeof(palavraObjeto); //--object
console.log(palavraObjetoDT);


var str = new String('ok');
if('ok' == str)
 console.log('string semelhantes')
else 
 console.log('string diferentes 1')
  
if('ok' === str)
 console.log('string iguais')
else 
 console.log('string diferentes 2')

 if('ok' === str.toString())
 console.log('string com o mesmo valor')
else 
 console.log('string diferentes 3')

 var vetor = [];
var objeto = {};        
var vetorDT = typeof(vetor);   //--object
var objetoDT = typeof(objeto); //--object

console.log(vetorDT)
console.log(vetorDT)

var v2 = 'teste, uma frase de teste.';
 console.log(v2.substr(7, 3));    //--uma
 console.log(v2.substring(7, 16)); //--uma frase
