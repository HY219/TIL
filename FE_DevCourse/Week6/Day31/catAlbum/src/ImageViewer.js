export default function ImageViewer({ $target, onClose }){
    const $imageViewer = document.createElement("div");
    $imageViewer.className = "ImageViewer Modal";
    $target.appendChild($imageViewer);

    this.state = {
        selectedImageUrl: null //null인 경우 rendering(x), 값이 있는 경우 rendering(o)
    }

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        // selectedImageUrl가 있을 경우(=FILE일 경우), modal창 띄우기
        $imageViewer.style.display = this.state.selectedImageUrl ? "block" : "none";

        $imageViewer.innerHTML = `
            <div class="content">
                <img src="${this.state.selectedImageUrl}" />
            </div>
        `
    }

    this.render();

    window.addEventListener('keyup', (e) => {
        // 만약 누른 키가 esc인 경우 onClose를 호출한다.
        alert(e.key);
        if (e.key === "Escape") {
            onClose();
        }
    })

    $imageViewer.addEventListener('click', (e) => {
        // includes는 Array에서 동작하는 메서드이기 때문에
        // 배열이 아닌 e.target.classList를 Array.from으로 감싸주어야한다.
        // (e.target.classList는 유사배열인 DOMTokenList를 반환)
        console.log(e.target.classList);
        console.log(Array.from(e.target.classList));
        if (Array.from(e.target.classList).includes('Modal')) {
            onClose();
        }
    })
}