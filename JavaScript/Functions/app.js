function getRemonder() {
    console.log('Water the plants.');
}
function greetInSpanish() {
    console.log('Buenas Tardes.');
}

function sayThanks(name) {
    console.log(`Thank you ${name} for your purchase! We appreciate your business.`);
}
sayThanks('person');
sayThanks('Mike');

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`remember to buy ${item1}`);
    console.log(`remember to buy ${item2}`);
    console.log(`remember to buy ${item3}`);
}
makeShoppingList();

function monitorCount(rows, columns) {
    let monitors;
    monitors = rows * columns;
    return monitors;
}
console.log(monitorCount(10, 5));

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);


const plantNeedsWater = day => day == 'Wednsday' ? 'true' : 'false';
console.log(plantNeedsWater('Tuesday'));

//Rock Paper Scissors
const getUserChoice = userInput => {
    let response;
    userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'|| userInput=='bomb') {
        response = userInput;
    } else {
        response = 'Invalid Choice';
    }
    return response;
}
const getComputerChoice = () => {
    const choice = getRandomInt(3);
    let compChoice;
    switch (choice) {
        case 0:
            compChoice = 'rock';
            break;
        case 1:
            compChoice = 'paper';
            break;
        case 2:
            compChoice = 'scissors';
            break;
        default:
            break;
    }
    return compChoice;
}
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice==computerChoice){
        return 'tie';
    }else{
        if(userChoice=='rock'){
            if(computerChoice=='paper'){
                return 'computer wins';
            }else{
                return 'human wins';
            }
        }else if(userChoice=='paper'){
            if(computerChoice=='scissors'){
                return 'computer wins';
            }else{
                return 'human wins';
            }
        }else if(userChoice=='scissors'){
            if(computerChoice=='rock'){
                return 'computer wins';
            }else{
                return 'human wins';
            }
        }else if(userChoice=='bomb'){
            return 'human wins';
        }
    }
}
const playGame =() => {
    userChoice=getUserChoice('paper');
    computerChoice=getComputerChoice();
    console.log(userChoice,computerChoice)
    console.log(determineWinner(userChoice,computerChoice));
}
playGame();