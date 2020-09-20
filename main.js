const fetch = require("node-fetch");
const fs = require("fs");
let validIds = "";
fs.readFile("anime_cache.json", (err, data) => {
	if (err) throw err;
	validIds = JSON.parse(data);
	console.log(validIds["sfw"].includes(2));
});

// const url = "https://api.jikan.moe/v3/anime/756/";
// const data = fetch(url)
// 	.then(function (response) {
// 		response.json().then(function (data) {
// 			console.log(data);
// 		});
// 	})
// 	.catch(function (err) {
// 		console.log("Fetch Error :-S", err);
// 	});
