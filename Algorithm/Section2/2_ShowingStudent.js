// 일렬로 서있는 학생들의 키 입력받아 보이는 학생들의 수 출력

const solution = (arr) => {
    let answer=0;
    let max = 0;
    for(const x of arr){
        if(max<x) {
            answer++;
            max=x;
        }
    }

    return answer;
}


let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));