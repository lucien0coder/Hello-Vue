var vm = new Vue({
	el:'#sign_up',
	data:{
		uaIsNull:false,
		usefull:false,
		isLoading:false,
		new_UA:'',
		pwdIsNull:false,
		pwdIsUsefull:false,
		fPwd:'',
		pwdIsCorrect:false,
		pwdIsWrong:false,
		sPwd:'',
		isAbled:true
	},
	computed:{
		trim_UA:function(){
			return this.new_UA.trim()
		},
		trim_pwd:function(){
			return this.fPwd.trim()
		},
		trim_sPwd:function(){
			return this.sPwd.trim()
		}
	},
	created:function(){
		console.log('vue created!')
	},
	methods:{
		checkUA:function(){//输入过程监听
			this.uaIsNull = false
			if(''!=this.trim_UA) console.log(this.trim_UA);
		},
		UA_enter:function(){//失焦验证
			if(''==this.trim_UA) {this.uaIsNull = true;this.usefull = false}
				else{//请问用户名是否存在
					this.isLoading = true//验证后，取消loading
					this.usefull = true
				}
		},
		checkPWD:function(){
			this.pwdIsNull=false
			if(''!=this.trim_pwd){this.pwdIsUsefull=true}
		},
		pwd_enter:function(){
			if(''==this.trim_pwd) {this.pwdIsNull=true;this.pwdIsUsefull=false;}
				else{

				}
		},
		sPwd_check:function(){
			if(this.trim_pwd == this.trim_sPwd){this.pwdIsCorrect=true;this.pwdIsWrong=false}
				else{this.pwdIsWrong=true;this.pwdIsCorrect=true}
		}
	}





});