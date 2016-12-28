
function GetAreaData(){
	Vue.http.get('http://localhost:3000/users/getUserInfo',{id:1})
		.then(function(res){
			var jsonData = JSON.parse(res.data)
			// let users = JSON.parse(jsonData.data)

			console.log(jsonData)

			cv.pitck_ons=[];
		}, function(err){
			console.log(res)
		});
}