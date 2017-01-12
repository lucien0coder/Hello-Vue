var vm = new Vue({
	el:'#sign_up',
	data:{
		is_null:false,
		usefull:false,
		isLoading:false,
		unused:false,
		new_UA:'',
		pwdIsNull:false,
		pwdIsUsefull:false,
		fPwd:'',
		sPwd:'',
	},
	computed:{
		trim_UA:function(){
			return this.new_UA.trim()
		},
		trim_pwd:function(){
			return this.fPwd.trim()
		}
	},
	created:function(){
		console.log('vue created!')
	},
	methods:{
		checkUA:function(){//输入过程监听
			this.is_null = false
			if(''!=this.trim_UA) console.log(this.trim_UA);this.unused=false
		},
		UA_enter:function(){//失焦验证
			if(''==this.trim_UA) {this.is_null = true;this.unused=true;this.usefull = false}
				else{//请问用户名是否存在
					this.isLoading = true//验证后，取消loading
					this.usefull = true
					this.unused=false
				}
		}
	}





});