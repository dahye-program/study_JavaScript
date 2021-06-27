const solution = (param) => {
    let answer = [];
    console.log(param.length);
    answer=param.join(',');
    for(let i=0; i<param.length; i++){
        let num=answer[i].indexOf('/');
        // d
        //answer+=param[i].splice(num, 1);
        console.log(answer);
    }
    return answer;
}

param=["/a/a_v2.x", "/b/a.x", "/c/t.z", "/d/a/t.x", "/e/z/t_v1.z", "/k/k/k/a_v9.x"];
console.log(solution(param));