function getMaxDigit() {
    const userInput = +(document.getElementById('txt1').value);
    if (userInput % 1 !== 0) {
        document.getElementById("res_1").innerHTML = `Введіть число коректно!!!!`
    } else {
        const intoArray = String(userInput).split("")
        const maxDigit = Math.max.apply(Math, intoArray)
        document.getElementById("res_1").innerHTML = `Максимальна цифра це - ${maxDigit}`;
    }
}

function getDigitPow() {
    const userInput1 = +(document.getElementById('txt2').value);
    const userInput2 = +(document.getElementById('txt2_1').value);
    if (userInput1 % 1 !== 0 || userInput2 % 1 !== 0) {
        document.getElementById("res_2").innerHTML = `Введіть числа коректно!!!!`
    } else {

        let res = 1;
        for (let i = 0; i < userInput2; i++) {
            res = res * userInput1;
        }

        document.getElementById("res_2").innerHTML = res;
    }
}

function upperFirstLetter() {
    const userInputStr = String(document.getElementById('txt3').value).toLowerCase()
    const resStr = userInputStr.charAt(0).toUpperCase() + userInputStr.slice(1);
    document.getElementById("res_3").innerHTML = resStr;
}

function calculateMySalary() {
    const userSalary = +(document.getElementById('txt4').value);
    if (userSalary % 1 !== 0) {
        document.getElementById("res_4").innerHTML = `Введіть число коректно!!!!`
    } else {
        let salaryWithotTax = userSalary - userSalary * 0.195;
        document.getElementById("res_4").innerHTML = `Ваша чиста зарплата = ${salaryWithotTax}`
    }
}

function getRandom() {

    const userInputRandom = +(document.getElementById('txt5').value);
    const userInputRandom2 = +(document.getElementById('txt5_1').value);
    if (userInputRandom % 1 !== 0) {
        document.getElementById("res_5").innerHTML = `Введіть число коректно!!!!`
    }

    if (userInputRandom2 % 1 !== 0) {
        document.getElementById("res_5").innerHTML = `Введіть число коректно!!!!`
    }

    if (userInputRandom >= userInputRandom2) {
        document.getElementById("res_5").innerHTML = `Погано! Друге число повинне бути більшим за стартове.Введіть число!`
    }
    let res = Math.random() * (userInputRandom2 - userInputRandom) + userInputRandom;
    document.getElementById("res_5").innerHTML = `Ваше число ${Math.trunc(res)}`

}

function calculateSameLetters() {
    const userInput = String(document.getElementById('txt6').value).toLowerCase();
    const userInput2 = String(document.getElementById('txt6_1').value).toLowerCase();
    let freq = 0;
    const intoArray = userInput.split("")
    for (const i of intoArray) {
        if (i === userInput2) {
            freq++;
        }
    }

    document.getElementById("res_6").innerHTML = `Літера "${userInput2}" повторюється ${freq} раз(ів)`;
}


function convertCurrency() {
    const userInput = String(document.getElementById('txt7').value);
    const reDol = /([0-9,]+(\.[0-9]{2}))?\$/;
    const reUah = /([0-9,]+(\.[0-9]{2})?)uah/;
    const dolToUah = 27.995;
    const uahToDol = 0.0358;

    if (reDol.test(userInput)) {
        const numDol = parseFloat(userInput.match(/([0-9,]+(\.[0-9]{2})?)/))
        const res = numDol * dolToUah;
        document.getElementById("res_7").innerHTML = res.toFixed(2) + ' грн';

    } else if (reUah.test(userInput)) {
        const numUah = parseFloat(userInput.match(/([0-9,]+(\.[0-9]{2})?)/))
        const res = numUah * uahToDol;
        document.getElementById("res_7").innerHTML = res.toFixed(2) + '$';
    } else {
        document.getElementById("res_7").innerHTML = 'Введіть згідно шаблону!!!!(СУМАuah чи СУМА$)';
    }
}

function getPassword() {
    let passLength = 8;
    const userInput = +(document.getElementById('txt8').value);
    if (userInput % 1 !== 0) {
        document.getElementById("res_8").innerHTML = `Введіть число коректно!!!!`
    }
    if (userInput > 0) {
        passLength = userInput
    }


    const password = Math.floor(Math.pow(10, passLength - 1) + Math.random() * 9 * Math.pow(10, passLength - 1))
    document.getElementById("res_8").innerHTML = password;

}

function removeLetter() {
    let userInput = String(document.getElementById('txt9').value).toLowerCase();
    const userInput2 = String(document.getElementById('txt9_1').value).toLowerCase();

    if (userInput.match(/^[a-zA-Z_ ]*$/) && userInput2.match(/^[a-zA-Z_ ]*$/)) {


        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] == userInput2) {
                userInput = userInput.replace(userInput2, '');
            }
        }
        document.getElementById("res_9").innerHTML = userInput;
    } else {
        document.getElementById("res_9").innerHTML = 'Введіть лише літери';
    }
}

function isPalindrome() {
    let userInput = String(document.getElementById('txt10').value)

    if (userInput == userInput.split('').reverse().join('')) {
        document.getElementById("res_10").innerHTML = true;
    } else {
        document.getElementById("res_10").innerHTML = false;
    }
}


function removeSameLetters() {
    let userInput = String(document.getElementById('txt11').value).toLowerCase().split('');
    let res = userInput.filter((val, i, str) => {
        return str.lastIndexOf(val) === str.indexOf(val);
    });

    document.getElementById("res_11").innerHTML = res.join('');
}