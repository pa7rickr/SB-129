const a = '```'
const c = '*'
const akyu = '*'
/***
 * Script Created by MhankBarBar 
 * Recode By Me: @_pa7rick
  Thanks For:
  @adiwajshing/baileys
  MhankBarBar 
  LeysCoders 
  NPM 
  Affis Junianto 
  ArugaZ 
  Penyedia Api 
  Tobz 
  Zahirr  
  Arifi Razzaq 
  Manik

Thanks For All Creator Bot
Note: Kalo Recode Jangan Hapus TQTO
*/

/* 
    MENU IN 1508 & 1713
    PREMIUM MENU IN 1811
    OWNER MENU IN 1933
    MAKER MENU IN 2373
    FUN MENU IN 2562
    GROUP MENU IN 2731

/******************* NPM  *******************/
const {
    WAConnection: _WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require('@adiwajshing/baileys')
const {
	exec
} = require("child_process")
const {
	removeBackgroundFromImageFile
} = require('remove.bg')
const imageToBase64 = require('image-to-base64')
const { smsg } = require('./lib/simple')
const simple = require('./lib/simple')
const _sewa = require('./lib/sewa')
const moment = require("moment-timezone")
const speed = require('performance-now')
const qrcode = require("qrcode-terminal")
const crypto = require('crypto')
const ms = require('parse-ms')
const toMs = require('ms')
const request = require('request')
const axios = require('axios')
const Math_js = require('mathjs')
const yts = require( 'yt-search')
const FormData = require("form-data");
const Exif = require('./lib/exif')
const exif = new Exif()
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const fs = require("fs")
const cd = 4.32e+7
const WAConnection = simple.WAConnection(_WAConnection);
/******************* LIB & JSON File *******************/
const {
	jadibot,
	stopjadibot,
	listjadibot
} = require("./lib/jadibot");
const {
	wait,
	simih,
	getBuffer,
	h2k,
	generateMessageID,
	getGroupAdmins,
	getRandom,
	banner,
	start,
	info,
	success,
	close
} = require('./lib/functions')
const {
	convertSticker
} = require('./lib/swm.js')
const {
	fetchJson
} = require('./lib/fetcher')
const {
	recognize
} = require('./lib/ocr')
const {
	color,
	bgcolor
} = require('./lib/color')
const {
	cmdadd
} = require('./lib/totalcmd')
const {
	antiSpam
} = require('./lib/antispam')
const {
	bahasa
} = require('./lib/bahasa')
const {
	listsurah
} = require('./lib/listsurah')
const {
	ind
} = require('./database/language')
const { 
    EmojiAPI
} = require("emoji-api");
const emoji = new EmojiAPI()
const { 
    yta, 
    ytv 
} = require("./lib/ytdl");
const { 
    addCountStc, 
    isCountStc, 
    delCountStc, 
    addCountKsr, 
    isCountKsr, 
    delCountKsr 
} = require('./lib/antispamstc')
//=============JSON GAME==============\\
const game = require('./lib/game')
let rnumber = JSON.parse(fs.readFileSync('./src/number1.json'))
const {
	isTicTacToe,
	getPosTic,
	KeisiSemua,
	cekIsi,
	cekTicTac
} = require('./lib/tictactoe.js')
const tictac = require('./lib/tictac.js')

const antilink = JSON.parse(fs.readFileSync('./database/data/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/data/antivirtex.json'))
const samih = JSON.parse(fs.readFileSync('./database/data/simi.json'))
const badword = JSON.parse(fs.readFileSync('./database/data/badword.json'))
const welcome = JSON.parse(fs.readFileSync('./database/data/welcome.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/data/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/data/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/data/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/data/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/data/uang.json'))

const sewa = JSON.parse(fs.readFileSync('./database/data/sewa.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/data/nsfw.json'))
const afk = JSON.parse(fs.readFileSync('./database/data/afk.json'))
const stc = JSON.parse(fs.readFileSync('./database/data/stc.json'))
const sensticker = JSON.parse(fs.readFileSync('./database/data/sensticker.json'));
const prem = JSON.parse(fs.readFileSync('./database/data/prem.json'))
const ban = JSON.parse(fs.readFileSync('./database/data/banned.json'))
const bad = JSON.parse(fs.readFileSync('./database/data/bad.json'))
const pepolu = JSON.parse(fs.readFileSync('./src/totalcmd.json'))[0].totalcmd

/******************* Settings  *******************/
const setting = JSON.parse(fs.readFileSync('./config.json'))
const {
	botName,
	ownerName,
	patrickgrupp,
	numberOwner,
	initialLimits,
	memberLimits,
	zeksApi,
	zahirApi,
	leysApi,
	xteamApi,
	dappaApi,
	zekaisApi,
	keyprem,
	gamewaktu
} = setting
numbernye = '0@s.whatsapp.net'

const vcard = 'BEGIN:VCARD\n' +
	'VERSION:3.0\n' +
	'FN:Who is pa7rick?\n' +
	'ORG:Pengembang PatrickBot\n' +
	'TEL;type=CELL;type=VOICE;waid=6288989029718:+62 889 8902 9718\n' +
	'END:VCARD'

const ownerNumber = [`${numberOwner}@s.whatsapp.net`]
blocked = []
autojoin = false

codeReedem = 'XtiLjKqOp09Ii57e3'
const uang1 = 1500
const uang2 = 3000
const uang3 = 6000
const uang4 = 15000
antidel = false
numbernye: 0
fake = 'AntiDelete aktif'
shp = '⬡'
initialLimit = setting.initialLimits
memberLimit = setting.memberLimits
codeVerification = 86522
codeVerification1 = 76311
codeVerification2 = 24432
hit_today = []

let tictactoe = []
let tebakgambar = []
let family100 = []
let siapakah = []
let math = []
let tebakangka = []
let susunkata = []
let tekateki = []
let asahotak = []

/******************* XP, Level, Limit, Registered PatrickBot  *******************/
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./lib/register.js')

const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
} = require('./lib/limitatm.js')

const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser
} = require('./lib/expiredprem.js')

/**
  * Sticker Cmd 
  * Updated
**/
let _scommand = JSON.parse(fs.readFileSync("./database/data/scommand.json"));
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/data/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);
	return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
}

function addMetadata(packname, author) {
	if (!packname) packname = `Created by @${authorSticker}`;
	if (!author) author = `${packSticker}`;
	author = author.replace(/[^a-zA-Z0-9]/g, '');
	let name = `${author}_${packname}`
	if (fs.existsSync(`./temp/${name}.exif`)) return `./temp/${name}.exif`
	const json = {
		'sticker-pack-name': packname,
		'sticker-pack-publisher': author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
	let len = JSON.stringify(json).length
	let last
	if (len > 256) {
		len = len - 256
		bytes.unshift(0x01)
	} else {
		bytes.unshift(0x00)
	}
	if (len < 16) {
		last = len.toString(16)
		last = '0' + len
	} else {
		last = len.toString(16)
	}
	const buf2 = Buffer.from(last, 'hex')
	const buf3 = Buffer.from(bytes)
	const buf4 = Buffer.from(JSON.stringify(json))
	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
	fs.writeFile(`./temp/${name}.exif`, buffer, (err) => {
		return `./temp/${name}.exif`
	})
}
async function starts() {
	const patrick = new WAConnection()
	 patrick.version = [2,2119,6]
	 patrick.logger.level = 'warn'
	 console.log(banner.string)
	 patrick.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan QR code nya'))
	})
	fs.existsSync('./session.json') &&  patrick.loadAuthInfo('./session.json')
	 patrick.on('connecting', () => {
		start('2', ' Loading... For Connect!!')
	})
	 patrick.on('open', () => {
		console.log(color('', 'white'), color('━━━━━━━━━━━━━━━━━━━━', 'green'), color(' Connect ', 'green'), color('━━━━━━━━━━━━━━━━━━━━', 'green'), color('', 'white'));
        console.log(`\
        `);
        success('2', 'Sukses Connect Ke Whatsapp Web, Silahkan Ketik .menu')
        console.log(color('', 'white'), bgcolor('Your Session Whatsapp Web Information', 'red'))
        console.log(color('▣', 'white'), color('WA Version', 'yellow'), color(':', 'aqua'), bgcolor(patrick.user.phone.wa_version));
        console.log(color('▣', 'white'), color('OS Version', 'yellow'), color(':', 'aqua'), bgcolor(patrick.user.phone.os_version));
        console.log(color('▣', 'white'), color('Device', 'yellow'), color(':', 'aqua'), bgcolor(patrick.user.phone.device_manufacturer));
        console.log(color('▣', 'white'), color('Model', 'yellow'), color(':', 'aqua'), bgcolor(patrick.user.phone.device_model));
        console.log(color('▣', 'white'), color('OS Build Number', 'yellow'), color(':', 'aqua'), bgcolor(patrick.user.phone.os_build_number));
        console.log(bgcolor('Note: Script by Instagram _pa7rick', 'blue'));
        console.log(`\
        `);
        console.log(color('', 'white'), color('━━━━━━━━━━━━━━━━━━━━', 'green'), color(' PatrickBot ', 'green'), color('━━━━━━━━━━━━━━━━━━━━', 'green'), color('', 'white'));
	})
	await patrick.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./session.json', JSON.stringify( patrick.base64EncodedAuthInfo(), null, '\t'))

    patrick.on('group-participants-update', async (anu) => {
	if (!welcome.includes(anu.jid)) return
	try {
		const mdata = await patrick.groupMetadata(anu.jid)
		num = anu.participants[0]
		console.log(anu)
		ini_user = patrick.contacts[num]
		namaewa = ini_user.notify
		member = mdata.participants.length
		try {
			var ppimg = await patrick.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		} catch {
			var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}

		try {
			var ppgc = await patrick.getProfilePicture(anu.jid)
		} catch {
			var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
		try {
			var iwelcome = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeUrl(namaewa)}&descriminator=${member}&memcount=${member}&gcname=${encodeUrl(mdata.subject)}&gcicon=${ppgc}&pp=${ppimg}&bg=https://i.ibb.co/LvCNb3H/Background03.jpg`)
		} catch {
			var iwelcome = `${ppimg}`
		}
		try {
			var imageleave = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeUrl(namaewa)}&descriminator=${member}&memcount=${member}&gcname=${encodeUrl(mdata.subject)}&gcicon=${ppgc}&pp=${ppimg}&bg=https://i.ibb.co/LvCNb3H/Background03.jpg`)
		} catch {
			var imageleave = `${ppimg}`
		}
		shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
		shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
		if (anu.action == 'add') {
			teks = 
`*Halo* *${ini_user.notify}*
Welcome To *${mdata.subject}*
*> Nama:*
*> Umur:*
*> Hobby:*
*> Gender:*
*> Asal Kota:*
*Jika Privasi ketik Private di kolom*
*Semoga Betah di group🌈*`
			patrick.sendMessage(mdata.id, iwelcome, MessageType.image, {
				caption: teks,
				contextInfo: {
					'mentionedJid': [num]
				}
			})
		} else
		if (anu.action == 'remove') {
			teks = `  Goodbye ${namaewa} 👋🍁`
			patrick.sendMessage(mdata.id, imageleave, MessageType.image, {
				caption: teks,
				contextInfo: {
					'mentionedJid': [num]
				}
			})
		} else
		if (anu.action == 'promote') {
			img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Selamat anda menjadi admin group!&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
			teks = ` Information *${mdata.subject}*
>  Terdeteksi *Di-Promote*
>  Nomor: ${num.replace('@s.whatsapp.net', '')}
>  @${num.split('@')[0]}`
			patrick.sendMessage(mdata.id, img, MessageType.image, {
				caption: teks,
				contextInfo: {
					'mentionedJid': [num]
				}
			})
		} else
		if (anu.action == 'demote') {
			img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Awokawok di unadmin, mampus:v&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
			teks = 
` Information *${mdata.subject}*
>  Terdeteksi *Di-Demote*
>  Nomor: ${num.replace('@s.whatsapp.net', '')}
>  @${num.split('@')[0]}`
			patrick.sendMessage(mdata.id, img, MessageType.image, {
				caption: teks,
				contextInfo: {
					'mentionedJid': [num]
				}
			})
		}
	} catch (e) {
		console.log('Error : %s', color(e, 'red'))
	}
})
patrick.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us', 's.whatsapp.net'))
	}
})
const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}
    patrick.on('CB:action,,call', async json => {
	const callerId = json[2][0][1].from;
	console.log('call dari ' + callerId)
	patrick.sendMessage(callerId, '*Auto block system, dont call please*\nUnblock chat wa.me/6288989029718', MessageType.text)
	await sleep(4000)
	await patrick.blockUser(callerId, 'add')
})
     
        patrick.on('chat-update', async (mek) => {
		try { 
			if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return 
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return 
			const m = smsg(patrick, mek)
			global.prefix
			global.blocked
            const content = JSON.stringify(mek.message)
            const from = mek.key.remoteJid
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const isQuotedAudio =  type === "extendedTextMessage" && content.includes("audioMessage");
			var prefixRegEx = /^[!z?#.+\/]/gi;
		    let _chats = type === "conversation" && mek.message.conversation ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "!";
		    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "!";
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : "";
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			let chats = _chats.match(prefixRegEx) ? _chats.split(prefixRegEx).find((v) => v === _chats.replace(prefixRegEx, "")) : _chats;
		    let command = chats.split(/ +/g)[0];
		    hit_today.push(command);
			chatsL = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = _chats.trim().split(/ +/).slice(1);
		    const isCmd = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)["input"] : _chats;
			const tescuk = ["0@s.whatsapp.net"]
			const totalchat = await patrick.chats.all()
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const txt = mek.message.conversation
			const botNumber = patrick.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = patrick.contacts[sender] != undefined ? patrick.contacts[sender].vname || patrick.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await patrick.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SECURITY FEATURE ************/
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false 
			const isWelcome = isGroup ? welcome.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false 
            const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
            const isAntiSpam = isGroup ? stc.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isBanned = ban.includes(sender)
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isOwner = ownerNumber.includes(sender)
			const isPrem = checkPremiumUser(sender, prem) || isOwner
			const isImage = type === 'imageMessage'
            const isSticker = type === 'stickerMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				patrick.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				patrick.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? patrick.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : patrick.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    patrick.sendMessage(from, teks, image, {quoted:mek})
		    }
		    function monospace(string) {
            return '```' + string + '```'
            }    
            function jsonformat(string) {
            return JSON.stringify(string, null, 2)
            }
            function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
		    const costum = (pesan, tipe, target, target2) => {
			patrick.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const patrickhay = (pesan, tipe, target, target2) => {
		    patrick.sendMessage(from, pesan, tipe, { 'contextInfo': {mentionedJid: [sender], 'forwardingScore': 999,'isForwarded': true}, quoted: { 'key': { 'participant': `${target}`, 'remoteJid': '393470602054-1351628616@g.us', 'fromMe': false, 'id': 'B391837A58338BA8186C47E51FFDFD4A' }, 'message': { 'documentMessage': { 'jpegThumbnail': fs.readFileSync('./pathImage/logo.jpeg'), 'mimetype': 'application/octet-stream', 'title': `${target2}`, 'fileLength': '36', 'pageCount': 0, 'fileName': `${target2}` }}, 'messageTimestamp': '1614069378', 'status': 'PENDING'}})
		    }
		    const sendPtt = (teks) => {
		    patrick.sendMessage(from, audio, mp3, {quoted:mek})
		    } 
		    const sleep = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
            }
		    patrick.updatePresence(from, Presence.available)
		    if (isTicTacToe(from, tictactoe)) tictac(patrick, mek, tictactoe)
            async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return patrick.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch (hari) {
	case 0:
		hari = 'Minggu';
		break;
	case 1:
		hari = 'Senin';
		break;
	case 2:
		hari = 'Selasa';
		break;
	case 3:
		hari = 'Rabu';
		break;
	case 4:
		hari = 'Kamis';
		break;
	case 5:
		hari = 'Jum`at';
		break;
	case 6:
		hari = 'Sabtu';
		break;
}
switch (bulan1) {
	case 0:
		bulan1 = 'Januari';
		break;
	case 1:
		bulan1 = 'Februari';
		break;
	case 2:
		bulan1 = 'Maret';
		break;
	case 3:
		bulan1 = 'April';
		break;
	case 4:
		bulan1 = 'Mei';
		break;
	case 5:
		bulan1 = 'Juni';
		break;
	case 6:
		bulan1 = 'Juli';
		break;
	case 7:
		bulan1 = 'Agustus';
		break;
	case 8:
		bulan1 = 'September';
		break;
	case 9:
		bulan1 = 'Oktober';
		break;
	case 10:
		bulan1 = 'November';
		break;
	case 11:
		bulan1 = 'Desember';
		break;
}
var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "24:59:00") {
			var ucapanFakereply = `Selamat malam ${pushname}`;
		}
		if (time2 < "19:00:00") {
			var ucapanFakereply = `Selamat petang ${pushname}`;
		}
		if (time2 < "18:00:00") {
			var ucapanFakereply = `Selamat sore ${pushname}`;
		}
		if (time2 < "15:00:00") {
			var ucapanFakereply = `Selamat siang ${pushname}`;
		}
		if (time2 < "11:00:00") {
			var ucapanFakereply = `Selamat pagi ${pushname}`;
		}
		if (time2 < "05:00:00") {
			var ucapanFakereply = `Selamat malam ${pushname}`;
		}
const fakestatus = (teks) => {
	patrick.sendMessage(from, teks, text, {
		quoted: {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			message: {
				"imageMessage": {
					"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
					"mimetype": "image/jpeg",
					"caption": "Follow @_Pa7rick",
					"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
					"fileLength": "28777",
					"height": 1080,
					"width": 1080,
					"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
					"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
					"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
					"mediaKeyTimestamp": "1610993486",
					"jpegThumbnail": fs.readFileSync(`./pathImage/${randomGetPhoto}`),
					"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
				}
			}
		}
	})
}

const randomPhotoGet = ['logo.jpeg', 'logo1.jpeg', 'logo2.jpeg', 'logo3.jpeg', 'logo4.jpeg', 'logo5.jpeg', 'logo6.jpeg', 'logo7.jpeg', 'logo8.jpeg', 'logo9.jpeg', 'logo10.jpeg']
const randomGetPhoto = randomPhotoGet[Math.floor(Math.random() * randomPhotoGet.length)]
const freply = {
	key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`,
		...(from ? {
			remoteJid: '6288989029718-1624806045@g.us'
		} : {})
	},
	message: {
		'imageMessage': {
			'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
			'mimetype': 'image/png',
			'caption': `${ucapanFakereply}\ncommand: ${prefix + command}`,
			'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
			'fileLength': '28777',
			'height': 1080,
			'width': 1079,
			'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
			'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',
			'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69',
			'mediaKeyTimestamp': '1610993486',
		}
	}
}
const ftoko = {
	key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`,
		...(from ? {
			remoteJid: 'status@broadcast'
		} : {})
	},
	message: {
		'productMessage': {
			'product': {
				'productImage': {
					'mimetype': 'image/jpeg',
					'jpegThumbnail': fs.readFileSync(`./pathImage/${randomGetPhoto}`)
				},
				'title': `${ucapanFakereply}\ncommand: ${prefix + command}`,
				'productImageCount': 150
			},
			'businessOwnerJid': `6288989029718@s.whatsapp.net`
		}
	}
}
const fkontak = {
	key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`,
		...(from ? {
			remoteJid: `0@s.whatsapp.net`
		} : {})
	},
	message: {
		'contactMessage': {
			'displayName': `${ucapanFakereply}`,
			'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
			'jpegThumbnail': fs.readFileSync(`./pathImage/${randomGetPhoto}`)
		}
	}
}
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288989029718-1624806045@g.us",
			"inviteCode": "FIdMh612Iru1ZQgrXLp8KN",
			"groupName": `PatrickGroup`,
			"caption": `${ucapanFakereply}\n⎇Follow _pa7rick :v`,
		}
	}
}
const randomLink1 = ['https://instagram.com/_pa7rick', '', 'https://linktr.ee/pa7rick', 'https://youtube.com/', 'https://github.com/PatrickStar720', '']
const randomLink = randomLink1[Math.floor(Math.random() * randomLink1.length)]
const replyWithFakeLink = (teks) => {
    patrick.sendMessage(from, teks, text,{ 
        contextInfo :{
            text: 'hi',
           "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `𝗛𝗮𝗹𝗼 ${pushname}\n${ucapanFakereply}\n𝗰𝗼𝗺𝗺𝗮𝗻𝗱: ${prefix + command}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/4WkQJ2z/Proyek-Baru-565-1-BA7-AA7.png",
                "thumbnail": fs.readFileSync(`./pathImage/${randomGetPhoto}`),
                "sourceUrl": `${randomLink}`
         }, mentionedJid:[sender]}, quoted : mek})
}

