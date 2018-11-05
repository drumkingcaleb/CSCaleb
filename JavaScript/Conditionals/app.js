
let sale=true;
if(sale==true){
    console.log('Time to buy!');
}else{
    console.log('Time to wait for a Sale.')
}

let hungerLevel=7;
if(hungerLevel>7){
    console.log('Time to eat!')
}else{
    console.log('We can eat later.');
}

let mood='sleepy';
let tirednessLevel=6;
if(mood=='sleepy'||tirednessLevel>8){
    console.log('Time to sleep.');
}

let wordCount = 3;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil= tool||'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


let isLocked = false;
/*if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}*/
isLocked ? console.log('You will need a key to open the door.'):console.log('You will not need a key to open the door.');

let isCorrect = true;
/*if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}*/
isCorrect ? console.log('Correct!'):console.log('Incorrect');

favoritePhrase = 'Love That!';
/*if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}*/

favoritePhrase=='Love That!' ? console.log('I love that!'):console("I don't Love that!");


let season = 'summer';

if (season === 'spring') {
  console.log(`It's ${season}! The trees are budding!`);
}else if(season =='summer'){
    console.log(`It's ${season}! Time to catch some rays on the beach`);
}else if(season == 'winter'){
    console.log(`It's ${season}! Time to make a Snowman!`);
}else if(season == 'fall'){
    console.log(`It's ${season}! The leaves are falling off the trees!`);
}else{
  console.log('Invalid season.');
}

let athleteFinalPosition ='first place';
switch(athleteFinalPosition){
    case('first place'):
        console.log('You get the Gold Medal!');
        break;
    case('second place'):
        console.log('You get the Silver Medal!');
        break;
    case('third place'):
        console.log('You get the Bronze Medal!');
        break;
    default:
        console.log('You are awarded no Medal!');
        break;
}

//Magic 8 ball
let username='';
username ? console.log(`Hello ${username}!`):console.log('Hello!');
let userQuestion='Should I eat Pizza?';
let randomNumber=getRandomInt(7);
let eightBall='';
switch(randomNumber){
    case 0:
        eightBall='It is certain';
        break;
    case 1:
        eightBall='It is decidedly so';
        break;
    case 2:
        eightBall='Reply hazy try again';
        break;
    case 3:
        eightBall='Cannot predict now';
        break;
    case 4:
        eightBall='Do not count on it';
        break;
    case 5:
        eightBall='My sources say no';
        break;
    case 6:
        eightBall='Outlook not so good';
        break;
    case 7:
        eightBall='signs point to yes';
        break;
    default:
        break;
}
console.log(eightBall);