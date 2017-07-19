'use strict'

function guessNumber(num) {
    let testNumber = 1234;
    //let testNumber = Math.floor(Math.random() * 9999 + 1000);
    let number=testNumber.toString();
    let countA = 0;
    let countB = 0;
    for(let i in num){
        if (num[i]===number[i]){
            countA++;
        }
        else {
            for (let j in number){
                if (num[i]===number[j]){
                    countB++;
                }
            }
        }
    }

    return `${countA}A${countB}B`;
};
module.exports.guessNumber=guessNumber();
/*
const readline = require('readline');
function readSyncByRl(tips) {
    tips = tips || '> ';
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(tips, (answer) => {
            rl.close();
            resolve(answer.trim());
        });

    });
}
readSyncByRl('请输入任意字符：').then((res) => {
    console.log(res);
});
*/


