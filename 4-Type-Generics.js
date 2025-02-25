"use strict";
/*
챕터 3-4  제네릭(generics)
*/
//장점 : 코드 재사용성증가,유연성과 확장성, 명시적인 타입 표현
//단점 : 러닝 커브, 복잡성 증가, 컴파일 시간 증가
//<T>
// function genericsFunction<T>(arg: T): T {
//     return arg;
// }
// interface GenericInterface<T> {
// }
// class GenericInterface<T> {
// }
// Array<string>
let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
let div = document.querySelector("myDiv1");
let button = document.querySelector("myButton1");
button === null || button === void 0 ? void 0 : button.click();
function getFirstElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
// function getFirstStringElement(arr: string[]){
//     if(!arr.length){
//         return undefined;
//     }
//     return arr[0];
// }
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
;
let entry = {
    key: "age",
    value: 30
};
let entry2 = {
    key: 1,
    value: ["red", "green", "blue"]
};
// interface strDict{
//     [key: string]: string;
// }
let strObj = {
    name: "Elliot",
};
// interface numDict{
//     [key: string]: number;
// }
let numObj = {
    age: 30,
};
