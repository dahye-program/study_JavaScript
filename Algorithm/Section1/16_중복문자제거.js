// 소문자로 이루어진 문자열 입력, 중복된 문자 제거 후 출력

const solution = (str) => {
    let answer="";
    for(const x of str){ // for of에서는 const 랍니다,,,, 네...
        if(answer.indexOf(x) === -1){
            answer+=x;
        }
    }
    return answer;
}

console.log(solution("ksekkset"));