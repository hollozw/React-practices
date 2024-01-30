import './index.css'
/**
 * @practice1 position:sticky实现粘性布局
 */
const Practice = () => {
	return (
		<>
			<div className="box">
				<div className='li stick'>弹性内容</div>
				{new Array(100).fill(<div className="li">内容</div>)}
			</div>
		</>
	)
}

export default Practice
