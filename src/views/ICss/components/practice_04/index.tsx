import './index.css'
/**
 * @practice1 position:sticky实现粘性布局
 * @practice2 优化css动画
 * @practice3 实现css动画的暂停和播放
 * @practice4 关键字initial, inherit, unset, revert
 */
const Practice = () => {
	return (
		<>
			{/* position:sticky实现粘性布局 */}
			{/* <div className="box">
				<div className='li stick'>弹性内容</div>
				{new Array(100).fill(<div className="li">内容</div>)}
			</div> */}
			{/* 优化css动画 */}
			{/**
			 * 实现一个 Web 动画，优先级是：
			 * 	GPU 硬件加速 CSS 动画 > 非硬件加速 CSS 动画 > Javascript 动画
			 * 在使用GPU硬件加速的基础上，更加深入去优化CSS动画的步骤：
			 * 	1.精简DOM，合理布局
			 * 	2.使用transform代替left,top,减少使用消耗性能的样式
			 * 	3.控制频繁动画的层级关系
			 * 	4.考虑使用will-change
			 * 	5.使用dev-tool时间线timeline观察，找出导致高耗时，掉帧的关键操作
			 * 像素到屏幕管道中的关键步骤如下：js/css > 样式 > 布局 > 绘制 > 合成
			 * 	1.js。通过使用js来实现一些视觉变化的效果
			 * 	2.样式计算。根据匹配选择器计算出哪些元素应用
			 * 	3.布局。浏览器根据开始计算它占据的空间大小及其屏幕所在的位置。
			 * 	4.绘制。填充像素的过程
			 * 	5.合成。按正确的顺序将不同层级的部分绘制到屏幕上
			 */}
			{/* 实现css动画的暂停和播放 */}
			{/* <div className="btn stop">stop</div>
			<div className="animation"></div> */}
			{/* 关键字initial, inherit, unset, revert */}
			{/**
			 * initial：默认。用于设置css属性为默认值，可以用于任何css样式（IE不支持）
			 * inherit：继承父值。每个css属性都有一个特性，必然属性(默认继承或不继承两个属性)
			 * unset：不设置。是关键字initial和inherit的组合
			 * 	如果该属性是默认继承属性，该值等同于inherit
			 * 	如果该属性是非继承属性，该值等同于initial
			 * revert：恢复。与关键字unset相似
			 * 	revert：应用了该值后，将还原到具有浏览器或用户创建的自定义样式表设置的值
			 * 	unset：应用该值后，将样式完全被还原
			 */}
			<div className="box_2">
				<div className="father">
					<b className="color unset">
						设置了 unset，我的 font-weight 会被完全清除
					</b>
					<br />
					<b className="color revert">
						设置了 revert，我的 font-weight 将会被还原到浏览器默认样式的
						font-weight: bold;
					</b>
				</div>
			</div>
		</>
	)
}

export default Practice
