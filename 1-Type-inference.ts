/*
챕터 3-1 타입 추론( Type Inference )
*/

// 변수
let myNumber = 5;
let myString = "Hello";
let myBool = true;

myNumber = 23
myNumber = 10
myNumber ="23"
// 함수 반환 타입
function add(x: number, y: number){
    return `${x}${y}`
}


const n = add(10,5);

// 배열 & 객체

let nums = [1,2,3,4]

let user = { name: "Eli", age:30}

nums.push("hello")

user.age ="30"

let mixedValuse = [1,2,3,"red","greed","blue"]