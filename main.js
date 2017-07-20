'use strict';
const readlineSync = require('readline-sync');
function guessNumber() {
    const randomNumber = this.getRandomNumber();
    const inputGuessNumber=readlineSync.question(`the testNumber is ${randomNumber},please input the num is:`);
    let countA = 0;
    let countAll = 0;
    for(let index in randomNumber){
        if(inputGuessNumber.indexOf(randomNumber[index])!==-1){
            countAll++;
        }
        if(randomNumber[index]===inputGuessNumber[index]){
            countA++;
        }
    let countB=countAll-countA;
    return `${countA}A${countB}B`;
    }
};
function getRandomNumber() {
    let x= Math.floor(Math.random() * 9999 + 1000);
    return x.toString();
}
module.exports.guessNumber=guessNumber;
module.exports.getRandomNumber=getRandomNumber;

