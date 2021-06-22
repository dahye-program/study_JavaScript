// 문자열 입력, 회문 문자열인지 판단하여 맞다면 YES, 아니라면 NO 출력
// 회문 문자열은 앞에서 읽을때와 뒤에서 읽을때가 일치하는 것(대소문자 구별x)

const solution = (str) => {
    let answer = "";
    str=str.toLowerCase();
    for(let i=0; i<str.length/2+1; i++){
        if(str[i]===str[str.length-i]) answer="YES";
        else answer="NO";
    }
    return answer;
}

let str = "goooG";
console.log(solution(str));