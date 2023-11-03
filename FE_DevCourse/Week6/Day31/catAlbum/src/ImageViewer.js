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
        // e.target.classList는 유사배열인 DOMTokenList를 반환
        if (Array.from(e.target.classList).includes('Modal')) {
            onClose();
        }
    })
}