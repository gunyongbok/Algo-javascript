function solution1(arr) {
    let answer = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

function solution2(s) {
    return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
        return a[0].toUpperCase() + a[1].toLowerCase();
    });
}

function solution3(n) {
    const a = n.toString(3).split('').reverse().join('');
    return parseInt(a, 3);
}

function solution(d, budget) {
    let sum = 0;
    let count = 0;
    let sortD = d.sort((a, b) => a - b);
    for (let i = 0; i < sortD.length; i++) {
        sum += sortD[i];
        if (sum > budget) break;
        count++;
    }
    return count;
}
