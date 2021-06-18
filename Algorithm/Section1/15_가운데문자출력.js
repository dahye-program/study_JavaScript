// 소문자로 된 문자열 입력, 가운데 문자 출력(짝수면 가운데 2개의 문자 출력)

const solution = (str) => {
    let answer="";
    let mid=Math.floor(str.length/2); // 나머지 버린 몫
    // if(str.length%2===0){
    //     answer+=str[str.length/2];
    //     answer+=str[str.length/2+1];
    // }
    // else answer+=str[str.length/2]; ??????????????????

    return answer;
}

console.log(solution("study"));