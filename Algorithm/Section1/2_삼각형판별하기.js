// 길이가 서로 다른 A, B, C 길이 입력받아 삼각형을 만들 수 있는지 확인하고 만들 수 있다면 YES, 없다면 NO를 출력
// 제일 긴 변이 나머지 두변의 합보다 작아야함

function solution(a, b, c){
    let answer="YES";
    let max;
    let total=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c; // max가 제일 긴 변
    if((total-max)<max) answer="NO"; // max(제일 긴 변)과 나머지 두 변 비교
    return answer;
}

console.log(solution(6, 7, 11));