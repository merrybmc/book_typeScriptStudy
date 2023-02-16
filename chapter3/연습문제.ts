{
  // 1
  let a = 1042; // number
  let b = 'apples and oranges'; // string
  const c = 'pineapples'; // string
  let d = [true, true, true]; // boolean[]
  let e = { type: 'ficus' }; // { type : string }
  let f = [1, false]; // (number,boolean) tuple
  const g = [3]; // number[]
  let h = null; // null

  // 2
  //   1
  let i: 3 = 3;
  i = 4; // number 3만 가능

  //   2
  let j = [1, 2, 3];
  j.push(4);
  j.push('5'); // number만 가능

  let k: never = 4; // never 타입엔 값을 할당할 수 없음

  let l: unknown = 4;
  let m = l * 2; // 'unknown' 타입의 객체
}
