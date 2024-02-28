/**
 * 返回一个变量类型
 * @return String
 */
export const getType = (obj: unknown) => {
	const type = typeof obj
	if (type !== 'object') return type
	return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}

/**
 * 原型继承
 * 基于已经存在的模板对象克隆出新对象
 */
export function prototypeExtend(...args: any[]) {
	let F = function () {}
	for (let i = 0; i < args.length; i++) {
		for (let j in args[i]) {
			// 将这些属性复制到缓存类原型中
			F.prototype[j] = args[i][j]
		}
	}
	return new F()
}

// 使用实例
const penguin = prototypeExtend(
	{
		speed: 20,
		swim: function () {
			console.log('游泳速度' + this.speed)
		},
	},
	{
		run: function () {
			console.log('跑了')
		},
	}
)
