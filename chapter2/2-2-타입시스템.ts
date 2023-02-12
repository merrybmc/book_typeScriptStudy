export {};

// 이노테이션
// 이노테이션을 사용하면 타입스크립트에 명시적으로 타입을 지정할 수 있다.
// 이노테이션은 'value:type' 형태로 쓰인다.

let a: number = 1; // number
let b: string = 'hello'; // string
let c: boolean[] = [true, false]; // boolean 배열

// 이노테이션을 사용하지 않으면 타입스크립트가 알아서 추론을 한다.

let d = 1;
let e = 'hello';
let f = [true, false];

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
