// this is your main.js script
let desafio = '30 días de JavaScript';

console.log(desafio);
console.log(desafio.length);
console.log(desafio.toUpperCase());
console.log(desafio.toLowerCase());
console.log(desafio.substring(0,2))
console.log(desafio.substring(3,21))
console.log(desafio.includes("Script"))
console.log(desafio.split(' '));
let empre = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(empre.split(','));
console.log(desafio.replace('JavaScript','Python'));
console.log(desafio.charAt(15));
console.log(desafio.charCodeAt('J'));
console.log(desafio.indexOf('a'));
console.log(desafio.lastIndexOf('a'));
console.log( 'No puede terminar una oración con porque porque porque es una conjunción'.indexOf('porque'));
console.log('No puede terminar una oración con porque porque porque es una conjunción'.lastIndexOf('porque'));
console.log('No puede terminar una oración con porque porque porque es una conjunción'.search('porque'))
console.log(' 30 días de JavaScript '.trim())
console.log(desafio.startsWith("30")); // sirve para que si la oracion comienza por algo
console.log(desafio.endsWith("ipt")); // igual que el anterior pero la parte final
