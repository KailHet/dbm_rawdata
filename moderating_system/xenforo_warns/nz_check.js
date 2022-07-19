// const axios = require("axios")

// axios
// .get('https://netzona.org/members/kailhet.8953/')
// .then(response => (this.info = response))



// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://netzona.org/members/kailhet.8953/', false);
// xhr.send();

// if (xhr.status !=200) {
//  console.log(xhr.status + ': ' + xhr.statusText);
// } else {
//  console.log(xhr.responseText)
// }

// fetch(`https://netzona.org/members/kailhet.8953/`).then(function(response) {
//  response.text().then(function(text) {
//   poemDisplay.textContent = text;
//  })
// })


const fetch = require("node-fetch")



async function check() {
 let url = `https://netzona.org/members/kailhet.8953/`
 let obj = await (await fetch(url))
 console.log(obj)
}
check()
