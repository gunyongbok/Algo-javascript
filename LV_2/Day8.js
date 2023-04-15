// 구명보트의 개수의 최솟값
function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    for (let i = 0, j = people.length - 1; i <= j; j--) {
        if (people[i] + people[j] <= limit) {
            answer++;
            i++;
        } else {
            answer++;
        }
    }
    return answer;
}

//  효율성 테스트 2번 실패
// 내림차순 정리한 변수 제거
