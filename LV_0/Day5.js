function solution1(age) {
    return 2022 - age + 1;
}

function solution2(angle) {
    if (angle < 90) {
        return 1;
    } else if (angle === 90) {
        return 2;
    } else if (angle < 180) {
        return 3;
    } else if (angle === 180) {
        return 4;
    }
}

function solution3(n, k) {
    const cost = 12000 * n + 2000 * k - Math.floor(n / 10) * 2000;
    return cost;
}

function solution4(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

function solution5(array, height) {
    const stack = [];
    array.map((h) => {
        if (h > height) {
            stack.push(h);
        }
    });
    return stack.length;
}

function solution6(array, n) {
    let count = array.filter((element) => n === element).length;
    return count;
}

function solution7(num_list) {
    return num_list.reverse();
}

function solution8(my_string) {
    return my_string.split('').reverse().join('');
}

function solution9(numbers) {
    const sort = numbers.sort((a, b) => a - b);
    const length = sort.length;
    return sort[length - 1] * sort[length - 2];
}

function solution10(num_list) {
    let oddCount = 0;
    let evenCount = 0;
    num_list.map((n) => {
        if (n % 2 === 0) {
            return (evenCount += 1);
        }
        return (oddCount += 1);
    });
    return [evenCount, oddCount];
}
