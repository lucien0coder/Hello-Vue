//自定义指令
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

//组件
//选项卡组件
Vue.component('area-tap',{
	props:['title'],
	template:'#tab-template',
	data:function(){
		return {
			tab_seen:true,
			isActive:false
		}
	},
	methods:{
		getArea:function(e){
			alert(this.title)
			if(this.isActive) this.isActive = false
			else this.isActive = true
		},
	}
})

//角色、人员列表组件
Vue.component('select-item',{
	props:['item'],
	template:'#item-template',
	methods:{
		add_pickup:function(e){
			this.$emit('add_pickup')
		}
	}
})
//选中人员列表组件
Vue.component('pitckup-staff',{
	props:[''],
	template:'#staff-template',

})

//实例
let cv = new Vue({
	el:'#choice',
	data:{
		seen_part:true,
		seen_cus:true,
		seen_org:true,
		seen_dept:true,
		seen_band:true,
		searchValue:'',
		isActive:false,
		show:true,
		pitck_ons:[
			{name:'麦克吉'},
			{name:'小宝度'},
			{name:'王欧密'},
			{name:'麦克吉'},
			{name:'小宝度'},
			{name:'王欧密'},
			{name:'优乐美'},
			{name:'麦克吉'},
			{name:'小宝度'},
			{name:'王欧密'},
			{name:'优乐美'},
			{name:'麦克吉'},
			{name:'优乐美'},
			{name:'麦克吉'},
			{name:'小宝度'},
			{name:'王欧密'}
		],
		roles:[
			{name:'开发员'},
			{name:'开发组长'},
			{name:'开发主管'},
			{name:'项目经理'}
		],
		staffs:[
			{name:'李大福'},
			{name:'张优美'},
			{name:'黄向丽'},
			{name:'开往来'},
			{name:'李由'},
			{name:'尚小龙'},
			{name:'曲立东'}
		],
		roleTitle:'角色列表',
		titles:['区人员','部门人员','机构人员','客户','平台']
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
			alert(e)
		},
		getBand:function(e){
			console.log('gb')
		},
		
		search_some:function(e){
			alert(this.searchValue)
		},
		confirm:function(){
			alert(this.pitck_on)
		},
		clickStaff:function(e){

		},
		addRToPU:function(index,type){
			// console.log('index:' + index)
			// console.log('type:' + type)
			let items = type == 0? this.roles:this.staffs
			let name = items[index].name
			items.splice(index,1)
			this.pitck_ons.push({name:name})
		}
	}
})

// cv.seen_org = false;
