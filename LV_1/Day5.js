function solution1(s, n) {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var answer = '';

    for (var i = 0; i < s.length; i++) {
        var text = s[i];
        if (text == ' ') {
            answer += ' ';
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text) + n;
        if (index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

function solution2(sizes) {
    const width = [];
    const height = [];

    for (let i = 0; i < sizes.length; i++) {
        const max = Math.max(sizes[i][0], sizes[i][1]);
        const min = Math.min(sizes[i][0], sizes[i][1]);
        width.push(max);
        height.push(min);
    }

    return Math.max(...width) * Math.max(...height);
}

function solution3(n, arr1, arr2) {
    let answer = [];

    for (let i = 0; i < n; i++) {
        const converted = (arr1[i] | arr2[i]).toString(2);
        let oneLine = [];
        let cLength = converted.length;
        console.log(cLength);
        for (let j = cLength - n; j < cLength; j++) {
            if (converted[j] === '1') {
                oneLine.push('#');
            } else {
                oneLine.push(' ');
            }
        }
        answer.push(oneLine.join(''));
    }
    return answer;
}
