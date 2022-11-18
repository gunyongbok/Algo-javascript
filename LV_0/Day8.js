function solution1(hp) {
    const firstResult = Math.floor(hp / 5);
    const secondResult = Math.floor((hp - 5 * firstResult) / 3);
    const thirdResult = Math.floor(hp - 5 * firstResult - 3 * secondResult);
    return firstResult + secondResult + thirdResult;
}

function solution2(letter) {
    const morse = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
    };
    const a = letter.split(' ');
    const answer = [];
    a.map((arr) => {
        answer.push(morse[arr]);
    });
    return answer.join('');
}

function solution3(rsp) {
    const dictionary = {
        2: '0',
        0: '5',
        5: '2',
    };
    const answer = [];
    rsp.split('').map((arr) => {
        answer.push(dictionary[arr]);
    });
    return answer.join('');
}

function solution(balls, share) {
    const answer = factorial(balls) / (factorial(balls - share) * factorial(share));
    return answer;
}

const factorial = (n) => {
    let result = BigInt(1);
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
};
console.log(factorial(1));
