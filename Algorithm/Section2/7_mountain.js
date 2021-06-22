// 지도 정보 N*N 입력, 자신의 상하좌우 숫자보다 크면 그 지역은 봉우리 => 봉우리 개수 출력
// 격자의 가장자리는 0으로 초기화
// [행][열] 기준으로 상[-1][0], 하[+1][0], 좌[0][-1], 우[0][+1] 비교

const solution = (arr) => {
    let answer = 0;
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] >= arr[i][j]) { // index out범위 확인하면서
                    flag = 0; // 더 큰 수 발견되면 flag=0
                    break;
                }
            }
            if (flag) answer++;
        }
    }
    return answer;
}

let arr = [[5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]];
console.log(solution(arr));