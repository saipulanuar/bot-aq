let fs = require('fs')
let chalk = require('chalk')
let tum1 = fs.readFileSync('./gambar1.jpeg')
let tum2 = fs.readFileSync('./gambar2.jpeg')
//let tum3 = fs.readFileSync('./gambar3.jpeg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `Runtime\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
runtime = process.uptime()
teks = `${kyun(runtime)}`
run = `${kyun(runtime)}`


global.owner = ['6288279268363', '79224816516'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'KingOfBear',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
 // var sticker_name = 'I hope you\'re fine'
  //var sticker_author = 'Nurutomo'
  var sticker_name = 'King Of Bear' // ganti aja

var sticker_author = 'King Of Bear' // ganti aja
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author


global.multiplier = 69 // The higher, The harder levelup


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

// Tambahan By Me (RyuuZeyy)
gc1 = 'https://chat.whatsapp.com/G30dx0vWbDNBbl6xLabgDh'
gc2 = 'https://chat.whatsapp.com/G30dx0vWbDNBbl6xLabgDh'
gc3 = 'https://chat.whatsapp.com/G30dx0vWbDNBbl6xLabgDh'
namaig = 'https://instagram.com/Raraharsita2'
linkf = gc1
linkff = namaig
namabot = '𝙆𝙞𝙣𝙜 𝙊𝙛 𝘽𝙚𝙖𝙧'
namagithub = 'https://github.com/SaipulAnuar'
gcid = '972502255007-1406453544'
footer = '𝙆𝙞𝙣𝙜 𝙊𝙛 𝘽𝙚𝙖𝙧'
lolkey = 'rey2k21'
global.wait = 'Tunggu Sebentar'
bc = 'Bear'
titler = run
body = '𝙆𝙞𝙣𝙜 𝙊𝙛 𝘽𝙚𝙖𝙧'
gambar1 = tum1
gambar2 = tum2
