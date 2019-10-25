var head = new Vue({
	el: '#head',
	data: {
		items: [{
				content: '文章',
				url: '#'
			},
			{
				content: '欣赏',
				url: '#'
			},
			{
				content: '素材',
				url: '#'
			},
			{
				content: '兑换',
				url: '#'
			},
			{
				content: '活动',
				url: '#'
			},
			{
				content: '唯然',
				url: '#'
			},
			{
				content: '更多',
				url: '#'
			}

		],
		loginUrl: '#',
		zhuceUrl: '#'
	}
});
const main = new Vue({
	el: '#main',
	data: {
		life: {
			h1: '热爱生活，享受乐趣',
			p: 'Love life and enjoy the fun.'
		},
		notice: [{
				url: '#',
				content: '[03-22]用户中心正式上线'
			},
			{
				url: '#',
				content: '[12-11]新增个人主页展示，越看越有爱'
			},
			{
				url: '#',
				content: '[12-04]觉唯官网新版升级上线'
			},
			{
				url: '#',
				content: '[09-01]新增QQ一键登录'
			},
			{
				url: '#',
				content: '[08-12]觉唯商城Beta版测试上线'
			},	
		],
		wrapper:[
			{
			imgUrl:'../img/juewei/08112152c48359f4f2515ed.jpg'
			},
			{
			imgUrl:'../img/juewei/08112152c48359f4f2515ed.jpg'
			},
			{
			imgUrl:'../img/juewei/08112152c48359f4f2515ed.jpg'
			},
			{
			imgUrl:'../img/juewei/08112152c48359f4f2515ed.jpg'
			},
			{
			imgUrl:'../img/juewei/08112152c48359f4f2515ed.jpg'
			}
		],
		product:[
			{
				
			}
		]
	}
})
