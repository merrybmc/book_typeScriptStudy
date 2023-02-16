{
  // undefined 아직 값을 정의하지 않았음을 의미 (연산이 가능)
  // null 값이 없음을 의미 (연산이 불가능)
  // void 명시적으로 아무것도 반환하지 않는 함수의 반환 타입 (console.log 등)
  // never 절대 반환하지 않는 함수 타입 (예외를 던지거나 영원히 실행되는)

  // (a) number 또는 null을 반환하는 함수
  function a(x: number) {
    if (x < 10) {
      return x;
    }
    return null;
  }

  // (b) undefined를 반환하는 함수
  function b() {
    return undefined;
  }

  // (c) void를 반환하는 함수
  function c(): void {
    let a = 2 + 2;
    let b = a * a;
    console.log(b);
  }

  // (d) never를 반환하는 함수
  function d() {
    throw TypeError('I always error');
  }

  // void type
  function doSomething() {
    console.log('Hello World');
  }

  // (e) never를 반환하는 또 다른 함수
  function e() {
    while (true) {
      doSomething();
    }
  }

  // unknown이 모든 타입의 상위 타입
  // never는 모든 타입의 서브(하위) 타입
}
