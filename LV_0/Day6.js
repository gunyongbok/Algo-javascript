function solution1(price) {
    if (price >= 100000 && price < 300000) {
        price = price * 0.95;
    }
    if (price >= 300000 && price < 500000) {
        price = price * 0.9;
    }
    if (price >= 500000) {
        price = 0.8 * price;
    }
    return Math.floor(price);
}

function solution2(money) {
    const ableToBuyCoffee = Math.floor(money / 5500);
    const leftMoney = money - 5500 * ableToBuyCoffee;
    return [ableToBuyCoffee, leftMoney];
}

function solution3(my_string, n) {
    const array = [...my_string];
    const stack = [];
    array.map((a) => {
        for (let i = 1; i <= n; i++) {
            stack.push(a);
        }
    });
    return stack.join('');
}

function solution(sides) {
    const sorted = sides.sort((a, b) => a - b);
    if (sorted[2] < sorted[0] + sorted[1]) {
        return 1;
    }
    return 2;
}
