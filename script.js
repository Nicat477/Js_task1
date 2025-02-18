// let name1="NIcat";
// let surname="Rzazade";
// let age=10;
// let student=true;
// let full=`${name1} ${surname} ${age} years old ${student}`
// console.log(full)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function qiymetTəyinEt(bal) {
    if (bal >= 90) {
        return "A";
    } else if (bal >= 80) {
        return "B";
    } else if (bal >= 70) {
        return "C";
    } else if (bal >= 60) {
        return "D";
    } else {
        return "F";
    }
}

rl.question("Zəhmət olmasa, balı daxil edin: ", function (input) {
    let bal = parseInt(input);

    if (isNaN(bal) || bal < 0 || bal > 100) {
        console.log("Zəhmət olmasa, 0-100 arası düzgün bir rəqəm daxil edin.");
    } else {
        console.log("Sizin qiymətiniz:", qiymetTəyinEt(bal));
    }

    rl.close();
});
