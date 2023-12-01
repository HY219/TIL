export default function Nodes({ $target, initialState, onClick, onPrevClick }) {
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
            <div class="Node" data-id="${node.id}">
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

  // 이벤트 델리게이션 기법
  $nodes.addEventListener('click', e => {
    // 현재 클릭한 것에서 가장 가까운 노드
    // img || node.name 클릭 시 -> 상위 .Node가 클릭 되도록
    const $node = e.target.closest(".Node");

    const { id } = $node.dataset;

    // id가 없는 경우는?
    if (!id) {
      // TODO 뒤로가기 누른 거 처리
    }

    const node = this.state.nodes.find(node => node.id === id);

    if (node) {
      onClick(node);
    } else {
      // 뒤로가기 클릭 시
      onPrevClick();
    }
  })
}
