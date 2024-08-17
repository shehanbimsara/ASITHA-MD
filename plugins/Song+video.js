const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("❌Please give me url or titel")
const search = await yts(q)
const deta = search.video[0];
const url = deta.url 

let desc= `
*•.¸♡ ASITHA-MD AUDIO-DOWNLOADER🎶 ♡¸.•*
|__________________________
| ❤️‍🩹titel : ${data.titel}
| ❤️‍🩹description : ${data.description}
| ❤️‍🩹time : ${data.timestamp}
| ❤️‍🩹ago : ${data.ago}
| ❤️‍🩹views : ${data.views}
|__________________________

*POWERED by ASITHA-MD*

`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod audio+ document

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:deta.titel + ".mp3" ,caption :"*POWERED by ASITHA-MD*"},{quoted:mek})

  

}catch(e){
console.(e)
reply(`${e}`)
}
})

//========video dl=======

cmd({
    pattern: "video",
    desc: "downlod video",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("❌Please give me url or titel")
const search = await yts(q)
const deta = search.video[0];
const url = deta.url 

let desc= `
*•.¸♡ ASITHA-MD VIDEO-DOWNLOADER🎶 ♡¸.•*
|__________________________
| ❤️‍🩹titel : ${data.titel}
| ❤️‍🩹description : ${data.description}
| ❤️‍🩹time : ${data.timestamp}
| ❤️‍🩹ago : ${data.ago}
| ❤️‍🩹views : ${data.views}
|__________________________

*POWERED by ASITHA-MD*

`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod video + document 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video  message 
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:deta.titel + ".mp4",caption :"*POWERED by ASITHA-MD*"},{quoted:mek})

  

}catch(e){
console.(e)
reply(`${e}`)
}
})
