var personal_info = {template: 'personal.vue'}
var personal_setting = {template: 'personal_setting.vue'}

var routes = [
	{path:'/info', component: personal_info},
	{path:'/setting', component:personal_setting}
]

var router = new VueRouter({
	routes :routes
})

var vm = new Vue({
	router: router
}).$mount('#personal_setting')