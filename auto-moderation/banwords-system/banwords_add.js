const fs = require("fs-extra")

async function system() {
 let json = JSON.parse(fs.readFileSync("./data/banwords.json"))
 let word = tempVars("word")[0]
 let words = word.split(",")

 for(let i = 0; i < words.length; i++) {
  json.list.push(words[i])
 }
 
 fs.writeFileSync("./data/banwords.json", JSON.stringify(json, undefined, 4))
}
system()
