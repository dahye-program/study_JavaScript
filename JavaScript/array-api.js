// 1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    // 배열의 모든 element들을 문자형으로 변환
    console.log(result);
}

// 2. make an array out of a string
{
    const fruits= 'apple, banana, orange, cherry';
    const result = fruits.split(','); // 파라미터는 separator(구분자) +
    console.log(result);
}

// 3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // 5, 4, 3, 2, 1
    console.log(array); // 5, 4, 3, 2, 1
}

// 4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // index 2부터 5까지
    console.log(result); // 3, 4, 5
    console.log(array); // 1, 2, 3, 4, 5
}

class Student{
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// 5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 6. make an array of enrolled students
{
    const result = students.filter((student)=> student.enrolled);
    console.log(result);
}

// 7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score); // callback 함수에서 return된 것들로
    console.log(result);
}

// 8. check if there is a student with the score lower than 50
{
    const result = students.some((student)=>student.score<50); // 50점 미만 있는지 확인
    console.log(result);

    const result2 = !students.every((student)=>student.score>=50);
    console.log(result2);
}

// 9. compute student's average score
{
    const result = students.reduce((prev, curr)=>prev + curr.score, 0);
    console.log(result / students.length);
}

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student)=>student.score)
        .filter((score)=>score>=50)
        .join();
    console.log(result);
}

// Bonus. sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map(student => student.score)
        .sort((a, b)=> a-b)
        .join();
    console.log(result);
}