{
  type Cat = { name: string; purrs: boolean };
  type Dog = { name: string; barks: boolean; wags: boolean };
  type CatOrDogOrBoth = Cat | Dog;
  type CatAndDog = Cat & Dog;

  // Cat
  let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true,
  };

  // Dog
  a = {
    name: 'Domino',
    barks: true,
    wags: true,
  };
  // both
  a = {
    name: 'Donkers',
    barks: true,
    purrs: false,
    wags: true,
  };

  // 이 함수는 string 또는 null을 반환할 수 있다.
  function trueOrNull(isTrue: boolean) {
    if (isTrue) {
      return isTrue;
    }
    return null;
  }

  type Returns = string | null;
  function trueOrNull2(isTrue: Returns) {
    if (isTrue) {
      return isTrue;
    }
    return null;
  }
}
