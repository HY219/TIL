const storage = window.localStorage;
//이것만 고치는 것으로 storage타입을 바꿀 수 있는 장점이 있다.
//ex. const storage = window.sessionStorage;

//localStroage에 저장할 수 있는 두가지를 넣었다.
//라이브러리를 보면, 아래와 같은 작업들을 미리 해놓는 것이라 보면된다.
//라이브러리를 뜯어보면 도움이 될 것이다.
//값을 가져오기
export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

//값을 JSON.stringify형태로 저장하기
export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};
