// 4-3
const GenericTs = () => {
  // 인수들을 받아서 배열로 만들어주는 메소드
  function toArray<T>(a: T, b: T): T[] {
    return [a, b];
  }

  // 만약 화살표 함수로 제네릭을 표현한다면 다음과 같이 된다.
  const toArray2 = <T extends unknown>(a: T, b: T): T[] => [a, b];

  toArray<number>(1, 2); // 숫자형 배열
  toArray<string>("1", "2"); // 문자형 배열
  toArray<string | number>(1, "2"); // 혼합 배열

  // 사실 컴파일러는 전달하는 인수의 타입을 보고 스스로 추론하기 때문에, 함수 호출할 때 제네릭을 안서줘도 알아서 추론한다.
  toArray(1, 2);
  toArray("1", "2");
  // 하지만 가끔 자동 타입 추론이 잘 안되는 경우가 있기 때문에 직접 제네릭을 선언해야한다.
  toArray<string | number>(1, "2");
  return <></>;
};

export default GenericTs;
