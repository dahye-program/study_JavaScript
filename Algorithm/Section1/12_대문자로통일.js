// 문자열을 입력받아 대문자로 문자열 통일하여 출력

const solution = (str) => {
    let answer = "";
    for (let x of str) {
        answer += x.toUpperCase();
    }
    // for(let x of str){ // 소문자 확인해서 toUpperCase()
    //     if(x===x.toLowerCase()) answer+=x.toUpperCase();
    //     else answer+=x;
    // }

    // for(let x of str){ //아스키 코드 이용
    //     let num=x.charCodeAt();
    //     if(97<=num && num<=122) answer+=String.fromCharCode(num-32);
    //     else answer+=x;
    // }
    return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
