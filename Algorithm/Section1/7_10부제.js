// 자동차 10부제, 자동차 번호의 일의자리 숫자와 날짜의 일의자리 숫자가 일치하면 운행 X
// Ex) 자동차 번호의 일의자리 숫자가 7이면 7일, 17일, 27일 운행X
// 날짜의 일의자리 숫자와 7대의 자동차 번호 끝 두자리가 주어졌을 때 위반하는 자동차 대수를 출력

const solution = (day, arr) => {
    let answer=0;
    for(let x of arr){
        if(x%10===day) answer++;
    }
    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));