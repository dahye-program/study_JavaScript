// N명의 학생수 입력받아 연필 한자루 씩 나눠줄 때 필요한 연필의 다스 수 출력
// 연필 1다스는 12자루

function solution(n){
    let answer;
    // answer = n/12;
    answer=Math.ceil(n/12); // ceil==같거나 큰 수 중 가장 작은 정수
    return answer;
}

console.log(solution(178));