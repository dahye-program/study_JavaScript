// 문자열을 입력 받아 대문자는 소문자, 소문자는 대문자로 변환하여 출력

const solution = (str) => {
    let answer = "";
    for (let x of str) {
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}

console.log(solution("StuDY"));