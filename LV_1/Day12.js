function solution1(s) {
    const notNew = [];
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        let count = 0;

        if (!notNew.includes(s[i])) {
            notNew.push(s[i]);
            answer.push(-1);
            continue;
        }

        for (let j = i - 1; j >= 0; j--) {
            count++;
            if (s[i] == s[j]) {
                answer.push(count);
                break;
            }
        }
    }

    return answer;
}

function solution(k, m, score) {
    let answer = 0;
    const scoreConst = score.sort(function (a, b) {
        return b - a;
    });

    for (let i = m - 1; i < scoreConst.length; i += m) {
        answer += scoreConst[i] * m;
    }

    return answer;
}
