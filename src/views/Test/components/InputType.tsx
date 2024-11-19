import { Checkbox, Input } from 'antd'

export const InputType: React.FC<{ type?: string; value?: any }> = (props) => {
	const { type, ...restProps } = props
	const components = {
		default: <Input {...restProps} />,
		Password: <Input.Password {...restProps} />,
		Checkbox: <Checkbox {...restProps} />,
	}

	return components[type || 'defalut'] || components['default']
}
