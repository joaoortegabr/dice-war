// dice
const atkd1 = document.getElementById("atkimg-d1");
const atkd2 = document.getElementById("atkimg-d2");
const atkd3 = document.getElementById("atkimg-d3");
const defd1 = document.getElementById("defimg-d1");
const defd2 = document.getElementById("defimg-d2");
const defd3 = document.getElementById("defimg-d3");

// die-set
const da1 = document.getElementById("da1");
const da2 = document.getElementById("da2");
const da3 = document.getElementById("da3");
const dd1 = document.getElementById("dd1");
const dd2 = document.getElementById("dd2");
const dd3 = document.getElementById("dd3");

let atkRound = [];
let defRound = [];

function rollAtk() {
    clearAtkDice();
    let checkboxes = document.querySelectorAll('.atk-chkbox:checked');
    let numberOfAtkDice = checkboxes.length;
    if (numberOfAtkDice > 0) {
        for (i = 0; i < numberOfAtkDice; i++) {
            let num = generateRandomNumber(1, 6);
            atkRound.push(num);
        }
        atkRound.sort();
        atkRound.reverse();
    }
    setAtkDie(atkRound[0], atkRound[1], atkRound[2]);
}

function rollDef() {
    clearDefDice();
    let checkboxes = document.querySelectorAll('.def-chkbox:checked');
    let numberOfDefDice = checkboxes.length;
    if (numberOfDefDice > 0) {
        for (i = 0; i < numberOfDefDice; i++) {
            let num = generateRandomNumber(1, 6);
            defRound.push(num);
        }
        defRound.sort();
        defRound.reverse();
    }
    setDefDie(defRound[0], defRound[1], defRound[2]);
    checkWinners();
}

function clearAtkDice() {
    clearWinners()
    atkRound = [];
    atkd1.className = '';
    atkd2.className = '';
    atkd3.className = '';
    atkd1.classList.add('die', 'bg');
    atkd2.classList.add('die', 'bg');
    atkd3.classList.add('die', 'bg');
}

function clearDefDice() {
    clearWinners()
    defRound = [];
    defd1.className = '';
    defd2.className = '';
    defd3.className = '';
    defd1.classList.add('die', 'bg');
    defd2.classList.add('die', 'bg');
    defd3.classList.add('die', 'bg');
}

function reset() {
    clearAtkDice();
    clearDefDice();
    clearWinners()
}

function setAtkDie(num0, num1, num2) {
    atkd1.classList.add(`a${num0}`);
    atkd2.classList.add(`a${num1}`);
    atkd3.classList.add(`a${num2}`);
}

function setDefDie(num0, num1, num2) {
    defd1.classList.add(`d${num0}`);
    defd2.classList.add(`d${num1}`);
    defd3.classList.add(`d${num2}`);
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function checkWinners() {
    if (atkRound[0] > defRound[0]) {
        da1.classList.add('winner');
    } else {
        dd1.classList.add('winner');
    }
    if (atkRound[1] > defRound[1]) {
        da2.classList.add('winner');
    } else {
        dd2.classList.add('winner');
    }
    if (atkRound[2] > defRound[2]) {
        da3.classList.add('winner');
    } else {
        dd3.classList.add('winner');
    }
}

function clearWinners() {
    da1.classList.remove('winner');
    da2.classList.remove('winner');
    da3.classList.remove('winner');
    dd1.classList.remove('winner');
    dd2.classList.remove('winner');
    dd3.classList.remove('winner');
}
