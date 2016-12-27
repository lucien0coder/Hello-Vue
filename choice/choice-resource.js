
function GetAreaData(){
	Vue.http.get('http://localhost:3000/users/getUserInfo',{id:1})
		.then((res)=>{
			let jsonData = JSON.parse(res.data)
			// let users = JSON.parse(jsonData.data)

			console.log(jsonData)

			cv.pitck_ons=[];
		}, (err)=>{
			console.log(res)
		});
}