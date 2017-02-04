var persons = Vue.extend({
			template:'#ps',
			data: function(){
				return {
					msg:'hello vue router component'
				}
			}
		})

		var personi = Vue.extend({
			template:'#pi',
			data: function(){
				return{
					userName:'张海涛',
					useraccount:'zhanghaitao',
					bio:'一个勤勤恳恳种代码的农夫',
					registerDate:'11:09 PM - 1 Jan 2016',
					local:'China, GuangDong',
					organization:'South China University of Technology',
					phoneNO:'1367*****93',
					eMail:'luc******@qq.com',
					ID:'44*************530',
					level:'高级认证'
				}
			},
			methods:{
				
			}
		})

		var routes = [
			{path:'/', component: personi},
			{path:'/setting', component: persons}
		]

		var router = new VueRouter({
			routes :routes
		})

		var rou = new Vue({
			router: router,
			
		}).$mount('#app')
