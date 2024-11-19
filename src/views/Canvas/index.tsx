import './index.sass';

function Canvas() {
	return (
		<>
			<div style={{ width: '100%', height: '100vh' }} className="ICss">
				{/* 不同颜色的边框 */}
				<div className="border-first">
					<div style={{position: "absolute", zIndex: "100", width: '100%', height: "100%"}}>123</div>
				</div>
			</div>
		</>
	);
}

export default Canvas;
