import FieldForm from 'rc-field-form';
import { ForwardRefRenderFunction } from 'react';

const InternalForm: React.FC = (props, ref) => {
	const { ...otherProps } = props || {};
	return (
		<>
			<FieldForm {...otherProps}></FieldForm>
		</>
	);
};

const Form = () => {
	return (
		<>
			<div>form</div>
		</>
	);
};

export default Form;
