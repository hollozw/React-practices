import React from 'react'
import './index.scss'
import { Col, Row } from 'antd'

export default function index() {
	return (
		<>
			<div className="view">
				<div className="card">
					<div>
						<form id={'form'}>
							<Row>
								<Col span={4}>
									<label>用户名：</label>
								</Col>
								<Col span={20}>
									<input name="user_name" type="text" />
								</Col>
							</Row>
							<Row>
								<Col span={4}>
									<label>密码：</label>
								</Col>
								<Col span={20}>
									<input name="password" type="password" />
								</Col>
							</Row>
							<Row>
								<Col>
									<input
										type="submit"
										value={'登录'}
										onClick={(e) => {
											e.preventDefault()
											const form = document.getElementById(
												'form'
											) as HTMLFormElement
											console.log(form, 'form')
											console.log(form.elements['user_name'].value, 'e')
										}}
									/>
								</Col>
							</Row>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
