{
  function add(a: number, b: number): number {
    return a + b;
  }

  add(10, 20); // 30
  add.apply(null, [10, 20]); // 30, apply는 함수 안에서 값을 this로 한정하며 두 번째 인수를 펼쳐 함수에 매개변수로 전달
  add.call(null, 10, 20); // 30, 인수를 펼쳐서 전달하지 않고 순서대로 전달
  add.bind(null, 10, 20)(); // 30, 함수를 호출하지않고 새로운 함수를 반환
}
