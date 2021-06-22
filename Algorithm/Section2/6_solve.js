// 풀이

const solution = (arr) => {
    let answer = Number.MIN_SAFE_INTEGER;
    let sum_row = sum_col = 0; // 행, 열의 합
    let sum_1 = sum_2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum_row = sum_col = 0;
        for (let j = 0; j < arr.length; j++) {
            sum_row += arr[i][j];
            sum_col += arr[j][i];
        }
        answer = Math.max(answer, sum_row, sum_col);
    }

    for (let i = 0; i < arr.length; i++) {
        sum_1 += arr[i][i];
        sum_2 += arr[i][arr.length - i - 1];
    }
    answer = Math.max(answer, sum_1, sum_2);

    return answer;
}

let arr = [[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]];
console.log(solution(arr));