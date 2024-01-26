import './index.css'
import { Button } from 'antd'
/**
 * @practice1 CSS 斜线的实现
 * @practice2 伪类元素
 */
const Practice = () => {
	return (
		<>
			{/* 练习斜边1 */}
			{/* <div style={{ display: 'flex' }}>
				<div className="box"></div>
				<div className="box"></div>
			</div> */}

			{/* 练习斜边2 */}
			<div className="box_1"></div>

			{/* 伪类元素 */}
			<div className='box_2'>
				:root, :target, :empty, :not
				root:根元素,相当于html
				target
			</div>
		</>
	)
}

export default Practice
