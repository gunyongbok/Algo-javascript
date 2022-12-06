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

function solution(i, j, k) {
    let container = [];
    for (let start = i; start <= j; start++) {
        container.push(String(start).split(''));
    }
    let count = container.flat(Infinity).filter((element) => `${k}` === element).length;
    return count;
}
