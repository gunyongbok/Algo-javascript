function solution1(chicken) {
    let coupon = chicken;
    let service = 0;

    while (coupon >= 10) {
        service += (coupon / 10) << 0;
        coupon = ((coupon % 10) + coupon / 10) << 0;
    }
    return service;
}

function solution2(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

function solution3(before, after) {
    const arrayBefore = before.split('').sort().join('');
    const arrayAfter = after.split('').sort().join('');
    if (arrayAfter === arrayBefore) {
        return 1;
    }
    return 0;
}

function solution4(i, j, k) {
    let container = [];
    for (let start = i; start <= j; start++) {
        container.push(String(start).split(''));
    }
    let count = container.flat(Infinity).filter((element) => `${k}` === element).length;
    return count;
}

function solution5(A, B) {
    let arr = [...A];
    for (let i = 0; i < arr.length; i++) {
        if (A === B) return i;
        else {
            arr.unshift(arr.pop());
            if (arr.join('') === B) return i + 1;
        }
    }
    return -1;
}

function solution6(M, N) {
    return M - 1 + (N - 1) * M;
}

function solution7(num, total) {
    const min = Math.ceil(total / num - Math.floor(num / 2));
    return Array.from({ length: num }, (_, i) => i + min);
}

function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) {
        return common[common.length - 1] + common[2] - common[1];
    }
    if (common[2] / common[1] === common[1] / common[0]) {
        return (common[common.length - 1] * common[1]) / common[0];
    }
}
