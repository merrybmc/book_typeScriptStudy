{
  let as: readonly number[] = [1, 2, 3]; // readonly number[]
  let bs: readonly number[] = as.concat(4); // readonly number[] , as 배열에 4를 추가
  let three = bs[2]; // three는 bs의 2번째 배열의 값

  as[4] = 5; // readonly이므로 읽기만 허용함, 변경 불가능
  as.push(6); // readonly이므로 읽기만 허용함, 변경 불가능

  type A = readonly string[]; // readonly string[]
  type B = ReadonlyArray<string>; // readonly string[]
  type C = Readonly<string[]>; // readonly string[]

  type D = readonly [number, string]; // readonly [number,string]
  type E = Readonly<[number, string]>; // readonly [number,string]

  // 읽기 전용 값을 바꿀 수 없으므로 코드를 쉽게 이해할 수 있는 장점이 있지만
  // 결국 자바스크립트 배열로 구현을 한 것이다.
  // 즉, 스프레드(...)나 .slice 등으로 배열을 조금만 바꿔도 우선 원래 배열을 복사해야 하므로,
  // 주의하지 않으면 응용 프로그램의 성능이 느려질 수 있다.
}