const fakevn = {
	key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`,
		...(from ? {
			remoteJid: "6289643739077-1613049930@g.us"
		} : {})
	},
	message: {
		"audioMessage": {
			"mimetype": "audio/ogg; codecs=opus",
			"seconds": "3600",
			"ptt": "true"
		}
	}
}
const fvideo = {
	key: {
		participant: '6288989029718@s.whatsapp.net'
	},
	message: {
		"videoMessage": {
			"title": "Follow _pa7rick :v",
			'seconds': '99999',
			'caption': `${ucapanFakereply}\n⎇ ${prefix + command}`,
			'jpegThumbnail': fs.readFileSync(`./pathImage/${randomGetPhoto}`)
		}
	}
}
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const dater = new Date().toLocaleDateString()

const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
	kma = gam1
	mhan = await patrick.prepareMessage(from, kma, image)
	const buttonMessages = {
		imageMessage: mhan.message.imageMessage,
		contentText: text1,
		footerText: desc1,
		buttons: but,
		headerType: 4,
	}
	patrick.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
	const buttonMessage = {
		contentText: text1,
		footerText: desc1,
		buttons: but,
		headerType: 1,
	};
	patrick.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
};
const descButton = `Hello, you are not registered!\nClick the button or\ntype *${prefix}verify* to register`
const footerButton = `◉ Hari: ${tampilHari}\n◉ Jam: ${time}\n`
const sendStickerFromUrl = async (to, url) => {
	console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
	var names = getRandom('.webp')
	var namea = getRandom('.png')
	var download = function(uri, filename, callback) {
		request.head(uri, function(err, res, body) {
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, namea, async function() {
		let filess = namea
		let asw = names 
		const lehh = getRandom('')
		require('./lib/exif.js')
		exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
			exif.create('Created By PatrickBot', '', `take${lehh}`)
			exec(`webpmux -set exif ./temp/take${lehh}.exif ${asw} -o ${asw}`, async (error) => {
				let media = fs.readFileSync(asw)
				patrick.sendMessage(to, media, sticker)
				console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
				fs.unlinkSync(asw)
				fs.unlinkSync(filess)
			});
		});
	});
}

function upload (media)  {
    return new Promise(async (resolve, reject) => {
    try { 
    	const fetch = require('node-fetch')
    	const { fromBuffer } = require('file-type')
        let { ext } = await fromBuffer(media)
        console.log('Uploading image to server telegra.ph')
        let form = new FormData()
        form.append('file', media, 'tmp.' + ext)
        await fetch('https://telegra.ph/upload', {
            method: 'POST',
            body: form
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) return reject(res.error)
            resolve('https://telegra.ph' + res[0].src)
        })
        .catch(err => reject(err))
    } catch (e) {
        return console.log(e)
    }
})
}

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}

const sendStickerUrl = async (to, url) => {
	console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
	var names = getRandom('.webp')
	var namea = getRandom('.png')
	var download = function(uri, filename, callback) {
		request.head(uri, function(err, res, body) {
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, namea, async function() {
		let filess = namea
		let asw = names
        const lohh = getRandom('')
		require('./lib/exif.js')
		exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
			exif.create('Created By PatrickBot', '', `take${lohh}`)
			exec(`webpmux -set exif ./temp/take${lohh}.exif ${asw} -o ${asw}`, async (error) => {
				let media = fs.readFileSync(asw)
				patrick.sendMessage(from, media, sticker, {
					quoted: mek
				})
				console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
			});
		});
	});
}

const sendMediaURL = async (to, url, text = "", mids = []) => {
	if (mids.length > 0) {
		text = normalizeMention(to, text, mids)
	}
	const fn = Date.now() / 10000;
	const filename = fn.toString()
	let mime = ""
	var download = function(uri, filename, callback) {
		request.head(uri, function(err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, filename, async function() {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0] + "Message"
		if (mime === "image/gif") {
			type = MessageType.video
			mime = Mimetype.gif
		}
		if (mime.split("/")[0] === "audio") {
			mime = Mimetype.mp4Audio
		}
		patrick.sendMessage(to, media, type, {
			quoted: mek,
			mimetype: mime,
			caption: text,
			contextInfo: {
				"mentionedJid": mids
			}
		})

		fs.unlinkSync(filename)
	});
}
var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const perl = peri - getLevelingXp(sender)
const resl = Math.round(100 - ((perl / getLevelingXp(sender)) * 100))
if (resl <= 10) {
	per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 20) {
	per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 30) {
	per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 40) {
	per = `*[████▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 50) {
	per = `*[█████▒▒▒▒▒] ${resl}%*`
} else if (resl <= 60) {
	per = `*[██████▒▒▒▒] ${resl}%*`
} else if (resl <= 70) {
	per = `*[███████▒▒▒] ${resl}%*`
} else if (resl <= 80) {
	per = `*[████████▒▒] ${resl}%*`
} else if (resl <= 90) {
	per = `*[█████████▒] ${resl}%*`
} else if (resl <= 100) {
	per = `*[██████████] ${resl}%*`
}

const levelRole = getLevelingLevel(sender)
var role = 'Newbie ㋡'
if (levelRole <= 2) {
	role = 'Newbie ㋡'
} else if (levelRole <= 4) {
	role = 'Beginner Grade 1 ⚊¹'
} else if (levelRole <= 6) {
	role = 'Beginner Grade 2 ⚊²'
} else if (levelRole <= 8) {
	role = 'Beginner Grade 3 ⚊³'
} else if (levelRole <= 10) {
	role = 'Beginner Grade 4 ⚊⁴'
} else if (levelRole <= 12) {
	role = 'Private Grade 1 ⚌¹'
} else if (levelRole <= 14) {
	role = 'Private Grade 2 ⚌²'
} else if (levelRole <= 16) {
	role = 'Private Grade 3 ⚌³'
} else if (levelRole <= 18) {
	role = 'Private Grade 4 ⚌⁴'
} else if (levelRole <= 20) {
	role = 'Private Grade 5 ⚌⁵'
} else if (levelRole <= 22) {
	role = 'Corporal Grade 1 ☰¹'
} else if (levelRole <= 24) {
	role = 'Corporal Grade 2 ☰²'
} else if (levelRole <= 26) {
	role = 'Corporal Grade 3 ☰³'
} else if (levelRole <= 28) {
	role = 'Corporal Grade 4 ☰⁴'
} else if (levelRole <= 30) {
	role = 'Corporal Grade 5 ☰⁵'
} else if (levelRole <= 32) {
	role = 'Sergeant Grade 1 ≣¹'
} else if (levelRole <= 34) {
	role = 'Sergeant Grade 2 ≣²'
} else if (levelRole <= 36) {
	role = 'Sergeant Grade 3 ≣³'
} else if (levelRole <= 38) {
	role = 'Sergeant Grade 4 ≣⁴'
} else if (levelRole <= 40) {
	role = 'Sergeant Grade 5 ≣⁵'
} else if (levelRole <= 42) {
	role = 'Staff Grade 1 ﹀¹'
} else if (levelRole <= 44) {
	role = 'Staff Grade 2 ﹀²'
} else if (levelRole <= 46) {
	role = 'Staff Grade 3 ﹀³'
} else if (levelRole <= 48) {
	role = 'Staff Grade 4 ﹀⁴'
} else if (levelRole <= 50) {
	role = 'Staff Grade 5 ﹀⁵'
} else if (levelRole <= 52) {
	role = 'Sergeant Grade 1 ︾¹'
} else if (levelRole <= 54) {
	role = 'Sergeant Grade 2 ︾²'
} else if (levelRole <= 56) {
	role = 'Sergeant Grade 3 ︾³'
} else if (levelRole <= 58) {
	role = 'Sergeant Grade 4 ︾⁴'
} else if (levelRole <= 60) {
	role = 'Sergeant Grade 5 ︾⁵'
} else if (levelRole <= 62) {
	role = '2nd Lt. Grade 1 ♢¹ '
} else if (levelRole <= 64) {
	role = '2nd Lt. Grade 2 ♢²'
} else if (levelRole <= 66) {
	role = '2nd Lt. Grade 3 ♢³'
} else if (levelRole <= 68) {
	role = '2nd Lt. Grade 4 ♢⁴'
} else if (levelRole <= 70) {
	role = '2nd Lt. Grade 5 ♢⁵'
} else if (levelRole <= 72) {
	role = '1st Lt. Grade 1 ♢♢¹'
} else if (levelRole <= 74) {
	role = '1st Lt. Grade 2 ♢♢²'
} else if (levelRole <= 76) {
	role = '1st Lt. Grade 3 ♢♢³'
} else if (levelRole <= 78) {
	role = '1st Lt. Grade 4 ♢♢⁴'
} else if (levelRole <= 80) {
	role = '1st Lt. Grade 5 ♢♢⁵'
} else if (levelRole <= 82) {
	role = 'Major Grade 1 ✷¹'
} else if (levelRole <= 84) {
	role = 'Major Grade 2 ✷²'
} else if (levelRole <= 86) {
	role = 'Major Grade 3 ✷³'
} else if (levelRole <= 88) {
	role = 'Major Grade 4 ✷⁴'
} else if (levelRole <= 90) {
	role = 'Major Grade 5 ✷⁵'
} else if (levelRole <= 92) {
	role = 'Colonel Grade 1 ✷✷¹'
} else if (levelRole <= 94) {
	role = 'Colonel Grade 2 ✷✷²'
} else if (levelRole <= 96) {
	role = 'Colonel Grade 3 ✷✷³'
} else if (levelRole <= 98) {
	role = 'Colonel Grade 4 ✷✷⁴'
} else if (levelRole <= 100) {
	role = 'Colonel Grade 5 ✷✷⁵'
} else if (levelRole <= 102) {
	role = 'Brigadier Early ✰'
} else if (levelRole <= 104) {
	role = 'Brigadier Silver ✩'
} else if (levelRole <= 106) {
	role = 'Brigadier gold ✯'
} else if (levelRole <= 108) {
	role = 'Brigadier Platinum ✬'
} else if (levelRole <= 110) {
	role = 'Brigadier Diamond ✪'
} else if (levelRole <= 112) {
	role = 'Legends 忍'
} else if (levelRole <= 1243) {
	role = 'Legendary 忍'
}

var premi = 'Free Member'
if (isPrem) {
	premi = 'Premium Member'
}
if (isOwner) {
	premi = 'Owner'
}

var emojiUser = ''
if (isPrem || isOwner) {
	emojiUser = '☑'
}

_sewa.expiredCheck(patrick, sewa)
expiredCheck(prem)
if (isGroup && isRegistered) {
	const currentLevel = getLevelingLevel(sender)
	const checkId = getLevelingId(sender)
	try {
		if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
		const amountXp = Math.floor(Math.random() * 10) + 500
		const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
		const getLevel = getLevelingLevel(sender)
		addLevelingXp(sender, amountXp)
		if (requiredXp <= getLevelingXp(sender)) {
			addLevelingLevel(sender, 1)
			await replyWithFakeLink(ind.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
		}
	} catch (err) {
		console.error(err)
	}
}

const checkLimit = (sender) => {
	let found = false
	for (let lmt of _limit) {
		if (lmt.id === sender) {
			let limitCounts = initialLimit - lmt.limit
			if (limitCounts <= 0) return patrick.sendMessage(from, `Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text, {
				quoted: ftoko
			})
			patrick.sendMessage(from, ind.limitcount(limitCounts), text, {
				quoted: mek
			})
			found = true
		}
	}
	if (found === false) {
		let obj = {
			id: sender,
			limit: 1
		}
		_limit.push(obj)
		fs.writeFileSync('./database/data/limit.json', JSON.stringify(_limit))
		patrick.sendMessage(from, ind.limitcount(limitCounts), text, {
			quoted: mek
		})
	}
}


const isLimit = (sender) => {
	if (isPrem) { return false}
	let position = false
	for (let i of _limit) {
		if (i.id === sender) {
			let limits = i.limit
			if (limits >= initialLimit) {
				position = true
				patrick.sendMessage(from, ind.limitend(pushname), text, {
					quoted: mek
				})
				return true
			} else {
				_limit
				position = true
				return false
			}
		}
	}
	if (position === false) {
		const obj = {
			id: sender,
			limit: 1
		}
		_limit.push(obj)
		fs.writeFileSync('./database/data/limit.json', JSON.stringify(_limit))
		return false
	}
}

if (isRegistered && isGroup) {
	const checkATM = checkATMuser(sender)
	try {
		if (checkATM === undefined) addATM(sender)
		const uangsaku = Math.floor(Math.random() * 10) + 1
		addKoinUser(sender, uangsaku)
	} catch (err) {
		console.error(err)
	}
}

            if (budy.includes("://chat.whatsapp.com/" && isAntiLink && isGroup)) { 
            getLink = await patrick.groupInviteCode(from) 
	        if (budy.includes(`${getLink}`)) return replyWithFakeLink('Kamu telah mengirim linkgrup ini\nPatrickBot tidak akan kick!')
			if (isGroupAdmins) return replyWithFakeLink('Admin Grup Mah Bebas:D')
			patrick.updatePresence(from, Presence.composing)
			if (mesejAnti.includes("#izinadmin")) return replyWithFakeLink("Oke, Jangan Kirim Terlalu Sering Cuy")
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			replyWithFakeLink(`*「 ANTI LINK GROUP 」*\nKamu akan dikick karena telah mengirim link grup`)
			setTimeout(() => {
				patrick.groupRemove(from, [kic]).catch((e) => {
					replyWithFakeLink('*PatrickBot tidak menjadi admin tidak dapat kick!*')
				})
			}, 3000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
				replyWithFakeLink("Bye 🍁")
			}, 2000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
			}, 1000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
			}, 0)
		}
		
    if (isGroup && isRegistered && autojoin === true) {
        if (!budy.includes("://chat.whatsapp.com/")) return
        var inviteCode = body.slice(6).split('https://chat.whatsapp.com/')[0]
		if (!inviteCode) return replyWithFakeLink('pastikan link sudah benar!')
		var response = await patrick.acceptInvite(codeInvite);
		console.log(response);
		replyWithFakeLink('Segera diproses, Harap tunggu sebentar!')
		console.log(color("❏ Auto - Join ", "red"), color(`Link: ${budy}`, "white"))
	}
				
    if (txt.length > 14000) {
	if (!isGroup) return
	if (!isAntiVirtex) return
	if (isGroupAdmins) return replyWithFakeLink(`${pushname} Adalah Admin Group Kamu Tidak Akan Di kick`)
	patrick.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	patrick.sendMessage(from, `Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`, text)
	setTimeout(() => {
		patrick.groupRemove(from, [kic]).catch((e) => {
			replyWithFakeLink(`*ERR:* ${e}`)
		})
		patrick.blockUser(sender, "add")
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text)
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text)
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text)
	}, 0)
}
        	
if (isGroup) {
	try {
		const getmemex = groupMembers.length
		if (getmemex <= memberLimit) {
			setTimeout(() => {
				patrick.groupLeave(from)
			}, 5000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
			}, 4000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
			}, 3000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
			}, 2000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
			}, 1000)
			setTimeout(() => {
				patrick.updatePresence(from, Presence.composing)
				replyWithFakeLink(`*Halo ${pushname},  Untuk mengundang bot kedalam grup\nMinimal ${memberLimit} peserta\nJika sudah banyak bisa add kembali*`)
			}, 0)
		}
	} catch (err) {
		console.error(err)
	}
}
           if (isGroup && m.mtype == 'viewOnceMessage'){
           	try {
                   var msg = {...mek}
                   msg.message = mek.message.viewOnceMessage.message
                   msg.message[Object.keys(msg.message)[0]].viewOnce = false
                   replyWithFakeLink('ViewOnce detected!')
                   patrick.copyNForward(from, msg)
               } catch (e) {
                   console.log(e)
               }
            }
            if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            	try {
                    m.replyWithFakeLink('Troli Detected\n\n' + require('util').format(m.key))
                    await patrick.modifyChat(m.chat, 'delete', {
                        includeStarred: false
                    })
                } catch (e) {
                	console.log(e)
                }
             } 
             if (isGroup && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {
             	try {
			         console.log(color("> Anti-Hidetag", "yellow"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white"));
			         replyWithFakeLink(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
		         } catch (e) { 
			         console.log(e)
			     }
			}
			q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
            q2 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
            button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
            rspndbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title: ''
            //====================== Enable Feature Group ====================\\
		    if (rspndbutton == 'Anti Badword') {
			if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
			if (isBadWord) return replyWithFakeLink('Fitur Anti Badword Sudah aktif!')
			badword.push(from)
			fs.writeFileSync('./database/data/badword.json', JSON.stringify(badword))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR BADWORD DI GROUP INI*')
			} else 
            if (rspndbutton == 'Anti Virtex') {
            if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		    if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
            if (isAntiVirtex) return replyWithFakeLink('Fitur Anti Virtex Sudah aktif!')
			antivirtex.push(from)
			fs.writeFileSync('./database/data/antivirtex.json', JSON.stringify(antivirtex))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTIVIRTEX DI GROUP INI*')
			} 
			if (rspndbutton == 'Anti Link') {
			if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		    if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
			if (isAntiLink) return replyWithFakeLink('Fitur Anti Link Sudah aktif!')
			antilink.push(from)
			fs.writeFileSync('./database/data/antilink.json', JSON.stringify(antilink))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTILINK DI GROUP INI*')
			patrick.sendMessage(from, `ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
			} else
			if (rspndbutton == 'Anti Spam (Sticker)') {
			if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
			if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
			if (isAntiSpam) return replyWithFakeLink('Fitur Anti Spam (Sticker) Sudah aktif!')
			stc.push(from)
			fs.writeFileSync('./database/data/stc.json', JSON.stringify(stc))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTISPAM STICKER DI GROUP INI*')
			patrick.sendMessage(from, `PERINGATAN\nJika bukan admin jangan spam sticker 10x sekaligus dalam 4 menit`, text)
			} else
            if (rspndbutton == 'Welcome') {
            if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
			if (isWelcome) return replyWithFakeLink('Fitur Welcome Sudah aktif!')
			welcome.push(from)
			fs.writeFileSync('./database/data/welcome.json', JSON.stringify(welcome))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR WELCOME|LEFT DI GROUP INI*')
			} else
            if (rspndbutton == 'Simi Simi') {
	        if (!isGroup) return replyWithFakeLink(ind.groupo()) 
	        if (!isPrem) return replyWithFakeLink(ind.premon())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		    if (isSimi) return replyWithFakeLink('Fitur Simi Simi Sudah aktif!')
			samih.push(from)
			fs.writeFileSync('./database/data/simi.json', JSON.stringify(samih))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR SIMI DI GROUP INI*')
			} else
            if (rspndbutton == 'NSFW Mode') {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
            if (isNsfw) return replyWithFakeLink('Fitur NSFW Sudah aktif!')
			nsfw.push(from)
			fs.writeFileSync('./database/data/nsfw.json', JSON.stringify(nsfw))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR NSFW DI GROUP INI*')
			} else
		    //====================== Disable Feature Group ====================\\
		    if (rspndbutton == 'Disable Anti Badword') {
			if (!isBadWord) return replyWithFakeLink('Fitur Anti Badword Belum aktif!')
			badword.splice(from, 1)
			fs.writeFileSync('./database/data/badword.json', JSON.stringify(badword))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENOAKTIFKAN FITUR BADWORD DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Anti Virtex') {
			if (!isAntiVirtex) return replyWithFakeLink('Fitur Anti Virtex Belum aktif!')
			antivirtex.push(from)
			fs.writeFileSync('./database/data/antivirtex.json', JSON.stringify(antivirtex))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENONAKTIFKAN FITUR ANTIVIRTEX DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Anti Link') {
            if (!isAntiLink) return replyWithFakeLink('Fitur Anti Link Belum aktif!')
			antilink.splice(from, 1)
			fs.writeFileSync('./database/data/antilink.json', JSON.stringify(antilink))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTILINK DI GROUP INI*')
			patrick.sendMessage(from, `ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
			} else
		    if (rspndbutton == 'Disable Anti Spam (Sticker)') {
			if (!isAntiSpam) return replyWithFakeLink('Fitur Anti Spam (Sticker) Belum aktif!')
			stc.splice(from, 1)
			fs.writeFileSync('./database/data/stc.json', JSON.stringify(stc))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENONAKTIFKAN FITUR ANTISPAM STICKER DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Welcome') {
			if (!isWelcome) return replyWithFakeLink('Fitur Welcome Belum aktif!')
			welcome.splice(from, 1)
			fs.writeFileSync('./database/data/welcome.json', JSON.stringify(welcome))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENOAKTIFKAN FITUR WELCOME|LEFT DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Simi Simi') {
			if (!isSimi) return replyWithFakeLink('Fitur Simi Simi Belum aktif!')
			samih.splice(from, 1)
			fs.writeFileSync('./database/data/simi.json', JSON.stringify(samih))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENONAKTIFKAN FITUR SIMI DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable NSFW Mode') {
			if (!isNsfw) return replyWithFakeLink('Fitur NSFW Belum aktif!')
			nsfw.splice(from, 1)
			fs.writeFileSync('./database/data/nsfw.json', JSON.stringify(nsfw))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENONAKTIFKAN FITUR NSFW DI GROUP INI*')
			} else
            //======================= GAME MENU =========================\\
            if (rspndbutton == 'MP3') {
            try{
            downm = await yta(q2)
            const { dl_link, thumb, title, filesizeF, filesize } = downm
            if(Number(filesize) >= 50000){
            short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
             return sendMediaURL(from, thumb, `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\nDurasi lebih dari batas akan disajikan dalam bentuk link!`)
             }
            teks = `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Type : MP3\n\nTunggu sebentar\nMusic segera dikirim`
            sendMediaURL(from, thumb, teks)
            sendMediaURL(from, dl_link)
            } catch(e) {
            	console.log(e)
            replyWithFakeLink(ind.stikga())
              }    
            } else 
            if (rspndbutton == 'MP4') {
            try {
            downm = await ytv(q2)
            const { dl_link, thumb, title, filesizeF, filesize } = downm
            if (Number(filesize) >= 50000) {
                short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                return sendMediaURL(from, thumb, `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\nDurasi lebih dari batas akan disajikan dalam bentuk link!`)
            }
            teks = `*Y O U T U B E  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Type : MP4\n\nTunggu sebentar\nMusic segera dikirim`
            sendMediaURL(from, thumb, teks)
            sendMediaURL(from, dl_link)
            } catch(e) {
            replyWithFakeLink(ind.stikga())
            }
         } 
            
       if (isGroup && isBadWord && !isGroupAdmins) {
       for (let kasar of badword) {
       if (budy.toLowerCase().includes(kasar)) {
       if (isCountKasar(sender, senbadword)) {
       if (!isBotGroupAdmins) return replyWithFakeLink(`Kamu beruntung karena bot bukan admin`)
          replyWithFakeLink(`*Anti Badword!!*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x sekaligus dalam 5 menit, maaf kamu akan di kick`)
          patrick.groupRemove(from, [sender])
          delCountKsr(sender, senbadword)
       } else {
           addCountKsr(sender, senbadword)
           for (let n of senbadword) {
	       if (n.id === sender) {
           let ksrcount = n.count 
           replyWithFakeLink(`Kamu terdeteksi berkata kasar\nJika kamu berkata kasar *lebih dari 5x* sekaligus dalam 5 menit\nkamu akan dikick\n*Kamu sudah berkata kasar*\n*${ksrcount}x*`)
           await sleep(300000)
           delCountKsr(sender, senbadword)
           console.log('Succes Delete Badword From ' + sender)
          }
        }
      }
    }
  } 
 }

       if (isGroup && isAntiSpam && !isGroupAdmins) {
       if (isSticker) {
       if (isCountStc(sender, sensticker)) {
       if (!isBotGroupAdmins) return replyWithFakeLink(`Kamu beruntung karena bot bukan admin`)
          replyWithFakeLink(`*Antispam Sticker!!*\n\nSepertinya kamu sudah kirim sticker lebih dari 10x sekaligus dalam 4 menit, maaf kamu akan di kick`)
          patrick.groupRemove(from, [sender])
          delCountStc(sender, sensticker)
       } else {
           addCountStc(sender, sensticker)
           for (let o of sensticker) {
	       if (o.id === sender) {
           let stccount = o.count 
           replyWithFakeLink(`Kamu terdeteksi mengirim sticker\nJika kamu mengirim sticker *lebih dari 10x* sekaligus dalam 4 menit\nkamu akan dikick\n*Kamu sudah mengirim*\n*${stccount} Sticker!*/4 Menit`)
           await sleep(240000)
           delCountStc(sender, sensticker)
           console.log('Succes Delete Sticker From ' + sender)
          }
        }
      }
    }
  } 

if (budy.startsWith('>')){
if (!isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyWithFakeLink(evaled)
patrick.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
} catch (err) {
m = String(err)
await replyWithFakeLink(m)
}
}
/******************* TebakGambar, TebakKata & Tebak Matematika PatrickBot  *******************/ 
        game.cekWaktuFam(patrick, family100)
        game.cekWaktuTG(patrick, tebakgambar)
        game.cekWaktuMath(patrick, math)
        game.cekWaktuSPK(patrick, siapakah)
        game.cekWaktuAngka(patrick, tebakangka)
        game.cekWaktuTek(patrick, tekateki)
        game.cekWaktuSK(patrick, susunkata)
        game.cekWaktuAO(patrick, asahotak)
        if (game.isTebakGambar(from, tebakgambar) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
                var htgm = randomNomor(100)
                addKoinUser(sender, htgm)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* ${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }
        if (game.isMath(from, math) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanMath(from, math))){
                var htgmm = randomNomor(100)
                addKoinUser(sender, htgmm)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMath(from, math)}\n*Hadiah :* ${htgmm}\n\nIngin bermain lagi? kirim *${prefix}math*`)
                math.splice(game.getMathPosi(from, math), 1)
            }
        } 
        if (game.isSiapakah(from, siapakah) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanSPK(from, siapakah))){
                var htgms = randomNomor(100)
                addKoinUser(sender, htgms)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSPK(from, siapakah)}\n*Hadiah :* ${htgms}\n\nIngin bermain lagi? kirim *${prefix}tebaksiapa*`)
                siapakah.splice(game.getSPKPosi(from, siapakah), 1)
            }
        }         
        if (game.isTek(from, tekateki) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanTek(from, tekateki))){
                var htggm = randomNomor(100)
                addKoinUser(sender, htggm)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTek(from, tekateki)}\n*Hadiah :* ${htggm}\n\nIngin bermain lagi? kirim *${prefix}tebaksiapa*`)
                tekateki.splice(game.getTekPosi(from, tekateki), 1)
            }
        }  
        if (game.isSK(from, susunkata) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanSK(from, susunkata))){
                var httgms = randomNomor(100)
                addKoinUser(sender, httgms)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSK(from, susunkata)}\n*Hadiah :* ${httgms}\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                susunkata.splice(game.getSKPosi(from, susunkata), 1)
            }
        } 
        if (game.isAO(from, asahotak) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanAO(from, asahotak))){
                var htgmms = randomNomor(100)
                addKoinUser(sender, htgms)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanAO(from, asahotak)}\n*Hadiah :* ${htgmms}\n\nIngin bermain lagi? kirim *${prefix}tebaksiapa*`)
                asahotak.splice(game.getAOPosi(from, asahotak), 1)
            }
        } 
        
        if (game.isAngka(from, tebakangka) && isRegistered){
            if (budy.toLowerCase().startsWith(game.getJawabanAngka(from, tebakangka))){
                var htgms = randomNomor(12)
                addKoinUser(sender, htgms)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanAngka(from, tebakangka)}\n*Hadiah :* ${htgms}\n\nIngin bermain lagi? kirim *${prefix}tebakangka*`)
                tebakangka.splice(game.getAngkaPosi(from, tebakangka), 1)
            } else 
            if (budy.toLowerCase()) {
            replyWithFakeLink(`Yah jawabanmu salah!, jawabannya ${game.getJawabanAngka(from, tebakangka)}`)
            tebakangka.splice(game.getAngkaPosi(from, tebakangka), 1)
            }
        }
        if (game.isfam(from, family100) && isRegistered){
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmi = Math.floor(Math.random() * 20) + 1
                    addKoinUser(sender, htgmi)
                    await replyWithFakeLink(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* ${htgmi}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                patrick.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
               }
            }
            function clockString(ms) {
	    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
	    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
	    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
	    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
	    }
	
            let settingstatus = 0;
	    if (new Date() * 1 - settingstatus > 1000) {
	    let _uptime = process.uptime() * 1000;
	    let uptime = clockString(_uptime);
	    await patrick.setStatus(`User: ${_registered.length} | Runtime ${uptime}\n~ ${patrick.user.name}`).catch((_) => _);
	    settingstatus = new Date() * 1;
	    }
	    
