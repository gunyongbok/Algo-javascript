function solution1(dots) {
    const width = Math.max(...dots.map((a) => a[0])) - Math.min(...dots.map((a) => a[0]));
    const height = Math.max(...dots.map((a) => a[1])) - Math.min(...dots.map((a) => a[1]));
    return width * height;
}

function solution2(keyinput, board) {
    let start = [0, 0];
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === 'up') {
            start[1] += 1;
        }
        if (keyinput[i] === 'down') {
            start[1] -= 1;
        }
        if (keyinput[i] === 'right') {
            start[0] += 1;
        }
        if (keyinput[i] === 'left') {
            start[0] -= 1;
        }
        if (Math.abs(start[0]) > Math.floor(board[0] / 2)) {
            if (start[0] > 0) {
                start[0] = Math.floor(board[0] / 2);
            } else {
                start[0] = -Math.floor(board[0] / 2);
            }
        }
        if (Math.abs(start[1]) > Math.floor(board[1] / 2)) {
            if (start[1] > 0) {
                start[1] = Math.floor(board[1] / 2);
            } else {
                start[1] = -Math.floor(board[1] / 2);
            }
        }
    }

    return start;
}

function solution3(numbers) {
    let multyArray = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            multyArray.push(numbers[i] * numbers[j]);
        }
    }
    multyArray.sort((a, b) => a - b);
    return multyArray.pop();
}

function solution(polynomial) {
    let XContainer = [];
    let numContainer = [];
    let XCount = 0;
    let numCount = 0;
    const element = polynomial.split(' + ');
    const regex = /[^0-9]/g;
    element.map((a) => {
        if (a.includes('x')) {
            XContainer.push(a);
        } else {
            numContainer.push(a);
        }
    });
    XContainer.map((a) => {
        if (isNaN(parseInt(a.replace(regex, ''))) === true) {
            XCount += 1;
        } else {
            XCount += parseInt(a.replace(regex, ''));
        }
    });
    numContainer.map((a) => {
        numCount += parseInt(a);
    });
    if (XCount === 0) {
        return `${numCount}`;
    }
    if (XCount === 1) {
        if (numCount === 0) {
            return 'x';
        }
        return `x + ${numCount}`;
    }
    if (numCount === 0) {
        return `${XCount}x`;
    }
    return `${XCount}x + ${numCount}`;
}
