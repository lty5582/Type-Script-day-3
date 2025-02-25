"use strict";
/*
챕터 3-2 타입 단언( Type Assertion )
*/
// 표현식 as 지정할 타입
const someValue = "Hey there";
//unknown 타입을 좁히기전까지는 구체적인 연산이나 메소드 연출을 허용하지 않는다
const len = someValue.length; // ?
const button = document.getElementById("button");
if (button instanceof HTMLButtonElement) {
    button.disabled = true;
}
if (button) {
    button.disabled = false;
}
// 타입에대한 확신이 있을떄만 사용추천
