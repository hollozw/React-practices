import React, { useEffect, useRef } from 'react'
import CreateCanvas from './classCanvas/index'

function Canvas() {
	const divRef = useRef(null)
	console.log(divRef.current)
	const canvasRef = useRef({})
	useEffect(() => {
		canvasRef.current = new CreateCanvas('#canvas')
	}, [])
	return (
		<>
			<div ref={divRef} style={{ width: '100%', height: '100vh' }}>
				<canvas id="canvas"></canvas>
			</div>
		</>
	)
}

export default Canvas
