// 7개의 수를 입력받아 가장 작은 수 출력

const solution = (arr) => {
    let answer;
    let min=Number.MAX_SAFE_INTEGER; // 안전한 가장 큰 정수값으로 초기화
    for(let i=0; i<arr.length;i++){
        if(min>arr[i]) min=arr[i];
    }
    answer=min;
    return answer;
}
let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// 내장함수 이용 => let answer = Math.min(3, 7, 2);
// in 배열 => let answer = Math.min(...arr); (... 전개연산자)
// 최댓값 => let answer = Math.max(...arr);
// 전개 연산자 X, apply 이용 => let answer = Math.min.apply(null(객체), arr(배열));