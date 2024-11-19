import React, { useState } from 'react'
import Test from './test4/index'
import { Button } from 'antd'
// import Test from './test3/index'
import Img from '@/asset/example.jpg'

const TestAll: React.FC = () => {
	return (
		<div style={{ padding: '20px' }}>
			<Test
				title={'Card-Title'}
				extra={<Button>extra按钮</Button>}
				cover={<img style={{ width: '100%' }} src={Img}></img>}
			>
				<div>list内容</div>
			</Test>
		</div>
	)
}

export default TestAll
