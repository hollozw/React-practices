import { createContext, useContext } from 'react';

const FormContent = createContext<any>(null);

const FormProvider: React.FC = (props: any) => {
	const { children, ...restProps } = props;
	const originValue = useContext(FormContent);
	return (
		<>
			<FormContent.Provider value={restProps}>{children}</FormContent.Provider>
		</>
	);
};

export default FormProvider;
