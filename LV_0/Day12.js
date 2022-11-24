function solution1(s) {
    s = s.split(' ');
    while (s.includes('Z')) {
        s.splice(s.indexOf('Z') - 1, 2);
    }
    return s.reduce((a, b) => a + Number(b), 0);
}

function solution2(strlist) {
    const answer = [];
    strlist.map((a) => {
        answer.push(a.length);
    });
    return answer;
}

function solution(my_string) {
    const my_notString = my_string.split('');
    const answer = Array.from(new Set(my_notString));
    return answer.join('');
}
