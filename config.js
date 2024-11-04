global.owner = [
  "6283841671596",
  ""
]
global.ownMain = "6283841671596"
global.ownername = '⌁⃰𝐃𝐚𝐧͢𝐚𝐝𝐲𝐚𝐤𝐬𝐚𝐃𝐞𝐯༑'
botname = '⌁⃰𝐃𝐚𝐧͢𝐚𝐝𝐲𝐚𝐤𝐬𝐚𝐈𝐬𝐇𝐞𝐫𝐞༑'
global.ownernumber = '6283841671596'
global.botnumber = '6285921432812'
namabot = "⌁⃰𝐃𝐚𝐧͢𝐚𝐝𝐲𝐚𝐤𝐬𝐚𝐈𝐬𝐇𝐞𝐫𝐞༑"
global.linkgc2 = "https://whatsapp.com/channel/0029ValmecRIyPtJuLzFD02h"
global.xchannel = {
	jid: '120363306176036510@newsletter'
	}
//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!", 
"bugrespon": "OTW BANTAI RIPPER KROCO", 
"donebug": "SUKSES SEND BUG DEVICE SUDAH CRASH", 
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})