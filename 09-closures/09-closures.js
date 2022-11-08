

// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(10);
// moneyBox(5);


// Closures are functions that refer to independent (free) variables.
// In other words, the function defined in the closure ‘remembers’ 
// the environment in which it was created.

function moneyBox() {
    let saveCoins = 0;
    return function(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
}

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(5);
myMoneyBox(10);

const myMoneyBox2 = moneyBox();
myMoneyBox2(100);
myMoneyBox2(200);
myMoneyBox2(300);