// void draw1(int h){
//     if(h==0){
//         return 0;
//     }
//     draw1(h-1);
//
//     for(int i=0; i<h; i++){
//         printf("*");
//     }
//     printf("\n");
// }
//
// void draw2(int h){
//     for(int o=0; o<h; o++){
//         for(int i=0; i<o; i++){
//             printf("*");
//         }
//         printf("\n");
//     }
// }

const solution = (param) => {
    let answer = [];
    console.log(param);
    return answer
}

const main = () => {
    solution(["/a/a_v2.x", "/b/a.x", "/c/t.z", "/d/a/t.x", "/e/z/t_v1.z", "/k/k/k/a_v9.x"]);
}

main();

// 윤민전략
/*
*  1. for 문 한번 돌림 (배열 끝까지)
*  2. include 문 (대상 요소안에 해당 메서드의 값이 존재하는지) 을 이용해서 '/' 가 안 나올때까지 탐색
*  3. 그뒤에 첫번째 나오는게 파일 이름, 점 뒤에 나오는게 확장자
*  4. 미리 만들어둔 배열에 저장
* */


for(let i = 0 ;i < length; i ++){
    if(arr[i] === '/'){
        return true;
    }else {
        return false;
    }
}
//
// const result = [1,'/',3].includes('/');
//
// const solution = (param) => {
//     let answer = [];
//     const BOOL = '#';
//     const SHORT = '##';
//     const FLOAT = '####';
//     const INT = '########';
//     const LONG = '########,########';
//
//     const tmp = ["#"].reduce((curr, index) => {
//         // #을 제외한 길이가 8이 될떄까지 '.' push
//         // return '#.......'
//         // LOGIC
//     })
//
//     answer.push(tmp);
//     answer.push(INT);
//
//     return answer;
// }
//
// function main(){
//     solution(["INT", "INT", "BOOL", "SHORT", "LONG"]);
// }
//
// main();