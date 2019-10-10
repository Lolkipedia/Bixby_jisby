module.exports.function = function skill (name, skill) {
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    skills: skill,
    version: version
  }
}