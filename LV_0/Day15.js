function solution1(message) {
    const array = message.split('');
    return array.length * 2;
}

function solution2(array) {
    const sort = [...array].sort((a, b) => a - b);
    const max = sort[sort.length - 1];
    const index = array.indexOf(max);
    return [max, index];
}

function solution(my_string) {
    let arr = my_string.split(' ');
    let cal = arr[0] * 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === '+') cal += arr[i + 1] * 1;
        else if (arr[i] === '-') cal -= arr[i + 1] * 1;
        else continue;
    }
    return cal;
}

function solution(s1, s2) {
    const combine = [...s1, ...s2];
    const set = new Set(combine);
    return combine.length - set.size;
}
