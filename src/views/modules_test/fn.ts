/**
 * 单列模式
 */

export default function useFun () {
  console.log(LazySingle().publicProperty, 'LazySingle().publicProperty')
  return {}
}
// 惰性单列

var LazySingle = (function () {
	var _intance: any = null

	function Single() {
		return {
			publicMethod: function () {},
			publicProperty: '1.0',
		}
	}
	return function () {
		if (!_intance) {
			_intance = Single()
		}
		return _intance
	}
})()
