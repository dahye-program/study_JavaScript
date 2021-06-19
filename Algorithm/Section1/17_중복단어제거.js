// 중복된 문자열 제거

const solution = (str) => {
    let answer = [];
    for(const x of str){
        if(answer.indexOf(x) === -1) answer.push(x);
    }
    return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));