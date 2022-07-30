var a;  // declarando

var b='b';  // declarando y asignando (inicializando)

b='bb';  // Reasignando

var a='aa';  // redeclarando


// Gobal Scope

var fruit='Apple';  // global

console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


// si una variable no se declara, js la toma como global
function countries(){
    country='Colombia';
    console.log(country);
}

countries();console.log(country);