{
  // 제네릭 타입 매개변수
  // 여러 장소에 타입 수준의 제한을 적용할 때 사용하는 플레이스홀더 타입, 다형성 타입 매개변수 라고도 불리는 매개변수이다.

  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[];
  };

  // 타입스크립트는 전달된 array의 타입을 보고 T의 타입을 추론한다.
  // 꺽쇠괄호(<>)로 제네릭 타입 매개변수임을 선언할 수 있다.

  // 함수의 매개변수가 함수르 호출할 때 건네진 인수로 매번 다시 한정되듯, T도 호출할 때마다 새로운타입으로 한정된다.
  let filter: Filter = (array, f) => {}; // ...
  ㅓ;
  // T는 number로 한정
  filter([1, 2, 3], (_) => _ > 2);

  // T는 string으로 한정
  filter(['a', 'b'], (_) => _ !== 'b');

  // 제네릭 타입의 선언 위치에 따라 타입의 범위뿐 아니라 타입스크립트가 제네릭 타입을 언제 구체 타입을 한정하는지도 결정된다.
  type Filter2 = {
    <T>(array: T[], f: (item: T) => boolean): T[];
  };
  // 이 함수는 <T>를 호출 시그니처의 일부로(시그니처의 여는 괄호 바로 앞에) 선언했으므로 타입스크립트는
  // Filter 타입의 함수를 실제 호출할 때 구체타입을 T로 한정한다.

  // T의 범위를 Filter의 타입 별칭으로 한정하려면 Filter를 사용할 때 타입을 명시적으로 한정하게 해야 한다.
  type Filter3<T> = {
    (array: T[], f: (item: T) => boolean): T[];
  };

  let filter2: Filter3 = (array, f) => {}; // 한 개의 타입 인수를 요구
  type OtherFilter = Filter3; // 한 개의 타입 인수를 요구

  let filter3: Filter3<number> = (array, f) => {};
  type StringFilter = Filter3<string>;
  let stringFilter: StringFilter = (array, f) => {};

  // 타입 스크립트는 호출 시그니처를 정의하는 방법에 따라 제네릭을 추가하는 방법이 정해져 있다.
  type Filter4 = {
    <T>(array: T[], f: (item: T) => boolean): T[];
  };
  let filer4: Filter4; // ...

  type Filter5<T> = {
    (array: T[], f: (item: T) => boolean): T[];
  };
  let filter5: Filter5<number>; // ...

  type Filter6 = <T>(array: T[], f: (item: T) => boolean) => T[];
  let filter6: Filter6; // ...

  type Filter7<T> = (array: T[], f: (item: T) => boolean) => T[];
  let filter7: Filter7<number>; // ...

  // map 함수 예시
  function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = f(array[i]);
    }
    return result;
  }

  // generic =>
  function map2<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = f(array[i]);
    }
    return result;
  }
}
