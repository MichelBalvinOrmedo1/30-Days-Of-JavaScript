// this is your main.js script
// 01
let firstName = "Michel";
let lastName = "Balvin Ormedo";
let country = "Perú";
let age = 22;
let isMarried = false;
const año = new Date;
let year = año.getFullYear();
console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(age), typeof(isMarried), typeof(year));


//02
console.log(('10' == 10) ? true:false)

//03
console.log((parseInt('9.8')== 10) ? true:false);

//04

console.log(('HolaMundo'.length === 9 ) ? true : false);
console.log((25 > 13) ? true:false);
console.log((/\D+/g.test('hola'))? true: false);

//Tiene que comenzar con mayuscula y que termine en "."
console.log((/^[A-Z].*\.$/.test("Hola Como estas")) ? true:false);
console.log(("agsaga" == Number) ? true:false);
console.log((45545454==String) ? true:false);

//05

/* 
4 > 3  true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4' true
4 === '4' false
*/
console.log("----------------------")
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log("----------------------")

//06
/*
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
*/