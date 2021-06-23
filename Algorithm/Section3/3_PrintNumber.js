// 문자와 숫자가 섞여있는 문자열 입력, 숫자만 추출하여 자연수 만들어서 출력

const solution = (str) => {
    let answer=0;
    for(let x of str){
        if(!isNaN(x)) answer+=x; // x가 숫자라면
    }
    return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));