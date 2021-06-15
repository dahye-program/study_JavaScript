// 자연수 N을 입력받아 1부터 N까지의 합 출력

const solution = (n) => {
    let answer = 0;
    for (let i = 1; i <= n; i++) answer = answer + i;
    return answer;
}

console.log(solution(10));