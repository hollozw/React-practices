import React from 'react'
import './index.sass'

// Card-practice
const Test: React.FC<any> = (props) => {
	const { title, cover, extra, loading, children, ...restProps } = props || {}
	let head: React.ReactNode
	if (title || extra) {
		head = (
			<div className="Card-head">
				{title && <div>{title}</div>}
				{extra && <div>{extra}</div>}
			</div>
		)
	}

	const coverDom = cover && <div className='Card-cover'>{loading ? null : cover}</div>

	const body = children && (
		<div className="Card-body">{loading ? null : children}</div>
	)

	return (
		<>
			<div className="Card">
				{head}
				{coverDom}
				{body}
			</div>
		</>
	)
}

export default Test
