// N개의 문자열 입력, 가장 긴 문자열 출력

const solution = (arr) => {
    let answer = "";
    let max = 0; // max=Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        if (x.length > max) {
            max = x.length;
            answer = x;
        }
    }
    return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));