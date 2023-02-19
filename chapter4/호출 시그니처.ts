{
  function sum(a: number, b: number): number {
    return a + b;
  }
  // sum은 함수이므로 Function 타입이라 말할 수 있다.
  // sum의 타입을 표현할 수 있는 다른 방법은 (a:number, b:number) => number 로 표현할 수 있다.
  // 이 코드는 타입스크립트의 함수 타입 문법으로 호출 시그니처(call signature) 또는 타입 시그니처(type signature)라 부른다.
  // 이 문법은 화살표 함수와 아주 비슷하다는 점이 있는데 의도된 것이다.
  // 함수에 함수를 인수로 전달하거나 함수에서 다른 함수를 반환하는 경우 이 문법으로 인수나 반환 함수의 타입을 지정할 수 있다.ㅓㅓㅓㅓㅓㅓㅓㅓㅓ

  // 타입 수준 코드와 값 수준 코드
  function area(radius: number): number | null {
    // number, number | null 타입 수준
    if (radius < 0) {
      return null;
    }
    return Math.PI * radius ** 2;
  }

  let r: number = 3; // number 타입 수준
  let a = area(r);
  if (a != null) {
    console.info('result:', a);
  }

  // 타입 별칭으로 한정할 수 있는 독립 호출 시그니처

  // greet(name: string) 함수
  type Greet = (name: string) => string;

  // log(message:string, userId?:string) 함수
  type Log = (message: string, userId?: string) => void;

  // sumVariadicsSafe(...numbers: number[]): number 함수
  type sumVariadicsSafe = (...numbers: number[]) => number;

  // 기존의 Log 함수를 새로운 시그니처에 맞게 구현
  let log: Log = (message, userId = 'Not signed in') => {
    {
      let time = new Date().toISOString();
      console.log(time, message, userId);
    }
  };
}
