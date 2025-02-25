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
let numbers: Array<number> = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

let div = document.querySelector<HTMLDivElement>("myDiv1")
let button = document.querySelector<HTMLButtonElement>("myButton1")

button?.click()

function getFirstElement<T>(arr: T[]): T | undefined {
    if(!arr.length){
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

interface Dict<T>{
    [key:string] : T;
};


interface Entry<K, V> {
    key: K;
    value: V;
}

let entry : Entry<string,number> ={
    key: "age",
    value: 30
}

let entry2 : Entry<number,string[]> ={
    key: 1,
    value: ["red","green","blue"]
}

// interface strDict{
//     [key: string]: string;
// }


let strObj:Dict<string> = {
    name: "Elliot",
}

// interface numDict{
//     [key: string]: number;
// }

let numObj:Dict<number> = {
    age:30,
};