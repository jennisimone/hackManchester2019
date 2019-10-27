function getRandomNumber() {
    let randomNumber = Math.random()
    let index = 0;
    while (randomNumber < 0.8) {
        index++
        randomNumber = Math.random()
    }
    if (index % 2 === 0) {
        return randomNumber;
    } else {
        return 1 + randomNumber;
    }
}

let number = 1000000

function randomAmount(currentAmount) {
    number = currentAmount * getRandomNumber();
    append(number);
    document.getElementById('moneymoneymoney').innerHTML = Math.ceil(number).toLocaleString();
}