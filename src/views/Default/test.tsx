import React from 'react'
import { makeObservable, observable, observe, computed } from 'mobx'
import { Observer } from 'mobx-react-lite'
import { Button } from 'antd'

class MyComponentData {
	@observable
	public testList: any = [
		{
			name: 'test',
			age: 18,
			sex: '男',
			address: '中国1',
		},
		{
			name: 'test',
			age: 18,
			sex: '男',
			address: '中国2',
		},
		{
			name: 'test',
			age: 18,
			sex: '男',
			address: '中国3',
		},
		{
			name: 'test',
			age: 18,
			sex: '男',
			address: '中国4',
		},
		{
			name: 'test',
			age: 18,
			sex: '男',
			address: '中国5',
		},
		{
			name: 'test',
			age: 18,
			sex: '男',
			address: '中国6',
		},
	]

	@observable
	private filter: any = ''

	@computed
	public get isTuixiou() {
		return this.testList[0].age > 60
	}

	@computed
	public get displayList() {
		return this.testList.filter((item) => {
			return this.filter ? this.filter === item.address : true
		})
	}

	constructor() {
		makeObservable(this)
		setInterval(() => {
			this.testList[0].age = this.testList[0].age + 1
		}, 100)
	}

	public setfilter(filter) {
		this.filter = filter
	}
}

const data = new MyComponentData()
console.debug(data, 'data')
export default data
