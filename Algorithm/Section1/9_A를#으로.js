// 대문자로 이루어진 문자열 입력 받아 A를 #으로 바꿔서출력

const solution = (str) => {
    let answer = str; // 값 복사
    for (let x of str) {
        if (x === 'A') {
            answer += '#';
        } else answer += x;
    }
    // answer = answer.replace(/A/g, '#');
    return answer;
}

let str = "BANANA";
console.log(solution(str));