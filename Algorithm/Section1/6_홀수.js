// 7개의 자연수가 입력되면 홀수를 골라 합을 구하고, 홀수들 중 최솟값 출력

const solution = (arr) => {
    let answer = [];
    let sum = 0; // 홀수의 합
    let min = Number.MAX_SAFE_INTEGER; // 홀수 중 최솟값
    for(let x of arr){
        if(x%2===1) {
            sum+=x;
            if(min>x) min=x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));