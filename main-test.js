const sinon = require('sinon');
const readlineSync = require('readline-sync');

const guessNumberModule=require('./main');
function theTestGuessNumber1() {
    const randomNumber = sinon.stub(guessNumberModule, 'getRandomNumber').return('1234');
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('5678');
    const expectResult1 = '0A0B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '1 test passed' : '1 test failed');

}
function theTestGuessNumber2() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('5671');
    const expectResult1 = '0A1B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '2 test passed' : '2 test failed');

}
function theTestGuessNumber3() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('5621');
    const expectResult1 = '0A2B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '3 test passed' : '3 test failed');

}
function theTestGuessNumber4() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('5321');
    const expectResult1 = '0A3B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '4 test passed' : '4 test failed');

}

function theTestGuessNumber5() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('4321');
    const expectResult1 = '0A4B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '5 test passed' : '5 test failed');

}
function theTestGuessNumber6() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1567');
    const expectResult1 = '1A0B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '6 test passed' : '6 test failed');

}
function theTestGuessNumber7() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1562');
    const expectResult1 = '1A1B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '7 test passed' : '7 test failed');

}


function theTestGuessNumber8() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1345');
    const expectResult1 = '1A2B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '8 test passed' : '8 test failed');

}

function theTestGuessNumber9() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1423');
    const expectResult1 = '1A3B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '9 test passed' : '9 test failed');

}

function theTestGuessNumber10() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1256');
    const expectResult1 = '2A0B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '10 test passed' : '10 test failed');

}

function theTestGuessNumber11() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1248');
    const expectResult1 = '2A1B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '11 test passed' : '11 test failed');

}
function theTestGuessNumber12() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1243');
    const expectResult1 = '2A2B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '12 test passed' : '12 test failed');

}

function theTestGuessNumber13() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1237');
    const expectResult1 = '3A0B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '13 test passed' : '13 test failed');

}

function theTestGuessNumber14() {
    const inputGuessNumber = sinon.stub(readlineSync, 'question').return('1234');
    const expectResult1 = '4A0B';
    const result1 = guessNumberModule.guessNumber();
    console.log(result1 === expectResult1 ? '14 test passed' : '14 test failed');

}
theTestGuessNumber1();
theTestGuessNumber2();
theTestGuessNumber3();
theTestGuessNumber4();
theTestGuessNumber5();
theTestGuessNumber6();
theTestGuessNumber7();
theTestGuessNumber8();
theTestGuessNumber9();
theTestGuessNumber10();
theTestGuessNumber11();
theTestGuessNumber12();
theTestGuessNumber13();
theTestGuessNumber14();