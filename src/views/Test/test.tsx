import { Button } from 'antd'
import React from 'react'

const Value1 = React.createContext(null as any)
const Value2 = React.createContext(null as any)
const Test: React.FC = () => {
	const [value1, setValue1] = React.useState<any>(0)
	const [value2, setValue2] = React.useState<any>(0)

	return (
		<>
			<Button onClick={() => setValue1(value1 + 1)} type="primary">
				改变value1
			</Button>
			<Button onClick={() => setValue2(value2 + 1)}>改变value2</Button>
			<Value1.Provider value={value1}>
				<Value2.Provider value={value2}>
					<div>
						<Zi1></Zi1>
					</div>
					<div>
						<Zi2></Zi2>
					</div>
				</Value2.Provider>
			</Value1.Provider>
		</>
	)
}

function Zi1(props: any) {
	const value = React.useContext(Value1)
	const value2 = React.useContext(Value2)
	console.log('zi1中代码执行了一遍')
	return <>Zi1</>
}

function Zi2(props: any) {
	console.log('zi2中代码执行了一遍')
	const value = React.useContext(Value2)
	return <>Zi2</>
}
export default Test
