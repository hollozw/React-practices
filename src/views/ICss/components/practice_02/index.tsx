import './index.css'
import { Button } from 'antd'
/**
 * @practice 纯CSS的导航栏Tab切换方案
 */
const Practice = () => {
	return (
		<>
			<div className="box">
				<div className='jump'>
          <a href='#content1'>按钮1</a>
          <a href='#content2'>按钮2</a>
				</div>
				<div className="nav" id="content1">
					内容1
				</div>
				<div className="nav" id="content2">
					内容2
				</div>
			</div>
		</>
	)
}

export default Practice
