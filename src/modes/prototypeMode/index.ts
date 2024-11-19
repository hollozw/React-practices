/**
 * 原型模式
 * 创建一个基类，让不同特效类去继承这个基类，对于差异化的需求通过重写这个继承下来的属性或方法来解决
 */

type TLoopImages = (imgArr: any[], container: any) => void
// 轮播图原型创建
export let LoopImages: TLoopImages = function (imgArr = [], container = '') {
	this.imagesArray = imgArr
	this.container = container
}

// 轮播图上下切换类
export let SlideLoopImg: TLoopImages = function (imgArr, container) {
	// 继承loopImages类
	LoopImages.call(this, imgArr, container)
}

// 轮播图左右切换类
let FadeLoopImg: TLoopImages = function (imgArr, container) {
	// 继承loopImages类
	LoopImages.call(this, imgArr, container)
	this.changeImage = function () {
		console.log('左右切换图片')
	}
}
