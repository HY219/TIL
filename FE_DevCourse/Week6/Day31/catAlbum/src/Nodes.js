export default function Nodes({ $target, initialState, onClick }) {
  const $nodes = document.createElement("div");
  $target.appendChild($nodes);
  $nodes.classList.add("Nodes"); // css가 적용되도록, 클래스 이름 추가

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;
    $nodes.innerHTML = `
        ${isRoot ? "" : `
            <div class="Node">
                <img src="https://cdn.roto.codes/images/prev.png">
            </div>
          ` // 루트 노드가 아닐 경우, 뒤로가기 버튼 이미지
        }
        ${nodes.map(
          (node) => `
            <div class="Node">
              <img src="${node.type === `DIRECTORY` ? 
                "https://cdn.roto.codes/images/directory.png" : 
                "https://cdn.roto.codes/images/file.png"
              }">
              ${node.name}
            </div>
          ` // node.type에 따라 맞는 이미지 출력
        ).join('')}
    `;
  };

  this.render();
}
