//var expresion1 = /[0123456789]/;

var expresion2 = /\d\d-\d\d-\d\d\d\d/

var expresion1 = /[0-9a-zA-Z]/;


var expresion3 = /\d*/;



console.log(expresion1.test('Sucedió en 1996'));
console.log(expresion2.test('24-20-2222'));
console.log(expresion3.test('asd'));