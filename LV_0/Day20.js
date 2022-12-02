function solution1(n) {
    let input = 0;
    for (let i = 1; i <= n; i++) {
        input++;
        while (input.toString().includes('3') || input % 3 === 0) {
            input++;
        }
    }
    return input;
}

function solution2(dots) {
    const slopContainer = [];
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            const slop = Math.abs(dots[i][1] - dots[j][1]) / Math.abs(dots[i][0] - dots[j][0]);
            slopContainer.push(slop);
        }
    }
    const set = new Set(slopContainer);
    if (set.size !== slopContainer.length) {
        return 1;
    }
    return 0;
}

function solution3(lines) {
    const visited = lines.reduce((a, [x, y]) => {
        for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++) a[i] = a[i] ? a[i] + 1 : 1;
        return a;
    }, {});

    return Object.values(visited).filter((v) => v > 1).length;
}

function solution(a, b) {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const gcdNum = gcd(a, b);
    const irreducibleFractionMother = b / gcdNum;
    const measureContainer = [];
    const doubleMeasuerContainer = [];
    const answer = [];
    for (let i = 1; i <= irreducibleFractionMother; i++) {
        if (irreducibleFractionMother % i === 0) {
            measureContainer.push(i);
        }
    }
    measureContainer.map((a) => {
        if (isPrime(a) === true) {
            doubleMeasuerContainer.push(a);
        }
    });
    doubleMeasuerContainer.shift();
    for (let i = 0; i < doubleMeasuerContainer.length; i++) {
        if (doubleMeasuerContainer[i] === 2) {
            continue;
        }
        if (doubleMeasuerContainer[i] === 5) {
            continue;
        } else {
            answer.push(doubleMeasuerContainer[i]);
        }
    }
    if (answer.length === 0) {
        return 1;
    }
    return 2;
}

function isPrime(num) {
    if (num === 2) {
        return true;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
