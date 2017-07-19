const guessNumberModule=require('./main');
function testGuessNumber() {
    //let number=sinon.stub(testNumber,guessNumber(num));
    //number.withArgs(1234).return('1234');

    const number1='5678';
    const expectResult1='0A0B';
    const result1=guessNumberModule.guessNumber(number1);
    console.log(result1===expectResult1?'1 test passed':'1 test failed');

    const number2='5671';
    const expectResult2='0A1B';
    const result2=guessNumberModule.guessNumber(number2);
    console.log(result2===expectResult2?'2 test passed':'2 test failed');

    const number3='5621';
    const expectResult3='0A2B';
    const result3=guessNumberModule.guessNumber(number3);
    console.log(result3===expectResult3?'3 test passed':'3 test failed');

    const number4='5321';
    const expectResult4='0A3B';
    const result4=guessNumberModule.guessNumber(number4);
    console.log(result4===expectResult4?'4 test passed':'4 test failed');

    const number5='4321';
    const expectResult5='0A4B';
    const result5=guessNumberModule.guessNumber(number5);
    console.log(result5===expectResult5?'5 test passed':'5 test failed');

    const number6='1567';
    const expectResult6='1A0B';
    const result6=guessNumberModule.guessNumber(number6);
    console.log(result6===expectResult6?'6 test passed':'6 test failed');

    const number7='1452';
    const expectResult7='1A1B';
    const result7=guessNumberModule.guessNumber(number7);
    console.log(result7===expectResult7?'7 test passed':'7 test failed');

    const number8='1642';
    const expectResult8='1A2B';
    const result8=guessNumberModule.guessNumber(number8);
    console.log(result8===expectResult8?'8 test passed':'8 test failed');

    const number9='1423';
    const expectResult9='1A3B';
    const result9=guessNumberModule.guessNumber(number9);
    console.log(result9===expectResult9?'9 test passed':'9 test failed');

    const number10='1278';
    const expectResult10='2A0B';
    const result10=guessNumberModule.guessNumber(number10);
    console.log(result10===expectResult10?'10 test passed':'10 test failed');

    const number11='1248';
    const expectResult11='2A1B';
    const result11=guessNumberModule.guessNumber(number11);
    console.log(result11===expectResult11?'11 test passed':'11 test failed');

    const number12='1243';
    const expectResult12='2A2B';
    const result12=guessNumberModule.guessNumber(number12);
    console.log(result12===expectResult12?'12 test passed':'12 test failed');

    const number13='1235';
    const expectResult13='3A0B';
    const result13=guessNumberModule.guessNumber(number13);
    console.log(result13===expectResult13?'13 test passed':'13 test failed');

    const number14='1234';
    const expectResult14='4A0B';
    const result14=guessNumberModule.guessNumber(number14);
    console.log(result14===expectResult14?'14 test passed':'14 test failed');
}
testGuessNumber();