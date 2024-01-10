import * as React from 'react';
import { utilFun } from '@/utils/index';

const Default = () => {
	React.useEffect(() => {
		const a = utilFun.getType({});
		console.log(a, 'a')
	}, []);
	return (
		<>
			<div>123</div>
		</>
	);
};

export default Default;
