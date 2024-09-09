import { useState } from 'react'
import './index.sass'
import { Menu, Tabs } from 'antd'

const Appraisal = () => {
	const list = useState([
		{
			value: 0,
			label: '用户管理',
		},
		{
			value: 1,
			label: '基数管理',
		},
		{
			value: 2,
			label: '系数管理',
		},
		{
			value: 3,
			label: '人员绩效',
		},
	])
	return (
		<div className={'box'}>
			<div className={'nav'}>
				<Tabs defaultActiveKey="1">
					<Tabs.TabPane tab="用户管理" key="1">
						用户管理
					</Tabs.TabPane>
					<Tabs.TabPane tab="基数管理" key="2">
						基数管理
					</Tabs.TabPane>
					<Tabs.TabPane tab="系数管理" key="3">
						系数管理
					</Tabs.TabPane>
					<Tabs.TabPane tab="人员绩效" key="4">
						人员绩效
					</Tabs.TabPane>

				</Tabs>
			</div>
		</div>
	)
}

export default Appraisal
