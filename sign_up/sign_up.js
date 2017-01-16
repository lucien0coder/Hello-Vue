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
		hasCheck:false,
		viewDetails:false
	},
	watch:{
		new_UA:function(ua){//输入过程监听
			this.uaIsNull = false
			if(''!=this.new_UA) console.log(this.new_UA);
		},
		fPwd:function(pwd){
			this.pwdIsNull=false
			if(''!=this.fPwd){this.pwdIsUsefull=true}
		}
	},
	created:function(){
		console.log('vue created!')
	},
	methods:{
		UA_enter:function(){//失焦验证
			if(''==this.new_UA) {this.uaIsNull = true;this.usefull = false}
				else{//请问用户名是否存在
					this.isLoading = true//验证后，取消loading
					this.usefull = true
				}
		},
		pwd_enter:function(){
			if(''==this.fPwd) {this.pwdIsNull=true;this.pwdIsUsefull=false;}
				else{

				}
		},
		sPwd_check:function(){
			if(''!=this.fPwd){//不为空才执行
				if(this.fPwd == this.sPwd){this.pwdIsCorrect=true;this.pwdIsWrong=false}
					else{this.pwdIsWrong=true;this.pwdIsCorrect=false}
			}
		},
		showDetails:function(){
			this.viewDetails = true
		},
		submit:function(){
			alert('hello user')
		}
	}
});