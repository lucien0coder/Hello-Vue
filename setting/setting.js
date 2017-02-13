// let sleep = (time)=> new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		// resolve('yes')
// 		reject('err')
// 	},time)
// })

// let start = async ()=>{
// 	console.log('start')
// 	try{
// 		let a = await sleep(3000)
// 		console.log('end: '+a)
// 	}catch(err){
// 		console.log('err: '+err)
// 	}
// }

// start();

var fs = require('fs');
var path = require('path');
var request = require('request');

var movieDir = __dirname + '/movies',
    exts     = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv'];

// 读取文件列表
var readFiles = function () {
    return new Promise(function (resolve, reject) {
        fs.readdir(movieDir, function (err, files) {
            resolve(files.filter((v) => exts.includes(path.parse(v).ext)));
        });
    });
};

// 获取海报
var getPoster = function (movieName) {
    let url = `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`;

    return new Promise(function (resolve, reject) {
        request({url: url, json: true}, function (error, response, body) {
            if (error) return reject(error);

            resolve(body.subjects[0].images.large);
        })
    });
};

// 保存海报
var savePoster = function (movieName, url) {
    request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg')));
};


(async () => {
    let files = await readFiles();

    // await只能使用在原生语法
    for (var file of files) {
        let name = path.parse(file).name;

        console.log(`正在获取【${name}】的海报`);
        savePoster(name, await getPoster(name));
    }

    console.log('=== 获取海报完成 ===');
})();