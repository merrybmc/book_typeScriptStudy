{
  function filter(array, f) {
    let result: number[] = [];
    for (let i = 0; i < array.length; i++) {
      let item: number = array[i];
      if (f(item)) {
        result.push(item);
      }
    }
    return result;
  }
  filter([1, 2, 3, 4], (_) => _ < 3); // [1,2]

  // filter의 타입 시그니처
  type Filter = {
    (array: unknown, f: unknown) => unknown[]
  };

  // =>
  type Filter2 = {
    (array:number[],f:(item:number)=>boolean):number[]
  }

  // => 오버로드 확장
  type Filter3 = {
    (array:number[], f:(item:number) => boolean):number[]
    (array:string[],f:(item:string)=>boolean):string[]
  }

  // 객체 배열 확장
  type Filter4 = {
    (array:number[], f:(item:number) => boolean):number[]
    (array:string[],f:(item:string)=>boolean):string[]
    (array:object[],f:(item:object)=>boolean):object[]
  }
  // 이렇게 사용할 경우 에러가 발생한다. 객체에 저장된 실제 형태에 대해서는 어떠한 정보도 알려주지 않기 때문이다.
  // 이를 해결하기 위해 제너릭 타입 매개변수가 필요하다.
}
