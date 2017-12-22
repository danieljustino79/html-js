console.log('//--- js ok ---\\\\');
//var v1 = document.getElementById('divTeste');
//console.log(v1.innerHTML);

/*
//STRING
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
 console.log(v2.substring(7, 16)); //--uma frase*/

/* 
//NUMBER
var teste = 'ok';
if(isNaN(teste))
 console.log('não é um número')
else
 console.log('é um número')

 var v1 = 12.7; 
console.log(v1.toFixed(2)) //--12.70

var v2 = new Number(2);
console.log(typeof(v2))           //--object
console.log(typeof(v2.valueOf())) //--number

var v3 = 12.8;
var v4 = parseInt(v3);
console.log(v4)*/


/*//ARRAY
var vet = []; //--primitivo executa mais rápido
var vetDT =  typeof(vet); //--object
console.log(vetDT)        
console.log(Array.isArray(vet)) //--true

var vet2 = [10, 20, 50];    
var vet2DT =  typeof(vet2); //--object
console.log(vet2DT)   

var vet3 = new Array(10, 20, 50);
var vet3DT =  typeof(vet3); //--object
console.log(vet3DT)

var nro = '';
vet3.forEach(function(item) {
    nro += item;
}, this);
console.log(nro) //---102050

var vet4 = [{campo1:'Sam', campo2:1}, {campo1:'Ana', campo2:2}];
var vet4DT =  typeof(vet4); //--object
console.log(vet4DT)
var nomeNumero = '';
for(i=0; i<vet4.length; i++)
 nomeNumero += vet4[i].campo1 + '-' + vet4[i].campo2 + ';';
console.log(nomeNumero)


var vet = [10, 20, 30];    
console.log(vet.lenght) //---3

var i;
var resultado = '';
for(i = 0; i < vet.length; i++)
 resultado += vet[i] + ';';
console.log(resultado) //---10;20;30;

console.log(vet.toString()) //---10,20,30

console.log(vet.join(' | ')) //---10 | 20 | 30

var str = 'ana|sam|dan';
var lista = str.split('|');
console.log(lista.toString()) //--ana,sam,dan

console.log(vet3.toString())
vet3.unshift(444);
console.log(vet3.toString())
vet3.push(555);
console.log(vet3.toString())

vet3.splice(4);
console.log(vet3.toString())

vet3.pop();
console.log(vet3.toString())
vet3.shift();
console.log(vet3.toString())*/

/* //OBJECT
var d2 = { campo1: 'valorA', campo2: 'valorB' };
console.log(d2.campo2)

var d2 = { campo1: 'valorA', campo2: 'valorB', campo3: 'valorC' };
console.log(d2.campo1)
console.log(d2['campo2'])

var campos = Object.keys(d2);
console.log(campos)

for(var i=0; i<campos.length; i++)
 console.log(campos[i])

for(var prop in d2) 
 console.log(prop) */

 //JQUERY
 $(document).ready(function(){
  $('#texto1').text('valor *')
  $('.classe1').text('valor **')
  $('#txt1').val('valor ***')
  $('textarea').val('valor ****');

  document.getElementById('texto2').innerText = 'valor JS +'
  document.getElementById('t2').innerHTML = '<b>valor JS ++ negrito</b>'
  document.getElementById('txt2').value = 'valor JS +++'

  var v = $('#p1').prop('class');
  console.log(v)
  var v2 = $('#p1').attr('codigo');
  console.log(v2)
  var v3 = $('#p1').data('informacao');
  console.log(v3)

  $('#divEstilo').css('width', '50%').css('border', '1px solid blue');

  $('#btnAdd').click(function(){
      $('#divClasse').addClass('classeCor1');
  });
  $('#btnRem').click(function(){
    $('#divClasse').removeClass('classeCor1');
});
 $('#btnAlt').click(function(){
    $('#divClasse2').toggleClass('classeCor2');
}); 

var vet = [10, 20, 50];    
for(var i=0; i<vet.length; i++)
console.log('for:'+vet[i])

vet.forEach(function(item) {
    console.log('forEach:'+item)
}, this);

$('li').each(function(index, elementoHtml){
    console.log(index+' - '+elementoHtml.innerText)
    console.log('this:'+$(this).text())
});

$('#btnLink').click(function(){
    var cod = $(this).data('codigo');
    console.log('click cod:'+cod)
});

$('#btnLink2').on('click', function(){
    var cod = $(this).data('codigo');
    console.log('on cod:'+cod)
});
      
});

