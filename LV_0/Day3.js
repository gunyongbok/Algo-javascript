function solution(num1, num2) {
    return num1 % num2;
}

function solution1(array) {
    const sort = array.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    const index = Math.floor(sort.length / 2 + 1);
    return sort[index - 1];
}

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}

function solution2(array) {
    const getElCount = (array) => {
        let result = {};
        for (const el of array) {
            result[el] = (result[el] || 0) + 1;
        }
        return result;
    };

    const test = getElCount(array);
    const multyCount = Object.values(test);
    const maxCount = Math.max(...Object.values(test));
    const count = multyCount.filter((element) => maxCount === element).length;
    if (count >= 2) {
        return -1;
    } else {
        return Number(getKeyByValue(test, maxCount));
    }
}

function solution3(n) {
    const oddNumber = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            oddNumber.push(i);
        }
    }
    return oddNumber;
}
