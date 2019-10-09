var http = require('http')
const na =" https://ddragon.leagueoflegends.com/realms/na.json" 
const ver = http.getUrl(na, {format:"json", cacheTime: 0})["n"]["champion"]
// const item_ver = http.getUrl(na, {format:"json", cacheTime: 0})["n"]["item"]

module.exports.naming = function (name, target) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion.json")

  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  if (target == "eng") {
    for (idx in search){
    if (search[idx]["name"] == name){
      var outname = search[idx]["id"]
      break
      }
    } 
  } else {
    for (idx in search){
    if (search[idx]["id"] == name){
      var outname = search[idx]["name"]
      break
      }
    } 
  }
  
  return outname
}


module.exports.version = function (name) {

  return champ_ver
}

module.exports.subitem = function (item) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion.json")

  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  const items = response["data"]

  var subitems = []

  for(idx in items) {
    if (items[idx]["name"] == item) {
      var temp = []

      for (n in items[idx]["from"]) {
        temp.push(items[idx]["from"][n])
      };

      for (sub in temp) {
        subitems.push(items[temp[sub]]["name"])
      };
    }
  };
  return subitems
}


module.exports.summary = function (engname) {
  const url = "http://ddragon.leagueoflegends.com/cdn/9.19.1/data/ko_KR/champion.json"

  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  var summary = search[engname]["blurb"]

  return summary
}