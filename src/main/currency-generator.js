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
        return 2 - randomNumber;
    }
}

let number = 1000000
let priceData = [number]
let splitData;

function updateCurrency(amount) {
  document.getElementById('moneymoneymoney').innerHTML = Math.ceil(amount).toLocaleString();
}
