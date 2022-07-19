const fs = require("fs")
const json = JSON.parse(fs.readFileSync(`./data/users.json`))
const list = tempVars("list")
const del_warn = tempVars("del_warn")
const user = tempVars("user")
// const pos = del_warn-1

async function load() {
  let warn_balls = list[del_warn-1].match(/\d/)[0]
  Actions.storeValue(warn_balls, 1, "warn_balls", cache)
  let warn = list[del_warn-1]
  Actions.storeValue(warn, 1, "deleted_warn", cache)

  json?.[user]?.Warns?.List.splice(list - 1, 1)
  fs.writeFileSync(`./data/users.json`, JSON.stringify(json))
}
load()
