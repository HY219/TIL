export default function Editor({
  $target,
  initialState = { title: "", content: "" },
  onEditing,
}) {
  const $editor = document.createElement("div");

  let isinitialize = false; //html이 한 번만 랜더링 되도록

  this.state = initialState;

  $target.appendChild($editor);

  //작성했던 text 편집하기
  //외부에서 편집할 값을 불러와서 넣어주기
  //render함수가 할 일이 생김
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isinitialize) {
      $editor.innerHTML = `
        <input type="text" name="title" style="width:600px;" value="${this.state.title}" />
        <textarea name="content" style="width:600px;height:400px;">${this.state.content}</textarea>
    `;
      isinitialize = true;
    }
  };
  this.render();

  //title과 content 두 곳에서 keyup이 일어날 수 있음. -> 이벤트 버블링을 이용해, input name="title || content"를 판단한다.
  $editor.addEventListener("keyup", (e) => {
    const { target } = e;

    const name = target.getAttribute("name");

    //방어코드
    //state에 해당하는 name value가 있느냐
    //title과 contents인 경우만, 동작하는 방어코드
    //빈 문자열도 false로 처리하기 때문에, 명확하게 undefined로 명시해주자 - 빈문자열일 경우 화면에 update가 안뜨는 문제..해결
    if (this.state[name] !== undefined) {
      const nextState = {
        ...this.state, //현재 state 복사
        [name]: target.value, //t.value할 때 t부분을 변수로 놓을 수 있다.
      };

      //   console.log(nextState);
      this.setState(nextState);
      onEditing(this.state);
    }
    /** 이렇게 작성해도 되고...
     * if(e.getAttribute('name')){
     *
     * }else if (e.getAttribute('name')){
     *
     * }
     * */
    //e.getAttribut('name') == title;
    //e.getAttribut('name') == content;
  });
}
