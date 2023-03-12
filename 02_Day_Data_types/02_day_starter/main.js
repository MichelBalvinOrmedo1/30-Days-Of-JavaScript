// this is your main.js script
let desafio = '30 días de JavaScript';

let saluda = "hola"


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
let patter = /a/gi;
console.log(desafio.match(patter))
let concatenar = ''
console.log(concatenar.concat('30 dias de ', 'Javascript'))
console.log(desafio.repeat(2))


// EJERCICIO 2
console.log('The quote There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teach1es us to help one another.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

console.log(typeof('10') == 10)

console.log(parseFloat(9.8) == 10)
console.log('Python'.includes('on') && 'jargon'.includes('on'));

console.log(Math.floor(Math.random() * (100 - 0 + 1) + 0));
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
console.log(Math.floor(Math.random() * (255 - 0 + 1) + 0))
let ejemm4 = "JavaScript";
let random = Math.floor(Math.random() * (ejemm4.length - 0 +1) +0);
console.log("----");
console.log(ejemm4.charAt(random));

console.log("1 1 1 1\n 2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125")

let ejemm5 = 'You cannot end a sentence with because because because is a conjunction';
let patron = /because/gi;
console.log(ejemm5.match(patron).join(" "));

// Nivel 3
let ejemm6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(ejemm6.match(/love/gi).length);

let ejemm7 = 'You cannot end a sentence with because because because is a conjunction';
console.log(ejemm7.match(/because/g).length)

let ejemm8 ='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(ejemm8.replace((/[^ \w]/g),''))

let ejemm9 = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let valor =ejemm9.match(/\d+/g);
console.log(((Number(valor[0])*12) + Number(valor[1]) + (Number(valor[2]*12))))