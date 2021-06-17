// 아홉명의 난쟁이 키를 입력 받아 일곱 난쟁이들 출력
// 일곱 난쟁이들 키의 합은 100

const solution = (arr) => {
    let answer = arr;
    let sum = 0;
    for (let x of arr) sum += x;
    // sum = arr.reduce((a, b)=>a+b, 0); a 0으로 초기화

    for (let i = 0; i < answer.length - 1; i++) {
        for (let j = i + 1; j < answer.length; j++) {
            if ((sum - (answer[i] + answer[j])) === 100) {
                answer.splice(i, 1);
                answer.splice(j-1, 1);
                // j를 먼저 지워도돼
            }
        }
    }
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));