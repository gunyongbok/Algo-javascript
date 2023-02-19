function solution1(s) {
    const arr = s.split(' ');

    return Math.min(...arr) + ' ' + Math.max(...arr);
}

function solution(s) {
    const arr = s.toLowerCase().split(' ');
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const first = arr[i].charAt(0);
        if (isNaN(first) === false) {
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i].replace(first, first.toUpperCase()));
        }
    }
    return newArr.join(' ');
}
