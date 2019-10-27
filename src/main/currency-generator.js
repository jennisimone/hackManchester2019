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

// function randomAmount(currentAmount) {
//     number = currentAmount * getRandomNumber();
//     priceData.push(number);
//     document.getElementById('moneymoneymoney').innerHTML = Math.ceil(number).toLocaleString();
// }

$.get('https://pastebin.com/raw/NqK7g4mB', function (data) {
    splitData = data.split(',')
})

function randomAmount() {
    splitData.forEach(singleData => {
        priceData.push(singleData);
        document.getElementById('moneymoneymoney').innerHTML = Math.ceil(singleData).toLocaleString();
    });
}

