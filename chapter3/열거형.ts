{
  // 열거형(enum)은 해당 타입으로 사용할 수 있는 값을 열거하는 기법
  // 열거형은 키를 값에 할당하는, 순서가 없는 자료구조
  // 즉, 키가 컴파일 타입에 고정된 객체
  // 따라서 타입스크립트는 키에 접근할 때 주어진 키가 실제 존재하는지 확인할 수 있다.

  // 문자열에서 문자열로 매핑하는 열거형
  enum Language {
    English,
    Spanish,
    Russian,
  }

  // 문자열에서 숫자로 매핑하는 열거형
  enum Language2 {
    English = 3,
    Spanish = 5,
    Russian = 4,
  }

  // 점 표기법으로 열거형 값에 접근
  let myFirstLanguage = Language.Russian;

  // 괄호 표기법으로 열거형 값에 접근
  let mySecondLanguage = Language2[0];

  console.log(mySecondLanguage); // Spanish
  console.log(Language);
  console.log(Language2);
  console.log(Language.English); // English 인덱스 번호 출력[0]
  console.log(Language2.English); // English 인덱스 번호 출력[3]
  console.log(Language[0]); // English
  console.log(Language2[0]); // undefined

  // 열거형 멤버에 명시적으로 값을 할당하기 (열거형 합치기)
  enum Language3 {
    English = 0,
    Spanish = 1,
  }
  console.log(Language3);

  enum Language3 {
    Russian = 2,
  }
  console.log(Language3);

  enum Language4 {
    English = 100,
    Spanish = 200 + 300,
    Russian, // Spanish가 500이므로 500 다음 숫자인 501으로 추론
  }

  console.log(Language4[0]);
  console.log(Language4[501]);

  // 열거형에 문자열 값을 사용하거나 문자열과 숫자 값을 혼합하여 사용 가능
  enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = '0xc10050',
    White = 255,
  }

  let red = Color.Red;
  let pink = Color.Pink;

  // 타입스크립트에서는 값이나 키로 열거형에 접근할 수 있도록 허용하지만 이는 불안정한 결과를 초래하기 쉽다.
  let a = Color.Red; // Color.Red
  let b = Color.Green; // 타입에 존재하지 않음
  let c = Color[255];
  let d = Color[6]; // undefined

  // const enum을 사용하면 위의 사항을 안전하게 만들 수 있다.
  const enum Language5 {
    English,
    Spanish,
    Russian,
  }

  // 유효한 enum키 접근
  let e = Language5.English;

  // 유효하지 않은 enum키 접근
  let f = Language5[0]; // const enum은 문자열로만 접근 가능

  // const enum의 사용 방법 예시
  // 모든 숫자를 열거형에 할당할 수 있으므로 문자열 값을 갖는 열거형을 사용
  const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table',
  }

  function flip(f: Flippable) {
    return 'flipped it';
  }

  flip(Flippable.Chair); // 'flipped it'
  flip(Flippable.Cup); // 'flipped it'
  flip(12); // 에러 발생
}
