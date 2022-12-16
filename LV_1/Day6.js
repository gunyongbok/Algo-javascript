function solution1(string, n) {
    string.sort((x, y) => {
        if (x[n] < y[n]) {
            return -1;
        } else if (x[n] > y[n]) {
            return 1;
        } else if (x < y) {
            return -1;
        } else if (x > y) {
            return 1;
        }
        return 0;
    });
    return string;
}

function solution2(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        answer.push(array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[`${commands[i][2] - 1}`]);
    }
    return answer;
}

function solution(s) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}

function solution(number) {
    let count = 0;
    let combination = getCombination(number, 3);
    for (let i = 0; i < combination.length; i++) {
        if (combination[i][0] + combination[i][1] + combination[i][2] === 0) {
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return count;
}

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
