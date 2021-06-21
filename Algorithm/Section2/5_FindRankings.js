// 학생의 점수가 입력, 각 학생들의 등수를 입력된 순서대로 출력

const solution = (arr) => {
    let answer = Array.from({length:arr.length}, () => 1); // arr의 길이만큼 배열 생성, 1로 초기화

    for(let i=0;i<arr.length;i++){
        for(let j=0; j<arr.length;j++){
            if(arr[j]>arr[i]) answer[i]++; // 자기보다 더 큰 수 있으면 등수에 +1
        }
    }
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));