import { useEffect } from 'react'
import { prototypeExtend } from '@/utils'
import { SlideLoopImg } from '@/modes/index'

const Default = () => {
	useEffect(() => {
		// const penguin = prototypeExtend(
		// 	{
		// 		speed: 20,
		// 		swim: function () {
		// 			console.log('游泳速度' + this.speed)
		// 		},
		// 		run: function () {
		// 			console.log('跑了')
		// 		},
		// 	},
		// 	{}
		// )
		// console.log(penguin, 'penguin')

		const a = new SlideLoopImg([], '')
		console.log(a, 'a')
	}, [])
	return (
		<>
			<div></div>
		</>
	)
}

export default Default
