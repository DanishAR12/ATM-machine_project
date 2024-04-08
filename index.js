#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your 4-digts pincode",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("your pincode is correct!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select your option",
            type: "list",
            choices: ["Withdraw", "Fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`your remaining balance is ${balance}`);
        }
        else {
            console.log("you have insufficient balance");
        }
    }
    else if (operationAns.operation === "Fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select your amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (fastCashAns.amount <= myBalance) {
            let balance2 = myBalance - fastCashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log("you have insufficient amount");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("your pincode is not correct");
}
