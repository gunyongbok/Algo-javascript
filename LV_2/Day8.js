// 구명보트의 개수의 최솟값
function solution(people, limit) {
    let answer = 0;
    let newPeople = people.sort((a, b) => a - b);
    for (let i = 0, j = people.length - 1; i <= j; j--) {
        if (newPeople[i] + newPeople[j] <= limit) {
            answer++;
            i++;
        } else {
            answer++;
        }
    }
    return answer;
}

//  효율성 테스트 2번 실패
