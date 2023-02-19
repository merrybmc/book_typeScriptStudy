{
  // 타입스크립트 함수 예시
  function add(a: number, b: number) {
    return a + b;
  }

  // 반환 타입 명시
  function add2(a: number, b: number): number {
    return a + b;
  }

  // 이름을 붙인 함수ㅏ
  function greet(name: string): string {
    return 'hello' + name;
  }

  // 함수 표현식
  let greet2 = function (name: string): string {
    return 'hello' + name;
  };

  // 화살표 함수 표현식
  const greet3 = (name: string): string => {
    return 'hello' + name;
  };

  // 단축형 화살표 함수 , return이 생략
  const greet4 = (name: string) => {
    'hello' + name;
  };

  // 함수 생성자 , (사용하지 않는 편이 좋다)
  let greet5 = new Function('name', 'return "hello "+ name');

  // 타입스크립트에서 함수를 호출할 때 타입 정보를 따로 제공할 필요가 없으며
  // 바로 인수를 전달하면 타입스크립트가 함수의 매개변수와 인수의 타입 호환이 되는지 확인한다.
  add(1, 2); // 3
  greet('Crystal'); // hello Crystal
  add(1); // 에러 발생
  add(1, 'a'); // 에러 발생
}
