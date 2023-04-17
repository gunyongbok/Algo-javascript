// H-Index
function solution(citations) {
    let newCitations = citations.sort((a, b) => b - a);
    let i = 0;
    while (i + 1 <= newCitations[i]) {
        i++;
    }
    return i;
}
