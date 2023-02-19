{
  // 제너레이터 함수는 여러 개의 값을 생성하는 편리한 기능을 제공
  // 이 함수를 사용하면 값을 생산하는 속도를 정교하게 조절 가능

  function* craeteFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  let fibonacciGenerator = craeteFibonacciGenerator();
  fibonacciGenerator.next(); // 0
  fibonacciGenerator.next(); // 1
  fibonacciGenerator.next(); // 2
  fibonacciGenerator.next(); // 3
  fibonacciGenerator.next(); // 5

  function* createNumbers(): IterableIterator<number> {
    let n = 0;
    while (1) {
      yield n++;
    }
  }
  let numbers = createNumbers();
  numbers.next(); // 0
  numbers.next(); // 1
  numbers.next(); // 2
}
