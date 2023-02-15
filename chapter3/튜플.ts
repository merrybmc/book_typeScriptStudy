{
  // 튜플은 배열의 서브타입이다.
  // 튜플은 길이가 고정되어있다.
  // 각 인덱스의 타입이 알려진 배열의 일종이다.
  // 다른 타입과 달리 튜플은 선언할 때 타입을 명시하여야 한다.
  // 자바스크립트에서는 배열과 튜플에 같은 문법을 사용하는데 타입스크립트에서는 대괄호를 배열 타입으로 추론하기 때문이다.

  let a: [number] = [1];

  // [이름, 성씨, 생년월일] 튜플
  let b: [string, string, number] = ['Byeong Min', 'Cho', 1993];
  b = ['Cheol Su', 'Kim', 2001];

  // 선택형 요소 튜플
  let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];

  let moreTrainFares: ([number] | [number, number])[] = [[3.75], [8.25, 7.7], [10.5]];

  // 길이를 갖도록하는 튜플
  let friend: [string] = ['Sara', 'Tali'];
  let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire'];

  // 이형 배열
  let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c'];
}
