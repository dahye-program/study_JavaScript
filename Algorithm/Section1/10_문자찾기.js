// 문자열과 문자 하나가 주어지고 문자열 중 입력 받은 문자의 개수 출력

const solution = (str, c) => {
    let answer=0;
    for(let x of str){
        if(x===c) answer++;
    }
    answer=str.split(c).length; // 구분자로 구분된 길이 => answer - 1
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));