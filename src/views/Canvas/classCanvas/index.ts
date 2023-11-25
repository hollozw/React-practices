class CreateCanvas {
	protected readonly rootDOM: CanvasRenderingContext2D;
	constructor(rootDOMID: string) {
		const rootID = document.querySelector(rootDOMID) as HTMLCanvasElement;
		if (rootID) {
			this.rootDOM = rootID.getContext('2d');
			console.log(this.rootDOM);
		}
	}
	screenFill(fillDOM: Element) {
		const { clientWidth, clientHeight } = fillDOM;
		console.log(clientHeight, clientHeight);
	}
}

export default CreateCanvas;
