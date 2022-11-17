function solution1(my_string, letter) {
    return my_string.replaceAll(letter, '');
}

function solution2(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}

function solution3(age) {
    const dictionary = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j' };
    const string = age.toString();
    const arr = string.split('');
    const stack = [];
    arr.map((a) => {
        stack.push(dictionary[a]);
    });
    return stack.join('');
}

function solution4(emergency) {
    let sorted = emergency.slice().sort((a, b) => b - a);
    return emergency.map((v) => sorted.indexOf(v) + 1);
}

function solution5(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
