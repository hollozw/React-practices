import { Button } from 'antd'
import { useContext } from 'react'

const TestSon1 = (props: any) => {
	console.log('TestSon1渲染了')
	return (
		<>
			TestSon1
			<Button
				onClick={() => {
					props.Change()
				}}
			>
				触发修改a
			</Button>
		</>
	)
}

export default TestSon1
