import React from 'react'
import { makeObservable, observable, observe, computed } from 'mobx'
import { Observer } from 'mobx-react-lite'
import { Button } from 'antd'
import data from './test'

const MyComponent = () => {
	console.debug('MyComponent')
	return (
		<Observer>
			{() => (
				<div>
					<Button
						onClick={() => {
							data.setfilter('中国6')
						}}
					>
						按钮
					</Button>
					{data.displayList.map((item) => {
						return <p key={item.address}>{item.address}</p>
					})}
					{data.isTuixiou ? '是退休' : '不是退休'}
					<p>这是一个React的Class组件。</p>
					{}
				</div>
			)}
		</Observer>
	)
}

export default MyComponent
