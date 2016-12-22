//自定义指令
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

//组件


//实例
let cv = new Vue({
	el:'#choice',
	data:{
		seen_part:true,
		seen_cus:true,
		seen_org:true,
		seen_dept:true,
		seen_band:true,
		searchValue:''
	},
	created:function(){
		console.log('create: hello choice_app')
	},
	methods:{
		getPart:function(e){
			console.log('gp')
		},
		getCus:function(e){
			console.log('gc')
		},
		getOrg:function(e){
			console.log('go')
		},
		getBand:function(e){
			console.log('gb')
		},
		getDept:function(e){
			console.log('gd')
			alert(e)
		},
		search_some:function(e){
			alert(this.searchValue)
		}
	}
})

cv.seen_org = false;
