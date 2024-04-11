import { Checkbox, Space, Switch, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'
import _ from 'lodash'

interface DataType {
	key: React.ReactNode
	name: string
	age: number
	address: string
	children?: DataType[]
}

function Test() {
	const [checked, setChecked] = useState<number[]>([])

	function getValue(value: any): number[] {
		const { children, key } = value || ({} as any)
		const data: number[] = []
		if (children) {
			data.push(
				...children.map((item) => {
					return getValue(item)
				})
			)
		} else {
			data.push(key as number)
		}
		return data
	}
	const columns: ColumnsType<DataType> = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: string, record: unknown) => {
				let data = _.flattenDeep(getValue(record))
				return (
					<>
						<Checkbox
							style={{ marginRight: 10 }}
							onClick={() => {
								setChecked((pre) => {
									const { children } = record || ({} as any)
									const setPre = new Set(pre)
									if(children) {
										const value = _.difference(data, pre)
										if(value.length !== 0) {
											data = value
										}
									}
									data.forEach((item: number) => {
										if (!setPre.has(item)) {
											setPre.add(item)
										} else {
											setPre.delete(item)
										}
									})
									return [...setPre]
								})
							}}
							checked={checked.includes((record as { key: number })?.key)}
						></Checkbox>
						{text}
					</>
				)
			},
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			width: '12%',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			width: '30%',
			key: 'address',
		},
	]

	const data: DataType[] = [
		{
			key: 1,
			name: 'John Brown sr.',
			age: 60,
			address: 'New York No. 1 Lake Park',
			children: [
				{
					key: 11,
					name: 'John Brown',
					age: 42,
					address: 'New York No. 2 Lake Park',
				},
				{
					key: 12,
					name: 'John Brown jr.',
					age: 30,
					address: 'New York No. 3 Lake Park',
					children: [
						{
							key: 121,
							name: 'Jimmy Brown',
							age: 16,
							address: 'New York No. 3 Lake Park',
						},
					],
				},
				{
					key: 13,
					name: 'Jim Green sr.',
					age: 72,
					address: 'London No. 1 Lake Park',
					children: [
						{
							key: 131,
							name: 'Jim Green',
							age: 42,
							address: 'London No. 2 Lake Park',
							children: [
								{
									key: 1311,
									name: 'Jim Green jr.',
									age: 25,
									address: 'London No. 3 Lake Park',
								},
								{
									key: 1312,
									name: 'Jimmy Green sr.',
									age: 18,
									address: 'London No. 4 Lake Park',
								},
							],
						},
					],
				},
			],
		},
		{
			key: 2,
			name: 'Joe Black',
			age: 32,
			address: 'Sydney No. 1 Lake Park',
		},
	]

	return (
		<>
			<Table columns={columns} dataSource={data} />
		</>
	)
}

function NewCheckBox() {
	return (
		<>
			<Checkbox></Checkbox>
		</>
	)
}

export default Test
