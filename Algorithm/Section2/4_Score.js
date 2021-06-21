// 문제를 연속적으로 맞힐 때 가산점 부여하여 총 점수 계산 (처음 정답 => 1점, 2번 연속 => 2점, 3번 연속 => 3점 ... 앞 문제 틀리고 그 다음 문제 맞히면 다시 1점)

const solution = (arr) => {
    let answer = 0;
    let cnt = 0;
    for(const x of arr){
        if(x===1) {
            cnt++;
            answer+=cnt;
        }else{
            cnt=0;
        }
    }
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]; // 1 정답, 0 틀림
console.log(solution(arr));