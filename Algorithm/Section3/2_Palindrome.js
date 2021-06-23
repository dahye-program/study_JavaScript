// 앞에서부터 읽을 때와 뒤에서부터 읽을 때 같은 경우 => 팰린드롬
// 대소문자 구분 X, 알파벳 이외의 모든 문자들 무시

const solution = (str) => {
    let answer="YES";
    str = str.toLowerCase().replace(/[^a-z]/g, ''); // 소문자가 아닌 것들을 다 찾아서 ''로 바꿔
    if(str.split('').reverse().join('')!==str) answer="NO";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));