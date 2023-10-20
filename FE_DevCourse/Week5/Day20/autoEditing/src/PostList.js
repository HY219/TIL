export default function PostList({ $target, initialState, onPostClick }) {
  const $postList = document.createElement("div");
  $target.appendChild($postList);

  this.state = initialState;
  // console.log(this.state);
  // console.log(this.state.map((post) => post.id));

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  //실제로 코딩할 때는, 값 체크하고, validation 신경쓰면서 진행하기

  this.render = () => {
    $postList.innerHTML = `
        <ul>
        ${this.state
          .map((post) => `<li data-id="${post.id}">${post.title}</li>`)
          .join("")}
        
        </ul>`;
  };

  this.render();

  $postList.addEventListener("click", (e) => {
    const $li = e.target.closest("li"); //postList내 클릭한 li를 가져올 수 있다. //19번째 줄 - `<li data-id="${post.id}">${post.title}</li>`

    if ($li) {
      const { id } = $li.dataset;

      onPostClick(id);
    }
  });
}
