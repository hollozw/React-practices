import React from 'react'
import { Form, Input } from 'antd'
import { InputType } from './InputType'

type IFormItem = {
	id: number
	title: string
	value: unknown
	required: boolean
	inputOption: InputElement
}

type InputElement = {
	type: string
}

const MyForm: React.FC<{
	formItems: IFormItem[]
	otherDom?: React.ReactElement | null
}> = (props) => {
	const { formItems = [], otherDom } = props || {}
	const [form] = Form.useForm()

  

	if (formItems.length === 0) return null
	return (
		<>
			<Form form={form}>
				{formItems.map((item: any, index: number) => {
					const { title, value, inputOption, id, ...restItem } = item || {}
					return (
						<Form.Item label={title} key={index} {...restItem}>
							<InputType id={id} value={value} {...inputOption} />
						</Form.Item>
					)
				})}
				<Form.Item>{otherDom}</Form.Item>
			</Form>
		</>
	)
}

export default MyForm
