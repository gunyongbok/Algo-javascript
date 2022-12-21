function getCombination(elements, pick) {
    if (pick === 1) return elements.map((elem) => [elem]);

    const combinations = [];
    elements.forEach((element, index) => {
        const smallerCombinations = getCombination(elements.slice(index + 1), pick - 1);
        smallerCombinations.forEach((combination) => {
            combinations.push([element].concat(combination));
        });
    });
    return combinations;
}

function isPrime(num) {
    if (num === 2) return true;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution1(nums) {
    let count = 0;
    let combination = getCombination(nums, 3);
    for (let i = 0; i < combination.length; i++) {
        if (isPrime(combination[i][0] + combination[i][1] + combination[i][2]) === true) {
            count++;
        }
    }
    return count;
}

function solution2(a, b, n) {
    let change = 0;
    while (n >= a) {
        change += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a);
    }
    return change;
}

function solution(N, stages) {
    let fail = [];
    let dictionary = {};
    let answer = [];

    for (let i = 0; i < N; i++) {
        let arr = [];
        stages.map((a) => {
            arr.push(a - 1);
        });
        stages = [...arr];
        let count = stages.filter((element) => 0 === element).length;
        fail.push(count / stages.length);
        let filtered = stages.filter((element) => element !== 0);
        stages = filtered;
    }

    for (let i = 1; i <= N; i++) {
        dictionary[i] = Number(`${fail[i - 1]}`);
    }

    let sorted = Object.entries(dictionary).sort((a, b) => b[1] - a[1]);

    for (let element of sorted) {
        answer.push(Number(element[0]));
    }
    return answer;
}
