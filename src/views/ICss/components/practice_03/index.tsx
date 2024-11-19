import { useEffect, useRef } from 'react'
import './index.css'
import { Button } from 'antd'
/**
 * @practice1 CSS 斜线的实现
 * @practice2 伪类元素
 * @practice3 css变量
 */
const Practice = (props: any) => {
	const { color = '#ccc' } = props || {}
	const box = useRef(null)
	useEffect(() => {
		// box.current.style.setProperty('--main-color', color)
	}, [])
	return (
		<>
			{/* <Button
				onClick={() => {
					const value = getComputedStyle(box3.current as any)
					// const value = getComputedStyle(document.querySelector('.box_3'))
					console.log(value.getPropertyValue('--mainWidth'))
					box3.current.style.setProperty('--mainWidth', '200px') // 改变width值
				}}
			>
				改变css变量
			</Button> */}
			练习斜边1
			{/* <div style={{ display: 'flex' }}>
				<div className="box" ref={box}></div>
			</div> */}
			练习斜边2
			{/* <div className="box_1"></div> */}
			伪类元素
			{/* :root, :target, :empty, :not
				root:根元素,相当于html
				target:代表应该特殊的元素，让css能够接受到用户的点击事件，并进行反馈（另一个点击事件的css选择器:checked）
				empty:只计算结点及文本（包括空格），注释，运行指令不考虑在内 */}
			{/* <div className="box_2"></div> */}
			css变量
			{/* <div className="box_3" ref={box3}></div> */}
			100%和auto变量
			{/* <div className='box_4'>
				<div className='box1'></div>
				<div className='box2'></div>
			</div> */}
		</>
	)
}

export default Practice
