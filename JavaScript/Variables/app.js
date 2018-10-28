var favoriteFood='pizza';
var numOfSlices=8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe=true;
console.log(changeMe);

const entree='Enchiladas';
console.log(entree);

let levelUp=10;
levelUp+=5;
console.log(levelUp);
let powerUp=9001;
powerUp-=100;
console.log(powerUp);
let multiplyMe=32;
multiplyMe*=11;
console.log(multiplyMe);
let divideMe=1152;
divideMe/=4;
console.log(divideMe);

let gainedDollar=3;
gainedDollar++;
console.log(gainedDollar);
let lostDollar=50;
lostDollar++;
console.log(lostDollar);
let gainedDollar2=1;
console.log(gainedDollar2++);
//expected results 2
//actual results 1 

let favoriteAnimal = 'dog';
console.log('My favorite animal '+favoriteAnimal);

const myName='Caleb';
let myCity='Boise';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable=1;
console.log(typeof newVariable);

//Temperature converter

//forcasted temperature in kelvin
let kelvin=293;
//variable storing the temperature in celsius
let celsius;
//variable storing the temperature in fahrenheit
let fahrenheit;
//convert kelvin to celsius
celsius=kelvin-273;
//convert celsius to fahrenheit
fahrenheit=celsius*(9/5)+32;
//convert fahrenheit to nearest integer
fahrenheit=Math.floor(fahrenheit);
//log results
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)