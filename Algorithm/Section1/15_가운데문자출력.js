// 소문자로 된 문자열 입력, 가운데 문자 출력(짝수면 가운데 2개의 문자 출력)

const solution = (str) => {
    let answer="";
    let mid=Math.floor(str.length/2); // 나머지 버린 몫
    if(str.length%2===0){ // 짝수
        answer=str.substr(mid-1, 2);
        // answer=str.substring(mid-1, mid+1); mid-1부터 mid+1 전까지
    }
    // 홀수
    else answer=str.substr(mid,1); // mid 인덱스부터 1만큼
    // answer = str.substring(mid, mid+1)

    return answer;
}

console.log(solution("study"));