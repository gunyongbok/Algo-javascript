function solution1(n, lost, reserve) {
    var answer = n - lost.length;

    let realLost = lost.filter((l) => !reserve.includes(l));
    let realReserve = reserve.filter((r) => !lost.includes(r));
    answer += lost.length - realLost.length;

    realLost.sort((a, b) => a - b);

    realLost.forEach((l) => {
        if (realReserve.length === 0) {
            return;
        }

        if (realReserve.includes(l - 1)) {
            realReserve = realReserve.filter((r) => r !== l - 1);
            answer++;
        } else if (realReserve.includes(l + 1)) {
            realReserve = realReserve.filter((r) => r !== l + 1);
            answer++;
        }
    });
    return answer;
}

function solution(participant, completion) {
    let dic = {};
    let answer = [];
    for (let i = 0; i < participant.length; i++) {
        let index = participant[i];
        if (index in dic === false) {
            dic[index] = 1;
            continue;
        }
        dic[index] += 1;
    }

    for (let i = 0; i < completion.length; i++) {
        let index = completion[i];
        if (index in dic === true) {
            dic[index] -= 1;
        }
    }

    const arrDic = Object.entries(dic);
    for (let i = 0; i < arrDic.length; i++) {
        if (arrDic[i][1] !== 0) {
            answer.push(arrDic[i][0]);
        }
    }
    return answer.join('');
}

solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
