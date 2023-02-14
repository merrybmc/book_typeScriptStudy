{
  let a = [1, 2, 3]; // number[]
  let b = ['a', 'b']; // string[]
  let c: string[] = ['a']; // string[]
  // 초기화를 number와 string으로 저장을 하면 number | string 을 추론
  let d = [1, 'a']; // (string|number)[]
  const e = [2, 'b']; // (string|number)[]
  let f = ['red'];
  let g: number[] = []; // number[]
  let h = [];

  a.push(4);
  //   'white' 타입 인수를 'string' 타입 매개 변수에 할당 불가능
  a.push('white');

  f.push('blue');
  //   'true' 타입 인수를 'string' 타입 매개 변수에 할당 불가능
  f.push(true);

  d.push(3);
  d.push('b');
  // 'false' 타입 인수를 (string|number) 타입 매개 변수에 할당 불가능
  d.push(false);

  g.push(1);
  // 'red' 타입 인수를 number[] 타입 매개 변수에 할당 불가능
  g.push('red');

  d.map((data) => {
    if (typeof data === 'number') {
      return data * 3;
    }
    return data.toUpperCase();
  });
}
