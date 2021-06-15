// 100이하의 자연수 A, B, C 입력 받아 가장 작은 값 출력(정렬 사용 X)

function solution(a, b, c) {
    let answer; // 최소값
    if (a < b) answer = a;
    else answer = b;
    if (answer > c) answer = c;
    return answer;
}

// const solution = (a, b, c) =>{
//     let answer; // 최소값
//     if (a < b) answer = a;
//     else answer = b;
//     if (answer > c) answer = c;
//     return answer;
// }

console.log(solution(6, 5, 11));
// console.log(solution(6,5,11));