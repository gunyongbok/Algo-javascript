function solution1(food) {
    return food.reverse().reduce((acc, cur, idx) => {
        const calorie = (food.length - idx - 1).toString();

        const repeatedFood = calorie.repeat(parseInt(cur / 2));

        return repeatedFood + acc + repeatedFood;
    }, '0');
}

function solution2(lottos, win_nums) {
    let answer = [];
    let count = lottos.filter((element) => element === 0).length;
    let bothElement = lottos.filter((num) => win_nums.includes(num)).length;
    let max = count + bothElement;

    if (bothElement === 6) {
        answer.push(1);
    }
    if (max === 6) {
        answer.push(1);
    }
    if (bothElement === 5) {
        answer.push(2);
    }
    if (max === 5) {
        answer.push(2);
    }
    if (bothElement === 4) {
        answer.push(3);
    }
    if (max === 4) {
        answer.push(3);
    }
    if (bothElement === 3) {
        answer.push(4);
    }
    if (max === 3) {
        answer.push(4);
    }
    if (bothElement === 2) {
        answer.push(5);
    }
    if (max === 2) {
        answer.push(5);
    }
    if (bothElement === 1 || bothElement === 0) {
        answer.push(6);
    }
    if (max === 1 || max === 0) {
        answer.push(6);
    }
    return answer;
}
