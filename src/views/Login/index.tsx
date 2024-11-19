import React from 'react'
import './index.scss'
import { Col, Row } from 'antd'
import title from '@/asset/logo192.png'

export default function index() {
	return (
		<>
			<div className="view">
				<div className="card">
					<div className="image">
						<img src={title} className="image-src" />
					</div>
					<form className="form">
						<Row className="form-top form-row">
							<Col span={6}>
								<label className="form-label">用户名：</label>
							</Col>
							<Col span={18}>
								<input className="form-input" name="user_name" type="text" />
							</Col>
						</Row>
						<Row className="form-row">
							<Col span={6}>
								<label className="form-label">密码：</label>
							</Col>
							<Col span={18}>
								<input className="form-input" name="password" type="password" />
							</Col>
						</Row>
						<Row style={{ display: 'flex', justifyContent: 'center' }}>
							<Col>
								<input
									className="form-submit"
									type="submit"
									value={'登录'}
									onClick={(e) => {
										e.preventDefault()
										const form = document.getElementById(
											'form'
										) as HTMLFormElement
										// console.log(form, 'form')
										// console.log(form.elements['user_name'].value, 'e')
									}}
								/>
							</Col>
						</Row>
					</form>
				</div>
			</div>
		</>
	)
}
