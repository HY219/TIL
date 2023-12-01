export default function Breadcrumb({ $target, initialState }){
    const $breadcrumb = document.createElement("nav");
    $breadcrumb.className = "Breadcrumb";
    $target.appendChild($breadcrumb);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        // paths로 경로를 출력
        $breadcrumb.innerHTML = `
            <div>Root</div>
            ${this.state.map(({ name }) => `
                <div>${name}</div>
            `).join('')}
        `
    }

    this.render();
}