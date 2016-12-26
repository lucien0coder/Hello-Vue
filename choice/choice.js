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
			this.isActive = !this.isActive
		},
	}
})

// 角色、人员列表组件
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
	props:['staff'],
	template:'#staff-template',
	methods:{
		s_staff:function(e){//方法命名方式，xxx_xxx
			this.$emit('s_staff')
		}
	}
})

//实例
let cv = new Vue({
	el:'#choice',
	data:{
		searchValue:'',
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
	beforeCreate:()=>{
		console.log('beforeCreate!')
		GetAreaData();
	},
	methods:{
		search_some:function(e){
			alert(this.searchValue)
		},
		confirm:function(){
			alert(this.pitck_ons[0].name)
		},
		addIToPU:function(index,type){
			let items = type == 0? this.roles:this.staffs
			let name = items[index].name
			items.splice(index,1)
			this.pitck_ons.push({name:name})
		},
		delStaff:function(index,type){
			let target_arr = type == 0? this.roles:this.staffs
			let thisStaff = this.pitck_ons[index];
			this.pitck_ons.splice(index,1)
		}
	}
})
