const aoi = require("aoi.js");
const bot = new aoi.Bot({
token:"ODU4MTI0Mzg5NTQ2OTgzNDY2.YNZknQ.U1kKPyKEWApsI66LwmpMcrvR57w",
prefix: "."
}); 
bot.onMessage()
bot.loadCommands(`./commands/`)
//durum
bot.status({text: "by charoN",
  type: "PLAYING",
  time: 12}); 
bot.musicStartCommand({ 
channel: "$channelID", 
code: `$title[Şarkı Şuanda Oynatılıyor!]
$description[$songInfo[title] şuanda oynatılıyor!] $footer[$username[$songInfo[userID]];$userAvatar[$songInfo[userID]]]
$color[BLACK]`})
bot.musicEndCommand({ 
channel: "$channelID", 
code: `$title[Şarkı bitti!]
$description[Şarkı listesi bitti, sesten çıkış yapılıyor.]
$color[BLACK]`})
