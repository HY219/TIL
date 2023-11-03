export default function ImageViewer({ $target }){
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
}