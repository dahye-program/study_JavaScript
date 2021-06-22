// N*N 격자판이 입력되면, 각 행의 함, 열의 합, 두 대각선의 합 중 가장 큰 합 출력

const solution = (arr) => {
    let answer;
    let sum_row=0;
    let sum_col=0;
    let sum_diag1=0;
    let sum_diag2=0;
    let max_row=0;
    let max_col=0;
    let max_diag=0;

    for(let i =0; i<arr.length;i++){ // 행의 합
        for(let j=0; j<arr.length;j++){
            sum_row+=arr[i][j];
        }
        if(max_row<sum_row) max_row=sum_row;
        sum_row=0;
    }
    // console.log(max_row);

    for(let i =0; i< arr.length; i++){ // 열의 합
        for(let j =0; j<arr.length; j++){
            sum_col+=arr[j][i];
        }
        if(max_col<sum_col) max_col=sum_col;
        sum_col=0;
    }
    // console.log(max_col);

    // 두 대각선의 합 [0,0] [1,1] [2,2] [3,3] [4,4] / [0,4] [1,3] [2,2] [3,1] [4,0]
    for(let i=0;i<arr.length; i++){
        sum_diag1 += arr[i][i];
    }
    max_diag = sum_diag1;
    for(let i=0;i<arr.length;i++){
        sum_diag2 += arr[i][arr.length-i];
    }
    if(max_diag<sum_diag2) max_diag=sum_diag2;

    answer=max_row;
    if(answer<max_col) answer=max_col;
    if(answer<max_diag) answer=max_diag;

    return answer;
}

let arr=[[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]];
console.log(solution(arr));