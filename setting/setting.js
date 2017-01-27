// import personalInfo from 'personal'
// import personalSetting from 'personalSetting'

var personalInfo = {template: '<div>MYInfo</div>'}
var personalSetting = {template: 'personalSetting.vue'}

var routes = [
	{path:'/info', component: personalInfo},
	{path:'/setting', component:personalSetting}
]

var router = new VueRouter({
	routes :routes
})

var vm = new Vue({
	router: router
}).$mount('#personal_setting')