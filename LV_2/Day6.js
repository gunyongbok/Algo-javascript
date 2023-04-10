function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        let current = words[i - 1].slice(-1);
        let next = words[i].charAt(0);

        if (current !== next) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        if (words.indexOf(words[i]) !== i) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
    }
    return [0, 0];
}
