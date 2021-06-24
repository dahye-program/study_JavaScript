// // const solution = (n, m) => {
// //     for(let i=0; i<m; i++){
// //         for(let j=0; j<n; j++){
// //             process.stdout.write('*');
// //         }
// //         console.log('\n');
// //     }
// //     return 0;
// // }
// //
// // console.log(solution(3, 4));
//
//
// const solution = (arr) => {
//     let answer = [];
//     let set = new Set([]);
//     arr.forEach(element =>{
//         if(set.has(element)) return;
//         set.add(element);
//         count=countOf(arr, element);
//         if(count>1) answer.push(count);
//     });
//     if(answer.length===0) answer.push(-1);
//     return answer;
// }
//
// function countOf(arr, value){
//     let count=0;
//     arr.forEach(element=>{
//         if(element===value) count++;
//     });
//     return count;
// }
//
// let arr=[1, 2, 3, 3, 3, 4, 4];
// solution(arr);

// function solution(param0){
//     let answer=[];
//     answer=param0;
//     for(let i=0;i<param0.length; i++){
//
//     }
//     return answer;
// }
//
// let a = ["/a/a_v2.x", "/b/a.x"];
// console.log(a);
// solution(a);

// function solution(param0){
//     let answer='';
//     let n=param0.length;
//     // param0=param0.join(',');
//     for(let i=0; i<n; i++){
//         if(param0[i]==='INT') answer+='#';
//     }
//     return answer;
// }
//
// let a = ["INT", "INT"];
// //console.log(a);
// solution(a);