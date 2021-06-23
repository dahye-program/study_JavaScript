// 문자열 입력, 회문 문자열인지 판단하여 맞다면 YES, 아니라면 NO 출력
// 회문 문자열은 앞에서 읽을때와 뒤에서 읽을때가 일치하는 것(대소문자 구별x)

// const solution = (str) => {
//     let answer = "";
//     str=str.toLowerCase();
//     for(let i=0; i<str.length/2+1; i++){
//         if(str[i]===str[str.length-i]) answer="YES";
//         else answer="NO";
//     }
//     return answer;
// }

const solution = (str) => {
    let answer = "YES";
    str = str.toLowerCase();
    // let len = str.length;
    // for (let i = 0; i < Math.floor(len / 2); i++) {
    //     if (str[i] !== s[len - i - 1]) answer = "NO";
    // }
    console.log(str.split('').reverse().join('')) // 문자 하나하나가 한글자씩이 배열이 됨(split)
    // => reverse(거꾸로배열)는 배열함수이기 때문 => join()이용해서 다시 뭉침

    return answer;
}

let str = "goooG";
console.log(solution(str));