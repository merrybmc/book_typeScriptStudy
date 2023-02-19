{
  // 선택적 매개변수와 기본 매개변수
  function log(message: string, userId?: string): void {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
  }

  log('page loaded'); // Not signed in 출력
  log('User signed in', '1234abcd'); // 1234abcd 출력

  // 매개변수에 기본값 지정
  function log2(message: string, userId = 'Not signed in'): void {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
  }

  log('page loaded'); // Not signed in 출력
  log('User signed in', '1234abcd'); // 1234abcd 출력

  // 기본 매개변수 타입 명시
  type Context = {
    appId?: string;
    userId?: string;
  };

  function log3(message: string, context: Context = {}) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, context.userId);
  }

  // 나머지 매개변수
  // 인수를 여러 개 받는 함수라면 그 목록을 배열 형태로 건넬 수 있다.

  function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
  }

  sum([1, 2, 3]); // 6
}
