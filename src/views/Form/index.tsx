const Form = (props: any) => {
	const { children } = props;
	return <>{children}</>;
};

Form.Item = (props: any) => {
	return <>Item</>;
};

const FormItems = () => {
	return (
		<>
			<Form>
				<Form.Item value = {123}></Form.Item>
			</Form>
		</>
	);
};

export default FormItems;
