// 문자열을 입력받아 해당 문자열에 대문자가 몇 개 있는지 출력

const solution = (str) => {
    let answer = 0;
    for (let x of str) { // 고전적인거래,,
        if (x === x.toUpperCase()) answer++;
    }
    // for(let x of str){
    //     let num=x.charCodeAt(); // x의 아스키 코드
    //     // 대문자 65(A)~90(Z)
    //     // 소문자 97(a)~122(z)
    //     if(65<=num && num<=90) answer++;
    // }
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));