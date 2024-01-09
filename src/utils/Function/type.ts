/**
 * 返回一个变量类型
 * @return String
 */
export const getType = (obj: unknown) => {
	const type = typeof obj;
	if (type !== 'object') return type;
	return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
};