const extsoal1 = rnumber[Math.floor(Math.random() * (rnumber.length))]
const extsoal2 = rnumber[Math.floor(Math.random() * (rnumber.length))]
const extoperator = ['+', '-', '*']
const extrandom = extoperator[Math.floor(Math.random() * (extoperator.length))]
extsoal = `${extsoal1} ${extrandom} ${extsoal2}`
if (typeof Math_js.evaluate(extsoal) !== "number") {
	replyWithFakeLink(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
} else {
	extanswer = `${Math_js.evaluate(extsoal)}`
}

switch (button) {
       case 'AUDIO': 
       try {
           replyWithFakeLink(ind.wait())
           let yut = await yts(q3)
           yta(yut.videos[0].url).then((res) => {
               const { dl_link, thumb, title, filesizeF, filesize } = res
               axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`).then((a) => {
                   if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\nDurasi lebih dari batas akan disajikan dalam bentuk link!`)
                   const captionis = `*P L A Y  M P 3*\n\n${shp} Title : ${title}\n${shp} Size : ${filesizeF}\n${shp} Views: ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} URL : ${yut.videos[0].url}\n\n*Tunggu, Sedang proses download!!*`
                   sendMediaURL(from, dl_link, '')
                   limitAdd(sender)
               })
           }).catch((e) => replyWithFakeLink(e))
       } catch (e) {
           console.log(e)
           replyWithFakeLink(ind.error)
       }
       break
       case 'VIDEO' :
           try {
           replyWithFakeLink(ind.wait())
           let yut = await yts(q3)
           ytv(yut.videos[0].url).then((res) => {
               const { dl_link, thumb, title, filesizeF, filesize } = res
               axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`).then((a) => {
                   if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n*Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!*`)
                       const mp4 = `*PLAY VIDEO\n\n Judul : ${title}\n\n Size : ${filesizeF}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
                       sendMediaURL(from, dl_link, mp4)
                       limitAdd(sender)
                   })
               }).catch((e) => replyWithFakeLink(e))
           } catch (e) {
           console.log(e)
           replyWithFakeLink(ind.error)
           }
           break
}
/******************* Color & Detector Media PatrickBot  *******************/
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInPrivate\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInGroup\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (isCmd) patrick.chatRead(from)
if (isCmd) cmdadd()
switch (command) {
	//==========================================BATES NGAB==========================================\\ 
	    case 'menu':
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname, prefix))
		const requXp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		const uangkim = checkATMuser(sender)
		const lvlim = getLevelingLevel(sender)
		if (!isGroup) {
			const menunya =
`Hello World, ${botName} is here
Created By @_pa7rick

${a}• User :${a} ${premi}
${a}• Balance : $${uangkim}${a}
${a}• Time: ${time2}${a}
${a}• Runtime : ${kyun(process.uptime())}${a}
${a}• Total Hit : ${hit_today.length}${a}
*Type ${prefix}report*
  *if there is an error*
━━━━━━━━━━━━━━━`
const menunya1 = `◉ *Image Edit*
 • ${prefix}triggered
 • ${prefix}glass
 • ${prefix}gay
 • ${prefix}jail
 • ${prefix}comrade
 • ${prefix}removebg
 • ${prefix}delete
 • ${prefix}airpods
 • ${prefix}ad
 • ${prefix}sepia
 • ${prefix}hacker
 • ${prefix}greyscale
 • ${prefix}continued
 • ${prefix}captcha
 • ${prefix}approve
 • ${prefix}what
 • ${prefix}linus
 • ${prefix}facepalm
 • ${prefix}discordblue
 • ${prefix}discordblack
 • ${prefix}bed

◉ *Maker Menu*
 • ${prefix}csgo
 • ${prefix}honey
 • ${prefix}silk
 • ${prefix}warface
 • ${prefix}gradient
 • ${prefix}hartatahta
 • ${prefix}bokeh
 • ${prefix}3dunderwater
 • ${prefix}brokenglass
 • ${prefix}3dglowing
 • ${prefix}bearlogo
 • ${prefix}cloud
 • ${prefix}steel     
 • ${prefix}3dglue
 • ${prefix}lava
 • ${prefix}3dbox
 • ${prefix}neon 
 • ${prefix}pornhub 
 • ${prefix}glitch
 • ${prefix}8bit 
 • ${prefix}marvelstudio
 • ${prefix}multicolor3d
 • ${prefix}realisticvintage
 • ${prefix}naruto
 • ${prefix}lovemessage
 • ${prefix}glowmetalic
 • ${prefix}3dglue
 • ${prefix}holographic
 • ${prefix}writing
 • ${prefix}greenneon
 • ${prefix}attp
 • ${prefix}makequote
 • ${prefix}ttp
 • ${prefix}qrcode 
 
◉ *Fun Menu*
 • ${prefix}tts
 • ${prefix}emoji
 • ${prefix}ppcouple
 • ${prefix}truth
 • ${prefix}dare
 • ${prefix}hobby
 • ${prefix}memeindo
 • ${prefix}asupan
 • ${prefix}artinama
 • ${prefix}artimimpi
 • ${prefix}dadu
 • ${prefix}timer
 • ${prefix}quotes
 • ${prefix}quotesnasehat
 • ${prefix}quotesmotivasi

◉ *Download Menu*
 • ${prefix}ytplay
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp3v2
 • ${prefix}ytmp4
 • ${prefix}ytmp4v2
 • ${prefix}tiktokdownload
 • ${prefix}igvideo
 • ${prefix}igphoto

◉ *Search Menu*
 • ${prefix}gsmarena
 • ${prefix}pinterest
 • ${prefix}googleimage
 • ${prefix}stickersearch
 • ${prefix}aesthetic
 • ${prefix}searchmusic
 • ${prefix}shopee
 • ${prefix}jalantikus
 • ${prefix}thelazy
 • ${prefix}wattpad
 • ${prefix}rexdl
 • ${prefix}moddroid
 • ${prefix}sfile

◉ *Islam Menu*
 • ${prefix}quran
 • ${prefix}quotesislami
 • ${prefix}listsurah

◉ *Other Menu*
 • ${prefix}sticker 
 • ${prefix}jadwaltv 
 • ${prefix}styletext 
 • ${prefix}img2url 
 • ${prefix}tagstiker 
 • ${prefix}nulis 
 • ${prefix}swm 
 • ${prefix}toimg  
 • ${prefix}ssweb
 • ${prefix}tomp3 
 • ${prefix}shortlink 
 • ${prefix}shortlink2 
 • ${prefix}shortlink3  
 • ${prefix}bass  
 • ${prefix}tupai
 • ${prefix}slowmo 
 • ${prefix}gemok

◉ *Anime Menu*
 • ${prefix}kdu 
 • ${prefix}femdom
 • ${prefix}kemonimimi
 • ${prefix}kuni 
 • ${prefix}husbu2  
 • ${prefix}neko2
 • ${prefix}holo 
 
◉ *No Category*
 • ${prefix}info
 • ${prefix}ping
 • ${prefix}join
 • ${prefix}mutual
 • ${prefix}reedem
 • ${prefix}listban
 • ${prefix}listprem
 • ${prefix}listblock
 • ${prefix}leaderboard

◉ *Owner Menu*
 • ${prefix}receive
 • ${prefix}bc
 • ${prefix}addprem
 • ${prefix}unprem
 • ${prefix}ban
 • ${prefix}unban

       ~ ${botName} 2021` 
       sendButMessage(from, menunya, menunya1, 
        [{
			buttonId: `${prefix}owner`,
			buttonText: {
				displayText: `▨ CREATOR ▨`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}ping`,
			buttonText: {
				displayText: `▨ PING ▨`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}profile`,
			buttonText: {
				displayText: `▨ PROFILE ▨`,
			},
			type: 1,
		},
		]);
		} else
		if (isGroup) {
			const menunon =
`Hello World, ${botName} is here
Created By @_pa7rick

${a}• User :${a} ${premi}
${a}• Balance : $${uangkim}${a}
${a}• Time: ${time2}${a}
${a}• Runtime : ${kyun(process.uptime())}${a}
${a}• Total Hit : ${hit_today.length}${a}
*Type ${prefix}report*
*if there is an error*
━━━━━━━━━━━━━━━`
const menunon1 = `◉ *Group Menu*
 • ${prefix}infogrup
 • ${prefix}enable
 • ${prefix}disable 
 • ${prefix}group buka | tutup
 • ${prefix}add 62881xxxx
 • ${prefix}promote @tag
 • ${prefix}demote @tag
 • ${prefix}setname teks
 • ${prefix}setpp reply image
 • ${prefix}setdesc teks
 • ${prefix}groupinfo
 • ${prefix}linkgrup
 • ${prefix}tagall
 • ${prefix}hidetag
 • ${prefix}tagme
 • ${prefix}listonline
 • ${prefix}caripesan
 
 ◉ *Fun Menu*
 • ${prefix}tebakgambar
 • ${prefix}tictactoe
 • ${prefix}math
 • ${prefix}siapakahaku
 • ${prefix}family100
 • ${prefix}asahotak
 • ${prefix}tekateki
 • ${prefix}susunkata
 • ${prefix}tebakangka
 • ${prefix}tts
 • ${prefix}emoji
 • ${prefix}ppcouple
 • ${prefix}truth
 • ${prefix}dare
 • ${prefix}hobby
 • ${prefix}memeindo
 • ${prefix}asupan
 • ${prefix}artinama
 • ${prefix}artimimpi
 • ${prefix}dadu
 • ${prefix}timer
 • ${prefix}quotes
 • ${prefix}quotesnasehat
 • ${prefix}quotesmotivasi
 
 ◉ *Kerang Menu*
 • ${prefix}apakah
 • ${prefix}bisakah
 • ${prefix}kapankah
 • ${prefix}rate
 • ${prefix}ganteng
 • ${prefix}beban
 • ${prefix}cantik
 • ${prefix}jelek
 • ${prefix}nggagur
 • ${prefix}baik
 • ${prefix}jahat
 • ${prefix}nolep
 • ${prefix}wibu
 • ${prefix}hebat
 • ${prefix}pakboy
 • ${prefix}pakgirl
 • ${prefix}vganteng
 • ${prefix}vbeban
 • ${prefix}vcantik
 • ${prefix}vjelek
 • ${prefix}vbaik
 • ${prefix}vjahat
 • ${prefix}vnolep
 • ${prefix}vwibu
 • ${prefix}vhebat
 • ${prefix}vpakboy
 • ${prefix}vpakgirl
 
◉ *Image Edit*
 • ${prefix}triggered
 • ${prefix}glass
 • ${prefix}gay
 • ${prefix}jail
 • ${prefix}comrade
 • ${prefix}removebg
 • ${prefix}delete
 • ${prefix}airpods
 • ${prefix}ad
 • ${prefix}sepia
 • ${prefix}hacker
 • ${prefix}greyscale
 • ${prefix}continued
 • ${prefix}captcha
 • ${prefix}approve
 • ${prefix}what
 • ${prefix}linus
 • ${prefix}facepalm
 • ${prefix}discordblue
 • ${prefix}discordblack
 • ${prefix}bed

◉ *Maker Menu*
 • ${prefix}csgo
 • ${prefix}honey
 • ${prefix}silk
 • ${prefix}warface
 • ${prefix}gradient
 • ${prefix}hartatahta
 • ${prefix}bokeh
 • ${prefix}3dunderwater
 • ${prefix}brokenglass
 • ${prefix}3dglowing
 • ${prefix}bearlogo
 • ${prefix}cloud
 • ${prefix}steel     
 • ${prefix}3dglue
 • ${prefix}lava
 • ${prefix}3dbox
 • ${prefix}neon 
 • ${prefix}pornhub 
 • ${prefix}glitch
 • ${prefix}8bit 
 • ${prefix}marvelstudio
 • ${prefix}multicolor3d
 • ${prefix}realisticvintage
 • ${prefix}naruto
 • ${prefix}lovemessage
 • ${prefix}glowmetalic
 • ${prefix}3dglue
 • ${prefix}holographic
 • ${prefix}writing
 • ${prefix}greenneon
 • ${prefix}attp
 • ${prefix}makequote
 • ${prefix}ttp
 • ${prefix}qrcode 

◉ *Download Menu*
 • ${prefix}ytplay
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp3v2
 • ${prefix}ytmp4
 • ${prefix}ytmp4v2
 • ${prefix}tiktokdownload
 • ${prefix}igvideo
 • ${prefix}igphoto

◉ *Search Menu*
 • ${prefix}gsmarena
 • ${prefix}pinterest
 • ${prefix}googleimage
 • ${prefix}stickersearch
 • ${prefix}aesthetic
 • ${prefix}searchmusic
 • ${prefix}shopee
 • ${prefix}jalantikus
 • ${prefix}thelazy
 • ${prefix}wattpad
 • ${prefix}rexdl
 • ${prefix}moddroid
 • ${prefix}sfile

◉ *Islam Menu*
 • ${prefix}quran
 • ${prefix}quotesislami
 • ${prefix}listsurah

◉ *Other Menu*
 • ${prefix}sticker 
 • ${prefix}jadwaltv 
 • ${prefix}styletext 
 • ${prefix}img2url 
 • ${prefix}tagstiker 
 • ${prefix}nulis 
 • ${prefix}swm 
 • ${prefix}toimg  
 • ${prefix}ssweb
 • ${prefix}tomp3 
 • ${prefix}shortlink 
 • ${prefix}shortlink2 
 • ${prefix}shortlink3  
 • ${prefix}bass  
 • ${prefix}tupai
 • ${prefix}slowmo 
 • ${prefix}gemok

◉ *Anime Menu*
 • ${prefix}kdu 
 • ${prefix}femdom
 • ${prefix}kemonimimi
 • ${prefix}kuni 
 • ${prefix}husbu2  
 • ${prefix}neko2
 • ${prefix}holo 

◉ *No Category*
 • ${prefix}ping
 • ${prefix}join
 • ${prefix}mutual
 • ${prefix}reedem
 • ${prefix}listban
 • ${prefix}listprem
 • ${prefix}listblock
 • ${prefix}leaderboard
 
◉ *Owner Menu*
 • ${prefix}receive
 • ${prefix}bc
 • ${prefix}addprem
 • ${prefix}unprem
 • ${prefix}ban
 • ${prefix}unban

       ~ ${botName} 2021` 
			sendButMessage(from, menunon, menunon1, 
        [{
			buttonId: `${prefix}owner`,
			buttonText: {
				displayText: `▨ CREATOR ▨`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}ping`,
			buttonText: {
				displayText: `▨ PING ▨`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}profile`,
			buttonText: {
				displayText: `▨ PROFILE ▨`,
			},
			type: 1,
		},
		]);
		}
		break 
	    case 'groupinfo':
	    case 'infogrup':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		try {
           var pic = await patrick.getProfilePicture(from)
        } catch {
           var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
		teksnya =
`> *Name :* ${groupName}
> *ID Grup :* ${from}
> *Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD MM YYYY | HH:mm:ss')}
> *Owner Grup :* @${groupMetadata.owner.split('@')[0]}
> *Jumlah Admin :* ${groupAdmins.length}
> *Jumlah Peserta :* ${groupMembers.length}

❏ *Antilink:*
╰── ${isAntiLink ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antivirtex:*
╰── ${isAntiVirtex ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antibadword:*
╰── ${isBadWord ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Welcome:*
╰── ${isWelcome ? '*Aktif!*' : 'Belum Aktif!'}
❏ *SimiSimi:*
╰── ${isSimi ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antispam (Sticker):*
╰── ${isAntiSpam ? '*Aktif!*' : 'Belum Aktif!'}

*Untuk mengaktifkannya, Ketik ${prefix}enable*
*Untuk menonaktifkannya, Ketik ${prefix}disable*`
		patrick.sendMessage(from, await getBuffer(pic), image, {
			quoted: ftoko, 
			caption: teksnya,
			contextInfo: { 
                 "mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]
             }
		})
		break 
		//==========================================BATES NGAB==========================================\\
		//=============APIKEY ALL==============\\    
	    case 'artinama':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`Example: ${prefix + command} Patrick`)
		anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {
			method: 'get'
		})
		replyWithFakeLink('Menurut nama:\n\n' + anu.result)
		await limitAdd(sender)
		break 
	    case 'nulis':
	    case 'tulis':
		patrick.updatePresence(from, Presence.composing)
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`Example: ${prefix + command} ${pushname}`)
		replyWithFakeLink(ind.wait())
		nulis = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nulis?text=${q}&apikey=${dappaApi}`, {
			method: 'get'
		})
		patrick.sendMessage(from, nulis, image, {
			quoted: fgclink
		})
		await limitAdd(sender)
		break
		//==========================================BATES NGAB==========================================\\
		//=============IN MENU==============\\
		case 'reedem':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isPrem) return replyWithFakeLink('Fitur ini khusus free member!')
		if (args[0] == `${codeReedem}`) {
		mente = `${sender.split('@','')}@s.whatsapp.net`
		addPremiumUser(mente, '3d', prem)
		replyWithFakeLink(`${a}Succes, Menambah User Premium${a}`)
		texting = `🎟️ Selamat anda mendapatkan Premium User dari owner\nKetik .premiummenu untuk fitur premium`
		codeReedem = createSerial(20)
        var optionns = {
            text: texting
        }
        patrick.sendMessage(`${mente}`, optionns, text, {quoted: mek})
        } else {
        reply (`Code salah!, Silahkan ketik ${prefix}buycode\nUntuk membeli code premium dengan balance mu!`)
        }
		break 
		case 'buycode':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isPrem) return replyWithFakeLink('Fitur ini khusus free member!')
		if (checkATMuser(sender) <= uang5) return replyWithFakeLink(`Balance mu tidak cukup!\nHarga: $${uang5}`)
		if (checkATMuser(sender) >= uang5) {
			replyWithFakeLink(`*Code ini bersifat PRIVATE*\n*Code mu* ${codeReedem}\nSilahkan ketik ${prefix}reedem untuk menukarnya!`)
			confirmATM(sender, uang5)
		}
		break 
	    case 'join':
	    if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!q) return replyWithFakeLink(`Format Salah!\nContoh: ${prefix}join linkgrup`)
		var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[0]
		if (!codeInvite) return replyWithFakeLink('pastikan link sudah benar!')
		var response = await patrick.acceptInvite(codeInvite)
		.then((res) => {
            patrick.sendMessage(res.gid,`*Hello ${botName}!* telah diinvit oleh @${sender.split("@")[0]} untuk masuk ke dalam Group!\nKetik ${prefix}menu untuk Melihat Fitur Bot!`, text, { contextInfo: { mentionedJid: [sender]}, quoted : freply})
            replyWithFake(`_Succes Join Group!_`)
        })
        .catch((e) => reply(jsonformat(e)))
		break
	    case 'info':
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		let c = []
		let geed = []
		for (mem of totalchat) {
			c.push(mem.jid)
		}
		for (yes of c) {
			if (yes && yes.includes('g.us')) {
				geed.push(yes)
			}
		}
		let timestampi = speed();
		let latensii = speed() - timestampi
		anu = process.uptime()
		mee = patrick.user
		ca = totalchat
		ginfo = await getBuffer(mee.imgUrl)
		inponya = `    *All Info PatrickBot*
${a}>  Name : ${patrick.user.name}${a}
${a}>  Browser : ${patrick.browserDescription[1]}${a}
${a}>  Speed : ${latensii.toFixed(4)} Second${a}
${a}>  Handphone : ${patrick.user.phone.device_manufacturer}${a}
${a}>  Versi WA : ${patrick.user.phone.wa_version}${a}
${a}>  Group Chat : ${geed.length}${a}
${a}>  Personal Chat : ${totalchat.length - geed.length}${a}
${a}>  Total Chat : ${totalchat.length}${a}
${a}>  Total Block Contact : ${blocked.length}${a}
${a}>  Total Register : ${_registered.length}${a}
${a}>  Total Premium User : ${prem.length}${a}

        ~ PatrickBot 2021`
		await patrickhay(inponya, MessageType.text, tescuk, `${ucapanFakereply}`)
		break 
	    case 'admin':
	    case 'owner':
	    case 'creator':
		patrick.sendMessage(from, {
			displayname: "Jeff",
			vcard: vcard
		}, MessageType.contact, {
			quoted: fkontak
		})
		break
		//==========================================BATES NGAB==========================================\\
		//=============Premium MENU==============\\
	    case 'premiummenu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		await patrickhay(ind.premium(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break 
		case 'groupsearch':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (!isPrem) return replyWithFakeLink(ind.premon())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`Example: ${prefix + command} Grup PatrickBot`)
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${q}&apikey=${leysApi}`, {
			method: 'get'
		})
		teks = '=================\n'
		for (let g of anu.result) {
		teks += `Judul Group : ${g.judul}\nLink Group : ${g.link}\nFollow Me in Insta: _pa7rick :)\n\n=================\n`
		}
		replyWithFakeLink(teks.trim())
		break
	    case 'swm':
	    case 'stickerwm':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (!isPrem) return replyWithFakeLink(ind.premon())
		if (type === 'imageMessage' || isQuotedImage) {
			var kls = body.slice(5)
			var pack = kls.split('|')[0]
			var author = kls.split('|')[1]
			const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const dlfile = await patrick.downloadMediaMessage(getbuff)
			replyWithFakeLink(ind.wait())
			const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
			var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
			var imageBuffer = new Buffer.from(mantap, 'base64');
			patrick.sendMessage(from, imageBuffer, MessageType.sticker, {
				quoted: freply
			})
		} else {
			replyWithFakeLink('Format Salah!')
		}
		await limitAdd(sender)
		break
	    case 'take':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (!isPrem) return replyWithFakeLink(ind.premon())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (!isQuotedSticker) return replyWithFakeLink(`Example: ${prefix + command} PatrickBot|Pa7rick`)
		var pembawm = body.slice(6)
		var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		var media = await patrick.downloadAndSaveMediaMessage(encmedia, `./temp/${sender}`)
		var packname = pembawm.split('|')[0]
		var author = pembawm.split('|')[1]
		tekes = getRandom('')
		exif.create(packname, author, `takestick_${sender}`)
		exec(`webpmux -set exif ./temp/takestick_${sender}.exif ./temp/${sender}.webp -o ./temp/${sender}.webp`, async (error) => {
			if (error) return replyWithFakeLink(ind.stikga())
			patrick.sendMessage(from, fs.readFileSync(`./temp/${sender}.webp`), MessageType.sticker, {
				quoted: freply
			})
			fs.unlinkSync(media)
			fs.unlinkSync(`./temp/takestick_${sender}.exif`)
		})
		await limitAdd(sender)
		break
	    case 'hidetag20':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (!isGroupAdmins) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		if (!isPrem) return replyWithFakeLink(ind.premon())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		var value = body.slice(9)
		var group = await patrick.groupMetadata(from)
		var member = group['participants']
		var mem = []
		member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var options = {
			text: value,
			contextInfo: {
				mentionedJid: mem
			},
			quoted: ftoko
		}
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		patrick.sendMessage(from, options, text)
		await limitAdd(sender)
		break
		//==========================================BATES NGAB==========================================\\
		//=============OWNER MENU==============\\
	    case 'ownermenu':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		await patrickhay(ind.owner(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break 
		case 'addsewa':
         if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
         if (args.length < 1) return reply(`Penggunaan :\n*${prefix}addsewa* linkgc waktu`)
         linked = `${args[0].replace('https://chat.whatsapp.com/','')}`
         patrick.query({ json: ["action", "invite", linked]}).then((res) => {
            _sewa.addSewaGroup(res.gid, args[1], sewa)
            patrick.sendMessage(res.gid, `Hello, PatrickBot disewa di grup ini!\nSelama: ${args[1]}`, text, { quoted: mek })
            reply(`Succes!`)
        }).catch(() => reply('Error'))
        break
        case 'delsewa':
        if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
        if (args.length < 1) return reply(`Penggunaan :\n*${prefix}delprem* idgroup`)
    	sewa.splice(_sewa.getSewaPosition(args[1], sewa), 1)
        fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
        reply(`Sukses lur`)
        break
		case "addcmd":
        case "setcmd":
        if (isQuotedSticker) {
        if (!q) return replyWithFakeLink(`Penggunaan : ${command} cmdnya dan tag stickernya`)
          var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64")
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          replyWithFakeLink(`Penggunaan : ${command} cmdnya dan tag stickernya`);
        }
        break;
        case "delcmd":
        if (!isQuotedSticker) return replyWithFakeLink(`Penggunaan : ${command} tagsticker`);
          var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/data/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break; 
        case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
	    case 'readall':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		var chatis = await patrick.chats.all()
		chats.map(async ({
			jid
		}) => {
			await patrick.chatRead(jid)
		})
		rdl = `${a}Berhasil membaca ${chatis.length} Chat !${a}`
		await patrick.sendMessage(from, rdl, MessageType.text, {
			quoted: fgclink
		})
		console.log(chatis.length)
		break
	    case 'resetlimit':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		var ngonsol = []
		rest = _limit.indexOf([])
		_limit.splice(rest)
		fs.writeFileSync('./database/data/limit.json', JSON.stringify(ngonsol))
		fakestatus('Berhasil, mereset semua limit!')
		break
	    case 'receive':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		if (!q.includes('|')) return replyWithFakeLink(ind.wrongf())
		const tujuanfe = q.substring(0, q.indexOf('|') - 1)
		const jumlahfe = q.substring(q.lastIndexOf('|') + 1)
		if (isNaN(jumlahfe)) return await replyWithFakeLink('Maaf, Hanya Angka Yang Diperbolehkan')
		const tujuantffe = `${tujuanfe.replace("@", '')}@s.whatsapp.net`
		pajek = 0.000 * jumlahfe
		hasiltffe = jumlahfe - pajek
		addKoinUser(tujuantffe, hasiltffe)
		replyWithFakeLink(`        *Transfer receipt*\n  Pengambilan Ub Berhasil\n\n> From : ${sender.split("@")[0]}\n> To : ${tujuanfe}\n> Jumlah : Ub    ${jumlahfe}\n> Pajak : ${pajek}\n> Serial : ${createSerial(10)}\n  Sisa Saldo Anda : Ub  ${checkATMuser(sender)}\n\n                                       ${time}\n\n          *PatrickBot ATM*`)
		break
        case 'searchmusic':
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
        if (!isPrem) return replyWithFakeLink(ind.premon())
        if (isQuotedAudio){
        const dlfile = await patrick.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
        const bodyForm = new FormData()
        bodyForm.append('audio', dlfile, 'music.mp3')
        bodyForm.append('apikey', `${zeksApi}`)
        axios('https://api.zeks.me/api/searchmusic', {
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data",
          ...bodyForm.getHeaders()
        },
        data: bodyForm
          })
        .then(({data}) =>{
        if (data.status){
          replyWithFakeLink(`*Identify Music*\n\n${a}> Title: ${data.data.title}\n> Artists: ${data.data.artists}\n> Genre: ${data.data.genre}\n> Album: ${data.data.album}\n>Release date: ${data.data.release_date}${a}`)
          } else replyWithFakeLink(data.message)
          }).catch(() => replyWithFakeLink('Internal server error!, try again later'))
          } else {
          replyWithFakeLink('Wrong format!')
          }
         limitAdd(sender)
         break
	    case 'bc':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		if (args.length < 1) return replyWithFakeLink('.......')
		anu = await patrick.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buff = await patrick.downloadMediaMessage(encmedia)
			for (let _ of anu) {
				patrick.sendMessage(_.jid, buff, image, {
					caption: `${body.slice(4)}\n• ~ PatrickBot`
				})
			}
			replyWithFakeLink('*Succes Broadcast!!*')
		} else {
			for (let _ of anu) {
				sendMess(_.jid, `${body.slice(4)}\n• ~ PatrickBot`)
			}
			replyWithFakeLink('*Succes Broadcast!!*')
		}
		break
	    case 'addprem':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		if (args.length < 1 ) return replyWithFakeLink(' tag member')
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
		addPremiumUser(mente, args[1], prem)
		replyWithFakeLink(`${a}Succes, Menambah User Premium${a}`)
		texting = `🎟️ Selamat anda mendapatkan Premium User dari owner\nKetik .premiummenu untuk fitur premium`
        var optionns = {
            text: texting
        }
        patrick.sendMessage(`${mente}`, optionns, text, {quoted: mek})
		break
		case 'delprem':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		if (args.length < 1 ) return replyWithFakeLink(' tag member')
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
  	  prem.splice(getPremiumPosition(mente, premium), 1)
		replyWithFakeLink('Done Delete Premium user')
		break 
		case 'listprem':
        let txt = `List Prem\nJumlah : ${prem.length}\n\n`
        let men = [];
        for (let i of prem){
            men.push(i.id)
            let cekvip = ms(i.expired - Date.now())
            txt += `*ID :* @${i.id.split("@")[0]}\n*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
        }
        mentions(txt, men, true)
        break
	    case 'ban':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		bnnd = body.slice(6)
		ban.push(`${bnnd}@s.whatsapp.net`)
		fs.writeFileSync('./database/data/banned.json', JSON.stringify(ban))
		replyWithFakeLink(`Nomor wa.me/${bnnd} telah dibanned !`)
		break
	    case 'unban':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		bnnd = body.slice(8)
		ban.splice(`${bnnd}@s.whatsapp.net`, 1)
		fs.writeFileSync('./database/data/banned.json', JSON.stringify(ban))
		replyWithFakeLink(`Nomor wa.me/${bnnd} telah di unban!`)
		break
	    case 'addbadword':
		if (!isGroup) return replyWithFakeLink(ind.groupo)
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		if (args.length < 1) return replyWithFakeLink(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
		const bw = body.slice(11)
		bad.push(bw)
		fs.writeFileSync('./database/data/bad.json', JSON.stringify(bad))
		replyWithFakeLink('Success Menambahkan Bad Word!')
		break
	    case 'delbadword':
		if (!isGroup) return replyWithFakeLink(ind.groupo)
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @6288989029718 !*`, [`6288989029718@s.whatsapp.net`], true)
		if (args.length < 1) return replyWithFakeLink(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
		let dbw = body.slice(11)
		bad.splice(dbw)
		fs.writeFileSync('./database/data/bad.json', JSON.stringify(bad))
		replyWithFakeLink('Success Menghapu BAD WORD!')
		break
		//==========================================BATES NGAB==========================================\\
		//=============MAKER MENU=============\\
		case "triggered":
		case "glass":
		case "gay": 
		case "jail":
		case "comrade":
		try {
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			getqu = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
			replyWithFakeLink(ind.wait())
			hasilq = await patrick.downloadAndSaveMediaMessage(getqu)
			var imgbb = require('imgbb-uploader')
            anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", hasilq)
            teks = `${anu.display_url}`
			anull = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${teks}`)
			patrick.sendMessage(from, anull, image, { quoted: freply })
		} else {
			replyWithFakeLink('*Wrong Format*\nReply the picture!!!')
		} 
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error()) 
		}
		await limitAdd(sender) 
		break 
		case "removebg":
		case "delete":
		case "airpods": 
		case "ad":
		case "sepia":
		case "hacker":
		case "greyscale": 
		case "continued":
		case "captcha":
		case "approve":
		case "what": 
		case "linus":
		case "facepalm":
		case "discordblue":
		case "discordblack": 
		case "bed":
		try {
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			getqu = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
			replyWithFakeLink(ind.wait())
			hasilq = await patrick.downloadAndSaveMediaMessage(getqu)
			var imgbb = require('imgbb-uploader')
            anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", hasilq)
            teks = `${anu.display_url}`
			anull = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas/${command}?img=${anu.display_url}&apikey=HelloWorld`)
			patrick.sendMessage(from, anull, image, { quoted: freply })
		} else {
			replyWithFakeLink('*Wrong Format*\nReply the picture!!!')
		}
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error()) 
		}
		await limitAdd(sender) 
		break 
	    case 'csgo':
	    case 'honey':
	    case 'silk':
	    case 'warface':
	    case 'gradient':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (args.length < 1) return replyWithFakeLink(`*Wrong Format!!*\nExample ${prefix + command} ${pushname}`)
			teksnya = args.join(' ')
			replyWithFakeLink(ind.wait())
			poto = await getBuffer(`https://leyscoders-api.herokuapp.com/api/textmaker/${command}?q=${teksnya}&apikey=${leysApi}`)
			patrick.sendMessage(from, poto, image, {
				quoted: ftoko
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break
	    case 'hartatahta':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (args.length < 1) return replyWithFakeLink(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
			replyWithFakeLink(ind.wait())
			patrickganss = await fetchJson(`https://leyscoders-api.herokuapp.com/api/harta-tahta?teks=${q}&apikey=${leysApi}`)
			hasil = patrickganss.result
			poto = await getBuffer(hasil.url)
			patrick.sendMessage(from, poto, image, {
				quoted: ftoko
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break
	    case 'bokeh':
	    case '3dunderwater':
	    case 'brokenglass':
	    case '3dglowing':
	    case 'bearlogo':
	    case 'cloud':
	    case 'steel':     
	    case '3dglue':
	    case 'lava':
	    case '3dbox':
	    case 'neon': 
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (args.length < 1) replyWithFakeLink(`*Wrong Format!!*\nExample ${prefix + command} ${pushname}`)
			teksnya = args.join(' ')
			replyWithFakeLink(ind.wait())
			poto = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/${command}?text=${q}&apikey=${dappaApi}`)
			patrick.sendMessage(from, poto, image, {
				quoted: ftoko
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break 
		case 'pornhub': 
		case 'glitch':
		case '8bit': 
		case 'marvelstudio':
		case 'multicolor3d':
		case 'realisticvintage':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (args.length < 1) return replyWithFakeLink(`*Wrong Format!*\nExample: ${prefix + command} kata1:kata2`)
			replyWithFakeLink(ind.wait())
			var has = q.split(":")[0];
			var kas = q.split(":")[1];
			patrickganss = await getBuffer(`https://dapuhy-api.herokuapp.com/api/ephoto/${command}?text1=${has}&text2=${kas}&apikey=${dappaApi}`)
			patrick.sendMessage(from, patrickganss, image, {
				quoted: ftoko
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break 
	    case 'naruto':
	    case 'lovemessage':
	    case 'glowmetalic':
	    case '3dglue':
	    case 'holographic':
	    case 'writing':
	    case 'greenneon':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (args.length < 1) return replyWithFakeLink(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
			replyWithFakeLink(ind.wait())
			patrickganss = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/${command}?text=${q}&apikey=${dappaApi}`)
			patrick.sendMessage(from, patrickganss, image, {
				quoted: ftoko
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break
	    case 'attp':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`Example: ${prefix + command} PatrickGans`)
		attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
		patrick.sendMessage(from, attp2, sticker, {
			quoted: fkontak
		})
		break
	    case 'ttp':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`Example: ${prefix + command} PatrickGans`)
		ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${q}`)
		patrick.sendMessage(from, ttp, sticker, {
			quoted: ftoko
		})
		break
	    case 'qrcode':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		const tex = encodeURIComponent(body.slice(8))
		if (!tex) return patrick.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {
			quoted: fgclink
		})
		const butff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
		patrick.sendMessage(from, butff, image, {
			quoted: ftoko
		})
		await limitAdd(sender)
		break
	    case 'quotemaker':
	    case 'makequote':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		var gh = body.slice(12)
		var quote = gh.split(":")[0];
		var wm = gh.split(":")[1];
		const pref = `Usage: \n${prefix}quotemaker teks:watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
		if (args.length < 1) return replyWithFakeLink(pref)
		replyWithFakeLink(ind.wait())
		anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {
			method: 'get'
		})
		buffer = await getBuffer(anu.result)
		patrick.sendMessage(from, buffer, image, {
			caption: 'Nih anjim',
			quoted: ftoko
		})
		await limitAdd(sender)
		break
		//==========================================BATES NGAB==========================================\\
		//=============FUN MENU==============\\ 
		case 'emoji':
        if (isLimit(sender)) return replyWithFakeLink(mess.limit)
        if (!q) return replyWithFakeLink(`Example : ${prefix + command} 😗`)
        qes = args.join(' ')
        emoji.get(`${qes}`).then(emoji => {
        teks = `${emoji.images[4].url}`
        sendStickerFromUrl(from,`${teks}`)	
        console.log(teks)
        })
        limitAdd(sender)
        break
		case 'darkjoke':
		case 'estetik':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(ind.baned())
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
		replyWithFakeLink(ind.wait())
		anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/${command}?apikey=${leysApi}`) 
		patrick.sendMessage(from, anu, image, {quoted: freply})
		await limitAdd(sender)
		break
		case 'ppcouple':
		case 'couple':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(ind.baned())
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
		replyWithFakeLink(ind.wait())
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${leysApi}`) 
		cowo = await getBuffer(anu.result.male)
		patrick.sendMessage(from, cowo, image, {quoted: freply, caption: '*PP Couple Cowok*'})
		cewe = await getBuffer(anu.result.female)
		patrick.sendMessage(from, cewe, image, {quoted: freply, caption: '*PP Couple Cewek*'})
		await limitAdd(sender)
		break
		case 'artimimpi':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`Example: ${prefix + command} Patrick`)
		anu = await fetchJson(`https://api.zeks.xyz/api/artimimpi?apikey=D40LVbLehmSk17EiOGhWMtAjMe6&q=${q}`, {
			method: 'get'
		}) 
		teks = `Arti Mimpi dari ${q}`
		teks += `*${t.result.array}\nFollow Me in Insta: _pa7rick :)\n\n=================\n`
		patrick.sendMessage(from, teks, text)
		await limitAdd(sender)
		break
		case 'dadu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		ranp = getRandom('.png')
		rano = getRandom('.webp')
		random = `${Math.floor(Math.random() * 6)}`
		hasil = 'https://www.random.org/dice/dice' + random + '.png'
		exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return replyWithFakeLink(ind.wait())
			buffer = fs.readFileSync(rano)
			patrick.sendMessage(from, buffer, sticker, {
				quoted: mek
			})
			fs.unlinkSync(rano)
		})
		break
		case 'timer':
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args[1] == "detik") {
			var timer = args[0] + "000"
		} else if (args[1] == "menit") {
			var timer = args[0] + "0000"
		} else if (args[1] == "jam") {
			var timer = args[0] + "00000"
		} else {
			return replyWithFakeLink("*pilih:*\ndetik\nmenit\njam")
		}
		setTimeout(() => {
			replyWithFakeLink("Waktu habis")
		}, timer)
		break 
		case 'memeindo':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
		replyWithFakeLink(ind.wait())
		memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${zeksApi}`)
		buffer = await getBuffer(memein.result)
		patrick.sendMessage(from, buffer, image, {
			quoted: fgclink,
			caption: '*Nih Meme, Jangan Lupa Follow _pa7rick :)*'
		})
		await limitAdd(sender)
		break
	    case 'kapankah':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		kapankah = body.slice(1)
		const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi', 'Tidak Akan Pernah']
		const koh = kapan[Math.floor(Math.random() * kapan.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, {
			quoted: ftoko
		})
		await limitAdd(sender)
		break
	    case 'tictactoe':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (isTicTacToe(from, tictactoe)) return replyWithFakeLink(`Masih ada game yg blum selesai`)
		if (args.length < 1) return replyWithFakeLink(`Kirim perintah *${prefix}tictactoe* @tag`)
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		if (mentioned.length !== 0) {
			if (mentioned[0] === sender) return replyWithFakeLink(`Sad amat main ama diri sendiri`)
			mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain`), [sender, mentioned[0]], false)
			tictactoe.push({
				id: from,
				status: null,
				penantang: sender,
				ditantang: mentioned[0],
				TicTacToe: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']
			})
		} else {
			replyWithFakeLink(`Kirim perintah *${prefix}tictactoe* @tag`)
		}
		break
	    case 'delttt':
	    case 'delttc':
		if (!isGroup) return replyWithFakeLink('only grup')
		if (!isOwner) return replyWithFakeLink('Jika Ingin .delttc\nChat Owner ketik .owner')
		if (!isTicTacToe(from, tictactoe)) return replyWithFakeLink(`Tidak ada sesi game tictactoe di grup ini`)
		tictactoe.splice(getPosTic(from, tictactoe), 1)
		replyWithFakeLink(`Berhasil menghapus sesi tictactoe di grup ini`)
		break
	    case 'bisakah':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		bisakah = body.slice(1)
		const bisa = ['Bisa', 'Tidak Bisa', 'Coba Ulangi', 'Ngimpi kah?', 'yakin bisa?']
		const keh = bisa[Math.floor(Math.random() * bisa.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, {
			quoted: mek
		})
		await limitAdd(sender)
		break 
		case 'tqto':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		patrick.sendMessage(from, ' Script Created by MhankBarBar\nRecode By Me: @_pa7rick\n   Masih Belajar Bang :)\n\n  Thanks For:\n  @adiwajshing/baileys\n  MhankBarBar\n   LeysCoders\n   NPM\n   Affis Junianto\n   ArugaZ\n   Penyedia Api\n   Tobz\n   Zahirr\n    Arifi Razzaq\n   Manik \n\nThanks For All Creator Bot\nThanks For All Creator ApiKey', text, {
			quoted: mek
		})
		await limitAdd(sender)
		break
	    case 'apakah':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		apakah = body.slice(1)
		const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi', 'Tanyakan Ayam']
		const kah = apa[Math.floor(Math.random() * apa.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, {
			quoted: mek
		})
		await limitAdd(sender)
		break
	    case 'rate':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		rate = body.slice(1)
		const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
		const te = ra[Math.floor(Math.random() * ra.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '%', text, {
			quoted: mek
		})
		await limitAdd(sender)
		break
	    case 'vganteng':
	    case 'vbeban':
	    case 'vcantik':
	    case 'vjelek':
	    case 'vnggagur':
	    case 'vhebat':
	    case 'vwibu':
	    case 'vpakboy':
	    case 'vpakgirl':
	    case 'vnolep':
	    case 'vjahat':
	    case 'vbaik':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		membr = []
		const noll = groupMembers
		const dissinni = noll[Math.floor(Math.random() * noll.length)]
		const vcare =
			'BEGIN:VCARD\n' +
			'VERSION:3.0\n' +
			`FN:Member Ter${command.replace('v', '')} \n` +
			`ORG:Follow _pa7rick kak :v;\n` +
			`TEL;type=CELL;type=VOICE;waid=${dissinni.jid.split('@')[0]}:+${dissinni.jid.split('@')[0]}\n` +
			'END:VCARD'
		membr.push(dissinni.jid)
		patrick.sendMessage(from, {
			displayname: "Jeff",
			vcard: vcare
		}, MessageType.contact)
		patrick.sendMessage(from, 'Tuh Kontaknya', text, {
			quoted: fkontak 
		})
		break
	    case 'ganteng':
	    case 'beban':
	    case 'cantik':
	    case 'jelek':
	    case 'nggagur':
	    case 'hebat':
	    case 'wibu':
	    case 'pakboy':
	    case 'pakgirl':
	    case 'nolep':
	    case 'jahat':
	    case 'baik':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		membr = []
		const nus = groupMembers
		const msl = groupMembers
		const siapss = nus[Math.floor(Math.random() * nus.length)]
		const sipss = pushname[Math.floor(Math.random() * msl.length)]
		teks = `Yang paling ${command} disini Adalah : @${siapss.jid.split('@')[0]}`
		membr.push(siapss.jid)
		mentions(teks, membr, true)
		break
	    case 'truth':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
		patrick.sendMessage(from, truteh, image, {
			caption: '*Truth*\n\n' + ttrth,
			quoted: freply
		})
		await limitAdd(sender)
		break
	    case 'dare':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
		patrick.sendMessage(from, tod, image, {
			quoted: freply,
			caption: '*Dare*\n\n' + der
		})
		await limitAdd(sender)
		break
	    case 'hobby':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		hobby = body.slice(1)
		const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri', 'Nonton Wibu']
		const by = hob[Math.floor(Math.random() * hob.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, {
			quoted: freply
		})
		await limitAdd(sender)
		break
	    
		//==========================================BATES NGAB==========================================\\
		//=============GROUP MENU==============\\
	    case 'groupmenu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		await patrickhay(ind.group(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break
	    case 'caripesan':
		if (!q) return replyWithFakeLink('pesannya apa bang?')
		let v = await patrick.searchMessages(q, from, 10, 1)
		let s = v.messages
		let el = s.filter(v => v.message)
		el.shift()
		try {
			if (el[0].message.conversation == undefined) return
			replyWithFakeLink(`Ditemukan ${el.length} pesan`)
			await sleep(3000)
			for (let i = 0; i < el.length; i++) {
				await patrick.sendMessage(from, 'Nih pesannya', text, {
					quoted: el[i]
				})
			}
		} catch (e) {
			replyWithFakeLink('Pesan tidak ditemukan!')
		}
		break
	    case 'setpp':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		media = await patrick.downloadAndSaveMediaMessage(mek)
		await patrick.updateProfilePicture(from, media)
		replyWithFakeLink('*✔️Berhasil mengganti pp grup*')
		break
	    case 'add':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		if (args.length < 1) return replyWithFakeLink('Yang mau di add jin ya?')
		if (args[0].startsWith('08')) return replyWithFakeLink('Gunakan kode negara mas')
		try {
			num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
			patrick.groupAdd(from, [num])
		} catch (e) {
			console.log('Error :', e)
			replyWithFakeLink('Gagal menambahkan target, mungkin karena di private')
		}
		break
	    case 'grup':
	    case 'group':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		if (args[0] === 'buka') {
			replyWithFakeLink(`*Berhasil Membuka Group*`)
			patrick.groupSettingChange(from, GroupSettingChange.messageSend, false)
		} else if (args[0] === 'tutup') {
			replyWithFakeLink(`*Berhasil Menutup Group`)
			patrick.groupSettingChange(from, GroupSettingChange.messageSend, true)
		}
		break
	    case 'setname':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		patrick.groupUpdateSubject(from, `${body.slice(9)}`)
		patrick.sendMessage(from, 'Succes, Ganti Nama Grup', text, {
			quoted: freply
		})
		break
	    case 'setdesc':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		patrick.groupUpdateDescription(from, `${body.slice(9)}`)
		patrick.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {
			quoted: freply
		})
		break
	    case 'demote':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyWithFakeLink('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		if (mentioned.length > 1) {
			teks = ''
			for (let _ of mentioned) {
				teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
				teks += `@_.split('@')[0]`
			}
			mentions(teks, mentioned, true)
			patrick.groupDemoteAdmin(from, mentioned)
		} else {
			mentions(`Status adminmu dicopot. Makanya jan jadi sider🏃\n@${mentioned[0].split('@')[0]}`, mentioned, true)
			patrick.groupDemoteAdmin(from, mentioned)
		}
		break
	    case 'promote':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyWithFakeLink('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		if (mentioned.length > 1) {
			teks = ''
			for (let _ of mentioned) {
				teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
				teks += `@_.split('@')[0]`
			}
			mentions(teks, mentioned, true)
			patrick.groupMakeAdmin(from, mentioned)
		} else {
			mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
			patrick.groupMakeAdmin(from, mentioned)
		}
		break
	    case 'listadmin':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
		no = 0
		for (let admon of groupAdmins) {
			no += 1
			teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
		}
		mentions(teks, groupAdmins, true)
		break
	    case 'tagme':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		var waw = mek.participant
		const tag = {
			text: `@${waw.split("@s.whatsapp.net")[0]} tagged!`,
			contextInfo: {
				mentionedJid: [waw]
			}
		}
		patrick.sendMessage(from, tag, text, {
			quoted: freply
		})
		break
	    case 'hidetag':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (!isGroupAdmins) return replyWithFakeLink(ind.groupo())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		var value = body.slice(9)
		var group = await patrick.groupMetadata(from)
		var member = group['participants']
		var mem = []
		member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var options = {
			text: value,
			contextInfo: {
				mentionedJid: mem
			},
			quoted: freply
		}
		patrick.sendMessage(from, options, text)
		await limitAdd(sender)
		break
		//==========================================BATES NGAB==========================================\\
		//=============ISLAM MENU==============\\
	    case 'islammenu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		await patrickhay(ind.islam(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break 
		case 'quran':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {
			method: 'get'
		})
		quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
		patrick.sendMessage(from, quran, text, {
			quoted: ftoko
		})
		await limitAdd(sender)
		break
		//==========================================BATES NGAB==========================================\\
		//=============GAME MENU==============\\
		case 'suit':
		if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
        const userspilih = q
        var ininy = Math.ceil(Math.random() * 30000)
        if (!userspilih.match(/batu|gunting|kertas/)) return reply(`*Wrong Format!!*\nList Option\n• Batu\n• Gunting\nKertas\nExample: ${prefix}suit batu`)
        var computer = Math.random();
        if (computer < 0.34 ) {
            computer = 'batu';
        } else 
        if (computer >= 0.34 && computer < 0.67) {
            computer = 'gunting';
        } else {
            computer = 'kertas';
        }
        if (userspilih == computer) {
        	reply(`(( S U I T ))\nKamu memilih *${q}*\nComp memlih *${computer}*\n*Pertandingan Seri!*`)
        } else 
        if (userspilih == 'batu') {
            if (computer == 'gunting') {
            	reply(`(( S U I T ))\nKamu memilih *Batu*\nComp memlih *Gunting*\n*Kamu telah menang! :)*`)
             } else {
             	reply(`(( S U I T ))\nKamu memilih *Batu*\nComp memlih *Kertas*\n*Kamu telah kalah! :(*`)
             }
         } else 
         if (userspilih == 'gunting') {
              if (computer == 'batu') {
                  reply(`(( S U I T ))\nKamu memilih *Gunting*\nComp memlih *Batu*\n*Kamu telah kalah! :(*`)
              } else {
              	reply(`(( S U I T ))\nKamu memilih *Gunting*\nComp memlih *Kertas*\n*Kamu telah menang! :)*`)
               }
         } else 
         if ( userspilih == 'kertas' ) {
             if( computer == 'batu' ) {
             	reply(`(( S U I T ))\nKamu memilih *Kertas*\nComp memlih *Batu*\n*Kamu telah menang! :)*`)
             } else {
             	reply(`(( S U I T ))\nKamu memilih *Kertas*\nComp memlih *Gunting*\n*Kamu telah kalah! :(*`)
             }
        }
        break 
        case 'family100':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isfam(from, family100)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let anehaja = await fetchJson(`https://api.zeks.xyz/api/family100?apikey=${zeksApi}`)
        getFamily = anehaja.data
        replyWithFakeLink(`*Jawablah Soal Berikut Ini*\n\n*Soal :* ${getFamily.pertanyaan}\n*Total Jawaban :* ${getFamily.jawaban.array.length}\n\nWaktu : ${gamewaktu}s`)
        let anoh = getFamily.jawaban.array
        let rgfds = []
        for (let i of anoh){
        let fefs = i.split('/') ? i.split('/')[0] : i
        let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
        let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
        rgfds.push(axsf.toLowerCase())
        }
        game.addfam(from, rgfds, gamewaktu, family100)
        limitAdd(sender)
        break
        case 'math':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(ind.baned())
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isMath(from, math)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        gamewaktus = 20
        extsoal5 = `${extsoal}`
        extanswer5 = `${extanswer}`
        replyWithFakeLink(`*Jawablah Soal Berikut Ini*\n\n*Soal :* ${extsoal5}\n\nWaktu : ${gamewaktus}s`)
        let anihs = extanswer5.toLowerCase()
        game.addmath(from, anihs, gamewaktus, math)
        limitAdd(sender)
        break 
        case 'tebakgambar':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(ind.baned())
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isTebakGambar(from, tebakgambar)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let aneaja = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/tebakgambar?apikey=${dappaApi}`)
        sendFileFromUrl(from, aneaja.result.image, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${aneaja.result.clue}\nWaktu : ${gamewaktu}s`), mek)
        let anih = aneaja.result.jawaban.toLowerCase()
        game.addgambar(from, anih, gamewaktu, tebakgambar)
        limitAdd(sender)
        break
        case 'siapakahaku':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(ind.baned())
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isSiapakah(from, siapakah)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let anesk = await fetchJson(`https://api.zeks.xyz/api/siapa-aku?apikey=${zeksApi}`)
        replyWithFakeLink(`*Jawablah Soal Berikut Ini*\n\n*Soal :* ${anesk.data.soal}\n\nWaktu : ${gamewaktu}s`)
        let anihp = anesk.data.jawaban.toLowerCase()
        game.addSPK(from, anihp, gamewaktu, siapakah)
        limitAdd(sender)
        break
        case 'tekateki':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(ind.baned())
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isTek(from, tekateki)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let anoohh = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/tekateki?apikey=${dappaApi}`)
        replyWithFakeLink(`*Jawablah Soal Berikut Ini*\n\n*Soal :* ${anoohh.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
        let anohc = anoohh.jawaban.toLowerCase()
        game.addTek(from, anohc, gamewaktu, tekateki)
        limitAdd(sender)
        break
        case 'susunkata':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(ind.baned())
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isSK(from, susunkata)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let aneeuh = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/susunkata?apikey=${dappaApi}`)
        replyWithFakeLink(`*Jawablah Soal Berikut Ini*\n\n*Soal :* ${aneeuh.acak}\n*Tipe :* ${aneeuh.tipe}\n\nWaktu : ${gamewaktu}s`)
        let anicch = aneeuh.jawaban.toLowerCase()
        game.addSK(from, anicch, gamewaktu, susunkata)
        limitAdd(sender)
        break
        case 'asahotak':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(ind.baned())
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isAO(from, asahotak)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let anuh = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/asahotak?apikey=${dappaApi}`)
        replyWithFakeLink(`*Jawablah Soal Berikut Ini*\n\n*Soal :* ${anuh.acak}\n\nWaktu : ${gamewaktu}s`)
        let anncch = anuh.jawaban.toLowerCase()
        game.addAO(from, anncch, gamewaktu, asahotak)
        limitAdd(sender)
        break
        case 'tebakangka':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isAngka(from, tebakangka)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        gamewaktuts = 10
        angkaBot = `${Math.floor(Math.random() * 10)}`
        replyWithFakeLink(`*Tebak Angka*\n\nPilih Angka  Dari 1-10\nContoh: 4\nWaktu : ${gamewaktuts}s`)
        let anoehs = angkaBot.toLowerCase()
        game.addAngka(from, anoehs, gamewaktuts, tebakangka)
        limitAdd(sender)
        break
	    case 'buylimit':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		replyWithFakeLink(ind.wait())
		payout = body.slice(10)
		const koinPerlimit = 5000
		const total = koinPerlimit * payout
		if (total < 1) return replyWithFakeLink(`Minimal Beli 1 Sayang`)
		if (checkATMuser(sender) <= total) return replyWithFakeLink(`Pastikan Ub Kamu Tercukupi`)
		if (checkATMuser(sender) >= total) {
			confirmATM(sender, total)
			bayarLimit(sender, payout)
			await replyWithFakeLink(`        *Successful Payment*\n> *From* : Admin PatrickBot\n> *To* : ${pushname}\n> *Nominal Purchase* : ${payout}\n> *Price Limit* : Ub ${koinPerlimit}/Limit\n> *Saldo Mu* : Ub  ${checkATMuser(sender)}\n> *Serial Number : ${createSerial(10)}\n                                              ${time}\n     Melayani Dimanapun dan Kapanpun\n                *PatrickBot Market*\n`)
		}
		break 
	    case 'quotes':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		quotes = body.slice(1)
		const quo = ['Lebih baik mengerti sedikit daripada salah mengerti.', 'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.', 'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.', 'Penderitaan adalah pelajaran.', 'Ilmu pengetahuan tanpa agama adalah pincang.', 'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.', 'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.', 'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?', 'Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.', 'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.', 'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.', 'Manusia akan bahagia selama ia memilih untuk bahagia.', 'Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.', 'Apabila sempurna akal seseorang, maka sedikit perkataannya.', 'Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.', 'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.', 'Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.', 'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.', 'Penundaan adalah kuburan dimana peluang dikuburkan.', 'Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.', 'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.', 'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.', 'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.', 'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.', 'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.', 'Kesabaran adalah teman dari kebijaksanaan.', 'Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.', 'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.', 'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.', 'Anda tidak perlu harus berhasil pada kali pertama.', 'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.', 'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.', 'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.', 'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
		const tes = quo[Math.floor(Math.random() * quo.length)]
		patrick.sendMessage(from, '' + tes + '\n\n_By : PatrickBot._', text, {
			quoted: freply
		})
		await limitAdd(sender)
		break
	    case 'listsurah':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		patrick.sendMessage(from, listsurah(), text, tescuk, `${ucapanFakereply}`)
		break
	    case 'listbadword':
		let lbw = `List Badword\nTotal : ${bad.length}\n`
		for (let i of bad) {
			lbw += `➸ ${i.replace(bad)}\n`
		}
		await replyWithFakeLink(lbw)
		break
	    case 'delete':
	    case 'del':
	    case 'd':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (isOwner || isGroupAdmins) {
			patrick.deleteMessage(from, {
				id: mek.message.extendedTextMessage.contextInfo.stanzaId,
				remoteJid: from,
				fromMe: true
			})
		} else
			replyWithFakeLink(ind.admin())
		break
	    case 'transfer':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!q.includes('|')) return replyWithFakeLink(ind.wrongf())
		const tujuan = q.substring(0, q.indexOf('|') - 1)
		const jumblah = q.substring(q.lastIndexOf('|') + 1)
		if (isNaN(jumblah)) return await replyWithFakeLink('Maaf, Hanya Angka Yang Diperbolehkan')
		if (jumblah < 500) return replyWithFakeLink(`Minimal Transfer Ub 5000`)
		if (checkATMuser(sender) < jumblah) return replyWithFakeLink(`Pengiriman Tidak Berhasil\nPastikan Saldo Anda Cukup Untuk Melakukan Transfer`)
		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
		fee = 0.005 * jumblah
		hasiltf = jumblah - fee
		addKoinUser(tujuantf, hasiltf)
		confirmATM(sender, jumblah)
		addKoinUser('6288989029718@s.whatsapp.net', fee)
		replyWithFakeLink(`        *Transfer receipt*\n  Pengiriman Transfer Berhasil\n\n> From : ${sender.split("@")[0]}\n> To : ${tujuan}\n> Jumlah : Ub    ${jumblah}\n> Pajak : ${fee}\n> Serial : ${createSerial(10)}\n  Sisa Saldo Anda : Ub  ${checkATMuser(sender)}\n\n                                       ${time}\n\n          *PatrickBot ATM*`)
		break
	    case 'jadian':
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		jds = []
		const jdii = groupMembers
		const koss = groupMembers
		const akuu = jdii[Math.floor(Math.random() * jdii.length)]
		const diaa = koss[Math.floor(Math.random() * koss.length)]
		teks = `${a}Pencarian Jodoh Ditemukan, Ciee Yang Lagi Jodoh${a}\n*@${akuu.jid.split('@')[0]}  ❤️ @${diaa.jid.split('@')[0]}*`
		jds.push(akuu.jid)
		jds.push(diaa.jid)
		mentions(teks, jds, true)
		await limitAdd(sender)
		break
		case 'verify':
	    case 'daftar':
		if (isRegistered) return 
		const codeMeme = [`${codeVerification}`, `${codeVerification1}`]
		const codeMeme1 = [`${codeVerification}`, `${codeVerification1}`]
		const codeMeme2 = [`${codeVerification}`, `${codeVerification1}`, `${codeVerification2}`, `${codeVerification2}`]
		const gettNyaa = codeMeme[Math.floor(Math.random() * codeMeme.length)]
		const gettNyaa1 = codeMeme1[Math.floor(Math.random() * codeMeme1.length)]
		let gettNyaa2 = (gettNyaa1 === gettNyaa) ? codeMeme2[Math.floor(Math.random() * codeMeme2.length)] : gettNyaa1;
		meeen = `${sender.replace('@s.whatsapp.net','')}@s.whatsapp.net`
		console.log(bgcolor('Code Verification: ' + codeVerification + ' From: ' + sender, 'green'))
		textoing = `${a}Your Code: ${codeVerification}\nThis Code is Private!!${a}`
        var optios = {
            text: textoing
        }
		patrick.sendMessage(`${meeen}`, optios, text, {quoted: mek})
        sendButMessage(meeen, `*Hello ${pushname}, Please click the code that was sent by the bot*\nIf there is no code button sent by the bot\njust type ${prefix}verify! to get the code again`, `If the button doesn't visible \nType and send the code here`, 
        [{
			buttonId: `${gettNyaa}`,
			buttonText: {
				displayText: `${gettNyaa}`,
			},
			type: 1,
		},
        {
			buttonId: `${gettNyaa2}`,
			buttonText: {
				displayText: `${gettNyaa2}`,
			},
			type: 1,
		},
		]);
		if (isGroup) replyWithFakeLink(`${a}Check you code in private message for register!!${a}`)
		break
	    case 'listonline':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isOwner || isGroupAdmins) {
			let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			let online = [...Object.keys(patrick.chats.get(ido).presences), patrick.user.jid]
			patrick.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
				quoted: freply,
				contextInfo: {
					mentionedJid: online
				}
			})
		} else
		replyWithFakeLink(ind.admin())
		break
	    case 'report':
	    case 'laporbug':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (!q) return replyWithFakeLink(`Example: ${prefix}report error pada menu`)
		const teks1 = `*ＲＥＰＯＲＴ*\n> From : @${sender.split("@s.whatsapp.net")[0]}\n> Pesan : ${q}`
		var options = {
			text: teks1,
			contextInfo: {
				mentionedJid: [nomor]
			},
		}
		mentions(options, [sender], true)
		replyWithFakeLink('*Pesan Report Telah Terkirim!*')
		break
	    case 'ping':
	    case 'speed':
	    try {
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		const timestamp = speed();
        const latensi = speed() - timestamp 
		await patrick.sendMessage(from, `Pong!!!!\nSpeed : ${latensi.toFixed(4)}s`, text, { quoted: freply })
		} catch (e) {
			console.log(e)
		}
		break
	    case 'quotesislami':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (isBanned) return replyWithFakeLink(ind.baned())
		const islami = ['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.', 'Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.', 'Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.', 'Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.', 'Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.', 'Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.', 'Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.', 'Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.', 'Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?', 'Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.', 'Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.', 'Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.', 'Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]', 'Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib', 'Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)', 'Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.', 'Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.', 'Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..', 'Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.', 'Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran', 'Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.', 'Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..', 'Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.', 'Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.', 'Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.', 'Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.', 'Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..', 'Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.', 'Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.', 'Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.', 'Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.', 'Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.', 'Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.', 'Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.', 'Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
		const isl = islami[Math.floor(Math.random() * islami.length)]
		islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
		patrick.sendMessage(from, islam, image, {
			quoted: freply,
			caption: '*Quotes Islami*\n\n' + isl
		})
		await limitAdd(sender)
		break 
		case 'rules':
		mentions(`*Rules For User PatrickBot*\n\n▣ Tolong Gunakan Delay Jangan Terlalu Dispam Saat Menggunakan Bot.\n▣ Jangan Call/VC Bot Kalau Tidak aktif.\n▣ PatrickBot Online 24 Jam tapi kadang Disconnect.\n\nRules ini untuk kenyamanan semua yang memakai bot ini\n1. Jangan terlalu spam bot.\nSanksi: *WARN/SOFT BLOCK* = Tidak Direspon selama 5 detik!\n\n2. Jangan telepon bot.\nSanksi: *SOFT BLOCK* = Block!\n\n3. Jangan mengeksploitasi bot.\nSanksi: *PERMANENT BLOCK* = Banned + Block!\n\nJika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!\nJika Ada yang error ketik *${prefix}report bug\n\nPatrickBot Created by @6288989029718 & @0`, [`6288989029718@s.whatsapp.net`, `0@s.whatsapp.net`], true)
		break
	    case 'quotesnasehat':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (isBanned) return replyWithFakeLink(ind.baned())
		const nasehat = ['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...', 'Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.', 'Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.', 'Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."', 'Jangan cari yang sempurna, Sempurnakan saja yang ada.', 'Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.', 'Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.', 'Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.', 'Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.', 'Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.', 'Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.', 'Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.', 'Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.', 'Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.', 'Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.', 'Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.', 'Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.', 'NIKMATI HIDUPMU, LUPAKAN UMURMU.', 'Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.', 'Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.', 'Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.', 'Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.', 'Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.', 'Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.', 'Bersikap tidak lagi peduli lebih baik dari pada balas dendam.', 'Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.', 'Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.', 'Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.', 'Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.', 'Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?', 'Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.', 'Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.', 'Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.', 'Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!', 'Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.', 'Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.', 'Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.', 'Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."', 'Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.', 'Syukuri yang menyayangimu, Maafkan yang menyakitimu.', 'Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.', 'Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.', 'Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."', 'Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima', 'Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.', 'Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.', 'Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.', 'Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.', 'Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.', 'Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.', 'Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.', 'Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.', 'Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.', 'Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.', 'Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.', 'Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.', 'Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.', 'Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.', 'Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.', 'Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.', 'Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.', 'Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.', 'Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.', 'Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.', 'Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.', 'Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.', 'Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.', 'Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
		const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
		nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
		patrick.sendMessage(from, nase, image, {
			quoted: freply,
			caption: '*Quotes Nasehat*\n\n' + nsh
		})
		await limitAdd(sender)
		break
	    case 'quotesmotivasi':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (isBanned) return replyWithFakeLink(ind.baned())
		const motiv = ['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas', 'Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat', 'Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya', 'Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan', 'Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin', 'Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai', 'Selalu ada kegelapan yang tergelap sebelum terbitnya fajar', 'Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati', 'Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang', 'semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki', 'Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan', 'Keraguan bersahabat dekat dengan kegagalan', 'uang tidak merusak seseorang, keserakahan lah yang merusak manusia', 'Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara', 'Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan', 'usia bisa berbohong tapi kedewasaan tidak', 'Ada yang lebih berharga dari uang dan emas yaitu waktu', 'Tidak ada yang gagal mereka hanya berhenti terlalu cepat', 'Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai', 'Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai', 'Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya', 'Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan', 'jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan', 'Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan', 'atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan', 'berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat', 'lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena', 'Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar', 'hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak', 'Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak', 'Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak', 'Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari', 'bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan', 'masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang', 'Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan', 'Malas adalah kemenangan saat ini dan kekalahan di masa nanti', 'sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda', 'Kematian tidak dapat mengubur perbuatan baik seseorang', 'Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan', 'Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan', 'Mengeluh adalah cara paling buruk dalam menyelesaikan masalah', 'Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan', 'Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman', 'Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah', 'Keuletan adalah tanda jadi kesuksesan', 'cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa', 'Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri', 'Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah', 'lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu', 'Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa', 'Sukses dimulai dengan melakukan apa yang harus dilakukan', 'rasa syukur membuat kita tidak pernah merasa kekurangan', 'goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya', 'Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini', 'orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini', 'Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi', 'Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan', 'Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak', 'Tidak ada harga untuk waktu, tetapi waktu sangat berharga', 'Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan', 'Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi', 'Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya', 'Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya', 'Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat', 'Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun', 'Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan', 'Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy', 'Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan', 'Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai', 'Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri', 'Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit', 'Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya', 'Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik', 'Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah', 'Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama', 'Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar', 'Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target', 'Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan', 'bila ingin hasil yang besar jangan kerjakan hal yang mudah saja', 'Jangan biarkan impianmu dijajah oleh pendapat orang lain', 'Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar', 'Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri', 'Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal', 'Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur', 'Lebih baik menjadi raja tikus daripada ekor naga', 'Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya', 'Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya', 'Kegagalan terbesar adalah ketika tidak berani mencoba', 'Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan', 'Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah', 'Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu', 'Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya', 'Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya', 'Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah', 'Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya', 'Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita', 'Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras', 'Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit', 'Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan', 'Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran', 'Menang atau kalah lakukanlah dengan jujur', 'Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran', 'Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur', 'Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya', '90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan', 'Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas', 'Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras', 'Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras', 'Kualitas pikiran anda menentukan kualitas kehidupan anda', 'Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini', 'Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja', 'Kebahagiaan dimulai dengan ketulusan', '1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata', 'Tangkap peluang, kerjakan, selesaikan', 'Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk', 'Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya', 'dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan', 'Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil', 'Menjadi tua itu pasti menjadi dewasa itu pilihan', 'Kehidupan yang besar dimulai dari mimpi yang besar', 'Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya', 'Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu', 'Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang', 'Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka', 'Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda', 'Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda', 'Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda', 'Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda', 'Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan', 'Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan', 'Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan', 'Satu ons tindakan sama berharganya dengan satu ton teori', 'Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa', 'Sayangilah dia walau tidak sesempurna seperti yang kau inginkan', 'Kecantikan akan mengundang perhatian sikap santun memikat Kalbu', 'Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya', 'Kesalahan adalah bukti bahwa kamu sedang mencoba', 'Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya', 'Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya', 'Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang', 'Waktu yang memutuskan Dengan siapa kamu akan berjumpa', 'Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini', 'Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu', 'Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh', 'Lakukanlah apa yang paling kamu takutkan dalam hidupmu', 'Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu', 'Jika hari ini sudah sempurna maka Apalah arti hari esok', 'Bintang pun tak kan bersinar tanpa kegelapan', 'Suatu saat aku akan menjadi tempat yang akan selalu kau rindu', 'Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan', 'Diam adalah respon terbaik untuk orang bodoh', 'Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara', 'Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah', 'Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari', 'Anda saat ini adalah hasil dari pengalaman anda', 'Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan', 'Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga', 'Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk', 'Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses', 'Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda', 'Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses', 'Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu', 'Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan', 'Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini', 'Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya', 'Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa', 'Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda', 'Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya', 'Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi', 'Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda', 'Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan', 'Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun', 'Sebuah perjalanan ribuan mil dimulai dari langkah kecil', 'Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal', 'Ketika kita memiliki satu sama lain, kita Memiliki segalanya', 'Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan', 'Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik', 'Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.', 'Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.', 'Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.', 'Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.', 'Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.', 'Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.', 'Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.', 'Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.', 'Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin', 'Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.', 'Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.', 'Hidup itu sederhana, kita yang membuatnya sulit.']
		const vasi = motiv[Math.floor(Math.random() * motiv.length)]
		vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
		patrick.sendMessage(from, vass, image, {
			quoted: freply,
			caption: '*Motivasi*\n\n' + cin
		})
		await limitAdd(sender)
		break
	    case 'leaderboard':
	    case 'lb':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
		uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
		let leaderboardlvl = 'Top UserPatrickBot Level Terbesar\\n'
		let leaderboarduang = 'Top UserPatrickBot UB Terbanyak\n\n'
		let nom = 0
		try {
			for (let i = 0; i < 10; i++) {
				nom++
				leaderboardlvl += `*${nom}* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n > *XP* : ${_level[i].xp} *Level*: ${_level[i].level}\n`
				leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n > *Ub* : _Ub${uang[i].uang}_\n > *Limit* : ${initialLimit - _limit[i].limit}\n`
			}
			await replyWithFakeLink(leaderboardlvl)
			await replyWithFakeLink(leaderboarduang)
		} catch (err) {
			console.error(err)
			await replyWithFakeLink(`minimal 10 user untuk bisa mengakses database`)
		}
		break
	    case 'blocklist':
		teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
		for (let block of blocked) {
			teks += `┣➢ @${block.split('@')[0]}\n`
		}
		teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
		patrick.sendMessage(from, teks.trim(), extendedText, {
			quoted: freply,
			contextInfo: {
				"mentionedJid": blocked
			}
		})
		break
	    case 'banlist':
	    case 'listban':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		const benn = JSON.parse(fs.readFileSync('./database/data/banned.json'))
		teks = '*==[ List Ban ]==*\n'
		for (let benn of ban) {
			teks += `┣➢ @${benn.replace('@s.whatsapp.net','')}\n`
		}
		teks += `𝗧𝗼𝘁𝗮𝗹 : ${ban.length}`
		patrick.sendMessage(from, teks.trim(), extendedText, {
			quoted: freply,
			contextInfo: {
				"mentionedJid": ban
			}
		})
		break
	    case 'tts':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return patrick.sendMessage(from, 'Diperlukan kode bahasa!!', text, {
			quoted: freply
		})
		args[0] = args[0] ? args[0] : 'id'
		const gtts = require('./lib/gtts')(args[0])
		if (args.length < 2) return patrick.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {
			quoted: freply
		})
		dtt = body.slice(8)
		ranm = getRandom('.mp3')
		rano = getRandom('.ogg')
		dtt.length > 500 ?
			replyWithFakeLink('❗ Error, Maksimal 500 Kata') :
			gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return replyWithFakeLink(ind.stikga())
					patrick.sendMessage(from, buffer, audio, {
						quoted: fakevn,
						ptt: true
					})
					fs.unlinkSync(rano)
				})
			})
		await limitAdd(sender)
		break
	    case 'linkgc':
	    case 'linkgrup':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
		linkgc = await patrick.groupInviteCode(from)
		yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
		patrick.sendMessage(from, yeh, text, {
			quoted: freply
		})
		await limitAdd(sender)
		break
	    case 'tagall':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : `*Halo Para Member, Dipanggil @${sender.split('@')}`
		teks += '\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ '
		for (let mem of groupMembers) {
			teks += ` > @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
		//==========================================BATES NGAB==========================================\\
		//=============NO GROUP==============\\
	    case 'mutual':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isGroup) return replyWithFakeLink('Command ini tidak bisa digunakan di dalam grup!')
		anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
		await replyWithFakeLink('Looking for a partner...')
		await replyWithFakeLink(`wa.me/${anug}`)
		await replyWithFakeLink(`Partner found: 🙉\n*${prefix}next* — find a new partner`)
		sendButImage(from, menu, "PatrickBot Created by _pa7rick", thumb, [{
			buttonId: `${prefix}next`,
			buttonText: {
				displayText: `Next Partner`,
			},
			type: 1,
		},]);
		break
	    case 'next':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isGroup) return replyWithFakeLink('Command ini tidak bisa digunakan di dalam grup!')
		anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
		await replyWithFakeLink('Looking for a partner...')
		await replyWithFakeLink(`wa.me/${anug}`)
		await replyWithFakeLink(`Partner found: 🙉\n*${prefix}next* — find a new partner`)
		break
		//==========================================BATES NGAB==========================================\\
		//=============AKSESIBILITAS MENU==============\\
		case 'enable':
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		let pi = patrick.prepareMessageFromContent(from, {
        "listMessage": {
        "title": '*Feature Group*',
        "footerText": 'PatrickBot Created by _pa7rick',
        "description": 
`Hello ${pushname}\nBerikut ini Feature Group Yang Belum Aktif

❏ *Antilink:*
╰─ ${isAntiLink ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antivirtex:*
╰─ ${isAntiVirtex ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antibadword:*
╰─ ${isBadWord ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Welcome:*
╰─ ${isWelcome ? '*Aktif!*' : 'Belum Aktif!'}
❏ *SimiSimi:*
╰─ ${isSimi ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Leveling:*
╰─ ${isLevelingOn ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antispam (Sticker):*
╰─ ${isAntiSpam ? '*Aktif!*' : 'Belum Aktif!'}`,
        "buttonText": 'Click Disini || Click Here',
        "listType": 'SINGLE_SELECT',
        "sections": [{
            "title": 'Pilih Yang Mau Diaktifkan',
            "rows": [{
                "title": `Anti Badword`,
                "rowId": '0'
            }, {
                "title": `Anti Virtex`
,                "rowId": '0'
            }, {
                "title": `Anti Link`,
                "rowId": '0'
            }, {
                "title": `Anti Spam (Sticker)`,
                "rowId": '0'
            }, {
                "title": `Welcome`,
                "rowId": '0'
            }, {
                "title": `Simi Simi`,
                "rowId": '0'
            }, {
                "title": `NSFW Mode`,
                "rowId": '0'
              }]
            }]
           }
         }, {});
        patrick.relayWAMessage(pi, {
               waitForAck: true
        }) 
        break 
        case 'disable':
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		let po = patrick.prepareMessageFromContent(from, {
        "listMessage": {
        "title": '*Feature Group*',
        "footerText": 'PatrickBot Created by _pa7rick',
        "description": 
`Hello ${pushname}\nBerikut ini Feature Group Yang Belum Aktif

❏ *Antilink:*
╰── ${isAntiLink ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antivirtex:*
╰── ${isAntiVirtex ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antibadword:*
╰── ${isBadWord ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Antispam (Sticker):*
╰── ${isAntiSpam ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Welcome:*
╰── ${isWelcome ? '*Aktif!*' : 'Belum Aktif!'}
❏ *SimiSimi:*
╰── ${isSimi ? '*Aktif!*' : 'Belum Aktif!'}
❏ *Leveling:*
╰── ${isLevelingOn ? '*Aktif!*' : 'Belum Aktif!'}`,
        "buttonText": 'Click Disini || Click Here',
        "listType": 'SINGLE_SELECT',
        "sections": [{
            "title": 'Pilih Yang Mau Diaktifkan',
            "rows": [{
                "title": `Disable Anti Badword`,
                "rowId": '0'
            }, {
                "title": `Disable Anti Virtex`
,                "rowId": '0'
            }, {
                "title": `Disable Anti Link`,
                "rowId": '0'
            }, {
                "title": `Disable Anti Spam (Sticker)`,
                "rowId": '0'
            }, {
                "title": `Disable Welcome`,
                "rowId": '0'
            }, {
                "title": `Disable Simi Simi`,
                "rowId": '0'
            }, {
                "title": `Disable NSFW Mode`,
                "rowId": '0'
              }]
            }]
           }
         }, {});
        patrick.relayWAMessage(po, {
               waitForAck: true
        }) 
        break 
        //=== menuu 
		case 'femdom':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			axios.get(`https://nekos.life/api/v2/img/femdom`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: "NIH KAK!!" })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		   break
		case 'walpaperanime':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			axios.get(`https://nekos.life/api/v2/img/wallpaper`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: "Nih om" })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		} 
        break
		case 'kawai':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: "KAWAII!!" })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
	   } 
       break
	   case 'kemonomimi':
	   try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: "ONII CHAN BAKA!!" })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break
		case 'kuni':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			axios.get(`https://nekos.life/api/v2/img/kuni`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: "*INGAT ADA TUHAN*!!" })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
	    break
		case 'neko':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			axios.get(`https://nekos.life/api/v2/img/meow`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: "NYANG!!" })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		} 
        break
		case 'holo':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			axios.get(`https://nekos.life/api/v2/img/holo`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: "NIH OM!!" })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break
		//==search 
		case 'searchmenu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		await patrickhay(ind.search(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break
		case 'jooxsearch':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(ind.baned())
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
        judul = args.join(' ')
	    ambl = await fetchJson(`https://leyscoders-api.herokuapp.com/api/joox?q=${judul}&apikey=${leysApi}`)
	    d = ambl.result
		thm = await getBuffer(d.img)
		tmlisan = `Lagu : ${d.lagu}\nAlbum : ${d.album}\nPenyanyi : ${d.penyanyi}\nPublish : ${d.publish}`
		limrik = `「 LIRIK 」\n\n${ambl.lirik.result}`
		patrick.sendMessage(from, tmlisan, text, {quoted: fkontak})
		replyWithFakeLink(limrik)
		await limitAdd(sender)
		break
		case 'stickersearch':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!q) return replyWithFakeLink(`Example: ${prefix + command} Patrick`)
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		replyWithFakeLink(ind.wait())
		fot = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=${q}&apikey=${dappaApi}`)
		foto = result.fot
		getfoto = JSON.parse(JSON.stringify(foto.result));
		randomfoto = getfoto[Math.floor(Math.random() * getfoto.length)];
		getimage = await getBuffer(randomfoto)
		textnya = `*Judul* : ${fot.judul}\n`
		textnya += `*Author* : ${fot.author}\n`
		textnya += `Ketik ${prefix}sticker untuk menjadikan sticker`
		patrick.sendMessage(from, getimage, image, {
			quoted: freply,
			caption: textnya
		})
		await limitAdd(sender)
		break
	    case 'googleimage':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!q) return replyWithFakeLink(`Example: ${prefix + command} Patrick`)
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		replyWithFakeLink(ind.wait())
		foto = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=${q}&apikey=${dappaApi}`)
		patrick.sendMessage(from, await getBuffer(foto.image), image, {
			quoted: freply,
			caption: 'Nih'
		})
		await limitAdd(sender)
		break
	    case 'pinterest':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!q) return replyWithFakeLink(`Example: ${prefix + command} Patrick`)
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		teksnyaoi = args[0]
		replyWithFakeLink(ind.wait())
		foto = await getBuffer(`https://dapuhy-api.herokuapp.com/api/search/pinterest-image?query=${teksnyaoi}&apikey=${dappaApi}`)
		patrick.sendMessage(from, foto, image, {
			quoted: freply,
			caption: 'Nih'
		})
		await limitAdd(sender)
		break
	    case 'gsmarena':
		try {
			if (!q) return replyWithFakeLink(`Example: ${prefix + command} Vivo Y15`)
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			if (isBanned) return replyWithFakeLink('Maaf kamu sudah terbenned!')
			anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/gsmarena2?query=${q}&apikey=${dappaApi}`)
			buffer = await getBuffer(anu.result.thumb)
			textnyak = `*❗ Spesifikasi Ditemukan*\n`
			textnyak += `*Name* : ${anu.result.merk}\n`
			textnyak += `*Display Size* : ${anu.result.display_size}\n`
			textnyak += `*Resolution* : ${anu.result.display_resolution}\n`
			textnyak += `*Camera PX* : ${anu.result.camera_pixels}\n`
			textnyak += `*Video PX* : ${anu.result.video_pixels}\n`
			textnyak += `*Ram* : ${anu.result.ram_size}\n`
			textnyak += `*Chipset* : ${anu.result.chipset}\n`
			textnyak += `*Battery* : ${anu.result.battery_size}\n`
			textnyak += `*Body* : ${anu.result.body}\n`
			textnyak += `*Storage* : ${anu.result.storage}\n`
			textnyak += `*OS* : ${anu.result.os}\n`
			textnyak += `*Released* : ${anu.result.released}\n`
			textnyak += `*URL* : ${anu.result.url}`
			patrick.sendMessage(from, buffer, image, {
				quoted: fgclink,
				caption: textnyak
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break 
		case 'ytsearch':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(ind.baned())
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
		replyWithFakeLink(ind.wait())
		anu = await fetchJson(`http://zekais-api.herokuapp.com/yts?query=${q}&apikey=${zekaisApi}`)
		teks = '=================\n'
		for (let i of anu.result) {
		teks += `Judul: ${i.title}\nChannel: ${i.channel}\nDurasi: ${i.durasi}\nViews: ${i.views}\nLink : ${i.url}\n=================\n`
		}
		replyWithFakeLink(teks.trim())
		await limitAdd(sender)
		break
		case 'estetik':
		case 'aesthetic':
		try {
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			fakestatus(ind.wait())
			tekss = args[0]
			anu = await getBuffer(`https://api.zeks.xyz/api/estetikpic?apikey=${zeksApi} `)
			patrick.sendMessage(from, tamnel, image, {
				quoted: freply,
				caption: 'Aesthetic, Estetik'
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break 
		case 'shopee':
        	    if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} sepeda`)
        	    replyWithFakeLink(ind.wait())
        	    cari = args.join(' ')
        	    yee = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shopee?q=${cari}&apikey=${leysApi}`)
        	    dpauhy = yee.result
        	    hsll = `Judul : ${dpauhy.judul}\nHarga : ${dpauhy.harga}\nMerk : ${dpauhy.merk}\nStock : ${dpauhy.stock}\nLike : ${dpauhy.like}\nViews : ${dpauhy.views}\nTerjual : ${dpauhy.terjual}`
        	    patrick.sendMessage(from, hsll, text, {quoted: fkontak})
        	    await limitAdd
        	    break
        	    case 'jalantikus':
                //[❗] case by DappaGanz
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} whatsapp`)
				replyWithFakeLink(ind.wait())
				dpganzz = args.join(' ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jalantikus?q=${dpganzz}&apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'muihalal':
                //[❗] case by DappaGanz
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} sabun`)
				replyWithFakeLink(ind.wait())
				dpganzz = args.join(' ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/halal?q=${dpganzz}&apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Hasil : ${i.hasil}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'thelazy':
                //[❗] case by DappaGanz
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} game`)
				replyWithFakeLink(ind.wait())
				dpganzz = args.join(' ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/thelazy?q=${dpganzz}&apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nCategory : ${i.category}\nAuthor : ${i.author}\nPost Date : ${i.post_date}\nComments : ${i.comments}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'wattpad':
                //[❗] case by DappaGanz
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} tere liye`)
				replyWithFakeLink(ind.wait())
				dpganzz = args.join(' ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wattpad-search?q=${dpganzz}&apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nId : ${i.id}\nThumb : ${i.thumb}\nUrl : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'rexdl':
                //[❗] case by DappaGanz
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} subway surf`)
				replyWithFakeLink(ind.wait())
				dpganzz = args.join(' ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${dpganzz}&apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nUpdate On : ${i.update_on}\nDeskripsi : ${i.desc}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'moddroid':
                //[❗] case by DappaGanz
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} subway surf`)
				replyWithFakeLink(ind.wait())
				dpganzz = args.join(' ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${dpganzz}&apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'sfile':
                //[❗] case by DappaGanz
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.banned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				if (args.length < 1) return replyWithFakeLink(`apa yang mau dicari ngab?\ncontoh ${prefix + command} config pubg`)
				replyWithFakeLink(ind.wait())
				dpganzz = args.join(' ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sfile?q=${dpganzz}&apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nSize : ${i.size}\nUrl : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
		//=============Berita Menu===============\\
		case 'beritamenu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		await patrickhay(ind.berita(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break
		case 'sindo':
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.baned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				replyWithFakeLink(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sindo/international?apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.data) {
				teks += `Judul : ${i.judul}\nWaktu : ${i.waktu}\nTipe : ${i.tipe}\nKutipan : ${i.kutipan}\nLink : ${i.link}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'sindo2':
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.baned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				replyWithFakeLink(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sindo/nasional?apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.data) {
				teks += `Judul : ${i.judul}\nWaktu : ${i.waktu}\nTipe : ${i.tipe}\nKutipan : ${i.kutipan}\nLink : ${i.link}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'okezone':
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.baned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				replyWithFakeLink(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/okezone?apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nLink : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'kompastv':
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.baned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				replyWithFakeLink(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/kompas?apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nGambar : ${i.img}\nWaktu : ${i.waktu}\nJenis : ${i.jenis}\nLink : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'bbcnews':
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.baned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				replyWithFakeLink(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bbc-news?apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nTerbit : ${i.terbit}\nWartawan : ${i.wartawan}\nGambar : ${i.img}\nDeskripsi : ${i.desc}\nLink : ${i.link}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
				case 'beritanews':
                if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
                if (isBanned) return replyWithFakeLink(ind.baned())
                if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
				replyWithFakeLink(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/berita-news?apikey=${leysApi}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nGambar : ${i.img}\nLink : ${i.url}\n=================\n`
				}
				replyWithFakeLink(teks.trim())
				await limitAdd(sender)
				break
		//==========================================BATES NGAB==========================================\\
		//=============DOWNLOAD MENU==============\\
	    case 'downloadmenu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		await patrickhay(ind.download(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break
	    case 'play':
        if (args.length < 1) return replyWithFakeLink(`Kirim perintah *${prefix}play query*`)
        replyWithFakeLink(ind.wait())
        let yut = await yts(q)
        yta(yut.videos[0].url).then(async(res) => {
            const { thumb, title, filesizeF, filesize } = res
            const capti = `*P L A Y*\n\n Title : ${title}\n\n Size : ${filesizeF}\n Views: ${yut.videos[0].views}\n Duration : ${yut.videos[0].timestamp}\n URL : ${yut.videos[0].url}`
            ya = await getBuffer(thumb)
            py =  await patrick.prepareMessage(from, ya, image)
            gbutsan = [
            { buttonId: `${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 },
            { buttonId: `${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 }
            ]
            gbuttonan = {
                imageMessage: py.message.imageMessage,
                contentText: capti,
                footerText: '© PatrickBot',
                buttons: gbutsan,
                headerType: 4
            }
            await patrick.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
        })
        break
		case 'playv2':
		try {
			if (!q) return replyWithFakeLink(`Example: ${prefix + command} NGGYU`)
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			fakestatus(ind.wait())
			tekss = args[0]
			anu = await fetchJson(`http://zekais-api.herokuapp.com/ytplay?query=${q}&apikey=${zekaisApi}`)
			textnya = `*❗ Lagu Telah Ditemukan*\n`
			textnya += `*Channel:* ${anu.channel}\n`
			textnya += `*Views:* ${anu.views}\n`
			textnya += `*Likes:* ${anu.likes}\n` 
			textnya += `*Dislike:* ${anu.dislike}\n`
			textnya += `*Size* ${anu.size}\n`
			textnya += `*Upload Date:* ${anu.uploadDate}\n` 
			textnya += `*Tunggu!, Sedang Proses Download*`
			pla = await getBuffer(anu.thumb)
			patrick.sendMessage(from, pla, image, {
				quoted: freply,
				caption: textnya
			})
			play = await getBuffer(anu.result)
			patrick.sendMessage(from, play, audio, {
				mimetype: 'audio/mp4',
				quoted: freply
			})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break
		case 'ytplay':
		if (!isGroup) return replyWithFakeLink(ind.groupo())
        if (!q) return replyWithFakeLink(`${a}Example: ${prefix}ytplay nggyu`)
        replyWithFakeLink(ind.wait())
        datai = [];
        try {
            ysearch = await yts(q)
            hdata = ysearch.all
        } catch (e) {
           return replyWithFakeLink('engror')
        }
        num = 1
        for(let i= 0; i < hdata.length; i++) {
        datai.push( {
        "rows": [
        {
            "title": "MP3",
            description: `Title: ${hdata[i].title}`,
            "rowId": hdata[i].url
        }, {
            "title": "MP4",
            description: `Title: ${hdata[i].title}`,
            "rowId": hdata[i].url
        }], title: num })
        num += 1
        }
        let paoa = patrick.prepareMessageFromContent(from, {
       "listMessage":{
       "title": "*Youtube Play (YTPLAY)*",
       "description": `Request By : ${pushname}\n*Hasil Pencarian : ${q}*\n*Download dengan klik tombol dibawah*`,
       "buttonText": "Result",
       "listType": "SINGLE_SELECT",
       "sections": datai}}, {}) 
        patrick.relayWAMessage(paoa, {waitForAck: true})
        break 
        case 'ytdl':
		if (!q) return replyWithFakeLink(`Example: ${prefix + command} https://youtu.be/dQw4w9WgXcQ`)
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		sendButMessage(from, `Halo ${pushname}\nSilahkan pilih button dibawah ini!`, `${footerButton}`, 
        [{
			buttonId: `audio ${q}`,
			buttonText: {
				displayText: `▨ AUDIO ▨`,
			},
			type: 1,
		},
        {
			buttonId: `video ${q}`,
			buttonText: {
				displayText: `▨ VIDEO ▨`,
			},
			type: 1,
		}
		]);
		await limitAdd(sender)
		break 
		case 'ytmp3v2':
		try {
			if (!q) return replyWithFakeLink(`*Wrong Format!!*\nExample: ${prefix + command} https://youtu.be/dQw4w9WgXcQ`)
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			fakestatus(ind.wait())
			tekss = args[0]
			anu = await fetchJson(`http://zekais-api.herokuapp.com/ytmp4?url=${q}&apikey=${zekaisApi}`)
			gmteng = anu.result
			textnya = `Judul: ${gmteng.title}\n`
			textnya += `Views: ${gmteng.published}\n`
			textnya += `Likes: ${gmteng.views}\n`
			textnya += `Dislike: ${gmteng.views}\n` 
			textnya += `Size: ${gmteng.views}\n`
			textnya += `Upload Date: ${gmteng.channel}\n`
			textnya += `Tunggu!, Sedang Proses Download`
			tamnel = await getBuffer(gmteng.thumb)
			patrick.sendMessage(from, tamnel, image, {
				quoted: freply,
				caption: textnya
			})
			pimdeo = await getBuffer(gmteng.url)
			patrick.sendMessage(from, pimdeo, video, {
				mimetype: 'video/mp4',
				filename: `${gmteng.title}.mp4`,
				quoted: fvideo
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink('Error!, Harap coba .playv2')
		}
		break 
	    case 'ytmp3':
		try {
			if (!q) return replyWithFakeLink(`*Wrong Format!!*\nExample: ${prefix + command} https://youtu.be/dQw4w9WgXcQ`)
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			fakestatus(ind.wait())
			tekss = args[0]
			anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytmp3?url=${q}&apikey=${dappaApi}`)
			gmteng = anu.result
			textnya = `Judul : ${gmteng.title}\n`
			textnya += `Channel : ${gmteng.channel}\n`
			textnya += `Published : ${gmteng.published}\n`
			textnya += `Views : ${gmteng.views}\n`
			textnya += `Tunggu!, Sedang Proses Download`
			tamnel = await getBuffer(gmteng.thumb)
			patrick.sendMessage(from, tamnel, image, {
				quoted: freply,
				caption: textnya
			})
			aumdeo = await getBuffer(gmteng.url)
			patrick.sendMessage(from, aumdeo, audio, {
				mimetype: 'audio/mp4',
				filename: `${gmteng.title}.mp4`,
				quoted: fakevn
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break 
		case 'ytmp4v2':
		try {
			if (!q) return replyWithFakeLink(`*Wrong Format!!*\nExample: ${prefix + command} https://youtu.be/dQw4w9WgXcQ`)
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			fakestatus(ind.wait())
			tekss = args[0]
			anu = await fetchJson(`http://zekais-api.herokuapp.com/ytmp4?url=${q}&apikey=${zekaisApi}`)
			gmteng = anu.result
			textnya = `Judul: ${gmteng.title}\n`
			textnya += `Views: ${gmteng.published}\n`
			textnya += `Likes: ${gmteng.views}\n`
			textnya += `Dislike: ${gmteng.views}\n` 
			textnya += `Size: ${gmteng.views}\n`
			textnya += `Upload Date: ${gmteng.channel}\n`
			textnya += `Tunggu!, Sedang Proses Download`
			tamnel = await getBuffer(gmteng.thumb)
			patrick.sendMessage(from, tamnel, image, {
				quoted: freply,
				caption: hehe
			})
			pimdeo = await getBuffer(gmteng.url)
			patrick.sendMessage(from, pimdeo, video, {
				mimetype: 'video/mp4',
				filename: `${gmteng.title}.mp4`,
				quoted: fvideo
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break 
	    case 'ytmp4':
		try {
			if (!q) return replyreplyWithFakeLink(`*Wrong Format!!*\nExample: ${prefix + command} https://youtu.be/dQw4w9WgXcQ`)
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			fakestatus(ind.wait())
			tekss = args[0]
			anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytmp4?url=${q}&apikey=${dappaApi}`)
			gmteng = anu.result
			textnya = `Judul : ${gmteng.title}\n`
			textnya += `Channel : ${gmteng.channel}\n`
			textnya += `Published : ${gmteng.published}\n`
			textnya += `Views : ${gmteng.views}\n`
			textnya += `Tunggu!, Sedang Proses Download`
			tamnel = await getBuffer(gmteng.thumb)
			patrick.sendMessage(from, tamnel, image, {
				quoted: freply,
				caption: hehe
			})
			pimdeo = await getBuffer(gmteng.url)
			patrick.sendMessage(from, pimdeo, video, {
				mimetype: 'video/mp4',
				filename: `${gmteng.title}.mp4`,
				quoted: fvideo
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break 
	    case 'tiktokdownload':
	    case 'tiktok':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(ind.baned())
			if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
			if (args.length < 1) return replyWithFakeLink(`*Wrong Format!!*\nExample: ${prefix + command} https://vm.tiktok.com/ZSJkHUCwK/`) 
			replyWithFakeLink(ind.wait())
			link = args.join(' ')
			dppa = await getBuffer(`https://dapuhy-api.herokuapp.com/api/socialmedia/tiktoknowm?url=${q}&apikey=${dappaApi}`)
			patrick.sendMessage(from, dppa, video, {
				quoted: fvideo,
				caption: 'Nih Gan!'
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(ind.error())
		}
		break
	    case 'igvideo':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzcf8egt27/?igshid=1hbl53id19nqv`)
		replyWithFakeLink(ind.wait())
		link = args[0]
		resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/video?url=${link}&apikey=${leysApi}`)
		buffer = await getBuffer(resultnya.result)
		patrick.sendMessage(from, buffer, MessageType.video, {
			quoted: freply
		})
		await limitAdd(sender)
		break
	    case 'igphoto':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzQL4cHm4n/?igshid=19n977531z5nz`)
		replyWithFakeLink(ind.wait())
		link = args[0]
		resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/photo?url=${link}&apikey=${leysApi}`)
		buffer = await getBuffer(resultnya.result)
		patrick.sendMessage(from, buffer, MessageType.image, {
			quoted: freply
		})
		await limitAdd(sender)
		break 
		case 'playstore':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink(`text mana broh?\ncontoh : ${prefix + command} telegram`)
		replyWithFakeLink(ind.wait())
		get_result = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/playstore?query=${q}&apikey=${dappaApi}`)
		get_result = get_result.result
		ini_txt = 'Play Store Search : \n'
		for (var x of get_result) {
			ini_txt += `Name : ${x.title}\n`
			ini_txt += `Description : ${x.description}\n`
			ini_txt += `Developer : ${x.developer}\n`
			ini_txt += `Rating : ${x.rating}\n`
			ini_txt += `Link : ${x.link}\n`
		}
		thumb = get_result.icon
		patrick.sendMessage(from, thumb, image, {
			quoted: freply,
			caption: ini_txt
		})
		replyWithFakeLink(ini_txt)
		await limitAdd(sender)
		break
		//==========================================BATES NGAB==========================================\\
		//=============OTHER MENU==============\\
	    case 'othermenu':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		await patrickhay(ind.other(prefix), MessageType.text, tescuk, `${ucapanFakereply}`)
		break 
		case 'styletext':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		styleText = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/styletext?text=DappaUhuy&apikey=${dappaApi}`)
		stma = styleText.result
		patrick.sendMessage(from, stma, text, { quoted: freply })
		case "img2url":
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (((isMedia && !mek.message.videoMessage) || isQuotedImage || isQuotedVideo) && args.length == 0) {
			boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek;
			owgi = await patrick.downloadMediaMessage(boij);
			res = await upload(owgi);
			replyWithFakeLink(res);
		} else {
			replyWithFakeLink("kirim/reply gambar/video");
		}
		break;
		case 'shortlink':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
        if (isBanned) return replyWithFakeLink(ind.banned())
        if (args.length < 1) return replyWithFakeLink(`linknya mana su?\ncontoh ${prefix}shortlink https://google.com`)
        link = body.slice(11)
        replyWithFakeLink(ind.wait())
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${link}&apikey=${leysApi}`)
		teks = `*ShortLink URL*\n▢ From : ${link}\n▢ To ShortLink : ${anu.result}`
		patrick.sendMessage(from, teks, text, {quoted: fkontak})
		await limitAdd(sender)
		break
		case 'shortlink2':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
        if (isBanned) return replyWithFakeLink(ind.banned())
        if (args.length < 1) return replyWithFakeLink(`linknya mana su?\ncontoh ${prefix}shortlink https://google.com`)
        link = body.slice(12)
        replyWithFakeLink(ind.wait())
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${link}&apikey=${leysApi}`)
		teks = `*ShortLink URL*\n▢ From : ${link}\n▢ To ShortLink : ${anu.result}`
		patrick.sendMessage(from, teks, text, {quoted: fkontak})
		await limitAdd(sender)
		break
		case 'shortlink3':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
        if (isBanned) return replyWithFakeLink(ind.banned())
        if (args.length < 1) return replyWithFakeLink(`linknya mana su?\ncontoh ${prefix}shortlink https://google.com`)
        link = body.slice(12)
        replyWithFakeLink(ind.wait())
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${link}&apikey=${leysApi}`)
		teks = `*ShortLink URL*\n▢ From : ${link}\n▢ To ShortLink : ${anu.result}`
		patrick.sendMessage(from, teks, text, {quoted: fkontak})
		await limitAdd(sender)
		break
        case 'ssweb':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(limits.limitend(pushname))
		if (args.length < 1) return replyWithFakeLink('Urlnya mana gan?')
		teks = `${body.slice(7)}`
		replyWithFakeLink(ind.wait())
		anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
		ssweb = await getBuffer(anu.gambar)
		patrick.sendMessage(from, ssweb, image, {
			quoted: freply
		})
		await limitAdd(sender)
		break
	    case 'stiker':
	    case 'sticker':
	    case 's':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		await limitAdd(sender)
		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await patrick.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.webp')
			await ffmpeg(`./${media}`)
				.input(media)
				.on('start', function(cmd) {
					console.log(`Started : ${cmd}`)
				})
				.on('error', function(err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					replyWithFakeLink(ind.stikga())
				})
				.on('end', function() {
					muach = getRandom('')
					exif.create('Created By PatrickBot', '', `take_${muach}`)
					exec(`webpmux -set exif ./temp/take_${muach}.exif ${ran} -o ${ran}`, async (error) => {
						console.log('Finish')
						if (error) return console.log(error) && replyWithFakeLink('Error, Harap coba lagi nanti!')
						patrick.sendMessage(from, fs.readFileSync(ran), sticker, {
							quoted: freply
						})
						fs.unlinkSync(media)
						fs.unlinkSync(ran)
					})
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
		} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
			const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await patrick.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.webp')
			replyWithFakeLink(ind.wait())
			await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function(cmd) {
					console.log(`Started : ${cmd}`)
				})
				.on('error', function(err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					replyWithFakeLink(ind.stikga())
				})
				.on('end', function() {
					console.log('Finish')
					exif.create('Created By PatrickBot', '', `takestick_${sender}`)
					exec(`webpmux -set exif ./temp/takestick_${sender}.exif ${ran} -o ${ran}`, async (error) => {
						if (error) return replyWithFakeLink(ind.stikga())
						patrick.sendMessage(from, fs.readFileSync(ran), sticker, {
							quoted: freply
						})
						fs.unlinkSync(media)
						fs.unlinkSync(ran)
					})
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
		} else {
			replyWithFakeLink(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
		}
		break
	    case 'tagsticker':
		if (!isOwner) return replyWithFakeLink("Command only for owner bot")
		if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
			const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			filePath = await patrick.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
			var value = args.join(" ")
			var group = await patrick.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
				contextInfo: {
					mentionedJid: mem
				},
				quoted: freply
			}
			ini_buffer = fs.readFileSync(filePath)
			patrick.sendMessage(from, ini_buffer, sticker, options)
			fs.unlinkSync(filePath)
		} else {
			replyWithFakeLink(`Tag sticker yang sudah dikirim`)
		}
		break
	    case 'toimg':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isQuotedSticker) return replyWithFakeLink('Reply/tag sticker !')
		replyWithFakeLink(ind.wait())
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await patrick.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.png')
		exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return replyWithFakeLink(ind.stikga())
			buffer = fs.readFileSync(ran)
			patrick.sendMessage(from, buffer, image, {
				quoted: freply,
				caption: 'Succes!!'
			})
			fs.unlinkSync(ran)
		})
		await limitAdd(sender)
		break
	    case 'tomp3':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		patrick.updatePresence(from, Presence.composing)
		if (!isQuotedVideo) return replyWithFakeLink('_*Reply Video nya Gan!*_')
		replyWithFakeLink(ind.wait())
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await patrick.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return replyWithFakeLink('Gagal, pada saat mengkonversi video ke mp3')
			bufferlkj = fs.readFileSync(ran)
			patrick.sendMessage(from, bufferlkj, audio, {
				mimetype: 'audio/mp4',
				quoted: freply
			})
			fs.unlinkSync(ran)
		})
		await limitAdd(sender)
		break
	    case 'slowmo':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await patrick.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return replyWithFakeLink('Error!')
			uhh = fs.readFileSync(ran)
			patrick.sendMessage(from, uhh, audio, {
				mimetype: 'audio/mp4',
				ptt: true,
				quoted: freply
			})
			fs.unlinkSync(ran)
		})
		break
	    case 'tupai':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await patrick.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return replyWithFakeLink('Error!')
			hah = fs.readFileSync(ran)
			patrick.sendMessage(from, hah, audio, {
				mimetype: 'audio/mp4',
				ptt: true,
				quoted: freply
			})
			fs.unlinkSync(ran)
		})
		break
	    case 'gemok':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await patrick.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return replyWithFakeLink('Error!')
			hah = fs.readFileSync(ran)
			patrick.sendMessage(from, hah, audio, {
				mimetype: 'audio/mp4',
				ptt: true,
				quoted: freply
			})
			fs.unlinkSync(ran)
		})
		break
	    case 'bass':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await patrick.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp3')
		exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
			fs.unlinkSync(media)
			if (err) return replyWithFakeLink('Error!')
			hah = fs.readFileSync(ran)
			patrick.sendMessage(from, hah, audio, {
				mimetype: 'audio/mp4',
				ptt: true,
				quoted: freply
			})
			fs.unlinkSync(ran)
		})
		break 
		case 'jadwaltv':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(ind.baned())
        if (isLimit(sender)) return replyWithFakeLink(ind.limitend())
        if (args.length < 1) return replyWithFakeLink(`*Wrong Format!!*\nExample: ${prefix + command} nettv`)
		replyWithFakeLink(ind.wait())
		anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/jadwaltv?channel=${q}&apikey=HelloWorld`)
		if (anu.status === true) {
		teks = '=================\n'
		for (let s of anu.result) {
			teks += `Jam : ${s.jam}\nProgram : ${s.tayang}\n=================\n`
		}
		replyWithFakeLink(teks.trim())
		await limitAdd(sender)
		} else 
		if (anu.status === false) {
		replyWithFakeLink(`Channel Tidak Ditemukan!!\nList Channel:\n- nettv\n- indosiar\n- sctv\n- tvone\n- mnctv\n- antv\n- gtv\n- inews`)
		}
		break
		case 'brainly':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (isLimit(sender)) return replyWithFakeLink(ind.limitend(pushname))
		brien = body.slice(9)
		brainly(`${brien}`).then(res => {
			teks = '❉───────────❉\n'
			for (let Y of res.data) {
				teks += `\n*「 Brainly 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
			}
			patrick.sendMessage(from, teks, text, {
				quoted: mek,
				detectLinks: false
			})
			console.log(res)
		})
		await limitAdd(sender)
		break
        case 'profile':
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isPrem) {
const kanting = `${a}User: ${premi}
Your Balance: ${checkATMuser(sender)}
Your Limit: Unlimited${a}
*Note: Untuk mendapatkan Balance*
*Bisa Bermain Game di ${prefix}gamemenu*`
			patrick.sendMessage(from, kanting, text, { quoted: mek })
			} else 
			if (!isPrem) {
			for ( u of _limit) {
			if (u.id === sender) {
			let letCount = initialLimit - u.limit
			const kantong =
`${a}User: ${premi} l
Your Balance: ${checkATMuser(sender)}
Your Limit: ${letCount}/20${a}
*Note: Untuk mendapatkan Balance*
*Bisa Bermain Game di ${prefix}gamemenu*`
			patrick.sendMessage(from, kantong, text, { quoted: mek })
			         }
			}
			}
			break
		//==========================================BATES NGAB==========================================\\
		//==========================================BATES NGAB==========================================\\
		//==========================================BATES NGAB==========================================\\
		//==========================================BATES NGAB==========================================\\
	default:
	    if (_chats.startsWith(`${codeVerification}`)) {
		if (isRegistered) return
		const serialUser = createSerial(20)
		addRegisteredUser(sender)
		addATM(sender)
		addLevelingId(sender)
		const kenver = 
`${a}Succes Registered${a}
${a}❏ Email : ${pushname.replace(' ', '')}@bot.id
❏ Waktu Verify : ${time}
❏ SN : ${serialUser}
❏ Total Register : ${_registered.length}${a}`
        const raVe = Math.floor(Math.random(40) * 16902) + 50
        const raVe1 = Math.floor(Math.random(40) * 14776) + 86
        const raVe2 = Math.floor(Math.random(40) * 15243) + 43
        codeVerification = `${raVe}`
        codeVerification1 = `${raVe1}`
        codeVerification2 = `${raVe2}`
        sendButMessage(from, `${kenver}`, `${footerButton}`, 
        [{
            buttonId: `${prefix}rules`, 
            buttonText: { 
                displayText: `▨ READ DOCS ▨`,
            }, 
            type: 1,
        }, {
            buttonId: `${prefix}menu`, 
            buttonText: { 
                displayText: `▨ MENU ▨`,
            }, 
            type: 1,
        }]);
		} 
		if (_chats.startsWith(`${codeVerification1}`)) {
		if (isRegistered) return 
		const fraVe = Math.floor(Math.random(40) * 16902) + 50
		const fraVe1 = Math.floor(Math.random(40) * 14686) + 44
		const fraVe2 = Math.floor(Math.random(40) * 15243) + 53
        codeVerification = `${fraVe}`
        codeVerification1 = `${fraVe1}`
        codeVerification2 = `${fraVe2}`
        sendButMessage(from, `${a}Failed Register, Wrong Code!!\n*Please click the button again!!*`, `if the button is not visible\ntype ${prefix}verify`, 
        [{
            buttonId: `${prefix}verify`, 
            buttonText: { 
                displayText: `▨ VERIFY ▨`,
            }, 
            type: 1,
        }]);
		}
		if (_chats.startsWith(`${codeVerification2}`)) {
		if (isRegistered) return 
		const ffraVe = Math.floor(Math.random(40) * 18947) + 50
		const ffraVe1 = Math.floor(Math.random(40) * 15622) + 44
		const ffraVe2 = Math.floor(Math.random(40) * 16532) + 53
        codeVerification = `${ffraVe}`
        codeVerification1 = `${ffraVe1}`
        codeVerification2 = `${ffraVe2}`
        sendButMessage(from, `${a}Failed Register, Wrong Code!!\n*Please click the button again!!*`, `if the button is not visible\ntype ${prefix}verify`, 
        [{
            buttonId: `${prefix}verify`, 
            buttonText: { 
                displayText: `▨ VERIFY ▨`,
            }, 
            type: 1,
        }]);
		}
		if (isGroup && !isCmd && isSimi && budy != undefined) {
			console.log(budy)
			muehe = await simih(budy)
			replyWithFakeLink(muehe)
		}
}
} catch (e) {
	e = String(e)
        if (!e.includes("this.isZero")) {
		console.log('Error : %s', color(e, 'red'))
		}
    }
  })
}

starts()
