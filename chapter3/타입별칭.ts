// 타입 별칭
// let, const 대신 타입 별칭으로 타입을 가리킬 수 있다.

type Age = number;
type Person = {
  name: string;
  age: Age;
};

// 타입스크립트는 별칭을 추론하지는 않으니 반드시 별칭의 타입을 명시적으로 정의해야 한다.
let age: Age = 55;
let driver: Person = {
  name: 'James',
  age: age,
};

// 자바스크립트의 변수 선언과 마찬가지로 하나의 타ㅓ입을 두 번 정의할 수는 없다.
type Color = 'red';
type Color = 'blue';
