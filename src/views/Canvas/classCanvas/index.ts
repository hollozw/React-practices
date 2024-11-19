class CreateCanvas {
	protected readonly rootDOM: CanvasRenderingContext2D;
	constructor(ReactRenderDOM: CanvasRenderingContext2D) {
		this.rootDOM = ReactRenderDOM;
	}
	screenFill(fillDOM: Element) {}
}

export default CreateCanvas;
