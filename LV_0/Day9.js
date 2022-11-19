function solution1(dot) {
    if (dot[0] > 0) {
        if (dot[1] < 0) {
            return 4;
        }
        return 1;
    }
    if (dot[0] < 0) {
        if (dot[1] < 0) {
            return 3;
        }
        return 2;
    }
}

function solution2(num_list, n) {
    const arr = [];
    for (let i = 0; i < num_list.length; i += n) {
        arr.push(num_list.slice(i, i + n));
    }

    return arr;
}

function solution3(numbers, k) {
    let getBall = 1;

    for (let i = 0; i < k - 1; i++) {
        getBall += 2;

        if (getBall > numbers.length - 1) {
            getBall -= numbers.length;
        }
    }
    return getBall;
}

function solution(numbers, direction) {
    if (direction === 'right') {
        pop = numbers.pop();
        numbers.unshift(pop);
        return numbers;
    }
    if (direction === 'left') {
        shift = numbers.shift();
        numbers.push(shift);
        return numbers;
    }
}
