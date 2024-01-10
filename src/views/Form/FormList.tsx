// import * as React from 'react';
// import { List } from 'rc-field-form';
// import { ValidatorRule } from 'rc-field-form/es/interface';

// export interface FormListProps {
// 	prefixCls?: string;
// 	name: string | number | Array<string | number>;
// 	rules?: Array<ValidatorRule>;
// 	initialValue?: Array<any>;
// 	children: (
// 		fields: FormListFieldData[],
// 		operation: FormListOperation,
// 		meta: { error: React.ReactNode[]; warings: React.ReactNode[] }
// 	) => React.ReactNode;
// }

// const FormList: React.FC<FormListProps> = ({ prefixCls, children, ...props }) => {
// 	const { getPrefixCls } = React.useContext();
// 	// const contextValue = React.useMemo(()=>(
// 	//   getPrefixCls,
// 	//   status: 'error' as const,
// 	// ), [prefixCls])

// 	return (
// 		<List {...props}>
// 			{(fields, operation, meta) => (
// 				<FormItemPrefixContext.Provider value={contextValue}>
// 					{children(
// 						fields.map((field) => ({ ...field, fieldKey: field.key })),
// 						operation,
// 						{
// 							errors: meta.errors,
// 							warnings: meta.warnings,
// 						}
// 					)}
// 				</FormItemPrefixContext.Provider>
// 			)}
// 		</List>
// 	);
// };

// export default FormList;
