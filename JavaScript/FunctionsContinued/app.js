/*
sleep debt calculator
author Caleb Stamper 
*/

const getSleepHours= day =>{

    const monday=6;
    const tuesday=5;
    const wednsday=11;
    const thursday=8;
    const friday=6;
    const saturday=9;
    const sunday=4;

    switch(day){
        case 'monday':
            return monday;
            break;
        case 'tuesday':
            return tuesday;
            break;
        case 'wednsday':
            return wednsday;
            break;
        case 'thursday':
            return thursday;
            break;
        case 'friday':
            return friday;
            break;
        case 'saturday':
            return saturday;
            break;
        case 'sunday':
            return sunday;
            break;
    }
}
const getActualSleepHours = () =>{
    
}