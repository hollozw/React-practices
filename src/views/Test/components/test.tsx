import React, { useState } from 'react'
import MyForm from './index'
import { Button } from 'antd'

const Test: React.FC = () => {
	const [formValue, setFormValue] = useState({
		applyUserId: 1,
		departmentId: 2,
		applyDate: 3,
	})
	const formItems = [
		{
			id: 'applyUserId',
			title: '申请人',
			value: formValue.applyUserId,
			required: true,
			inputOption: {
				type: 'passward',
			},
		},
		{
			id: 'departmentId',
			title: '申请部门',
			value: formValue.departmentId,
			required: true,
			inputOption: {},
		},
		{
			id: 'applyDate',
			title: '申请日期',
			value: formValue.applyDate,
			required: true,
			inputOption: {},
		},
	]

	function onSubmit() {
		setFormValue({ applyUserId: 10, departmentId: 20, applyDate: 30 })
	}
	return (
		<>
			<div
				style={{
					width: '100%',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<MyForm
					otherDom={
						<Button onClick={onSubmit} type="primary">
							submit
						</Button>
					}
					formItems={formItems as any}
				></MyForm>
			</div>
		</>
	)
}

export default Test
