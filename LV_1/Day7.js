function solution1(numbers) {
    let sum = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sum.push(numbers[i] + numbers[j]);
        }
    }
    let answer = sum.sort((a, b) => a - b);
    let set = new Set(answer);
    return Array.from(set);
}

function solution2(a, b) {
    return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

function solution3(nums) {
    let answer = [...new Set(nums)],
        limit = nums.length / 2;
    return answer.length > limit ? limit : answer.length;
}

function solution4(n) {
    let answer = 0;
    const arr = new Array(n + 1).fill(true);
    const end = Math.sqrt(n);

    for (let i = 2; i <= end; ++i) {
        if (arr[i] === false) {
            continue;
        }
        for (let k = i * i; k <= n; k += i) {
            arr[k] = false;
        }
    }
    for (let i = 2; i <= n; ++i) {
        if (arr[i] === true) {
            answer++;
        }
    }
    return answer;
}

function solution5(answers) {
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let result = [0, 0, 0];
    let answer = [];
    for (let i = 0; i < answers.length; i++) {
        if (a1[i % 5] === answers[i]) {
            result[0]++;
        }
        if (a2[i % 8] === answers[i]) {
            result[1]++;
        }
        if (a3[i % 10] === answers[i]) {
            result[2]++;
        }
    }
    let max = Math.max.apply(null, result);
    let a = result.indexOf(max);
    while (a !== -1) {
        answer.push(a + 1);
        a = result.indexOf(max, a + 1);
    }
    return answer;
}
