//상수처리
//습관이 들어야함
//반복적으로 나오는, 추후에 변경이 가능한, 어떠한 값을 바꿔서 동작을 바꿀 수 있는 요소들은 상수로 빼고,
//나중에 환경변수 등의 방식으로 밖으로 빼거나 한다.
export const API_END_POINT = "https://kdt-frontend.programmers.co.kr";

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return await res.json(); //await를 빼먹을 경우 -> 파라미터가 return 된다.
    }
    throw new Error("API 처리중 뭔가 이상합니다!");
  } catch (e) {
    alert(e.message); //사용자가 errpr가 생겼는지 안생겼는지 캐치 가능
  }
};
