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
} = require('./src/bahasa')
const {
	listsurah
} = require('./src/listsurah')
const {
	ind
} = require('./data/language')
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

const antilink = JSON.parse(fs.readFileSync('./data/data/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./data/data/antivirtex.json'))
const samih = JSON.parse(fs.readFileSync('./data/data/simi.json'))
const badword = JSON.parse(fs.readFileSync('./data/data/badword.json'))
const welcome = JSON.parse(fs.readFileSync('./data/data/welcome.json'))
const _leveling = JSON.parse(fs.readFileSync('./data/data/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./data/data/level.json'))
const _registered = JSON.parse(fs.readFileSync('./data/data/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./data/data/limit.json'))
const uang = JSON.parse(fs.readFileSync('./data/data/uang.json'))

const say = JSON.parse(fs.readFileSync('./data/data/say.json'))
const adminban = JSON.parse(fs.readFileSync('./data/data/admin.json'))
const sewa = JSON.parse(fs.readFileSync('./data/data/sewa.json'))
const nsfw = JSON.parse(fs.readFileSync('./data/data/nsfw.json'))
const afk = JSON.parse(fs.readFileSync('./data/data/afk.json'))
const stc = JSON.parse(fs.readFileSync('./data/data/stc.json'))
const sensticker = JSON.parse(fs.readFileSync('./data/data/sensticker.json'));
const prem = JSON.parse(fs.readFileSync('./data/data/prem.json'))
const ban = JSON.parse(fs.readFileSync('./data/data/banned.json'))
const bad = JSON.parse(fs.readFileSync('./data/data/bad.json'))
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
groupLimit = 29

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
let _scommand = JSON.parse(fs.readFileSync("./data/data/scommand.json"));
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./data/data/scommand.json", JSON.stringify(_scommand));
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

const isKasar = function(kata, _dir){
    let status = false
    if (_dir.includes(kata)){
        status = true
    }
    return status
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
	 patrick.version = [2, 2134, 10]
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
			if (mek.key.fromMe) return
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
			const perepix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '!'
            body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : "!";
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
			const isAdminban = adminban.includes(sender) || isOwner
			const isPrem = checkPremiumUser(sender, prem) || isAdminban
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
		
		const time22 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time22 < "24:59:00") {
			var ufr = `Selamat malam`;
		}
		if (time22 < "19:00:00") {
			var ufr = `Selamat petang`;
		}
		if (time22 < "18:00:00") {
			var ufr = `Selamat sore`;
		}
		if (time22 < "15:00:00") {
			var ufr = `Selamat siang`;
		}
		if (time22 < "11:00:00") {
			var ufr = `Selamat pagi`;
		}
		if (time22 < "05:00:00") {
			var ufr = `Selamat malam`;
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
const randomLink1 = ['https://instagram.com/_pa7rick', '', 'https://linktr.ee/pa7rick', 'https://youtube.com/', 'https://github.com/PatrickStar720', '', 'https://wa.me/6288989029718/', 'https://chat.whatsapp.com/FIdMh612Iru1ZQgrXLp8KN']
const randomLink = randomLink1[Math.floor(Math.random() * randomLink1.length)]
const replyWithFakeLink = (teks) => {
    patrick.sendMessage(from, teks, text,{ 
        contextInfo :{
            text: 'hi',
           "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `𝗛𝗮𝗹𝗼 ${pushname}\n${ufr}\n𝗰𝗼𝗺𝗺𝗮𝗻𝗱: ${prefix + command}`,
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
        /**
           * English type!
           * Language Support 
        **/
        /*
        eng = {
			wait: `*Wait SB is processing*`,
			succes: `*Succes!*`,
			error: `*Error, please try again!*`,
			baned: `*You have been banned*`,
			stikga: `*Error, please try again!*`,
			linkga: `*Please check again the link!*`,
			groupo: `*This feature is only available in Groups*`,
			ownerb: `*This feature is only for Group Admins*`,
			admin: `*This feature is only for Group Admins*`,
			badmin: `*Make PatrickBot a group admin*`,
			wrongf: `*Wrong Format!*`,
			levelup: `*Congratulations ${pushname}*\n• *Nama* : ${pushname}\n• *Nomer* : wa.me/${sender.split("@")[0]}\n• *Xp* : ${getLevelingXp(sender)}\n• *Limit* : +3\n• *Role* :  ${role}\n• *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`,
			limitend: `*Your limit has run out!\nPlease type ${prefix}buylimit to get limit!`,
		}
		/**
           * Indonesia type!
           * Language Support
        **/
        /*
		ina = {
			wait: `*Tunggu SB sedang memproses!*`,
			succes: `*Sukses!*`,
			error: `*Gagal, coba lagi nanti!*`,
			baned: `*Kamu telah dibanned!*`,
			stikga: `*Gagal, coba lagi nanti!*`,
			linkga: `*Silahkan cek kembali linknya!*`,
			groupo: `*Fitur ini hanya tersedia di Grup!*`,
			ownerb: `*Fitur ini hanya untuk owner SB!*`,
			admin: `*Fitur ini hanya untuk Admin Grup!*`,
			badmin: `*Jadikan SB sebagai Admin Grup!*`,
			wrongf: `*Format salah!*`,
			levelup: `*Selamat ${pushname}*\n• *Nama* : ${pushname}\n• *Nomer* : wa.me/${sender.split("@")[0]}\n• *Xp* : ${getLevelingXp(sender)}\n• *Limit* : +3\n• *Role* :  ${role}\n• *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`,
			limitend: `*Limit anda telah habis!\nSilakan ketik ${prefix}buylimit untuk mendapatkan limit!`,
		}
		*/
			
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
		fs.writeFileSync('./data/data/limit.json', JSON.stringify(_limit))
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
		fs.writeFileSync('./data/data/limit.json', JSON.stringify(_limit))
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
	        if (budy.includes(`${getLink}`)) return replyWithFakeLink('Kamu telah mengirim linkgrup ini\nSB tidak akan kick!')
			if (isGroupAdmins) return replyWithFakeLink('*Because your admin group*\n*SB not kick you!*')
			patrick.updatePresence(from, Presence.composing)
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
			fs.writeFileSync('./data/data/badword.json', JSON.stringify(badword))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR BADWORD DI GROUP INI*')
			} else 
            if (rspndbutton == 'Anti Virtex') {
            if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		    if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
            if (isAntiVirtex) return replyWithFakeLink('Fitur Anti Virtex Sudah aktif!')
			antivirtex.push(from)
			fs.writeFileSync('./data/data/antivirtex.json', JSON.stringify(antivirtex))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTIVIRTEX DI GROUP INI*')
			} 
			if (rspndbutton == 'Anti Link') {
			if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		    if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
			if (isAntiLink) return replyWithFakeLink('Fitur Anti Link Sudah aktif!')
			antilink.push(from)
			fs.writeFileSync('./data/data/antilink.json', JSON.stringify(antilink))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTILINK DI GROUP INI*')
			patrick.sendMessage(from, `ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
			} else
			if (rspndbutton == 'Anti Spam (Sticker)') {
			if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
			if (!isBotGroupAdmins) return replyWithFakeLink(ind.badmin())
			if (isAntiSpam) return replyWithFakeLink('Fitur Anti Spam (Sticker) Sudah aktif!')
			stc.push(from)
			fs.writeFileSync('./data/data/stc.json', JSON.stringify(stc))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTISPAM STICKER DI GROUP INI*')
			patrick.sendMessage(from, `PERINGATAN\nJika bukan admin jangan spam sticker 10x sekaligus dalam 4 menit`, text)
			} else
            if (rspndbutton == 'Welcome') {
            if (!isGroup) return replyWithFakeLink(ind.groupo())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
			if (isWelcome) return replyWithFakeLink('Fitur Welcome Sudah aktif!')
			welcome.push(from)
			fs.writeFileSync('./data/data/welcome.json', JSON.stringify(welcome))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR WELCOME|LEFT DI GROUP INI*')
			} else
            if (rspndbutton == 'Simi Simi') {
	        if (!isGroup) return replyWithFakeLink(ind.groupo()) 
	        if (!isPrem) return replyWithFakeLink(ind.premon())
		    if (!isGroupAdmins) return replyWithFakeLink(ind.admin())
		    if (isSimi) return replyWithFakeLink('Fitur Simi Simi Sudah aktif!')
			samih.push(from)
			fs.writeFileSync('./data/data/simi.json', JSON.stringify(samih))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR SIMI DI GROUP INI*')
			} else
            if (rspndbutton == 'NSFW Mode') {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
            if (isNsfw) return replyWithFakeLink('Fitur NSFW Sudah aktif!')
			nsfw.push(from)
			fs.writeFileSync('./data/data/nsfw.json', JSON.stringify(nsfw))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR NSFW DI GROUP INI*')
			} else
		    //====================== Disable Feature Group ====================\\
		    if (rspndbutton == 'Disable Anti Badword') {
			if (!isBadWord) return replyWithFakeLink('Fitur Anti Badword Belum aktif!')
			badword.splice(from, 1)
			fs.writeFileSync('./data/data/badword.json', JSON.stringify(badword))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENOAKTIFKAN FITUR BADWORD DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Anti Virtex') {
			if (!isAntiVirtex) return replyWithFakeLink('Fitur Anti Virtex Belum aktif!')
			antivirtex.push(from)
			fs.writeFileSync('./data/data/antivirtex.json', JSON.stringify(antivirtex))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENONAKTIFKAN FITUR ANTIVIRTEX DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Anti Link') {
            if (!isAntiLink) return replyWithFakeLink('Fitur Anti Link Belum aktif!')
			antilink.splice(from, 1)
			fs.writeFileSync('./data/data/antilink.json', JSON.stringify(antilink))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENGAKTIFKAN FITUR ANTILINK DI GROUP INI*')
			patrick.sendMessage(from, `ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
			} else
		    if (rspndbutton == 'Disable Anti Spam (Sticker)') {
			if (!isAntiSpam) return replyWithFakeLink('Fitur Anti Spam (Sticker) Belum aktif!')
			stc.splice(from, 1)
			fs.writeFileSync('./data/data/stc.json', JSON.stringify(stc))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENONAKTIFKAN FITUR ANTISPAM STICKER DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Welcome') {
			if (!isWelcome) return replyWithFakeLink('Fitur Welcome Belum aktif!')
			welcome.splice(from, 1)
			fs.writeFileSync('./data/data/welcome.json', JSON.stringify(welcome))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENOAKTIFKAN FITUR WELCOME|LEFT DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable Simi Simi') {
			if (!isSimi) return replyWithFakeLink('Fitur Simi Simi Belum aktif!')
			samih.splice(from, 1)
			fs.writeFileSync('./data/data/simi.json', JSON.stringify(samih))
			replyWithFakeLink('❬ *SUKSES* ❭ *MENONAKTIFKAN FITUR SIMI DI GROUP INI*')
			} else
		    if (rspndbutton == 'Disable NSFW Mode') {
			if (!isNsfw) return replyWithFakeLink('Fitur NSFW Belum aktif!')
			nsfw.splice(from, 1)
			fs.writeFileSync('./data/data/nsfw.json', JSON.stringify(nsfw))
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
	    await patrick.setStatus(`Runtime ${uptime}  SB-129`).catch((_) => _);
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

    if (!isGroup && budy.startsWith('https://chat.whatsapp.com/') && !budy.startsWith(`${prefix}join`)) {
        reply('Jika ingin menginvit PatrickBot\n*Ketik .join linkgrup*')
    }
    
let spamming = []
if (spamming.includes(sender)) return
if (budy.startsWith('.') && antiSpam.isFiltered(from) && !isGroup && !mek.key.fromMe) {
    spamming.push(sender)
    await sleep(3000)
    spamming.splice(sender, 1)
    console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mSpam!!\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    return reply('*You detected spam!*\n*Please type again in 3 seconds!*')
}
if (budy.startsWith('.') && antiSpam.isFiltered(from) && isGroup && !mek.key.fromMe) {
	spamming.push(sender)
    await sleep(3000)
    spamming.splice(sender, 1)
    console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mSpam!!\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    return reply('*You detected spam!*\n*Please type again in 3 seconds!*')
}
if (command && !isOwner) antiSpam.addFilter(from)

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

if (!isGroup && body.startsWith(perepix)) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInPrivate\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (body.startsWith(perepix) && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInGroup\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (body.startsWith(perepix)) patrick.chatRead(from)
if (command) cmdadd()
const _0x5c16e7=_0x5564;function _0x31d1(){const _0x1d4719=['\x0a*Note:\x20Untuk\x20mendapatkan\x20Balance*\x0a*Bisa\x20Bermain\x20Game\x20di\x20','url','tupai','Disable\x20Welcome','downloadMediaMessage','Status\x20adminmu\x20dicopot.\x20Makanya\x20jan\x20jadi\x20sider🏃\x20:\x0a','▨\x20VIDEO\x20▨','Keajaiban\x20itu\x20nyata\x20bagi\x20mereka\x20yang\x20yakin\x20berserah\x20diri\x20dan\x20bekerja\x20keras','video\x20','addsewa*\x20linkgc\x20waktu','jail','Nonton\x20Wibu','-------------------\x0a','uang','writeFileSync','bed\x0a\x0a◉\x20*Maker\x20Menu*\x0a\x20•\x20','isTebakGambar','https://leyscoders-api.herokuapp.com/api/wattpad-search?q=','\x20nettv','album','Error\x20:','femdom\x0a\x20•\x20','Dislike:\x20','multicolor3d','\x20sabun','halah\x0a\x20•\x20','Maen\x20Game','/20','*Released*\x20:\x20','banned','5\x20Bulan\x20Lagi','\x20cmdnya\x20dan\x20tag\x20stickernya','chatdia\x0a\x20•\x20','videos','./data/data/say.json','Impian,\x20target,\x20kemauan\x20dan\x20tujuan\x20semuanya\x20sia-sia\x20tanpa\x20tindakan','Diam\x20belum\x20tentu\x20menyelesaikan\x20masalah\x20tapi\x20setidaknya\x20tidak\x20membesarkan\x20masalah','gsmarena\x0a\x20•\x20','Kirim\x20perintah\x20*','Saya\x20tidak\x20berharap\x20menjadi\x20segalanya\x20bagi\x20setiap\x20orang.\x20Saya\x20hanya\x20ingin\x20menjadi\x20sesuatu\x20untuk\x20seseorang.','ban','Succes,\x20Ganti\x20Deskripsi\x20Grup','Saya\x20berpikir\x20bahwa\x20ada\x20suatu\x20hal\x20yang\x20lebih\x20penting\x20daripada\x20sekedar\x20percaya,\x20tindakan\x20Dunia\x20ini\x20penuh\x20dengan\x20pemimpi\x20,tidaklah\x20banyak\x20orang\x20yang\x20berani\x20maju\x20ke\x20depan\x20dan\x20Mulai\x20mengambil\x20langkah\x20pasti\x20untuk\x20mewujudkan\x20visi\x20mereka','https://api.banghasan.com/quran/format/json/acak','delprem*\x20idgroup','END:VCARD','vnolep\x0a\x20•\x20','https://leyscoders-api.herokuapp.com/api/instagram/photo?url=','bed','Sukses\x20meninggalkan\x20jejak,\x20gagal\x20meninggalkan\x20pelajaran,\x20diam\x20meninggalkan\x20penyesalan','Orang\x20tua\x20saya\x20bekerja\x20terlalu\x20keras\x20untuk\x20saya\x20bukan\x20supaya\x20saya\x20tidak\x20hanya\x20menjadi\x20orang\x20biasa\x20tetapi\x20menjadi\x20orang\x20luar\x20biasa','video_pixels','Mabar','replace','Batas\x20grup\x20telah\x20tercapai\x0aBatas\x20Group\x20SB\x20total\x20*','gradient\x0a\x20•\x20','*Camera\x20PX*\x20:\x20','Kehidupan\x20yang\x20besar\x20dimulai\x20dari\x20mimpi\x20yang\x20besar','wa_version','gamemenu*','menit','\x0a❏\x20SN\x20:\x20','Ketik\x20','tebakangka','\x20kata1:kata2','dalam\x20takut\x20yang\x20tampak\x20adalah\x20hambatan,\x20dalam\x20yakin\x20yang\x20tampak\x20adalah\x20kesempatan','Succes,\x20Ganti\x20Nama\x20Grup','\x0a\x0a*>\x20Jawaban:*\x20','Tangkap\x20peluang,\x20kerjakan,\x20selesaikan','fileSha256','steel','Kau\x20kan\x20gak\x20punya\x20hobby\x20awokawok','*Upload\x20Date:*\x20','https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=','searchmenu','warface\x0a\x20•\x20','wait','https://mnazria.herokuapp.com/api/arti?nama=','tagme','likes','Error','receive\x0a\x20•\x20','pap\x20mukamu\x20lalu\x20kirim\x20ke\x20salah\x20satu\x20temanmu','\x20sepeda','\x20day(s)\x20','Anda\x20tidak\x20dapat\x20mengubah\x20masa\x20lalu\x20anda\x20dan\x20janganlah\x20terlalu\x20khawatir\x20dengan\x20hari\x20esok\x20.Hari\x20ini\x20adalah\x20hari\x20yang\x20dapat\x20mengubah\x20masa\x20depan\x20Anda','siapa\x20orang\x20yang\x20paling\x20berpengaruh\x20kepada\x20kehidupanmu','Pesan\x20tidak\x20ditemukan!','listadmin','cloud\x0a\x20•\x20','Kita\x20tidak\x20usah\x20saling\x20menyalahkan,\x20agar\x20dimasa\x20depan\x20tak\x20ada\x20yang\x20menuntut\x20akan\x20kesalahan','shortlink\x20\x0a\x20•\x20','◉\x20*Group\x20Menu*\x0a\x20•\x20','acak','Judul\x20:\x20','Pencarian\x20Jodoh\x20Ditemukan,\x20Ciee\x20Yang\x20Lagi\x20Jodoh','Ketika\x20semua\x20hal\x20tidak\x20sejalan\x20dengan\x20anda,\x20ingatlah\x20bahwa\x20sebuah\x20pesawat\x20terbang\x20melawan\x20angin,\x20bukan\x20dengan\x20mengikuti\x20angin','Sukses\x20lur','Disable\x20Anti\x20Badword','kdu\x20\x0a\x20•\x20','quran','\x20is\x20here\x0aCreated\x20By\x20@_pa7rick\x0a\x0a','\x0a❏\x20*Antivirtex:*\x0a╰──\x20','ytdl','googleimage\x0a\x20•\x20','chat\x20notujuan:pesan','Pengiriman\x20Tidak\x20Berhasil\x0aPastikan\x20Saldo\x20Anda\x20Cukup\x20Untuk\x20Melakukan\x20Transfer','report\x20error\x20pada\x20menu','kapankah','Lagu\x20:\x20','pakboy\x0a\x20•\x20','heleh\x0a\x20•\x20','\x0a\x20\x20\x20\x20\x20Melayani\x20Dimanapun\x20dan\x20Kapanpun\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*PatrickBot\x20Market*\x0a','8Gvognc','\x20fego','tagall\x0a\x20•\x20','\x0a\x20\x20Sisa\x20Saldo\x20Anda\x20:\x20Ub\x20\x20','pinterest\x0a\x20•\x20','./data/data/bad.json','*This\x20is\x20Link\x20Group\x20from\x20','marvelstudio','Tidak\x20ada\x20yang\x20gagal\x20mereka\x20hanya\x20berhenti\x20terlalu\x20cepat','https://leyscoders-api.herokuapp.com/api/jalantikus?q=','addSPK','2\x20Bulan\x20Lagi','*Kata\x20tersebut\x20tidak\x20ada!*\x0aMohon\x20cek\x20di\x20','extendedTextMessage','glitch\x0a\x20•\x20','map','Kesulitan\x20adalah\x20hujan\x20terbaik\x20untuk\x20menunjukkan\x20kualitas\x20diri\x20yang\x20sebenarnya','gemok\x0a\x0a◉\x20*Anime\x20Menu*\x0a\x20•\x20','https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png','*ＲＥＰＯＲＴ*\x0a>\x20From\x20:\x20@','Percayalah.\x20Suatu\x20hari\x20nanti\x20pasti\x20akan\x20ada\x20seseorang\x20yang\x20bangga\x20memilikimu.','\x20akan\x20dihapus\x20adminban!','linus','\x20https://www.instagram.com/p/CNzQL4cHm4n/?igshid=19n977531z5nz','.webp\x20-o\x20./temp/','thelazy\x0a\x20•\x20','Kita\x20tidak\x20boleh\x20kehilangan\x20semangat.\x20Semangat\x20adalah\x20stimulan\x20terkuat\x20untuk\x20mencintai,\x20berkreasi\x20dan\x20berkeinginan\x20untuk\x20hidup\x20lebih\x20lama.','*==[\x20List\x20Ban\x20]==*\x0a','\x0a*Type\x20','\x20>\x20@','90%\x20dari\x20kegagalan\x20berasal\x20dari\x20orang-orang\x20yang\x20memiliki\x20kebiasaan\x20membuat\x20alasan-alasan','\x20tagsticker','\x20ayat\x20','\x0a\x0a❏\x20*Antilink:*\x0a╰──\x20','facepalm\x0a\x20•\x20','play','Kamu\x20akan\x20menemukan\x20yang\x20terbaik,\x20ketika\x20kamu\x20sudah\x20berhenti\x20membanding-bandingkan.','Jangan\x20pernah\x20mencoba\x20menjadikan\x20putra\x20atau\x20putri\x20Anda\x20menjadi\x20seperti\x20Anda.\x20Diri\x20Anda\x20hanya\x20cukup\x20satu\x20saja.','Percayalah\x20orang\x20yang\x20menasehatimu\x20untuk\x20sholat\x20adalah\x20dia\x20yang\x20paling\x20mencintaimu.','3\x20Hari\x20Lagi','1865865nPRhrF','Expired\x20Code\x20&&\x20Code\x20was\x20Change\x20{\x0a\x20\x20\x20\x20Code\x201\x20=\x20','pake\x20foto\x20sule\x20sampe\x203\x20hari','3dunderwater\x0a\x20•\x20','\x0a>\x20To\x20:\x20','timestamp','tagme\x0a\x20•\x20','4148529ugrBgB','./data/data/banned.json','Orang\x20bodoh\x20mengira\x20dirinya\x20bijak.\x20orang\x20bijak\x20tau\x20dirinya\x20bodoh.','pesannya\x20apa\x20bang?','ttp\x0a\x20•\x20','addadmin','stickersearch','wibu\x0a\x20•\x20','trim','shortlink','startsWith','Failed\x20Register,\x20Wrong\x20Code!!','https://dapuhy-api.herokuapp.com/api/textpro/','delprem','Say\x20list\x20SB-129:\x0a','updatePresence','rules','&apikey=HelloWorld','Pergilah\x20sejauh\x20mungkin\x20dan\x20ketika\x20anda\x20tiba\x20di\x20sana\x20anda\x20akan\x20melihat\x20lebih\x20jauh\x20lagiAllah,\x20aku\x20tahu\x20bahwa\x20saat\x20aku\x20kehilangan\x20sesuatu\x20engkau\x20sedang\x20mempersiapkan\x20hal\x20yang\x20lebih\x20baik\x20untukkuAnda\x20tidak\x20dapat\x20mengubah\x20masa\x20lalu\x20anda\x20dan\x20janganlah\x20terlalu\x20khawatir\x20dengan\x20hari\x20esok\x20.Hari\x20ini\x20adalah\x20hari\x20yang\x20dapat\x20mengubah\x20masa\x20depan\x20Anda','baik','\x20-o\x20','Code:\x20','Maafkan\x20orang\x20yang\x20menyakitimu...\x20Bukan\x20karena\x20mereka\x20pantas\x20di\x20maafkan,\x20Tapi\x20karena\x20kamu\x20harus\x20berbahagia.','disable\x20\x0a\x20•\x20','•\x20.addsewa\x0a•\x20.dellsewa\x0a•\x20.ban\x0a•\x20.unban\x0a•\x20.prem\x0a•\x20.unprem\x0a•\x20.addbadword\x0a•\x20.delbadword','webpmux\x20-set\x20exif\x20./temp/take_','dare','314740rXPyrX','hobby','Apabila\x20sempurna\x20akal\x20seseorang,\x20maka\x20sedikit\x20perkataannya.','splice','Apa\x20yang\x20kita\x20pikirkan\x20menentukan\x20apa\x20yang\x20akan\x20terjadi\x20pada\x20kita.\x20Jadi\x20jika\x20kita\x20ingin\x20mengubah\x20hidup\x20kita,\x20kita\x20perlu\x20sedikit\x20mengubah\x20pikiran\x20kita.','3dunderwater','wattpad','Arti\x20Mimpi\x20dari\x20','Yang\x20menyedihkan\x20bukanlah\x20bidikan\x20yang\x20meleset\x20tapi\x20bidikan\x20tanpa\x20target','Ditemukan\x20','glitch','\x0aProgram\x20:\x20','holoh','linkgrup','```「\x20LIST\x20STICKER\x20CMD\x20」```','\x0aQ.S\x20','Yang\x20mau\x20di\x20add\x20jin\x20ya?','https://dapuhy-api.herokuapp.com/api/fun/tekateki?apikey=','POST','delete\x0a\x20•\x20','*pilih:*\x0adetik\x0amenit\x0ajam','query','neon\x20\x0a\x20•\x20','attp\x0a\x20•\x20','Kegagalan\x20ada\x20bukan\x20untuk\x20ditakuti\x20tetapi\x20untuk\x20dipelajari','!*\x20telah\x20diinvit\x20oleh\x20@','▨\x20VERIFY\x20▨','Hujan\x20tidak\x20hanya\x20datang\x20sendirian\x20Ia\x20datang\x20bersama\x20kesejukan,\x20hal\x20buruk\x20tidak\x20datang\x20sendirian\x20ia\x20datang\x20bersama\x20pembelajaran','what','https://terhambar.com/aw/qts/?kata=','8bit','•\x20Balance\x20:\x20$','Ada\x20yang\x20lebih\x20berharga\x20dari\x20uang\x20dan\x20emas\x20yaitu\x20waktu','\x20Patrick','buycode\x0aUntuk\x20membeli\x20code\x20premium\x20dengan\x20balance\x20mu!','Stalking\x20sosmed\x20nya\x20mantan','Sosmedtan','\x20RickRoll:','Respon\x20kita\x20terhadap\x20masalah\x20menentukan\x20kualitas\x20berita\x20fokus\x20pada\x20solusi','*Wrong\x20Format*\x0aReply\x20the\x20picture!!!','Allah\x20tidak\x20pernah\x20terlambat\x20ia\x20akan\x20menunjukkan\x20kuasanya,\x20pada\x20detik\x20terakhir\x20sekalipun','demote','glass','\x20&&\x20ffmpeg\x20-i\x20','.exif\x20','Maafin\x20aku\x20Ya\x20Allah\x20Gara\x20gara\x20aku\x20mencintai\x20dia\x20tapi\x20tidak\x20pasti,\x20sampai\x20aku\x20lupa\x20mencintai\x20mu\x20juga.','https://leyscoders-api.herokuapp.com/api/textmaker/','Hidup\x20itu\x20bukan\x20soal\x20menemukan\x20diri\x20Anda\x20sendiri,\x20hidup\x20itu\x20membuat\x20diri\x20Anda\x20sendiri.','wrongf','&author=','groupo','https://leyscoders-api.herokuapp.com/api/cuttly?url=','•\x20\x20Total\x20Chat\x20:\x20','\x0a\x20\x20\x20For\x20You\x0a\x0a\x20\x20•\x20','premium','holoh\x0a\x20•\x20','nulis\x20\x0a\x20•\x20','promote','what\x0a\x20•\x20','display_resolution','\x202021','\x20anda\x20naik\x20menjadi\x20admin\x20grub\x20(+_+)','9️⃣','pap\x20ke\x20salah\x20satu\x20anggota\x20grup','\x20\x20\x20\x20\x20\x20\x20\x20*Successful\x20Payment*\x0a>\x20*From*\x20:\x20Admin\x20PatrickBot\x0a>\x20*To*\x20:\x20','then','sticker','Percayalah\x20Seorang\x20wanita\x20yang\x20mencintai\x20Allah.\x20Allah\x20akan\x20berikan\x20lelaki\x20terbaik\x20untuk\x20menjaganya.','linus\x0a\x20•\x20','(bgi\x20yg\x20muslim)\x20pernah\x20ga\x20solat\x20seharian?','tebakgambar','group','Dan\x20Allah\x20tidak\x20akan\x20mengadzab\x20mereka\x20selama\x20mereka\x20mau\x20Memohon\x20ampun\x20kepada-Nya.\x20[Al-Anfaal,\x208:33]','Jam\x20:\x20','transfer','emoji','0@s.whatsapp.net','Lusa','quotes\x0a\x20•\x20','Tunjukkan\x20teman\x20Anda,\x20saya\x20akan\x20menunjukkan\x20masa\x20depan\x20Anda','glowmetalic','delttt','Memaafkanmu\x20bukan\x20berarti\x20memberimu\x20kesempatan\x20sekali\x20lagi.','Orang\x20pintar\x20itu\x20biasa\x20orang\x20hebat\x20itu\x20luar\x20biasa\x20tapi\x20orang\x20berani\x20lah\x20pemenangnyahidup\x20seseorang\x20telah\x20ditebak,\x20tapi\x20Nasib\x20orang\x20malas\x20mudah\x20untuk\x20ditebak','Nonton\x20Anime','Jangan\x20mengharapkan\x20sesuatu\x20yang\x20luar\x20biasa\x20jika\x20anda\x20hanya\x20mau\x20melakukan\x20hal\x20yang\x20biasa\x20saja','bearlogo\x0a\x20•\x20','Jangan\x20Menunggu\x20hari\x20yang\x20terbaik\x20untuk\x20melangkah\x20karena\x20setiap\x20hari\x20sangatlah\x20berharga','limit','*\x0a*Pertandingan\x20Seri!*','Hiduplah\x20seperti\x20kamu\x20akan\x20mati\x20besok,\x20dan\x20berbahagialah\x20seperti\x20kamu\x20akan\x20hidup\x20selamanya','baned','3\x20Minggu\x20Lagi','\x20subway\x20surf','jalantikus','ytmp3\x0a\x20•\x20','Aku\x20tidak\x20tahu\x20kunci\x20sukses\x20itu\x20apa,\x20tapi\x20kunci\x20menuju\x20kegagalan\x20adalah\x20mencoba\x20membuat\x20semua\x20orang\x20senang.','Hanya\x20Allah\x20yang\x20mengerti\x20bagaimana\x20sulitnya\x20menahan\x20sabar\x20tanpa\x20harus\x20bercerita\x20panjang\x20lebar.','addsewa','hobby\x0a\x20•\x20','bokeh\x0a\x20•\x20','holographic\x0a\x20•\x20','susunkata\x0a\x20•\x20','Penderitaan\x20adalah\x20pelajaran.','6\x20Hari\x20Lagi','images','Terbuka\x20untuk\x20Anda,\x20begitulah\x20Tuhan\x20memberi\x20kita\x20jalan\x20untuk\x20berusaha.\x20Jangan\x20pernah\x20berfikir\x20jalan\x20sudah\x20tertutup.','receive','isSK','addOutputOptions','quotedMessage','ganteng','bisakah','islam','Lakukan\x20sesuatu\x20hari\x20ini\x20yang\x20akan\x20membuat\x20dirimu\x20berterima\x20kasih\x20di\x20hari-hari\x20mendatang','groupinfo\x0a\x20•\x20','Done\x20Delete\x20Premium\x20user','\x0aPenyanyi\x20:\x20','getProfilePicture','PatrickBot\x20Created\x20by\x20_pa7rick','text','Surat\x20Sukses\x20Dikirim','Saat\x20orang\x20lain\x20melakukan\x20impianmu\x20itu\x20berarti\x20mereka\x20belum\x20mampu\x20melihat\x20sejauh\x20anda\x20melihat','NIH\x20KAK!!','*Jawablah\x20Soal\x20Berikut\x20Ini*\x0a\x0a*Soal\x20:*\x20','ytsearch','linkgrup\x0a\x20•\x20','artists','Anda\x20tidak\x20perlu\x20harus\x20berhasil\x20pada\x20kali\x20pertama.','Bisa','=================\x0a','Seseorang\x20tidak\x20bisa\x20sukses\x20seringkali\x20karena\x20kurangnya\x20keberanian\x20untuk\x20mencobaterasa\x20sakit\x20selalu\x20hampir\x20tidak\x20ada\x20rasanya\x20setelah\x20apa\x20yang\x20kita\x20perjuangkan\x20tercapai','sfile','Request\x20By\x20:\x20','artimimpi\x0a\x20•\x20','?text=','https://dapuhy-api.herokuapp.com/api/socialmedia/tiktoknowm?url=','3\x20Bulan\x20Lagi','Manusia\x20akan\x20bahagia\x20selama\x20ia\x20memilih\x20untuk\x20bahagia.','\x20https://youtu.be/dQw4w9WgXcQ','Surga\x20itu\x20mahal..\x20Akan\x20tetapi\x20orang\x20miskin\x20tetap\x20mampu\x20membelinya,\x20Karena\x20harganya\x20bukan\x20pada\x20Harta\x20melainkan\x20Taqwa.','sticker\x20\x0a\x20•\x20','\x20https://www.instagram.com/p/CNzcf8egt27/?igshid=1hbl53id19nqv','owner','\x0aViews:\x20','tiktok','pakgirl','nggagur\x0a\x20•\x20','hilih\x0a\x20•\x20','listonline\x0a\x20•\x20','Internal\x20server\x20error!,\x20try\x20again\x20later','groupSettingChange','bacotlist','apa\x20yang\x20mau\x20dicari\x20ngab?\x0acontoh\x20','Description\x20:\x20','Published\x20:\x20','「\x20LIRIK\x20」\x0a\x0a','take_','Di\x20dunia\x20ini\x20orang\x20paling\x20baik\x20pun\x20bisa\x20dicela,\x20dan\x20bahkan\x20orang\x20paling\x20jahat\x20sekalipun\x20bisa\x20di\x20bela.','siapakahaku\x0a\x20•\x20','Kesabaran\x20itu\x20ada\x20dua\x20macam\x20:\x20Sabar\x20atas\x20sesuatu\x20yang\x20tidak\x20kamu\x20ingin.\x20Sabar\x20menahan\x20diri\x20dari\x20sesuatu\x20yang\x20kamu\x20ingini.\x20-Ali\x20bin\x20Abi\x20Thalib','memeindo\x0a\x20•\x20','?img=','Penggunaan\x20:\x20','jawaban','camera_pixels','Bila\x20kamu\x20tidak\x20melihatku\x20di\x20syurga.\x20Tolong\x20tanya\x20kepada\x20Allah\x20dimana\x20aku,\x20Tolonglah\x20aku\x20ketika\x20itu..','Hal\x20yang\x20paling\x20penting\x20adalah\x20menikmati\x20hidupmu,\x20menjadi\x20bahagia,\x20apapun\x20yang\x20terjadi.','tekateki','play\x0a\x20•\x20','realisticvintage','Tegas\x20akan\x20diri\x20sendiri,\x20buang\x20pikiran\x20negatif\x20dan\x20lakukan\x20yang\x20baik.\x20Kegelisahan\x20hanya\x20milik\x20mereka\x20yang\x20putus\x20asa.','List\x20Online:\x0a','*Ram*\x20:\x20','tagall','Partner\x20found:\x20🙉\x0a*','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Jangan\x20pernah\x20menyesal\x20mengenal\x20seseorang\x20dalam\x20hidupmu,\x20Orang\x20baik\x20akan\x20memberi\x20mu\x20Kebahagiaan,\x20Orang\x20jahat\x20akan\x20memberi\x20mu\x20Pengalaman,\x20Bahkan\x20seburuk-buruk\x20manusia\x20akan\x20memberi\x20mu\x20Pelajaran.','say','*Perintah\x20ini\x20Khusus\x20Owner\x20@6288989029718\x20!*','*\x20wa.me/','Views:\x20','sendMessage','\x0a❏\x20*Welcome:*\x0a╰─\x20','Lihat\x20ke\x20atas\x20agar\x20terinspirasi\x20lihat\x20ke\x20bawah\x20agar\x20bersyukur','description','Saat\x20kita\x20sakit\x20hati\x20sama\x20omongan\x20orang,\x20saat\x20itu\x20juga\x20sebenarnya\x20Allah\x20ngajarin\x20kita\x20buat\x20jaga\x20omongan\x20kita\x20ke\x20orang\x20lain.\x20Sederhana\x20bukan?','vbaik','\x20\x0aYour\x20Balance:\x20','ppcouple','\x0a\x20Views:\x20','chat\x20ke\x20kontak\x20wa\x20urutan\x20sesuai\x20%batre\x20kamu,\x20terus\x20bilang\x20ke\x20dia\x20\x22i\x20lucky\x20to\x20hv\x20you','laporbug','imageMessage','\x0aId\x20:\x20','Dengan\x20sikap\x20yang\x20akan\x20menentukan\x20siapa\x20yang\x20akan\x20bertahan\x20dalam\x20hidupmu','Jika\x20Ingin\x20.delttc\x0aChat\x20Owner\x20ketik\x20.owner','•\x20Runtime\x20:\x20','huluh\x0a\x20•\x20','Command\x20only\x20for\x20adminban!','Views\x20:\x20','Masih\x20ada\x20game\x20yg\x20blum\x20selesai','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*PatrickBot\x20ATM*','*Size*\x20','data','*Dare*\x0a\x0a','Hari\x20ini\x20adalah\x20hari\x20pertama\x20dalam\x20hidup\x20anda.\x20Buatlah\x20hari\x20ini\x20menjadi\x20hari\x20yang\x20terbaik\x20sepanjang\x20hidup\x20anda\x20dan\x20semoga\x20hari\x20esok\x20matahari\x20bersinar\x20dengan\x20terang','shortlink3','Title\x20:\x20','tekateki\x0a\x20•\x20','Tuh\x20Kontaknya','Succes,\x20Menambah\x20User\x20Premium','@_.split(\x27@\x27)[0]','length','slowmo','play\x20query*','log','fitnah\x0a\x20•\x20','https://arugaz.herokuapp.com/api/howgay','gid','pornhub\x20\x0a\x20•\x20','video/mp4','\x0a*Tipe\x20:*\x20','❗\x20Error,\x20Maksimal\x20500\x20Kata','disable*','TEL;type=CELL;type=VOICE;waid=','\x0aPersentase\x20Gay\x20:\x20','Bekerjalah\x20dengan\x20ikhlas\x20karena\x20bekerja\x20tanpa\x20paksaan\x20akan\x20memberi\x20hasil\x20maksimal','buycode','views','Langkah\x20pertama\x20yang\x20diperlukan\x20untuk\x20mendapatkan\x20hal\x20yang\x20anda\x20inginkan\x20adalah\x20memutuskan\x20apa\x20yang\x20anda\x20inginkan','*Wrong\x20Format!*\x0aExample:\x20','gunting','pernah\x20nolak\x20orang?\x20alasannya\x20kenapa?','Started\x20:\x20','lagu','.mp4','*\x0a*Download\x20dengan\x20klik\x20tombol\x20dibawah*','Jangan\x20pikirkan\x20kegagalan\x20kemarin,\x20hari\x20ini\x20sudah\x20lain,\x20sukses\x20pasti\x20diraih\x20selama\x20semangat\x20masih\x20menyengat.','Orang\x20optimis\x20dapat\x20melihat\x20peluang\x20dalam\x20masalah,\x20orang\x20pesimis\x20akan\x20melihat\x20masalah\x20dalam\x20peluangKeajaiban\x20itu\x20nyata\x20bagi\x20mereka\x20yang\x20yakin\x20berserah\x20diri\x20dan\x20bekerja\x20keras','./temp/takestick_','|ganz','seberapagay','toFixed','\x0a❏\x20*SimiSimi:*\x0a╰─\x20','./temp/','vganteng','addSewaGroup','hidetag20','Belajarlah\x20memahami\x20bahwa\x20tidak\x20semua\x20keinginan\x20bisa\x20terpenuhi,\x20barangkali\x20itu\x20adalah\x20obat\x20yang\x20terbaik\x20untuk\x20mencegah\x20kecewa\x20dan\x20sakit\x20hati.','ganti\x20nama\x20jadi\x20\x22\x20BOWO\x20\x22\x20selama\x2024\x20jam','\x20Vivo\x20Y15','Jika\x20anda\x20menghabiskan\x20waktu\x20untuk\x20mencoba\x20menjadi\x20baik\x20dalam\x20segala\x20hal,\x20Anda\x20tidak\x20akan\x20pernah\x20menjadi\x20hebat\x20dalam\x20apapun','baik\x0a\x20•\x20','Kebencian\x20seperti\x20halnya\x20cinta,\x20berkobar\x20karena\x20hal-hal\x20kecil.','noregis','gsmarena','https://api.xteam.xyz/attp?file&text=','Sayangilah\x20dia\x20walau\x20tidak\x20sesempurna\x20seperti\x20yang\x20kau\x20inginkan','base64','bertahan\x20saja\x20tidak\x20cukup\x20anda\x20perlu\x20bereaksi\x20terhadap\x20tekanan\x20dan\x20merubah\x20keadaan','muihalal','Nonton\x20Drakor','Pong!!!!\x0aSpeed\x20:\x20','\x0aHarga\x20:\x20','enable','Orang\x20hebat\x20membicarakan\x20ide,\x20orang\x20menengah\x20membicarakan\x20pengalaman,\x20orang\x20lemah\x20membicarakan\x20orang\x20lainOrang\x20pintar\x20itu\x20biasa\x20orang\x20hebat\x20itu\x20luar\x20biasa\x20tapi\x20orang\x20berani\x20lah\x20pemenangnyahidup\x20seseorang\x20telah\x20ditebak,\x20tapi\x20Nasib\x20orang\x20malas\x20mudah\x20untuk\x20ditebak','▨\x20PROFILE\x20▨','Hidup\x20yang\x20baik\x20adalah\x20hidup\x20yang\x20diinspirasi\x20oleh\x20cinta\x20dan\x20dipandu\x20oleh\x20ilmu\x20pengetahuan.','honey','ORG:Follow\x20_pa7rick\x20kak\x20:v;\x0a','quotesislami','798581kwNhhi','indexOf','add','thelazy','promote\x20@tag\x0a\x20•\x20','Example:\x20','\x0aMerk\x20:\x20','badmin','Judul:\x20','shortlink2','3dglue\x0a\x20•\x20','artinama\x0a\x20•\x20','webpmux\x20-set\x20exif\x20./temp/takestick_','((\x20S\x20U\x20I\x20T\x20))\x0aKamu\x20memilih\x20*Kertas*\x0aComp\x20memlih\x20*Batu*\x0a*Kamu\x20telah\x20menang!\x20:)*','Anti\x20Link','?q=','pernah\x20suka\x20sama\x20orang\x20dan\x20merasa\x20orang\x20itu\x20suka\x20sama\x20kamu\x20juga?','vpakboy','from','Tidak\x20ada\x20harga\x20untuk\x20waktu,\x20tetapi\x20waktu\x20sangat\x20berharga','ytplay\x0a\x20•\x20','_Succes\x20Join\x20Group!_','Berhasil\x20menghapus\x20sesi\x20tictactoe\x20di\x20grup\x20ini','*ShortLink\x20URL*\x0a▢\x20From\x20:\x20','Sebuah\x20perjalanan\x20ribuan\x20mil\x20dimulai\x20dari\x20langkah\x20kecil','creation','3️⃣','listban\x0a\x20•\x20','display_size','\x20tere\x20liye','.webp','audio/mp4','audio','quotesnasehat\x0a\x20•\x20','listsurah','shortlink2\x20\x0a\x20•\x20','\x0aYour\x20Balance:\x20','https://nekos.life/api/v2/img/holo','Link\x20:\x20','vbeban','*OS*\x20:\x20','Realitas\x20kehidupan\x20Anda\x20adalah\x20deskripsi\x20dari\x20jiwa\x20dan\x20pikiran\x20anda','gif','shift','4\x20Tahun\x20Lagi','playstore','Nomor\x20wa.me/','sepia','*Wrong\x20Format!!*\x0aExample\x20','jadwaltv\x20\x0a\x20•\x20','https://leyscoders-api.herokuapp.com/api/shopee?q=','stickersearch\x0a\x20•\x20','vjahat\x0a\x20•\x20','all','List\x20Badword\x0aTotal\x20:\x20','https://dapuhy-api.herokuapp.com/api/socialmedia/ytmp3?url=','toString','\x0a>\x20*Serial\x20Number\x20:\x20','\x0aThumb\x20:\x20','quotedM','removebg\x0a\x20•\x20','text\x20mana\x20broh?\x0acontoh\x20:\x20','\x0a>\x20Jumlah\x20:\x20Ub\x20\x20\x20\x20','addgambar','messageSend','glass\x0a\x20•\x20','\x0a\x20URL\x20:\x20','browserDescription','artinama','dare\x0a\x20•\x20','kawai','▨\x20AUDIO\x20▨','linknya\x20mana\x20su?\x0acontoh\x20','tulis','\x0aAuthor\x20:\x20','Pernah\x20suka\x20sama\x20siapa\x20aja?\x20berapa\x20lama?','Pilih\x20Yang\x20Mau\x20Diaktifkan','.png','listblock\x0a\x20•\x20','Ngocokin\x20Doi','*Wrong\x20Format!!*\x0aExample:\x20','*Channel:*\x20','Besok','quotesislami\x0a\x20•\x20','Tidak\x20Akan\x20Pernah','1️⃣','truth','vwibu\x0a\x20•\x20','listsay\x0a\x20•\x20','vjelek','pernah\x20jadi\x20selingkuhan\x20orang?','Command\x20ini\x20tidak\x20bisa\x20digunakan\x20di\x20dalam\x20grup!','jahat','Upload\x20Date:\x20','Memaafkan\x20orang\x20lain\x20bagai\x20Menyiram\x20air\x20Bara\x20dendam\x20di\x20hati\x20baik\x20untuk\x20kesehatan\x20kita','*Judul*\x20:\x20','If\x20the\x20button\x20doesn\x27t\x20visible\x20\x0aType\x20and\x20send\x20the\x20code\x20here','1\x20Abad\x20lagi','cantik','comments','\x0aUrl\x20:\x20','judul','moddroid','Karena\x20aku\x20percaya\x20apapun\x20yang\x20menjadi\x20milikku\x20akan\x20tetap\x20menjadi\x20milikku.\x20Sejauh\x20apapun\x20dia\x20(mencoba)\x20pergi.\x20Sejauh\x20apapun\x20usaha\x20orang\x20lain\x20ingin\x20merebutnya\x20dariku.\x20Aku\x20hanya\x20perlu\x20percaya\x20pada\x20Allah\x20bahwa\x20yang\x20menjadi\x20milikku\x20tidak\x20akan\x20pernah\x20menjadi\x20milik\x20orang\x20lain.','hidup\x20seseorang\x20telah\x20ditebak,\x20tapi\x20Nasib\x20orang\x20malas\x20mudah\x20untuk\x20ditebak','5️⃣','•\x20Time:\x20','\x20-filter:a\x20\x22atempo=1.6,asetrate=22100\x22\x20','Bintang\x20pun\x20tak\x20kan\x20bersinar\x20tanpa\x20kegelapan','othermenu','68cb5bee517bce4f74b0e910a5d96346','Menjadi\x20dewasa\x20dan\x20bijak\x20diawali\x20dengan\x20menjadi\x20muda\x20dan\x20bodoh','NIH\x20OM!!','Pikiran\x20negatif\x20sangat\x20berkuasa\x20bila\x20diberi\x20kesempatan,\x20jadi\x20jangan\x20memberinya\x20kesempatan','Ketika\x20situasi\x20di\x20sekolah\x20Anda\x20tidak\x20menyenangkan.\x20Di\x20saat\x20itulah\x20sebenarnya\x20karakter\x20anda\x20sedang\x20dibentuk','Sukses\x20seringkali\x20datang\x20pada\x20mereka\x20yang\x20berani\x20bertindak\x20dan\x20jarang\x20menghampiri\x20pada\x20mereka\x20yang\x20dikalahkan\x20ketakutan','get','Yang\x20paling\x20melelahkan\x20dalam\x20hidup\x20adalah\x20menjadi\x20orang\x20yang\x20tidak\x20tulus.','minutes','https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg','discordblue','\x0aSize\x20:\x20','Ingat\x20iya..\x20Perilaku\x20mu\x20bisa\x20mengubah\x20perasaan\x20seseorang.','Success\x20Menambahkan\x20Bad\x20Word!','kuni','leaderboard','https://leyscoders-api.herokuapp.com/api/instagram/video?url=','Syukuri\x20yang\x20menyayangimu,\x20Maafkan\x20yang\x20menyakitimu.','slice','https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=','8bit\x20\x0a\x20•\x20','VIDEO','hal\x20yang\x20paling\x20ditakutin','naruto\x0a\x20•\x20','stikga','\x20menantang\x20@','\x0a>\x20Album:\x20','Nih\x20Gan!','sepia\x0a\x20•\x20','Tautan\x20grup\x20tidak\x20melebihi\x20','.mp3','Sad\x20amat\x20main\x20ama\x20diri\x20sendiri','acceptInvite','\x20NGGYU','publish','\x0a>Release\x20date:\x20','Mungkin\x20kamu\x20hanya\x20harus\x20sedikit\x20peka\x20untuk\x20menyadari\x20petunjuk\x20dari\x20Tuhan\x20atas\x20doa-doamu.','KAWAII!!','\x20untuk\x20masuk\x20ke\x20dalam\x20Group!\x0aKetik\x20','getSewaPosition','addsewa\x0a\x20•\x20','includes','\x0a\x0a➸\x20*ID\x20:*\x20','heleh','hal\x20yang\x20bikin\x20seneng\x20pas\x20lu\x20lagi\x20sedih\x20apa','speed','unban\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20~\x20','link','say\x0a\x20•\x20','harga',']*\x20wa.me/','\x0a\x0aWaktu\x20:\x20','Hello,\x20PatrickBot\x20disewa\x20di\x20grup\x20ini!\x0aSelama:\x20','Hanya\x20mereka\x20yang\x20berani\x20mengambil\x20resiko\x20yang\x20jauh\x20pasti\x20dapat\x20menemukan\x20Seberapa\x20jauh\x20seseorang\x20dapat\x20pergi','gay\x0a\x20•\x20','•\x20\x20Speed\x20:\x20','Tidak\x20Bisa','\x0a*Expire\x20:*\x20','neko2\x0a\x20•\x20','Jangan\x20menukar\x20apa\x20yang\x20sangat\x20anda\x20inginkan\x20untuk\x20apa\x20yang\x20Anda\x20ingin\x20untuk\x20saat\x20ini','admin','Fitur\x20ini\x20khusus\x20free\x20member!','Can\x20only\x20send\x20messages\x20in\x20Indonesia\x20(62)','\x0a>\x20Artists:\x20','apakah','pernah\x20gak\x20nyuri\x20uang\x20nyokap\x20atau\x20bokap?\x20Alesanya?','storage','Tidak\x20ada\x20kata\x20gagal\x20yang\x20ada\x20hanya\x20sukses\x20atau\x20perlu\x20belajar\x20lagi\x20sampai\x20berhasil','aesthetic','https://api.zeks.xyz/api/siapa-aku?apikey=','Berbicara\x20Sendiri','banlist','vnggagur','ss\x20recent\x20call\x20whatsapp','timer\x0a\x20•\x20','hartatahta\x0a\x20•\x20','snap/post\x20foto\x20pacar/crush','\x0a\x0a\x20Size\x20:\x20','Judul\x20Group\x20:\x20','wibu','6️⃣','Jangan\x20menilai\x20orang\x20dari\x20masa\x20lalunya\x20karena\x20kita\x20semua\x20sudah\x20tidak\x20hidup\x20disana.\x20Semua\x20orang\x20bisa\x20berubah,\x20biarkan\x20mereka\x20membuktikannya.','Keberuntungan\x20adalah\x20saat\x20kesempatan\x20datang,\x20anda\x20telah\x20matang\x20dengan\x20segala\x20persiapan','contextInfo','Desah\x20Di\x20Game','brokenglass\x0a\x20•\x20','Setia\x20itu\x20bukan\x20yang\x20selalu\x20ada,\x20namun\x20saat\x20tak\x20bersama\x20dia\x20tahu\x20hatinya\x20milik\x20siapa.','kebiasaan\x20terburuk\x20lo\x20pas\x20di\x20sekolah\x20apa?','Jika\x20hari\x20ini\x20sudah\x20sempurna\x20maka\x20Apalah\x20arti\x20hari\x20esok','\x0a*Please\x20click\x20the\x20button\x20again!!*','error','•\x20\x20Browser\x20:\x20','if\x20the\x20button\x20is\x20not\x20visible\x0atype\x20','couple','Cinta\x20akan\x20membuat\x20kita\x20menjadi\x20orang\x20terkaya\x20di\x20dunia,\x20oleh\x20karena\x20itu\x20mulailah\x20mencintai','*Succes\x20Broadcast!!*','Hello,\x20Please\x20click\x20the\x20code\x20that\x20was\x20sent\x20by\x20the\x20bot','\x0a\x0aCode\x20was\x20Expired\x20in\x2010s!','*Aktif!*','8️⃣','Belum\x20Aktif!','Play\x20Store\x20Search\x20:\x20\x0a','Apapun\x20yang\x20terjadi\x20Yakinlah\x20bahwa\x20Allah\x20menginginkan\x20kita\x20akan\x20jadi\x20lebih\x20baik\x20karena\x20Kejadian\x20ini','ram_size','Tetaplah\x20kuat,\x20Tetaplah\x20positif,\x20Buatlah\x20mereka\x20bertanya-tanya\x20bagaimana\x20kamu\x20masih\x20tetap\x20bisa\x20tersenyum.','Ketika\x20cinta\x20itu\x20dipertahankan\x20kamu\x20akan\x20tau\x20siapa\x20yang\x20lebih\x20menghargai\x20tentang\x20sebuah\x20hubungan','tiktokdownload','sticker\x20(durasi\x20sticker\x20video\x201-9\x20detik)','VERSION:3.0\x0a','Maaf,\x20Hanya\x20Angka\x20Yang\x20Diperbolehkan','readall','device_manufacturer','rate\x0a\x20•\x20','pernah\x20cinta\x20bertepuk\x20sebelah\x20tangan?\x20kalo\x20pernah\x20sama\x20siapa?\x20rasanya\x20gimana\x20brou?','toLowerCase','surat','nulis','Developer\x20:\x20','leaderboard\x0a\x20\x0a◉\x20*Owner\x20Menu*\x0a\x20•\x20','buka','▨\x20PING\x20▨','Next\x20Partner','ad\x0a\x20•\x20','Format\x20Salah!\x0aContoh:\x20','quotesmotivasi','glowmetalic\x0a\x20•\x20','nolep\x0a\x20•\x20','substring','*Code\x20ini\x20bersifat\x20PRIVATE*\x0a*Code\x20mu*\x20','ayat','naruto','\x0aImage\x20:\x20','Masalah\x20akan\x20datang\x20cepat\x20atau\x20lambat.\x20Jika\x20masalah\x20datang,\x20sambut\x20dengan\x20sebaik\x20mungkin.\x20Semakin\x20ramah\x20Anda\x20menyapanya,\x20semakin\x20cepat\x20ia\x20pergi.','rasa\x20syukur\x20membuat\x20kita\x20tidak\x20pernah\x20merasa\x20kekurangan','videoMessage','groupMakeAdmin','https://chat.whatsapp.com/','\x0a\x0a\x20Untuk\x20membalas\x20ketik\x20\x0a\x20•\x20','memeindo','Created\x20By\x20PatrickBot','Anti\x20Virtex','size','Jatuh\x20cintalah\x20seperlunya..\x20Kemudian\x20patah\x20hatilah\x20secukupnya.\x20Karena\x20semua\x20ada\x20porsinya,\x20Karena\x20semua\x20ada\x20masanya.','Bersyukurlah..\x20Untuk\x20segala\x20apapun\x20yang\x20engkau\x20miliki\x20saat\x20ini,\x20sebab\x20nikmat\x20itu\x20akan\x20bertambah\x20ketika\x20kamu\x20dapat\x20mensyukuri\x20apa\x20yang\x20telah\x20diberi\x20saat\x20ini.\x20#Buat\x20diri\x20ini\x20jangan\x20banyak\x20mengeluh\x20yah.','honey\x0a\x20•\x20','\x0aLink\x20:\x20','chipset','writing\x0a\x20•\x20','Takut\x20akan\x20kegagalan\x20seharusnya\x20tidak\x20menjadi\x20alasan\x20untuk\x20tidak\x20mencoba\x20sesuatu','\x0a*Total\x20Jawaban\x20:*\x20','tomp3','Lihatlah\x20tantangan\x20sebagai\x20ujian\x20dan\x20lihatlah\x20masalah\x20Sebagai\x20teguran','stickerMessage','\x0a>\x20*Nominal\x20Purchase*\x20:\x20','Hidup\x20itu\x20sederhana,\x20kita\x20yang\x20membuatnya\x20sulit.','\x0aYour\x20Limit:\x20','7️⃣','\x20tagged!','Masih\x20ada\x20soal\x20yang\x20belum\x20di\x20selesaikan','Selamat🥳\x20anda\x20naik\x20menjadi\x20admin\x20grub\x20(+_+)\x20:\x0a','rate','join','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','Keputusan\x20yang\x20baik\x20diperoleh\x20dari\x20pengalaman,\x20dan\x20pengalaman\x20didapat\x20dari\x20keputusan\x20yang\x20buruk','clearall','*Author*\x20:\x20','tebakangka\x0a\x20•\x20','dislike','2\x20Minggu\x20Lagi','Bukannya\x20Allah\x20tidak\x20tahu\x20sedihmu,\x20Tapi\x20Allah\x20tahu\x20kalau\x20kamu\x20itu\x20kuat.','wa.me/','User:\x20','\x0aBerikut\x20ini\x20Feature\x20Group\x20Yang\x20Belum\x20Aktif\x0a\x0a❏\x20*Antilink:*\x0a╰─\x20','Kenyataannya,\x20Anda\x20tidak\x20tahu\x20apa\x20yang\x20akan\x20terjadi\x20besok.\x20Hidup\x20adalah\x20pengendaraan\x20yang\x20gila\x20dan\x20tidak\x20ada\x20yang\x20menjaminnya.','*❗\x20Lagu\x20Telah\x20Ditemukan*\x0a','create','comrade','stringify','lava\x0a\x20•\x20','Tidak\x20ada\x20sesi\x20game\x20tictactoe\x20di\x20grup\x20ini','Anti\x20Spam\x20(Sticker)','wget\x20','*Youtube\x20Play\x20(YTPLAY)*','ytplay\x20nggyu','•\x20\x20Group\x20Chat\x20:\x20','*Dislike:*\x20','groupDemoteAdmin','Pastikan\x20Ub\x20Kamu\x20Tercukupi','realisticvintage\x0a\x20•\x20','Selamat🥳\x20@','quotemaker','download','Minimal\x20Beli\x201\x20Sayang','push','Likes:\x20','silk\x0a\x20•\x20','Asal\x20percaya\x20dengan\x20sungguh-sungguh\x20apapun\x20keyakinan\x20Anda\x20dapat\x20menjadi\x20kenyataan','greenneon','sebuah\x20masalah\x20merupakan\x20kesempatan\x20bagi\x20anda\x20untuk\x20mengeluarkan\x20kemampuan\x20terbaik\x20anda','Satu\x20ons\x20tindakan\x20sama\x20berharganya\x20dengan\x20satu\x20ton\x20teori','menu\x20untuk\x20Melihat\x20Fitur\x20Bot!','Waktu\x20habis','s.whatsapp.net','6288989029718','siapa\x20orang\x20yang\x20bisa\x20membuatmu\x20sange','uang\x20tidak\x20merusak\x20seseorang,\x20keserakahan\x20lah\x20yang\x20merusak\x20manusia','airpods','imgbb-uploader','Gunakan\x20kode\x20negara\x20mas','infogrup','𝗕𝗟𝗢𝗖𝗞\x20𝗟𝗜𝗦𝗧\x20:\x0a','isSiapakah','Penundaan\x20adalah\x20kuburan\x20dimana\x20peluang\x20dikuburkan.','jid','\x0a>\x20Pajak\x20:\x20','Disable\x20NSFW\x20Mode','*Storage*\x20:\x20','𝗧𝗼𝘁𝗮𝗹\x20:\x20','battery_size','vhebat','now','premiummenu','save','&text2=','\x20tag\x20member','*Feature\x20Group*','vnolep','3dbox\x0a\x20•\x20','Carilah\x20tempat\x20dimana\x20kamu\x20bisa\x20dihargai,\x20Bukan\x20dibutuhkan.\x20Karena\x20banyak\x20orang\x20mencarimu\x20hanya\x20saat\x20butuh\x20saja,\x20Hingga\x20lupa\x20bagaimana\x20cara\x20menghargaimu.','reedem','prepareMessage','discordblack','Membantu\x20Orang\x20lain','Kepercayaan\x20tidak\x20bisa\x20dibeli,\x20tapi\x20kepercayaan\x20bisa\x20dipelihara','telfon\x20crush/pacar\x20sekarang\x20dan\x20ss\x20ke\x20pemain','Ambillah\x20kebenaran,\x20jika\x20kamu\x20telah\x20mendengarnya.\x20Karena\x20sungguh\x20di\x20atas\x20kebenaran\x20ada\x20cahaya.\x20(HR.\x20Abu\x20Daud)','Seseorang\x20pernah\x20berkata\x20padaku,\x20Merelakan\x20bukan\x20berarti\x20menyerah,\x20Tapi\x20tidak\x20bisa\x20dipaksakan.','prank\x20chat\x20mantan\x20dan\x20bilang\x20\x22\x20i\x20love\x20u,\x20pgn\x20balikan','Jika\x20kamu\x20tidak\x20bisa\x20membahagiakan\x20orang\x20lain,\x20Setidaknya\x20janganlah\x20kamu\x20tambah\x20dukanya.','\x0a❏\x20*Antivirtex:*\x0a╰─\x20','Hello\x20','downloadAndSaveMediaMessage','setname\x20teks\x0a\x20•\x20','Sahabat\x20yang\x20jujur\x20lebih\x20besar\x20harganya\x20daripada\x20harta\x20benda\x20yang\x20diwarisi\x20dari\x20nenek\x20moyang.','toimg\x20\x20\x0a\x20•\x20','*Perintah\x20ini\x20Khusus\x20Adminban!*','Yang\x20paling\x20','Kirim\x20perintah\x20','Allah\x20tidak\x20membenci\x20orang\x20malas,\x20tapi\x20Allah\x20mengizinkan\x20orang\x20rajin\x20mengambil\x20rezeki\x20orang\x20malas','multicolor3d\x0a\x20•\x20','end','isTek','Berhasil\x20membaca\x20','rating','resetlimit','chats','user','*\x0a𝗧𝗼𝘁𝗮𝗹\x20:\x20','\x0a\x20\x20\x20\x20Code\x202\x20=\x20','split','input','@s.whatsapp.net','Apa\x20yang\x20akan\x20Anda\x20kerjakan,\x20Ketika\x20anda\x20tahu\x20anda\x20tidak\x20mungkin\x20gagal','•\x20\x20Versi\x20WA\x20:\x20','contact','suit','dadu','swm\x20\x0a\x20•\x20','*Resolution*\x20:\x20','islammenu','https://dapuhy-api.herokuapp.com/api/ephoto/','uptime','googleimage','downloadmenu','Sahabat\x20itu\x20seperti\x20bintang,\x20tak\x20selalu\x20Nampak\x20tetapi\x20selalu\x20ada\x20dihati','Succes!!','video','setdesc\x20teks\x0a\x20•\x20','Berani\x20mengambil\x20keputusan\x20maka\x20anda\x20telah\x20melangkah\x2010\x20kali\x20lebih\x20cepat\x20untuk\x20sukses','-vcodec','Jangan\x20menilai\x20kedewasaan\x20dari\x20usia\x20seseorang,\x20Karena\x20itu\x20bukan\x20jaminan.','Mulailah\x20dengan\x20yang\x20kecil,\x20Kerjakanlah\x20dengan\x20cara\x20yang\x20besar\x20adalah\x20dengan\x20cara\x20yang\x20benar','Jika\x20ada\x20hari\x20buruk\x20maka\x20pasti\x20akan\x20hari\x20ada\x20hari\x20baik\x20tugas\x20kita\x20adalah\x20terus\x20bergerak\x20majuAsal\x20percaya\x20dengan\x20sungguh-sungguh\x20apapun\x20keyakinan\x20Anda\x20dapat\x20menjadi\x20kenyataan','jalantikus\x0a\x20•\x20','Menjadi\x20tua\x20itu\x20pasti\x20menjadi\x20dewasa\x20itu\x20pilihan','Nih','\x20config\x20pubg','emoji\x0a\x20•\x20','List\x20admin\x20of\x20group\x20*','3dbox','groupsearch','\x0a>\x20Pesan\x20:\x20','\x0aYour\x20Limit:\x20Unlimited','Ketika\x20kamu\x20melakukan\x20sebuah\x20kesalahan,\x20Akuilah\x20dan\x20jangan\x20ragu\x20untuk\x20meminta\x20maaf.\x20Tidak\x20pernah\x20ada\x20satupun\x20orang\x20dalam\x20sejarah\x20yang\x20mati\x20tersedak\x20karena\x20menelan\x20gengsinya\x20sendiri.','message','tupai\x0a\x20•\x20','take','Kesalahan\x20adalah\x20bukti\x20bahwa\x20kamu\x20sedang\x20mencoba','webp','DD\x20MM\x20YYYY\x20|\x20HH:mm:ss','ping\x0a\x20•\x20','ytmp4v2','https://api.zeks.xyz/api/artimimpi?apikey=D40LVbLehmSk17EiOGhWMtAjMe6&q=','moddroid\x0a\x20•\x20','*Rules\x20For\x20User\x20PatrickBot*\x0a\x0a▣\x20Tolong\x20Gunakan\x20Delay\x20Jangan\x20Terlalu\x20Dispam\x20Saat\x20Menggunakan\x20Bot.\x0a▣\x20Jangan\x20Call/VC\x20Bot\x20Kalau\x20Tidak\x20aktif.\x0a▣\x20PatrickBot\x20Online\x2024\x20Jam\x20tapi\x20kadang\x20Disconnect.\x0a\x0aRules\x20ini\x20untuk\x20kenyamanan\x20semua\x20yang\x20memakai\x20bot\x20ini\x0a1.\x20Jangan\x20terlalu\x20spam\x20bot.\x0aSanksi:\x20*WARN/SOFT\x20BLOCK*\x20=\x20Tidak\x20Direspon\x20selama\x205\x20detik!\x0a\x0a2.\x20Jangan\x20telepon\x20bot.\x0aSanksi:\x20*SOFT\x20BLOCK*\x20=\x20Block!\x0a\x0a3.\x20Jangan\x20mengeksploitasi\x20bot.\x0aSanksi:\x20*PERMANENT\x20BLOCK*\x20=\x20Banned\x20+\x20Block!\x0a\x0aJika\x20sudah\x20dipahami\x20rules-nya,\x20silakan\x20ketik\x20*','*\x0a\x0aJawaban\x20:\x20','release_date','\x0a\x20>\x20*XP*\x20:\x20','Keraguan\x20bersahabat\x20dekat\x20dengan\x20kegagalan','5\x20Hari\x20Lagi','greyscale','Letakkan\x20hpmu\x20lalu\x20ambil\x20air\x20wudhu,\x20shalatlah\x20kamu,\x20Allah\x20menunggu\x20curhatan\x20darimu.','lava','https://api.zeks.xyz/api/estetikpic?apikey=','husbu2\x20\x20\x0a\x20•\x20','•\x20\x20Total\x20Premium\x20User\x20:\x20','ping','pakgirl\x0a\x20•\x20','NIKMATI\x20HIDUPMU,\x20LUPAKAN\x20UMURMU.','Lebih\x20baik\x20mengerti\x20sedikit\x20daripada\x20salah\x20mengerti.','*Pesan\x20Report\x20Telah\x20Terkirim!*','https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg','\x0aBerikut\x20ini\x20Feature\x20Group\x20Yang\x20Belum\x20Aktif\x0a\x0a❏\x20*Antilink:*\x0a╰──\x20','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','ganti\x20nama\x20menjadi\x20\x22gue\x20anak\x20lucinta\x20luna\x22\x20selama\x205\x20jam','\x20-O\x20','qrcode','catch','addfam','Bukan\x20banyaknya\x20panah\x20yang\x20menentukan\x20kemenangan\x20tapi\x20tajam\x20panah\x20dan\x20tujuannya\x20yang\x20menentukan','\x0a❏\x20*Leveling:*\x0a╰─\x20','?text1=','Succes,\x20wa.me/','ban\x0a\x20•\x20','Urlnya\x20mana\x20gan?','((\x20S\x20U\x20I\x20T\x20))\x0aKamu\x20memilih\x20*Batu*\x0aComp\x20memlih\x20*Kertas*\x0a*Kamu\x20telah\x20kalah!\x20:(*','readFileSync','((\x20S\x20U\x20I\x20T\x20))\x0aKamu\x20memilih\x20*','•\x20User\x20:','level','1OiKtlF','827876MydUTD','https://dapuhy-api.herokuapp.com/api/search/googleimage?query=','Kebesaran\x20sebenarnya\x20dapat\x20ditemukan\x20dalam\x20hal\x20hal\x20kecil\x20yang\x20terkadang\x20kita\x20lewatkan','Dahulukan\x20Allah\x20dalam\x20setiap\x20langkah\x20hidupmu\x20maka\x20semuanya\x20akan\x20ditambahkan\x20kepadamu','join\x20linkgrup','\x0a❏\x20*Antispam\x20(Sticker):*\x0a╰─\x20','\x0a❏\x20*Antibadword:*\x0a╰──\x20','daftar','Penggunaan\x20:\x0a*','\x0a❏\x20*SimiSimi:*\x0a╰──\x20','bokeh','\x0a\x0a*If\x20there\x20is\x20no\x20code\x20button*\x0a*sent\x20by\x20the\x20bot*\x0ajust\x20type\x20*','Malas\x20adalah\x20kemenangan\x20saat\x20ini\x20dan\x20kekalahan\x20di\x20masa\x20nanti','search','https://nekos.life/api/v2/img/meow','Kita\x20tidak\x20pernah\x20tau\x20jalan\x20hidup\x20seseorang..\x20Maka\x20ada\x20baiknya\x20jika\x20kita\x20tidak\x20menghakiminya\x20atas\x20keputusan\x20dalam\x20hidupnya.','groupmenu','•\x20\x20Handphone\x20:\x20','Semoga\x20hari\x20ini\x20Allah\x20memudahkan\x20setiap\x20urusan\x20kita,\x20melapangkan\x20hati\x20kita\x20serta\x20meringankan\x20langkah\x20kita,\x20dalam\x20kebaikan\x20kita\x20Aamiin.','expired','\x20untuk\x20bermain\x20TicTacToe\x0a\x0aKirim\x20(Y/T)\x20untuk\x20bermain','https://dapuhy-api.herokuapp.com/api/maker/nulis?text=','continued','apa\x20ketakutan\x20terbesar\x20kamu?','airpods\x0a\x20•\x20','group\x20buka\x20|\x20tutup\x0a\x20•\x20','Jangan\x20meninggalkan\x20yang\x20pasti\x20demi\x20yang\x20mungkin.\x20Sebab\x20semua\x20kemungkinan,\x20belum\x20tentu\x20menjadi\x20kepastian.','Bilang\x20\x22KAMU\x20CANTIK\x20BANGET\x20NGGAK\x20BOHONG\x22\x20ke\x20cowo','listbadword','published','Nih\x20anjim','-\x20@','\x0aComments\x20:\x20','mutual','conversation','Jangan\x20pernah\x20meremehkan\x20siapapun!\x20Karena\x20sukses\x20adalah\x20balas\x20dendam\x20Terbaik.','3dglowing','batu','femdom','Usia\x20hanyalah\x20angka,\x20Hanya\x20mereka\x20yang\x20terus\x20berusaha\x20yang\x20berhasil.','participants','Jangan\x20sampai\x20kesenanganmu\x20menyusahkan\x20orang\x20lain.\x20Jangan\x20pula\x20kesusahanmu\x20menyenangkan\x20orang\x20lain.','Nih\x20om','teriak\x20gajelas\x20lalu\x20kirim\x20pake\x20vn\x20kesini','pow','Title:\x20','\x20*Level*:\x20','Menang\x20atau\x20kalah\x20lakukanlah\x20dengan\x20jujur','\x0a\x20\x20\x20\x20From:\x20','Nobar','Peganglah\x20aku,\x20bacalah\x20aku\x20setiap\x20hari,\x20karena\x20aku\x20akan\x20menjadi\x20penerang\x20didalam\x20kuburmu\x20nanti.\x20#Al-Quran','\x0a>\x20*Jumlah\x20Peserta\x20:*\x20','tomp3\x20\x0a\x20•\x20','Setiap\x20waktu\x20yang\x20anda\x20lewati\x20dengan\x20sia-sia\x20hanya\x20menjauhkan\x20anda\x20dan\x20semakin\x20jauh\x20dari\x20kata\x20sukses','Tanyakan\x20Ayam','\x20\x20❤️\x20@','200871iQyaIk','Total\x20:\x20','triggered\x0a\x20•\x20','premon','vpakboy\x0a\x20•\x20','continued\x0a\x20•\x20','jadwaltv','atasan\x20hanya\x20memberikan\x20tugas\x20berat\x20pada\x20karyawan\x20terbaik,\x20Allah\x20hanya\x20memberikan\x20ujian\x20pada\x20pada\x20manusia\x20terbaikKadang\x20cara\x20terbaik\x20untuk\x20Memanfaatkan\x20peluang\x20adalah\x20dengan\x20mengatakan\x20tidak\x20pada\x20peluang\x20baru\x20dan\x20fokus\x20mengembangkan\x20apa\x20yang\x20sudah\x20ada\x20di\x20tanganjangan\x20takut\x20karena\x20masalah\x20yang\x20anda\x20hadapi\x20tidak\x20lebih\x20besar\x20dari\x20jalan\x20keluarnya,\x20Allah\x20siapkan\x20bagi\x20andaAda\x20saatnya\x20penundaan\x20memberikan\x20keuntungan\x20terutama\x20saat\x20terlalu\x20emosi\x20untuk\x20mengambil\x20keputusan','>\x20*Name\x20:*\x20','delttc','Bacalah\x20Al-Quran,\x20Ia\x20akan\x20menenangkan\x20hatimu\x20meskipun\x20engkau\x20tidak\x20memahami\x20artinya.','bearlogo','\x0a>\x20*Price\x20Limit*\x20:\x20Ub\x20','creator','Orang\x20yang\x20berhenti\x20belajar\x20akan\x20menjadi\x20pemilik\x20masa\x20lalu,\x20orang\x20yang\x20terus\x20belajar\x20akan\x20menjadi\x20pemilik\x20masa\x20depan','🎟️\x20Selamat\x20anda\x20mendapatkan\x20Premium\x20User\x20dari\x20owner\x0aKetik\x20.premiummenu\x20untuk\x20fitur\x20premium','name','Tidak\x20ada\x20jaminan\x20keberhasilan,\x20tetapi\x20tidak\x20berusaha\x20adalah\x20jaminan\x20kegagalan.','Tunggu!,\x20Sedang\x20Proses\x20Download','lovemessage','other','Saya\x20memiliki\x20filosofi\x20yang\x20sederhana:\x20isi\x20apa\x20yang\x20kosong,\x20kosongkan\x20apa\x20yang\x20terlalu\x20penuh.','asupan\x0a\x20•\x20','stickerwm','author','toFormat','marvelstudio\x0a\x20•\x20','https://leyscoders-api.herokuapp.com/api/','tiktokdownload\x0a\x20•\x20','leaderboard\x0a\x0a◉\x20*Owner\x20Menu*\x0a\x20•\x20','Channel\x20:\x20','demote\x20@tag\x0a\x20•\x20','Jangan\x20cari\x20yang\x20sempurna,\x20Sempurnakan\x20saja\x20yang\x20ada.','teriak\x20\x22\x20anjimm\x20gabutt\x20anjimmm\x20\x22\x20di\x20depan\x20rumah\x20mu','*Display\x20Size*\x20:\x20','32IvYHFj','lirik','Bekerjalah\x20seolah\x20kamu\x20tak\x20butuh\x20uang,\x20Cintailah\x20seolah\x20Kamu\x20takkan\x20Tersakiti\x20dan\x20menarilah\x20seakan\x20tak\x20ada\x20yang\x20melihatmu','hours','•\x20\x20Personal\x20Chat\x20:\x20','Tadi','aesthetic\x0a\x20•\x20','Aku\x20sangat\x20ingin\x20menjadi\x20pemburu\x20surga.\x20Namun\x20aku\x20lupa\x20bahwa\x20aku\x20juga\x20buronan\x20neraka.','Kirim\x20gambar/video/gif\x20dengan\x20caption\x20\x0a','\x0a\x0a*Untuk\x20mengaktifkannya,\x20Ketik\x20','https://nekos.life/api/v2/img/kemonomimi','\x20telah\x20dibanned\x20!','multipart/form-data','dellsewa\x0a\x20•\x20','delete','ssweb','brainly','vcantik','parse','Ilmu\x20pengetahuan\x20tanpa\x20agama\x20adalah\x20pincang.','\x20pesan','array','tts\x0a\x20•\x20','addbadword','holo','285477jxlSRg','https://dapuhy-api.herokuapp.com/api/search/playstore?query=','https://leyscoders-api.herokuapp.com/api/moddroid?q=','ssweb\x0a\x20•\x20','berusaha\x20dan\x20gagal\x20Ternyata\x20jauh\x20lebih\x20melegakan\x20daripada\x20pasrah\x20melihat\x20ke\x20kanan\x20dengan\x20tangan\x20terlipat','addprem','\x0a❏\x20*Welcome:*\x0a╰──\x20','Cemas\x20yang\x20berlebihan\x20tidak\x20akan\x20mengubah\x20apapun\x20kecuali\x20merusak\x20diri\x20sendiri','lastIndexOf','\x0a\x0a~\x20SB-129','Asia/Jakarta','Cara\x20Allah\x20menjawab\x20doa\x20hambanya\x20:\x20Iyaa..\x20aku\x20beri\x20untukmu\x20sekarang.\x20Tunggu,\x20aku\x20ingin\x20melihat\x20dulu\x20perjuanganmu.\x20Tidak,\x20aku\x20punya\x20yang\x20lebih\x20baik\x20untukmu.','https://dapuhy-api.herokuapp.com/api/fun/susunkata?apikey=','Mengeluh\x20adalah\x20cara\x20paling\x20buruk\x20dalam\x20menyelesaikan\x20masalah','\x0a>\x20Serial\x20:\x20','3\x20Tahun\x20Lagi','Berubah\x20menjadi\x20lebih\x20baik\x20adalah\x20pilihan.\x20Tapi,\x20merasa\x20paling\x20baik\x20adalah\x20kesalahan.','./data/data/limit.json','pencapaian\x20yang\x20udah\x20didapet\x20apa\x20aja\x20ditahun\x20ini?','csgo\x0a\x20•\x20','\x20member\x0aPatrickBot\x20tidak\x20dapat\x20masuk!','tts','hasil','Kamu\x20boleh\x20lelah,\x20tetapi\x20tidak\x20boleh\x20menyerah\x20untuk\x20selamanya.','Jangan\x20takut\x20menghadapi\x20masa\x20depan,\x20hadapi\x20dan\x20perjuangkanlah','*P\x20L\x20A\x20Y*\x0a\x0a\x20Title\x20:\x20','\x20\x20\x20\x20*All\x20Info\x20PatrickBot*\x0a','*Views:*\x20','MP3','Tetap\x20Bertahan\x20dan\x20setia\x20pada\x20tujuan\x20saat\x20menghadapi\x20Hambatan\x20adalah\x20kunci\x20kesuksesan','quran\x0a\x20•\x20','Segala\x20sesuatu\x20masalah\x20yang\x20menimpa\x20Anda\x20tidak\x20akan\x20pernah\x20melatih\x20kekuatan\x20anda\x20untuk\x20menyelesaikannya','0000','kemonomimi','makequote\x0a\x20•\x20','groupInviteCode','female','data:image/jpeg;base64,','phone','report*\x0a*if\x20there\x20is\x20an\x20error*\x0a━━━━━━━━━━━━━━━','semua\x20kemajuan\x20tidak\x20akan\x20ada\x20tanpa\x20kesalahan,\x20kesalahan\x20adalah\x20bagian\x20dari\x20kemajuan\x20selama\x20diakui\x20dan\x20diperbaiki','steel\x20\x20\x20\x20\x20\x0a\x20•\x20','\x0a❏\x20Total\x20Register\x20:\x20','Bahagialah\x20orang\x20yang\x20dapat\x20menjadi\x20tuan\x20untuk\x20dirinya,\x20menjadi\x20kusir\x20untuk\x20nafsunya\x20dan\x20menjadi\x20kapten\x20untuk\x20bahtera\x20hidupnya.','teks','Lakukanlah\x20apa\x20yang\x20paling\x20kamu\x20takutkan\x20dalam\x20hidupmu','\x20\x20\x20\x20\x20\x20\x20\x20*Transfer\x20receipt*\x0a\x20\x20Pengiriman\x20Transfer\x20Berhasil\x0a\x0a>\x20From\x20:\x20','6288989029718@s.whatsapp.net','pertanyaan','\x0a❏\x20*Antibadword:*\x0a╰─\x20','Semakin\x20banyak\x20kamu\x20memberi,\x20semakin\x20banyak\x20pula\x20yang\x20akan\x20kembali\x20padamu.','Saat\x20kita\x20merasa\x20hebat\x20kita\x20baru\x20saja\x20kehilangan\x20separuh\x20pangkat\x20kita\x20karena\x20lengah\x20untuk\x20terus\x20belajar','kuni\x20\x0a\x20•\x20','Pura\x20pura\x20kerasukan,\x20contoh\x20:\x20kerasukan\x20maung,\x20kerasukan\x20belalang,\x20kerasukan\x20kulkas,\x20dll','•\x20\x20Total\x20Register\x20:\x20','pornhub','suit\x20batu','delsewa','jooxsearch','Orang\x20yang\x20tidak\x20belajar\x20dari\x20kegagalan\x20adalah\x20orang\x20yang\x20gagal\x20sesungguhnya','link\x20mana\x20broh?\x0acontoh\x20:\x20','tictactoe*\x20@tag','c.us','*Likes:*\x20','Ya\x20Allah...\x20Perbaikilah\x20lisanku,\x20Perbaikilah\x20hatiku,\x20Perbaikilah\x20akhlakku,\x20Perbaikilah\x20hidupku,\x20Aamiin..','Result','Kebaikan\x20adalah\x20seorang\x20yang\x20matanya\x20penuh\x20perhatian,\x20serta\x20tangannya\x20yang\x20penuh\x20manfaat','Simi\x20Simi','triggered','\x0aDurasi:\x20','beban','Mengeluh\x20itu\x20sisi\x20lain\x20dari\x20pemborosan,\x20pemborosan\x20waktu\x20dan\x20energy','math\x0a\x20•\x20','\x20telegram','Tidak\x20ada\x20karya\x20yang\x20pernah\x20dibuat\x20oleh\x20seorang\x20seniman\x20yang\x20malas.','Pemenang\x20sejati\x20selalu\x20memberikan\x20100%\x20upayanya,\x20bahkan\x20ketika\x20tidak\x20seorang\x20pun\x20melihatnya','igvideo','Ketahuilah\x20orang\x20yang\x20paling\x20sering\x20memberi\x20nasihat\x20kepadamu,\x20itulah\x20orang\x20yang\x20paling\x20mencintai\x20kamu.','bilang\x20\x22i\x20hv\x20crush\x20on\x20you,\x20mau\x20jadi\x20pacarku\x20gak?\x22\x20ke\x20lawan\x20jenis\x20yang\x20terakhir\x20bgt\x20kamu\x20chat\x20(serah\x20di\x20wa/tele),\x20tunggu\x20dia\x20bales,\x20kalo\x20udah\x20ss\x20drop\x20ke\x20sini','\x0aWaktu\x20:\x20','Click\x20Disini\x20||\x20Click\x20Here','Suka\x20belajar,\x20suka\x20jualan,\x20hidup\x20hemat,\x20beli\x20aset\x20suka,\x20sedekah\x20adalah\x205\x20resep\x20Makmur','Hasil\x20:\x20','subject','Siapa\x20nama\x20mantan\x20pacar\x20teman\x20mu\x20yang\x20pernah\x20kamu\x20sukai\x20diam\x20diam?','comrade\x0a\x20•\x20','siapakahaku','nolep','\x20Grup\x20PatrickBot','kirim\x20voice\x20note\x20bilang\x20can\x20i\x20call\x20u\x20baby?','seconds','Mana\x20teks\x20yang\x20ma\x20di\x20jadiin\x20suara?\x20suara\x20saya\x20kah:v?','4\x20Bulan\x20Lagi','Disable\x20Anti\x20Spam\x20(Sticker)','\x0a❏\x20*Leveling:*\x0a╰──\x20','?avatar=','tagstiker\x20\x0a\x20•\x20','\x0a•\x20~\x20PatrickBot','blocklist','\x0aPost\x20Date\x20:\x20','siapa\x20orang\x20yang\x20pernah\x20buatmu\x20sange','saylist','quotes','Reply/tag\x20sticker\x20!','key','Kecantikan\x20akan\x20mengundang\x20perhatian\x20sikap\x20santun\x20memikat\x20Kalbu','merk','captcha\x0a\x20•\x20','Ada\x20saatnya\x20penundaan\x20memberikan\x20keuntungan\x20terutama\x20saat\x20terlalu\x20emosi\x20untuk\x20mengambil\x20keputusan','limitend','.exif','mentionedJid','persen','Coba\x20Ulangi','jangan\x20takut\x20karena\x20masalah\x20yang\x20anda\x20hadapi\x20tidak\x20lebih\x20besar\x20dari\x20jalan\x20keluarnya,\x20Allah\x20siapkan\x20bagi\x20andaAda\x20saatnya\x20penundaan\x20memberikan\x20keuntungan\x20terutama\x20saat\x20terlalu\x20emosi\x20untuk\x20mengambil\x20keputusan','Jadilah\x20orang\x20baik\x20tapi\x20jangan\x20biarkan\x20orang\x20lain\x20mengambil\x20keuntungan\x20dari\x20mu.\x20Ketahuilah\x20kapan\x20kamu\x20harus\x20bilang\x20tidak.','((\x20S\x20U\x20I\x20T\x20))\x0aKamu\x20memilih\x20*Batu*\x0aComp\x20memlih\x20*Gunting*\x0a*Kamu\x20telah\x20menang!\x20:)*','next','teksnya\x20mana\x20bruh?\x0acontoh\x20','./data/data/scommand.json','MP4','groupMetadata','hacker\x0a\x20•\x20','Top\x20UserPatrickBot\x20UB\x20Terbanyak\x0a\x0a','Halo\x20','\x0a=================\x0a','Sukses\x20dimulai\x20dengan\x20melakukan\x20apa\x20yang\x20harus\x20dilakukan','Hidup\x20adalah\x20serangkaian\x20perubahan\x20yang\x20alami\x20dan\x20spontan.\x20Jangan\x20tolak\x20mereka\x20karena\x20itu\x20hanya\x20membuat\x20penyesalan\x20dan\x20duka.\x20Biarkan\x20realita\x20menjadi\x20realita.\x20Biarkan\x20sesuatu\x20mengalir\x20dengan\x20alami\x20ke\x20manapun\x20mereka\x20suka.','Wrong\x20format!','approve','Minimal\x20Transfer\x20Ub\x205000','\x20-filter:a\x20\x22atempo=0.7,asetrate=44100\x22\x20','red','Jika\x20kau\x20ingin\x20terbang,\x20Kau\x20harus\x20melepaskan\x20hal-hal\x20yang\x20membuatmu\x20berat.','verify','Selesai','relayWAMessage','https://www.random.org/dice/dice','Nilai\x20sebuah\x20tindakan\x20terletak\x20dalam\x20usaha\x20menyelesaikan\x20sampai\x20tuntas','mutual\x0a\x20•\x20','https://leyscoders-api.herokuapp.com/api/joox?q=','participant','bc\x0a\x20•\x20','https://nekos.life/api/v2/img/femdom','▨\x20CREATOR\x20▨','-vf','_\x0a\x20>\x20*Limit*\x20:\x20','susunkata','Kegagalan\x20terbesar\x20adalah\x20ketika\x20tidak\x20berani\x20mencoba','report','◉\x20*Image\x20Edit*\x0a\x20•\x20','Pria\x20sejati..\x20Harus\x20menyelesaikan\x20apa\x20yang\x20sudah\x20dimulai.','kapankah\x0a\x20•\x20','Rezeki\x20itu\x20ditangan\x20Allah\x20yang\x20kita\x20lakukan\x20hanya\x20berusaha\x20semaksimal\x20mungkin\x20dan\x20menyerahkan\x20hasilnya\x20kepada\x20yang\x20kuasa','./data/data/admin.json','unban','ttp','%\x0aAlert!!!\x20:\x20','SINGLE_SELECT','https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg','thumb','Menabung\x20itu\x20hanya\x20untuk\x20mempertahankan\x20kekayaan,\x20untuk\x20meningkatkannya\x20berinvestasilah','presences','\x20minute(s)\x20','Untuk\x20meraih\x20apa\x20yang\x20benar-benar\x20anda\x20inginkan\x20fokus\x20saja\x20tidak\x20cukup.\x20Anda\x20harus\x20memiliki\x20rasa\x20lapar\x20untuk\x20meraihnya','Registered:\x20{\x0a\x20\x20\x20\x20Code:\x20','\x0a>\x20*Jumlah\x20Admin\x20:*\x20','sticker\x20untuk\x20menjadikan\x20sticker','https://dapuhy-api.herokuapp.com/api/search/gsmarena2?query=','menu*\x20untuk\x20memulai!\x0aJika\x20Ada\x20yang\x20error\x20ketik\x20*','ytplay','*Number\x20invalid!!!*','https://leyscoders-api.herokuapp.com/api/rexdl-search?q=','buttonsMessage','filter','\x0a>\x20*Owner\x20Grup\x20:*\x20@','\x0a\x09Chat\x20SB-129\x20(Bot)\x0a\x0a•\x20From:\x20','Anda\x20di\x20sini\x20hanya\x20untuk\x20persinggahan\x20yang\x20singkat.\x20Jangan\x20terburu,\x20jangan\x20khawatir.\x20Yakinlah\x20bahwa\x20Anda\x20menghirup\x20wangi\x20bunga\x20sepanjang\x20perjalanan.Hidup\x20adalah\x20cermin\x20dan\x20akan\x20merefleksikan\x20kembali\x20kepada\x20para\x20pemikir\x20mengenai\x20apa\x20yang\x20mereka\x20pikirkan.','*Truth*\x0a\x0a','huluh','shopee\x0a\x20•\x20','slowmo\x20\x0a\x20•\x20','listsurah\x0a\x0a◉\x20*Other\x20Menu*\x0a\x20•\x20','setdesc','fot','Jangan\x20pernah\x20berhenti\x20belajar,\x20karena\x20hidup\x20tidak\x20pernah\x20berhenti\x20mengajarkan.','\x0a>\x20*Dibuat\x20:*\x20','shortlink\x20https://google.com','Finish','isAngka','•\x20\x20Total\x20Block\x20Contact\x20:\x20','*Quotes\x20Islami*\x0a\x0a','Menari','http://zekais-api.herokuapp.com/ytmp4?url=','Jika\x20seseorang\x20memberimu\x20perhatian\x20jangan\x20pernah\x20mengabaikannya\x20karena\x20suatu\x20saat\x20perhatian\x20sekecil\x20itu\x20kamu\x20rindukan\x20saat\x20kamu\x20kesepian.','ownermenu','next*\x20—\x20find\x20a\x20new\x20partner','clue','Size:\x20','\x20Second','takestick_','dadu\x0a\x20•\x20','*\x0aHarap\x20chat\x20owner!','Ngimpi\x20kah?','display_url','*URL*\x20:\x20','Cepat\x20atau\x20lambat\x20bukan\x20masalah.\x20Selama\x20kamu\x20tetap\x20bergerak\x20maju,\x20tidak\x20ada\x20akhirnya\x20kamu\x20akan\x20tetap\x20sampai\x20tidak\x20ada\x20tujuan.','Jika\x20dia\x20tidak\x20merasakan\x20kehadiranmu,\x20buat\x20dia\x20merasakan\x20kepergianmu.','floor','Bersyukur\x20adalah\x20cara\x20ampuh\x20untuk\x20meraih\x20energi\x20yang\x20dahsyat,\x20Sudahkah\x20anda\x20bersyukur\x20hari\x20ini','Ikuti\x20alurnya,\x20Nikmati\x20prosesnya,\x20Tuhan\x20tau\x20kapan\x20kita\x20harus\x20bahagia.','update_on','\x0a❏\x20*Antispam\x20(Sticker):*\x0a╰──\x20','nggagur','Andai\x20hidayah\x20itu\x20seperti\x20buah\x20yang\x20bisa\x20kubeli,\x20maka\x20akan\x20kubeli\x20berkeranjang-keranjang\x20untuk\x20aku\x20bagikan\x20kepada\x20orang-orang\x20yang\x20aku\x20cintai.','Tidak','disable','\x0a*@','kemonimimi\x0a\x20•\x20','3dglue','\x20PatrickGans','Ya\x20Allah\x20semoga\x20seseorang\x20yang\x20engkau\x20jodohkan\x20denganku\x20adalah\x20seseorang\x20yang\x20saat\x20ini\x20sedang\x20aku\x20perjuangkan.','Maaf\x20kamu\x20sudah\x20terbenned!','result','\x20-af\x20equalizer=f=94:width_type=o:width=2:g=30\x20','buylimit','jelek','Dimanapun\x20engkau\x20berada\x20selalulah\x20menjadi\x20yang\x20terbaik\x20dan\x20berikan\x20yang\x20terbaik\x20dari\x20yang\x20bisa\x20kita\x20berikan.','Siapapun\x20yang\x20meremehkan\x20mu\x20hari\x20ini,\x20Suatu\x20saat\x20harus\x20kamu\x20lewati.','?apikey=','Katakan\x20bisa\x20pasti\x20bisa\x20dengan\x20penuh\x20keyakinan\x20otak\x20kita\x20akan\x20segera\x20mencari\x20solusi','Ketika\x20kita\x20memiliki\x20satu\x20sama\x20lain,\x20kita\x20Memiliki\x20segalanya','lewat\x20kesulitan\x20lah\x20manusia\x20belajar,\x20lewatnya\x20kenyamanan\x20lah\x20manusia\x20Terlena','kirim\x20fotomu\x20dengan\x20caption,\x20aku\x20anak\x20pungut','stanzaId','Disable\x20Anti\x20Link','styletext\x20\x0a\x20•\x20','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','ganteng\x0a\x20•\x20','append','&apikey=','Rating\x20:\x20','Cara\x20paling\x20baik\x20untuk\x20menggerakkan\x20diri\x20Anda\x20ialah\x20memberi\x20tugas\x20kepada\x20diri\x20sendiri.','Lebih\x20baik\x20menjadi\x20raja\x20tikus\x20daripada\x20ekor\x20naga','Gagal\x20menambahkan\x20target,\x20mungkin\x20karena\x20di\x20private','Sang\x20juara\x20percaya\x20kepada\x20dirinya\x20sendiri\x20bahkan\x20ketika\x20orang\x20lain\x20tidak\x20percaya','menu','vhebat\x0a\x20•\x20','enable*\x0a*Untuk\x20menonaktifkannya,\x20Ketik\x20','Lakukan\x20apa\x20yang\x20kamu\x20bisa,\x20dengan\x20apa\x20kamu\x20miliki,\x20dimanapun\x20kamu\x20berada.','Hidup\x20ini\x20sederhana\x20terkadang\x20pikiran\x20manusia\x20yang\x20membuatnya\x20rumit','Welcome','\x20second(s)\x0a\x0a','*Berhasil\x20Membuka\x20Group*','terjual','ownerb','Jika\x20Allah\x20yang\x20menjadi\x20alasan\x20anda\x20untuk\x20hidup\x20maka\x20takkan\x20pernah\x20ada\x20alasan\x20untuk\x20menyerah','makequote','status','writing','100','Kebahagiaan\x20dimulai\x20dengan\x20ketulusan','prepareMessageFromContent','penyanyi','setpp','Al-Quran\x20adalah\x20teman\x20yang\x20tidak\x20akan\x20mengecewakan\x20kamu\x20di\x20dunia\x20dan\x20akhirat.','pakboy','MASUKAN\x20URL/TEKS\x20UNTUK\x20DI\x20JADIKAN\x20QR','apikey','kertas','listprem\x0a\x20•\x20','tutup','Kirim\x20pesan\x20ke\x20mantan\x20kamu\x20dan\x20bilang\x20\x22aku\x20masih\x20suka\x20sama\x20kamu','title','rexdl\x0a\x20•\x20','Menangis\x20dapat\x20melepaskan\x20tambahan\x20hormon\x20stress,\x20itulah\x20mengapa\x20kita\x20sehabis\x20menangis\x20merasa\x20lebih\x20baikPergilah\x20sejauh\x20mungkin\x20dan\x20ketika\x20anda\x20tiba\x20di\x20sana\x20anda\x20akan\x20melihat\x20lebih\x20jauh\x20lagiAllah,\x20aku\x20tahu\x20bahwa\x20saat\x20aku\x20kehilangan\x20sesuatu\x20engkau\x20sedang\x20mempersiapkan\x20hal\x20yang\x20lebih\x20baik\x20untukkuAnda\x20tidak\x20dapat\x20mengubah\x20masa\x20lalu\x20anda\x20dan\x20janganlah\x20terlalu\x20khawatir\x20dengan\x20hari\x20esok\x20.Hari\x20ini\x20adalah\x20hari\x20yang\x20dapat\x20mengubah\x20masa\x20depan\x20Anda','wattpad\x0a\x20•\x20','https://dapuhy-api.herokuapp.com/api/fun/asahotak?apikey=','Saat\x20semua\x20jalan\x20tertutup.\x20Buatlah\x20jalan\x20dan\x20berserahlah\x20kepada\x20Allah','Belas\x20kasihanlah\x20terhadap\x20sesama,\x20bersikap\x20keraslah\x20terhadap\x20diri\x20sendiri.','Hal\x20terbaik\x20yang\x20bisa\x20Anda\x20lakukan\x20untuk\x20orang\x20lain\x20bukanlah\x20membagikan\x20kekayaan\x20Anda,\x20tetapi\x20membantu\x20dia\x20untuk\x20memiliki\x20kekayaannya\x20sendiri.','masa\x20depan\x20kita\x20tergantung\x20pada\x20apa\x20yang\x20kita\x20lakukan\x20pada\x20saat\x20ini.\x20Maka\x20jangan\x20sia-siakan\x20waktumu\x20sekarang','drop\x20emot\x20\x22🦄💨\x22\x20setiap\x20ngetik\x20di\x20gc/pc\x20selama\x201\x20hari','developer','ytmp3v2\x0a\x20•\x20','Kesalahan\x20adalah\x20bukti\x20nyata\x20kalau\x20kamu\x20pernah\x20mencoba.\x20Jangan\x20takut\x20salah.\x20Takutlah\x20untuk\x20melakukan\x20kesalahan-kesalahan\x20yang\x20sama\x20dua\x20kalinya.','\x0a>\x20Genre:\x20','img','jadian','Teruslah\x20berusaha\x20sampai\x20temanmu\x20berkata\x20kepadamu\x20\x22Sombong\x20iya\x20sekarang.\x22','*Body*\x20:\x20','Hati\x20yang\x20sedang\x20panas\x20menumpulkan\x20logika\x20dinginkan\x20terlebih\x20dahulu\x20sebelum\x20mengambil\x20keputusan','Jenius\x20adalah\x201\x20inspirasi\x20dan\x2099\x20keringat\x20tidak\x20ada\x20yang\x20dapat\x20menggantikan\x20kerja\x20keras','unban\x0a\x0a\x20\x20\x20\x20\x20\x20\x20~\x20','igvideo\x0a\x20•\x20','Jaga\x20terus\x20Api\x20Harapan\x20Anda\x20seperti\x20menjaga\x20hidup\x20anda\x20sendiri','messages','\x0aFollow\x20Me\x20in\x20Insta:\x20_pa7rick\x20:)\x0a\x0a=================\x0a','https://leyscoders-api.herokuapp.com/api/thelazy?q=','000','family100','*INGAT\x20ADA\x20TUHAN*!!','\x0aCategory\x20:\x20','Done!','Berhasil,\x20mereset\x20semua\x20limit!','*❗\x20Spesifikasi\x20Ditemukan*\x0a','Orang\x20pintar\x20mampu\x20memecahkan\x20masalah.\x20Orang\x20bijak\x20mampu\x20menghindarinya.','lari\x20dari\x20masalah\x20bukanlah\x20penyelesaian\x20masalah,\x20hadapi\x20dan\x20Belajarlah\x20dari\x20masalah\x20itu','swm','addbadword\x20bego','hacker','yakin\x20bisa?','*✔️Berhasil\x20mengganti\x20pp\x20grup*','Foto\x20fotoan\x20Ga\x20jelas','Naik\x20Motor','random','*Berhasil\x20Menutup\x20Group','Top\x20UserPatrickBot\x20Level\x20Terbesar\x5cn','\x0a\x20Duration\x20:\x20','Hal\x20yang\x20paling\x20manis\x20adalah\x20ketika\x20seseorang\x20menyebutkan\x20nama\x20kamu\x20di\x20tahajjud\x20mereka.','identifymusic\x0a\x20•\x20','\x20Script\x20Created\x20by\x20MhankBarBar\x0aRecode\x20By\x20Me:\x20@_pa7rick\x0a\x20\x20\x20Masih\x20Belajar\x20Bang\x20:)\x0a\x0a\x20\x20Thanks\x20For:\x0a\x20\x20@adiwajshing/baileys\x0a\x20\x20MhankBarBar\x0a\x20\x20\x20LeysCoders\x0a\x20\x20\x20NPM\x0a\x20\x20\x20Affis\x20Junianto\x0a\x20\x20\x20ArugaZ\x0a\x20\x20\x20Penyedia\x20Api\x0a\x20\x20\x20Tobz\x0a\x20\x20\x20Zahirr\x0a\x20\x20\x20\x20Arifi\x20Razzaq\x0a\x20\x20\x20Manik\x20\x0a\x0aThanks\x20For\x20All\x20Creator\x20Bot\x0aThanks\x20For\x20All\x20Creator\x20ApiKey','shortlink3\x20\x20\x0a\x20•\x20','\x20hour(s)\x20','apakah\x0a\x20•\x20','Sakit\x20dalam\x20perjuangan\x20itu\x20hanya\x20berlangsung\x20sementara,\x20namun\x20jika\x20anda\x20menyerah\x20rasa\x20sakit\x20itu\x20akan\x20terasa\x20selamanya','Wahai\x20orang-orang\x20yang\x20beriman!\x20Ingatlah\x20kepada\x20Allah,\x20Dengan\x20mengingat\x20(nama-Nya)\x20sebanyak-banyaknya\x20dan\x20bertasbihlah\x20kepada-nya\x20pada\x20waktu\x20pagi\x20dan\x20petang.','_*Reply\x20Video\x20nya\x20Gan!*_','\x0aLink\x20Group\x20:\x20','hebat\x0a\x20•\x20','ytmp4\x0a\x20•\x20','FN:Member\x20Ter','sfile\x0a\x0a◉\x20*Islam\x20Menu*\x0a\x20•\x20','Success\x20Menghapus\x20BADWORD!','Tidak\x20semua\x20usaha\x20kita\x20dibayar\x20oleh\x20manusia,\x20tapi\x20Allah\x20akan\x20membayarnya\x20kelak','Check\x20you\x20code\x20in\x20private\x20message\x20for\x20register!!','post_date','┣➢\x20@','jelek\x0a\x20•\x20','sort','ffmpeg\x20-i\x20','Anda\x20menghalangi\x20impian\x20anda\x20ketika\x20anda\x20mengizinkan\x20ketakutan\x20Anda\x20tumbuh\x20lebih\x20besar\x20dari\x20keyakinan\x20anda','groupUpdateSubject','uploadDate','isAO','•\x20\x20Name\x20:\x20','setcmd','halah','searchMessages','Salah\x20satu\x20tanda\x20dirimu\x20tidak\x20berakhlak\x20adalah\x20main\x20HP\x20ketika\x20ada\x20orang\x20yang\x20berbicara.','\x0a\x20\x0a\x20\x20\x20\x20~\x20SB-129','Seseorang\x20yang\x20berani\x20membuang\x20satu\x20jam\x20waktunya\x20tidak\x20mengetahui\x20nilai\x20dari\x20kehidupan.','https://leyscoders-api.herokuapp.com/api/shrturl?url=','6\x20Tahun\x20Lagi','deleteMessage','bass','jahat\x0a\x20•\x20','channel','gradient','Pertanyaan\x20:\x20*','\x0aSilahkan\x20pilih\x20button\x20dibawah\x20ini!','image','•\x20Total\x20Hit\x20:\x20','\x0aPublish\x20:\x20','https://dapuhy-api.herokuapp.com/api/others/jadwaltv?channel=','unlinkSync','vjelek\x0a\x20•\x20','Code\x20salah!,\x20Silahkan\x20ketik\x20','*Wrong\x20Format!!*\x0aExample:\x20*','ceil','qrcode\x20\x0a\x20\x0a◉\x20*Fun\x20Menu*\x0a\x20•\x20','3dglowing\x0a\x20•\x20','©\x20PatrickBot','Yang\x20terbaik\x20tidak\x20akan\x20hilang.\x20Jika\x20dia\x20hilang\x20maka\x20dia\x20bukanlah\x20yang\x20terbaik.','Beberapa\x20orang\x20ingin\x20sesuatu\x20terjadi,\x20beberapa\x20orang\x20berharap\x20itu\x20akan\x20terjadi,\x20yang\x20lain\x20mewujudkannya\x20jadi\x20kenyataan','Disiplin\x20memang\x20tidak\x20mudah\x20tapi\x20tanpa\x20kedisiplinan\x20hidup\x20anda\x20akan\x20jauh\x20lebih\x20sulit','Nilai\x20manusia\x20ditentukan\x20bukan\x20dari\x20apa\x20yang\x20diperoleh\x20melainkan\x20apa\x20yang\x20telah\x20diberikan','BEGIN:VCARD\x0a','Memasak','addbadword\x20[kata\x20kasar].\x20contoh\x20','▨\x20READ\x20DOCS\x20▨','Guru\x20terbaik\x20kamu\x20adalah\x20kesalahan\x20terakhir\x20yang\x20kamu\x20lakukan','Kita\x20ini..\x20sangat\x20pintar\x20menghakimi,\x20Namun\x20bodoh\x20dalam\x20memperbaiki\x20diri.','Jangan\x20pernah\x20mengabaikan\x20apapun\x20yang\x20terjadi,\x20suatu\x20saat\x20akan\x20sadar\x20dan\x20menyesal,\x20ingat\x20tuhan\x20akan\x20selalu\x20memberikan\x20penyesalan\x20terakhir\x20...','https://leyscoders-api.herokuapp.com/api/tinyurl?url=','img2url\x20\x0a\x20•\x20','1\x20Tahun\x20Lagi','\x20\x20\x20\x20\x20\x20\x20\x20*Transfer\x20receipt*\x0a\x20\x20Pengambilan\x20Ub\x20Berhasil\x0a\x0a>\x20From\x20:\x20','Jeff','\x0aChannel:\x20','*Name*\x20:\x20','Orang-orang\x20kreatif\x20termotivasi\x20oleh\x20keinginan\x20untuk\x20maju,\x20bukan\x20oleh\x20keinginan\x20untuk\x20mengalahkan\x20orang\x20lain.','https://api.zeks.xyz/api/memeindo?apikey=','setname','suit\x0a\x20•\x20','Bersikap\x20tidak\x20lagi\x20peduli\x20lebih\x20baik\x20dari\x20pada\x20balas\x20dendam.','reedem\x0a\x20•\x20','\x0a▢\x20To\x20ShortLink\x20:\x20','captcha','Bila\x20tekad\x20seseorang\x20kuat\x20dan\x20teguh,\x20Tuhan\x20akan\x20bergabung\x20dalam\x20usahanya.','Balance\x20mu\x20tidak\x20cukup!\x0aHarga:\x20$','\x0aViews\x20:\x20','Hampir\x20semua\x20pria\x20memang\x20mampu\x20bertahan\x20menghadapi\x20kesulitan.\x20Namun,\x20jika\x20Anda\x20ingin\x20menguji\x20karakter\x20sejati\x20pria,\x20beri\x20dia\x20kekuasaan.','report\x20bug\x0a\x0aPatrickBot\x20Created\x20by\x20@6288989029718\x20&\x20@0','discordblack\x0a\x20•\x20','join\x0a\x20•\x20','truth\x0a\x20•\x20','Tragedi\x20dalam\x20kehidupan\x20ini\x20bukanlah\x20yang\x20berakhir\x20terlalu\x20cepat,\x20tetapi\x20kita\x20menunggu\x20terlalu\x20lama\x20untuk\x20memulainya','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20~\x20PatrickBot\x202021','desc','discordblue\x0a\x20•\x20','addprem\x0a\x20•\x20','math','6\x20Bulan\x20Lagi','Error!','Hati\x20yang\x20memutuskan\x20siapa\x20yang\x20kamu\x20inginkan\x20dalam\x20hidup\x20ini','libwebp','vjahat','NSFW\x20Mode','endsWith','Aesthetic,\x20Estetik','Jangan\x20pernah\x20bandingkan\x20akhir\x20kesuksesan\x20orang\x20lain\x20dengan\x20pertengahan\x20prosesmu.','https://dapuhy-api.herokuapp.com/api/search/pinterest-image?query=','igphoto\x0a\x0a◉\x20*Search\x20Menu*\x0a\x20•\x20','engror','released','listban','6eERbZl','gemok','5\x20Tahun\x20Lagi','vpakgirl\x0a\x20\x0a◉\x20*Image\x20Edit*\x0a\x20•\x20','jam'];_0x31d1=function(){return _0x1d4719;};return _0x31d1();}(function(_0x10a630,_0x44aa50){const _0x4d18d6=_0x5564,_0x53d888=_0x10a630();while(!![]){try{const _0x488548=parseInt(_0x4d18d6(0x3b7))/0x1*(parseInt(_0x4d18d6(0x3b8))/0x2)+-parseInt(_0x4d18d6(0x42c))/0x3*(parseInt(_0x4d18d6(0x413))/0x4)+parseInt(_0x4d18d6(0x675))/0x5+parseInt(_0x4d18d6(0x5d7))/0x6*(parseInt(_0x4d18d6(0x1f5))/0x7)+parseInt(_0x4d18d6(0x64d))/0x8*(-parseInt(_0x4d18d6(0x3f0))/0x9)+-parseInt(_0x4d18d6(0x697))/0xa+parseInt(_0x4d18d6(0x67c))/0xb;if(_0x488548===_0x44aa50)break;else _0x53d888['push'](_0x53d888['shift']());}catch(_0x15e87e){_0x53d888['push'](_0x53d888['shift']());}}}(_0x31d1,0x711a4));function _0x5564(_0x51aaf0,_0x4ec361){const _0x31d19f=_0x31d1();return _0x5564=function(_0x55645a,_0x230669){_0x55645a=_0x55645a-0x1a5;let _0x2bbecc=_0x31d19f[_0x55645a];return _0x2bbecc;},_0x5564(_0x51aaf0,_0x4ec361);}switch(command){case _0x5c16e7(0x522):if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind['limitend'](pushname,prefix));const requXp=0x1388*(Math[_0x5c16e7(0x3e4)](0x2,getLevelingLevel(sender))-0x1),uangkim=checkATMuser(sender),lvlim=getLevelingLevel(sender);if(!isGroup){const menunya='Hello\x20World,\x20'+botName+_0x5c16e7(0x641)+a+_0x5c16e7(0x3b5)+a+'\x20'+premi+'\x0a'+a+_0x5c16e7(0x6b6)+uangkim+a+'\x0a'+a+_0x5c16e7(0x25f)+time2+a+'\x0a'+a+'•\x20Runtime\x20:\x20'+kyun(process[_0x5c16e7(0x372)]())+a+'\x0a'+a+_0x5c16e7(0x596)+hit_today[_0x5c16e7(0x1ba)]+a+_0x5c16e7(0x669)+prefix+'report*\x0a*if\x20there\x20is\x20an\x20error*\x0a━━━━━━━━━━━━━━━',menunya1=_0x5c16e7(0x4c2)+prefix+_0x5c16e7(0x3f2)+prefix+_0x5c16e7(0x236)+prefix+_0x5c16e7(0x299)+prefix+'jail\x0a\x20•\x20'+prefix+_0x5c16e7(0x481)+prefix+_0x5c16e7(0x231)+prefix+_0x5c16e7(0x6aa)+prefix+_0x5c16e7(0x3d0)+prefix+_0x5c16e7(0x2dd)+prefix+_0x5c16e7(0x27f)+prefix+'hacker\x0a\x20•\x20'+prefix+'greyscale\x0a\x20•\x20'+prefix+_0x5c16e7(0x3f5)+prefix+_0x5c16e7(0x497)+prefix+'approve\x0a\x20•\x20'+prefix+_0x5c16e7(0x6d1)+prefix+_0x5c16e7(0x6db)+prefix+'facepalm\x0a\x20•\x20'+prefix+'discordblue\x0a\x20•\x20'+prefix+'discordblack\x0a\x20•\x20'+prefix+_0x5c16e7(0x5eb)+prefix+_0x5c16e7(0x43f)+prefix+_0x5c16e7(0x2f3)+prefix+_0x5c16e7(0x326)+prefix+_0x5c16e7(0x627)+prefix+'gradient\x0a\x20•\x20'+prefix+_0x5c16e7(0x2ae)+prefix+_0x5c16e7(0x6fb)+prefix+_0x5c16e7(0x678)+prefix+_0x5c16e7(0x2b8)+prefix+_0x5c16e7(0x59f)+prefix+'bearlogo\x0a\x20•\x20'+prefix+_0x5c16e7(0x635)+prefix+_0x5c16e7(0x455)+prefix+_0x5c16e7(0x1ff)+prefix+'lava\x0a\x20•\x20'+prefix+_0x5c16e7(0x346)+prefix+_0x5c16e7(0x6ad)+prefix+_0x5c16e7(0x1c1)+prefix+'glitch\x0a\x20•\x20'+prefix+'8bit\x20\x0a\x20•\x20'+prefix+_0x5c16e7(0x40a)+prefix+_0x5c16e7(0x35c)+prefix+_0x5c16e7(0x31f)+prefix+'naruto\x0a\x20•\x20'+prefix+'lovemessage\x0a\x20•\x20'+prefix+'glowmetalic\x0a\x20•\x20'+prefix+'3dglue\x0a\x20•\x20'+prefix+_0x5c16e7(0x6fc)+prefix+_0x5c16e7(0x2f6)+prefix+'greenneon\x0a\x20•\x20'+prefix+_0x5c16e7(0x6ae)+prefix+_0x5c16e7(0x44e)+prefix+_0x5c16e7(0x680)+prefix+_0x5c16e7(0x59e)+prefix+_0x5c16e7(0x429)+prefix+_0x5c16e7(0x382)+prefix+'ppcouple\x0a\x20•\x20'+prefix+_0x5c16e7(0x5c2)+prefix+_0x5c16e7(0x23a)+prefix+_0x5c16e7(0x6fa)+prefix+_0x5c16e7(0x738)+prefix+_0x5c16e7(0x406)+prefix+_0x5c16e7(0x200)+prefix+_0x5c16e7(0x71d)+prefix+'darkjoke\x0a\x20•\x20'+prefix+_0x5c16e7(0x4f5)+prefix+_0x5c16e7(0x2ad)+prefix+'quotes\x0a\x20•\x20'+prefix+_0x5c16e7(0x5f5)+prefix+_0x5c16e7(0x72b)+prefix+_0x5c16e7(0x1ab)+prefix+_0x5c16e7(0x64b)+prefix+_0x5c16e7(0x6ce)+prefix+'chatdia\x0a\x20•\x20'+prefix+_0x5c16e7(0x6e5)+prefix+_0x5c16e7(0x216)+prefix+'quotesmotivasi\x0a\x0a◉\x20*Download\x20Menu*\x0a\x20•\x20'+prefix+_0x5c16e7(0x209)+prefix+_0x5c16e7(0x740)+prefix+_0x5c16e7(0x6f6)+prefix+_0x5c16e7(0x548)+prefix+_0x5c16e7(0x576)+prefix+'ytmp4v2\x0a\x20•\x20'+prefix+_0x5c16e7(0x40c)+prefix+_0x5c16e7(0x552)+prefix+_0x5c16e7(0x5d3)+prefix+'gsmarena\x0a\x20•\x20'+prefix+_0x5c16e7(0x651)+prefix+_0x5c16e7(0x644)+prefix+'stickersearch\x0a\x20•\x20'+prefix+_0x5c16e7(0x419)+prefix+'identifymusic\x0a\x20•\x20'+prefix+_0x5c16e7(0x4e0)+prefix+_0x5c16e7(0x37e)+prefix+_0x5c16e7(0x666)+prefix+'wattpad\x0a\x20•\x20'+prefix+_0x5c16e7(0x53e)+prefix+'moddroid\x0a\x20•\x20'+prefix+_0x5c16e7(0x578)+prefix+'quran\x0a\x20•\x20'+prefix+_0x5c16e7(0x248)+prefix+_0x5c16e7(0x4e2)+prefix+_0x5c16e7(0x724)+prefix+_0x5c16e7(0x226)+prefix+_0x5c16e7(0x518)+prefix+_0x5c16e7(0x5ad)+prefix+_0x5c16e7(0x48c)+prefix+'nulis\x20\x0a\x20•\x20'+prefix+'swm\x20\x0a\x20•\x20'+prefix+_0x5c16e7(0x357)+prefix+_0x5c16e7(0x42f)+prefix+_0x5c16e7(0x3ec)+prefix+_0x5c16e7(0x637)+prefix+_0x5c16e7(0x218)+prefix+_0x5c16e7(0x56e)+prefix+'bass\x20\x20\x0a\x20•\x20'+prefix+_0x5c16e7(0x38a)+prefix+_0x5c16e7(0x4e1)+prefix+_0x5c16e7(0x65e)+prefix+_0x5c16e7(0x63f)+prefix+_0x5c16e7(0x5f1)+prefix+_0x5c16e7(0x506)+prefix+_0x5c16e7(0x460)+prefix+_0x5c16e7(0x39d)+prefix+_0x5c16e7(0x29d)+prefix+'holo\x20\x0a\x20\x0a◉\x20*No\x20Category*\x0a\x20•\x20'+prefix+_0x5c16e7(0x293)+prefix+'info\x0a\x20•\x20'+prefix+_0x5c16e7(0x38f)+prefix+_0x5c16e7(0x5c1)+prefix+_0x5c16e7(0x4b7)+prefix+_0x5c16e7(0x5b8)+prefix+'addsay\x0a\x20•\x20'+prefix+_0x5c16e7(0x24d)+prefix+_0x5c16e7(0x210)+prefix+_0x5c16e7(0x53a)+prefix+_0x5c16e7(0x243)+prefix+_0x5c16e7(0x40d)+prefix+'receive\x0a\x20•\x20'+prefix+_0x5c16e7(0x4ba)+prefix+_0x5c16e7(0x5c7)+prefix+'unprem\x0a\x20•\x20'+prefix+_0x5c16e7(0x28b)+prefix+'dellsewa\x0a\x20•\x20'+prefix+_0x5c16e7(0x3b0)+prefix+_0x5c16e7(0x551)+botName+_0x5c16e7(0x6d3);sendButMessage(from,menunya,menunya1,[{'buttonId':prefix+'owner','buttonText':{'displayText':_0x5c16e7(0x4bc)},'type':0x1},{'buttonId':prefix+'ping','buttonText':{'displayText':_0x5c16e7(0x2db)},'type':0x1},{'buttonId':prefix+'profile','buttonText':{'displayText':_0x5c16e7(0x1f0)},'type':0x1}]);}else{if(isGroup){const menunon='Hello\x20World,\x20'+botName+_0x5c16e7(0x641)+a+'•\x20User\x20:'+a+'\x20'+premi+'\x0a'+a+'•\x20Balance\x20:\x20$'+uangkim+a+'\x0a'+a+_0x5c16e7(0x25f)+time2+a+'\x0a'+a+_0x5c16e7(0x1aa)+kyun(process[_0x5c16e7(0x372)]())+a+'\x0a'+a+_0x5c16e7(0x596)+hit_today[_0x5c16e7(0x1ba)]+a+_0x5c16e7(0x669)+prefix+_0x5c16e7(0x453),menunon1=_0x5c16e7(0x638)+prefix+'infogrup\x0a\x20•\x20'+prefix+'enable\x0a\x20•\x20'+prefix+_0x5c16e7(0x693)+prefix+_0x5c16e7(0x3d1)+prefix+'add\x2062881xxxx\x0a\x20•\x20'+prefix+_0x5c16e7(0x1f9)+prefix+_0x5c16e7(0x40f)+prefix+_0x5c16e7(0x355)+prefix+'setpp\x20reply\x20image\x0a\x20•\x20'+prefix+_0x5c16e7(0x378)+prefix+_0x5c16e7(0x70a)+prefix+_0x5c16e7(0x715)+prefix+_0x5c16e7(0x64f)+prefix+'hidetag\x0a\x20•\x20'+prefix+_0x5c16e7(0x67b)+prefix+_0x5c16e7(0x72c)+prefix+'caripesan\x0a\x20\x0a\x20◉\x20*Fun\x20Menu*\x0a\x20•\x20'+prefix+'tebakgambar\x0a\x20•\x20'+prefix+'tictactoe\x0a\x20•\x20'+prefix+_0x5c16e7(0x474)+prefix+_0x5c16e7(0x736)+prefix+'family100\x0a\x20•\x20'+prefix+'asahotak\x0a\x20•\x20'+prefix+_0x5c16e7(0x1b6)+prefix+_0x5c16e7(0x6fd)+prefix+_0x5c16e7(0x309)+prefix+_0x5c16e7(0x429)+prefix+_0x5c16e7(0x382)+prefix+'ppcouple\x0a\x20•\x20'+prefix+_0x5c16e7(0x5c2)+prefix+_0x5c16e7(0x23a)+prefix+_0x5c16e7(0x6fa)+prefix+_0x5c16e7(0x738)+prefix+'darkjoke\x0a\x20•\x20'+prefix+_0x5c16e7(0x406)+prefix+'artinama\x0a\x20•\x20'+prefix+_0x5c16e7(0x71d)+prefix+_0x5c16e7(0x4f5)+prefix+_0x5c16e7(0x5b6)+prefix+_0x5c16e7(0x2ad)+prefix+_0x5c16e7(0x5f5)+prefix+_0x5c16e7(0x72b)+prefix+_0x5c16e7(0x1ab)+prefix+_0x5c16e7(0x64b)+prefix+_0x5c16e7(0x6ce)+prefix+_0x5c16e7(0x5fc)+prefix+_0x5c16e7(0x1be)+prefix+_0x5c16e7(0x419)+prefix+_0x5c16e7(0x6e5)+prefix+'quotesnasehat\x0a\x20•\x20'+prefix+'quotesmotivasi\x0a\x20\x0a\x20◉\x20*Kerang\x20Menu*\x0a\x20•\x20'+prefix+_0x5c16e7(0x570)+prefix+'bisakah\x0a\x20•\x20'+prefix+_0x5c16e7(0x4c4)+prefix+_0x5c16e7(0x2d3)+prefix+_0x5c16e7(0x51a)+prefix+'beban\x0a\x20•\x20'+prefix+'cantik\x0a\x20•\x20'+prefix+_0x5c16e7(0x57e)+prefix+_0x5c16e7(0x72a)+prefix+_0x5c16e7(0x1e2)+prefix+_0x5c16e7(0x590)+prefix+_0x5c16e7(0x2e1)+prefix+_0x5c16e7(0x683)+prefix+_0x5c16e7(0x575)+prefix+_0x5c16e7(0x64a)+prefix+_0x5c16e7(0x3a0)+prefix+'vganteng\x0a\x20•\x20'+prefix+'vbeban\x0a\x20•\x20'+prefix+'vcantik\x0a\x20•\x20'+prefix+_0x5c16e7(0x59a)+prefix+'vbaik\x0a\x20•\x20'+prefix+_0x5c16e7(0x229)+prefix+_0x5c16e7(0x60a)+prefix+_0x5c16e7(0x24c)+prefix+_0x5c16e7(0x523)+prefix+_0x5c16e7(0x3f4)+prefix+_0x5c16e7(0x5da)+prefix+_0x5c16e7(0x3f2)+prefix+_0x5c16e7(0x236)+prefix+_0x5c16e7(0x299)+prefix+'jail\x0a\x20•\x20'+prefix+_0x5c16e7(0x481)+prefix+_0x5c16e7(0x231)+prefix+_0x5c16e7(0x6aa)+prefix+_0x5c16e7(0x3d0)+prefix+'ad\x0a\x20•\x20'+prefix+_0x5c16e7(0x27f)+prefix+_0x5c16e7(0x4a6)+prefix+'greyscale\x0a\x20•\x20'+prefix+_0x5c16e7(0x3f5)+prefix+_0x5c16e7(0x497)+prefix+'approve\x0a\x20•\x20'+prefix+_0x5c16e7(0x6d1)+prefix+_0x5c16e7(0x6db)+prefix+_0x5c16e7(0x66f)+prefix+_0x5c16e7(0x5c6)+prefix+_0x5c16e7(0x5c0)+prefix+_0x5c16e7(0x5eb)+prefix+_0x5c16e7(0x43f)+prefix+_0x5c16e7(0x2f3)+prefix+_0x5c16e7(0x326)+prefix+'warface\x0a\x20•\x20'+prefix+_0x5c16e7(0x613)+prefix+_0x5c16e7(0x2ae)+prefix+_0x5c16e7(0x6fb)+prefix+_0x5c16e7(0x678)+prefix+_0x5c16e7(0x2b8)+prefix+'3dglowing\x0a\x20•\x20'+prefix+_0x5c16e7(0x6ed)+prefix+'cloud\x0a\x20•\x20'+prefix+_0x5c16e7(0x455)+prefix+'3dglue\x0a\x20•\x20'+prefix+_0x5c16e7(0x315)+prefix+_0x5c16e7(0x346)+prefix+_0x5c16e7(0x6ad)+prefix+'pornhub\x20\x0a\x20•\x20'+prefix+_0x5c16e7(0x65b)+prefix+_0x5c16e7(0x277)+prefix+_0x5c16e7(0x40a)+prefix+'multicolor3d\x0a\x20•\x20'+prefix+'realisticvintage\x0a\x20•\x20'+prefix+_0x5c16e7(0x27a)+prefix+'lovemessage\x0a\x20•\x20'+prefix+_0x5c16e7(0x2e0)+prefix+_0x5c16e7(0x1ff)+prefix+_0x5c16e7(0x6fc)+prefix+_0x5c16e7(0x2f6)+prefix+'greenneon\x0a\x20•\x20'+prefix+_0x5c16e7(0x6ae)+prefix+'makequote\x0a\x20•\x20'+prefix+_0x5c16e7(0x680)+prefix+'qrcode\x20\x0a\x0a◉\x20*Download\x20Menu*\x0a\x20•\x20'+prefix+_0x5c16e7(0x209)+prefix+_0x5c16e7(0x740)+prefix+'ytmp3\x0a\x20•\x20'+prefix+'ytmp3v2\x0a\x20•\x20'+prefix+_0x5c16e7(0x576)+prefix+'ytmp4v2\x0a\x20•\x20'+prefix+'tiktokdownload\x0a\x20•\x20'+prefix+_0x5c16e7(0x552)+prefix+_0x5c16e7(0x5d3)+prefix+_0x5c16e7(0x601)+prefix+'pinterest\x0a\x20•\x20'+prefix+_0x5c16e7(0x644)+prefix+_0x5c16e7(0x228)+prefix+_0x5c16e7(0x419)+prefix+_0x5c16e7(0x56c)+prefix+'jalantikus\x0a\x20•\x20'+prefix+_0x5c16e7(0x4e0)+prefix+_0x5c16e7(0x37e)+prefix+_0x5c16e7(0x666)+prefix+_0x5c16e7(0x540)+prefix+_0x5c16e7(0x53e)+prefix+_0x5c16e7(0x392)+prefix+_0x5c16e7(0x578)+prefix+_0x5c16e7(0x44a)+prefix+_0x5c16e7(0x248)+prefix+_0x5c16e7(0x4e2)+prefix+_0x5c16e7(0x724)+prefix+_0x5c16e7(0x226)+prefix+_0x5c16e7(0x518)+prefix+_0x5c16e7(0x5ad)+prefix+_0x5c16e7(0x48c)+prefix+_0x5c16e7(0x6cf)+prefix+_0x5c16e7(0x36e)+prefix+'toimg\x20\x20\x0a\x20•\x20'+prefix+_0x5c16e7(0x42f)+prefix+_0x5c16e7(0x3ec)+prefix+'shortlink\x20\x0a\x20•\x20'+prefix+_0x5c16e7(0x218)+prefix+_0x5c16e7(0x56e)+prefix+'bass\x20\x20\x0a\x20•\x20'+prefix+'tupai\x0a\x20•\x20'+prefix+_0x5c16e7(0x4e1)+prefix+_0x5c16e7(0x65e)+prefix+_0x5c16e7(0x63f)+prefix+_0x5c16e7(0x5f1)+prefix+'kemonimimi\x0a\x20•\x20'+prefix+_0x5c16e7(0x460)+prefix+_0x5c16e7(0x39d)+prefix+'neko2\x0a\x20•\x20'+prefix+'holo\x20\x0a\x0a◉\x20*No\x20Category*\x0a\x20•\x20'+prefix+_0x5c16e7(0x38f)+prefix+_0x5c16e7(0x5c1)+prefix+_0x5c16e7(0x4b7)+prefix+_0x5c16e7(0x5b8)+prefix+_0x5c16e7(0x210)+prefix+_0x5c16e7(0x53a)+prefix+_0x5c16e7(0x243)+prefix+_0x5c16e7(0x2d9)+prefix+_0x5c16e7(0x62d)+prefix+_0x5c16e7(0x4ba)+prefix+_0x5c16e7(0x28b)+prefix+_0x5c16e7(0x420)+prefix+'addprem\x0a\x20•\x20'+prefix+'unprem\x0a\x20•\x20'+prefix+_0x5c16e7(0x3b0)+prefix+_0x5c16e7(0x291)+botName+_0x5c16e7(0x6d3);sendButMessage(from,menunon,menunon1,[{'buttonId':prefix+_0x5c16e7(0x726),'buttonText':{'displayText':_0x5c16e7(0x4bc)},'type':0x1},{'buttonId':prefix+_0x5c16e7(0x39f),'buttonText':{'displayText':_0x5c16e7(0x2db)},'type':0x1},{'buttonId':prefix+'profile','buttonText':{'displayText':_0x5c16e7(0x1f0)},'type':0x1}]);}}break;case'groupinfo':case _0x5c16e7(0x334):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isGroup)return replyWithFakeLink(ind['groupo']());try{var pic=await patrick[_0x5c16e7(0x70d)](from);}catch{var pic=_0x5c16e7(0x65f);}teksnya=_0x5c16e7(0x3f8)+groupName+'\x0a>\x20*ID\x20Grup\x20:*\x20'+from+_0x5c16e7(0x4e6)+moment((''+groupMetadata[_0x5c16e7(0x20e)])*0x3e8)['tz'](_0x5c16e7(0x436))['format'](_0x5c16e7(0x38e))+_0x5c16e7(0x4db)+groupMetadata[_0x5c16e7(0x726)][_0x5c16e7(0x366)]('@')[0x0]+_0x5c16e7(0x4d2)+groupAdmins[_0x5c16e7(0x1ba)]+_0x5c16e7(0x3eb)+groupMembers[_0x5c16e7(0x1ba)]+_0x5c16e7(0x66e)+(isAntiLink?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+'\x0a❏\x20*Antivirtex:*\x0a╰──\x20'+(isAntiVirtex?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x3be)+(isBadWord?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x432)+(isWelcome?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x3c1)+(isSimi?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+'\x0a❏\x20*Antispam\x20(Sticker):*\x0a╰──\x20'+(isAntiSpam?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x41c)+prefix+_0x5c16e7(0x524)+prefix+_0x5c16e7(0x1c5),patrick[_0x5c16e7(0x74d)](from,await getBuffer(pic),image,{'quoted':ftoko,'caption':teksnya,'contextInfo':{'mentionedJid':[groupMetadata[_0x5c16e7(0x726)][_0x5c16e7(0x611)]('@c.us',_0x5c16e7(0x368))]}});break;case _0x5c16e7(0x239):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+'\x20Patrick');anu=await fetchJson(_0x5c16e7(0x629)+body[_0x5c16e7(0x275)](0xa),{'method':_0x5c16e7(0x269)}),replyWithFakeLink('Menurut\x20nama:\x0a\x0a'+anu['result']),await limitAdd(sender);break;case _0x5c16e7(0x2d7):case _0x5c16e7(0x23e):patrick['updatePresence'](from,Presence['composing']);if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+'\x20'+pushname);replyWithFakeLink(ind['wait']()),nulis=await getBuffer(_0x5c16e7(0x3cd)+q+_0x5c16e7(0x51c)+dappaApi,{'method':'get'}),patrick[_0x5c16e7(0x74d)](from,nulis,image,{'quoted':fgclink}),await limitAdd(sender);break;case _0x5c16e7(0x348):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isPrem)return replyWithFakeLink(_0x5c16e7(0x2a0));if(args[0x0]==''+codeReedem){mente=sender[_0x5c16e7(0x366)]('@','')+_0x5c16e7(0x368),addPremiumUser(mente,'3d',prem),replyWithFakeLink(a+_0x5c16e7(0x1b8)+a),texting='🎟️\x20Selamat\x20anda\x20mendapatkan\x20Premium\x20User\x20dari\x20owner\x0aKetik\x20.premiummenu\x20untuk\x20fitur\x20premium',codeReedem=createSerial(0x14);var optionns={'text':texting};patrick['sendMessage'](''+mente,optionns,text,{'quoted':mek});}else reply(_0x5c16e7(0x59b)+prefix+_0x5c16e7(0x6b9));break;case _0x5c16e7(0x1c9):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isPrem)return replyWithFakeLink(_0x5c16e7(0x2a0));if(checkATMuser(sender)<=uang5)return replyWithFakeLink(_0x5c16e7(0x5bc)+uang5);checkATMuser(sender)>=uang5&&(replyWithFakeLink(_0x5c16e7(0x2e3)+codeReedem+'\x0aSilahkan\x20ketik\x20'+prefix+'reedem\x20untuk\x20menukarnya!'),confirmATM(sender,uang5));break;case _0x5c16e7(0x304):if(!q)return replyWithFakeLink(_0x5c16e7(0x2de)+prefix+_0x5c16e7(0x3bc));var codeInvite=q[_0x5c16e7(0x366)](_0x5c16e7(0x2eb))[0x1];console['log'](codeInvite);if(!codeInvite)return replyWithFakeLink('pastikan\x20link\x20sudah\x20benar!');let {size}=await patrick['query']({'json':[_0x5c16e7(0x6ac),'invite',codeInvite],'expect200':!![]});if(size<=memberLimit)return replyWithFakeLink(_0x5c16e7(0x280)+memberLimit+_0x5c16e7(0x440));if(geed[_0x5c16e7(0x1ba)]>=groupLimit)return replyWithFakeLink(_0x5c16e7(0x612)+groupLimit+_0x5c16e7(0x4f6));var response=await patrick[_0x5c16e7(0x283)](codeInvite)[_0x5c16e7(0x6d8)](_0x46b87e=>{const _0x34e73c=_0x5c16e7;patrick['sendMessage'](_0x46b87e[_0x34e73c(0x1c0)],'*Hello\x20'+botName+_0x34e73c(0x6b0)+sender[_0x34e73c(0x366)]('@')[0x0]+_0x34e73c(0x289)+prefix+_0x34e73c(0x32b),text,{'contextInfo':{'mentionedJid':[sender]},'quoted':freply}),replyWithFakeLink(_0x34e73c(0x20a));})[_0x5c16e7(0x3aa)](_0x54ec65=>reply(jsonformat(_0x54ec65)));break;case'info':if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);anu=process['uptime'](),mee=patrick[_0x5c16e7(0x363)],ca=totalchat,ginfo=await getBuffer(mee['imgUrl']),inponya=_0x5c16e7(0x446)+a+_0x5c16e7(0x585)+patrick['user'][_0x5c16e7(0x400)]+a+'\x0a'+a+_0x5c16e7(0x2be)+patrick[_0x5c16e7(0x238)][0x1]+a+'\x0a'+a+_0x5c16e7(0x29a)+latensii['toFixed'](0x4)+_0x5c16e7(0x4f3)+a+'\x0a'+a+_0x5c16e7(0x3c9)+patrick[_0x5c16e7(0x363)][_0x5c16e7(0x452)][_0x5c16e7(0x2d2)]+a+'\x0a'+a+_0x5c16e7(0x36a)+patrick[_0x5c16e7(0x363)][_0x5c16e7(0x452)][_0x5c16e7(0x616)]+a+'\x0a'+a+_0x5c16e7(0x31b)+geed[_0x5c16e7(0x1ba)]+a+'\x0a'+a+_0x5c16e7(0x417)+(totalchat[_0x5c16e7(0x1ba)]-geed[_0x5c16e7(0x1ba)])+a+'\x0a'+a+_0x5c16e7(0x6cb)+totalchat[_0x5c16e7(0x1ba)]+a+'\x0a'+a+_0x5c16e7(0x4ea)+blocked[_0x5c16e7(0x1ba)]+a+'\x0a'+a+_0x5c16e7(0x462)+_registered[_0x5c16e7(0x1ba)]+a+'\x0a'+a+_0x5c16e7(0x39e)+prem[_0x5c16e7(0x1ba)]+a+_0x5c16e7(0x5c4),await patrickhay(inponya,MessageType[_0x5c16e7(0x70f)],tescuk,''+ucapanFakereply);break;case _0x5c16e7(0x29f):case _0x5c16e7(0x726):case _0x5c16e7(0x3fd):patrick[_0x5c16e7(0x74d)](from,{'displayname':'Jeff','vcard':vcard},MessageType[_0x5c16e7(0x36b)],{'quoted':fkontak});break;case _0x5c16e7(0x340):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);await patrickhay(ind[_0x5c16e7(0x6cd)](prefix),MessageType[_0x5c16e7(0x70f)],tescuk,''+ucapanFakereply);break;case _0x5c16e7(0x385):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(!isPrem)return replyWithFakeLink(ind[_0x5c16e7(0x3f3)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+_0x5c16e7(0x484));anu=await fetchJson(_0x5c16e7(0x625)+q+_0x5c16e7(0x51c)+leysApi,{'method':'get'}),teks=_0x5c16e7(0x719);for(let g of anu[_0x5c16e7(0x50b)]){teks+=_0x5c16e7(0x2b1)+g[_0x5c16e7(0x25a)]+_0x5c16e7(0x574)+g[_0x5c16e7(0x292)]+_0x5c16e7(0x555);}replyWithFakeLink(teks[_0x5c16e7(0x684)]());break;case _0x5c16e7(0x560):case _0x5c16e7(0x407):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(!isPrem)return replyWithFakeLink(ind[_0x5c16e7(0x3f3)]());if(type===_0x5c16e7(0x1a6)||isQuotedImage){var kls=body[_0x5c16e7(0x275)](0x5),pack=kls['split']('|')[0x0],author=kls[_0x5c16e7(0x366)]('|')[0x1];const getbuff=isQuotedImage?JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]['contextInfo']:mek,dlfile=await patrick[_0x5c16e7(0x5e0)](getbuff);replyWithFakeLink(ind[_0x5c16e7(0x628)]());const bas64=_0x5c16e7(0x451)+dlfile[_0x5c16e7(0x22d)]('base64');var mantap=await convertSticker(bas64,''+author,''+pack),imageBuffer=new Buffer['from'](mantap,_0x5c16e7(0x1e8));patrick[_0x5c16e7(0x74d)](from,imageBuffer,MessageType[_0x5c16e7(0x6d9)],{'quoted':freply});}else replyWithFakeLink('Format\x20Salah!');await limitAdd(sender);break;case _0x5c16e7(0x38b):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(!isPrem)return replyWithFakeLink(ind['premon']());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(!isQuotedSticker)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+'\x20PatrickBot|Pa7rick');var pembawm=body['slice'](0x6),encmedia=JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]['contextInfo'],media=await patrick[_0x5c16e7(0x354)](encmedia,_0x5c16e7(0x1da)+sender),packname=pembawm[_0x5c16e7(0x366)]('|')[0x0],author=pembawm[_0x5c16e7(0x366)]('|')[0x1];tekes=getRandom(''),exif['create'](packname,author,_0x5c16e7(0x4f4)+sender),exec('webpmux\x20-set\x20exif\x20./temp/takestick_'+sender+'.exif\x20./temp/'+sender+_0x5c16e7(0x665)+sender+_0x5c16e7(0x213),async _0x581f56=>{const _0x4bcec2=_0x5c16e7;if(_0x581f56)return replyWithFakeLink(ind[_0x4bcec2(0x27b)]());patrick[_0x4bcec2(0x74d)](from,fs[_0x4bcec2(0x3b3)](_0x4bcec2(0x1da)+sender+'.webp'),MessageType['sticker'],{'quoted':freply}),fs[_0x4bcec2(0x599)](media),fs[_0x4bcec2(0x599)](_0x4bcec2(0x1d5)+sender+_0x4bcec2(0x49a));}),await limitAdd(sender);break;case _0x5c16e7(0x1dd):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(!isGroupAdmins)return mentions('*Perintah\x20ini\x20Khusus\x20Owner\x20@6288989029718\x20!*',['6288989029718@s.whatsapp.net'],!![]);if(!isPrem)return replyWithFakeLink(ind[_0x5c16e7(0x3f3)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());var value=body[_0x5c16e7(0x275)](0x9),group=await patrick[_0x5c16e7(0x4a5)](from),member=group[_0x5c16e7(0x3e0)],mem=[];member[_0x5c16e7(0x65c)](async _0x2fec77=>{const _0x2667eb=_0x5c16e7;mem[_0x2667eb(0x324)](_0x2fec77['id']['replace']('c.us','s.whatsapp.net'));});var options={'text':value,'contextInfo':{'mentionedJid':mem},'quoted':ftoko};patrick[_0x5c16e7(0x74d)](from,options,text),patrick['sendMessage'](from,options,text),patrick['sendMessage'](from,options,text),patrick['sendMessage'](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick['sendMessage'](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick['sendMessage'](from,options,text),patrick['sendMessage'](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick['sendMessage'](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick[_0x5c16e7(0x74d)](from,options,text),patrick['sendMessage'](from,options,text),patrick['sendMessage'](from,options,text),await limitAdd(sender);break;case _0x5c16e7(0x4ef):if(!isOwner)return mentions(_0x5c16e7(0x74a),['6288989029718@s.whatsapp.net'],!![]);await patrickhay(ind[_0x5c16e7(0x726)](prefix),MessageType[_0x5c16e7(0x70f)],tescuk,''+ucapanFakereply);break;case _0x5c16e7(0x307):if(!isOwner)return reply(ind[_0x5c16e7(0x52b)]());let chiit=await patrick['chats'][_0x5c16e7(0x22a)]();for(let i of chiit){patrick['modifyChat'](i[_0x5c16e7(0x338)],'delete',{'includeStarred':![]});}reply(_0x5c16e7(0x4b3));break;case _0x5c16e7(0x6f9):if(!isAdminban)return mentions('*Perintah\x20ini\x20Khusus\x20Owner\x20@6288989029718\x20!*',[_0x5c16e7(0x45b)],!![]);if(args['length']<0x1)return reply(_0x5c16e7(0x3c0)+prefix+_0x5c16e7(0x5e5));linked=''+args[0x0][_0x5c16e7(0x611)](_0x5c16e7(0x2eb),''),patrick['query']({'json':['action','invite',linked]})['then'](_0x10282e=>{const _0x583050=_0x5c16e7;_sewa[_0x583050(0x1dc)](_0x10282e['gid'],args[0x1],sewa),patrick['sendMessage'](_0x10282e[_0x583050(0x1c0)],_0x583050(0x297)+args[0x1],text,{'quoted':mek}),reply('Succes!');})['catch'](()=>reply(_0x5c16e7(0x62c)));break;case _0x5c16e7(0x465):if(!isAdminban)return mentions(_0x5c16e7(0x74a),[_0x5c16e7(0x45b)],!![]);if(args[_0x5c16e7(0x1ba)]<0x1)return reply('Penggunaan\x20:\x0a*'+prefix+_0x5c16e7(0x608));sewa[_0x5c16e7(0x69a)](_sewa[_0x5c16e7(0x28a)](args[0x1],sewa),0x1),fs[_0x5c16e7(0x5ea)]('./data/data/sewa.json',JSON['stringify'](sewa)),reply(_0x5c16e7(0x63d));break;case'addcmd':case _0x5c16e7(0x586):if(isQuotedSticker){if(!q)return replyWithFakeLink(_0x5c16e7(0x73a)+command+_0x5c16e7(0x5fb));var kodenya=mek[_0x5c16e7(0x389)]['extendedTextMessage'][_0x5c16e7(0x2b6)][_0x5c16e7(0x705)][_0x5c16e7(0x2fb)][_0x5c16e7(0x621)][_0x5c16e7(0x22d)](_0x5c16e7(0x1e8));addCmd(kodenya,q),fakestatus(_0x5c16e7(0x55b));}else replyWithFakeLink(_0x5c16e7(0x73a)+command+_0x5c16e7(0x5fb));break;case'delcmd':if(!isQuotedSticker)return replyWithFakeLink(_0x5c16e7(0x73a)+command+_0x5c16e7(0x66c));var kodenya=mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)][_0x5c16e7(0x705)][_0x5c16e7(0x2fb)]['fileSha256']['toString'](_0x5c16e7(0x1e8));_scommand[_0x5c16e7(0x69a)](getCommandPosition(kodenya),0x1),fs[_0x5c16e7(0x5ea)](_0x5c16e7(0x4a3),JSON[_0x5c16e7(0x314)](_scommand)),fakestatus(_0x5c16e7(0x55b));break;case'listcmd':teksnyee=_0x5c16e7(0x6a5),cemde=[];for(let i of _scommand){cemde[_0x5c16e7(0x324)](i['id']),teksnyee+=_0x5c16e7(0x28d)+i['id']+'\x0a➸\x20*Cmd*\x20:\x20'+i['chats'];}mentions(teksnyee,cemde,!![]);break;case _0x5c16e7(0x2d1):if(!isOwner)return mentions(_0x5c16e7(0x74a),[_0x5c16e7(0x45b)],!![]);var chatis=await patrick[_0x5c16e7(0x362)][_0x5c16e7(0x22a)]();chats[_0x5c16e7(0x65c)](async({jid:_0x35df97})=>{await patrick['chatRead'](_0x35df97);}),rdl=a+_0x5c16e7(0x35f)+chatis['length']+'\x20Chat\x20!'+a,await patrick[_0x5c16e7(0x74d)](from,rdl,MessageType['text'],{'quoted':fgclink}),console['log'](chatis[_0x5c16e7(0x1ba)]);break;case _0x5c16e7(0x361):if(!isOwner)return mentions('*Perintah\x20ini\x20Khusus\x20Owner\x20@6288989029718\x20!*',['6288989029718@s.whatsapp.net'],!![]);var ngonsol=[];rest=_limit[_0x5c16e7(0x1f6)]([]),_limit[_0x5c16e7(0x69a)](rest),fs['writeFileSync'](_0x5c16e7(0x43d),JSON[_0x5c16e7(0x314)](ngonsol)),fakestatus(_0x5c16e7(0x55c));break;case _0x5c16e7(0x702):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(!isAdminban)return mentions(_0x5c16e7(0x74a),[_0x5c16e7(0x45b)],!![]);if(!q[_0x5c16e7(0x28c)]('|'))return replyWithFakeLink(ind[_0x5c16e7(0x6c7)]());const tujuanfe=q[_0x5c16e7(0x2e2)](0x0,q[_0x5c16e7(0x1f6)]('|')-0x1),jumlahfe=q[_0x5c16e7(0x2e2)](q[_0x5c16e7(0x434)]('|')+0x1);if(isNaN(jumlahfe))return await replyWithFakeLink('Maaf,\x20Hanya\x20Angka\x20Yang\x20Diperbolehkan');const tujuantffe=tujuanfe['replace']('@','')+'@s.whatsapp.net';pajek=0x0*jumlahfe,hasiltffe=jumlahfe-pajek,addKoinUser(tujuantffe,hasiltffe),replyWithFakeLink(_0x5c16e7(0x5af)+sender['split']('@')[0x0]+_0x5c16e7(0x679)+tujuanfe+'\x0a>\x20Jumlah\x20:\x20Ub\x20\x20\x20\x20'+jumlahfe+_0x5c16e7(0x339)+pajek+'\x0a>\x20Serial\x20:\x20'+createSerial(0xa)+_0x5c16e7(0x650)+checkATMuser(sender)+_0x5c16e7(0x519)+time+_0x5c16e7(0x1af));break;case'identifymusic':if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(!isPrem)return replyWithFakeLink(ind['premon']());if(isQuotedAudio){const dlfile=await patrick[_0x5c16e7(0x5e0)](JSON['parse'](JSON['stringify'](mek)[_0x5c16e7(0x611)]('quotedM','m'))['message'][_0x5c16e7(0x65a)]['contextInfo']),bodyForm=new FormData();bodyForm['append'](_0x5c16e7(0x215),dlfile,'music.mp3'),bodyForm[_0x5c16e7(0x51b)](_0x5c16e7(0x538),''+zeksApi),axios('https://api.zeks.me/api/searchmusic',{'method':_0x5c16e7(0x6a9),'headers':{'Content-Type':_0x5c16e7(0x41f),...bodyForm['getHeaders']()},'data':bodyForm})['then'](({data:_0x559647})=>{const _0x43735b=_0x5c16e7;if(_0x559647[_0x43735b(0x52e)])replyWithFakeLink('*Identify\x20Music*\x0a\x0a'+a+'>\x20Title:\x20'+_0x559647[_0x43735b(0x1b1)][_0x43735b(0x53d)]+_0x43735b(0x2a2)+_0x559647[_0x43735b(0x1b1)][_0x43735b(0x716)]+_0x43735b(0x54a)+_0x559647['data']['genre']+_0x43735b(0x27d)+_0x559647['data'][_0x43735b(0x5ef)]+_0x43735b(0x286)+_0x559647['data'][_0x43735b(0x395)]+a);else replyWithFakeLink(_0x559647[_0x43735b(0x389)]);})[_0x5c16e7(0x3aa)](()=>replyWithFakeLink(_0x5c16e7(0x72d)));}else replyWithFakeLink(_0x5c16e7(0x4ac));limitAdd(sender);break;case'bc':if(!isOwner)return mentions(_0x5c16e7(0x74a),[_0x5c16e7(0x45b)],!![]);if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink('.......');anu=await patrick[_0x5c16e7(0x362)][_0x5c16e7(0x22a)]();if(isMedia&&!mek[_0x5c16e7(0x389)][_0x5c16e7(0x2e9)]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0x5c16e7(0x425)](JSON['stringify'](mek)[_0x5c16e7(0x611)]('quotedM','m'))[_0x5c16e7(0x389)]['extendedTextMessage'][_0x5c16e7(0x2b6)]:mek;buff=await patrick[_0x5c16e7(0x5e0)](encmedia);for(let _ of anu){patrick[_0x5c16e7(0x74d)](_['jid'],buff,image,{'caption':q+_0x5c16e7(0x48d)});}replyWithFakeLink(_0x5c16e7(0x2c2));}else{for(let _ of anu){sendMess(_['jid'],q+_0x5c16e7(0x48d));}replyWithFakeLink('*Succes\x20Broadcast!!*');}break;case _0x5c16e7(0x431):if(!isAdminban)return mentions(_0x5c16e7(0x74a),[_0x5c16e7(0x45b)],!![]);if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink('\x20tag\x20member');mente=args[0x0][_0x5c16e7(0x611)]('@','')+'@s.whatsapp.net',addPremiumUser(mente,args[0x1],prem),replyWithFakeLink(a+_0x5c16e7(0x1b8)+a),texting=_0x5c16e7(0x3ff);var optionns={'text':texting};patrick[_0x5c16e7(0x74d)](''+mente,optionns,text,{'quoted':mek});break;case _0x5c16e7(0x689):if(!isAdminban)return mentions('*Perintah\x20ini\x20Khusus\x20Owner\x20@6288989029718\x20!*',['6288989029718@s.whatsapp.net'],!![]);if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x343));mente=args[0x0][_0x5c16e7(0x611)]('@','')+_0x5c16e7(0x368),prem[_0x5c16e7(0x69a)](getPremiumPosition(mente,premium),0x1),replyWithFakeLink(_0x5c16e7(0x70b));break;case'listprem':let txt='List\x20Prem\x0aJumlah\x20:\x20'+prem[_0x5c16e7(0x1ba)]+'\x0a\x0a',men=[];for(let i of prem){men['push'](i['id']);let cekvip=ms(i[_0x5c16e7(0x3cb)]-Date[_0x5c16e7(0x33f)]());txt+='*ID\x20:*\x20@'+i['id']['split']('@')[0x0]+_0x5c16e7(0x29c)+cekvip['days']+_0x5c16e7(0x630)+cekvip[_0x5c16e7(0x416)]+_0x5c16e7(0x56f)+cekvip[_0x5c16e7(0x26b)]+_0x5c16e7(0x4cf)+cekvip[_0x5c16e7(0x486)]+_0x5c16e7(0x528);}mentions(txt,men,!![]);break;case _0x5c16e7(0x604):if(!isAdminban)return mentions(_0x5c16e7(0x74a),[_0x5c16e7(0x45b)],!![]);bnnd=body[_0x5c16e7(0x275)](0x6),ban[_0x5c16e7(0x324)](bnnd+_0x5c16e7(0x368)),fs['writeFileSync'](_0x5c16e7(0x67d),JSON['stringify'](ban)),replyWithFakeLink(_0x5c16e7(0x223)+bnnd+_0x5c16e7(0x41e));break;case _0x5c16e7(0x4c7):if(!isAdminban)return mentions(_0x5c16e7(0x74a),['6288989029718@s.whatsapp.net'],!![]);bnnd=body[_0x5c16e7(0x275)](0x8),ban[_0x5c16e7(0x69a)](bnnd+_0x5c16e7(0x368),0x1),fs[_0x5c16e7(0x5ea)](_0x5c16e7(0x67d),JSON[_0x5c16e7(0x314)](ban)),replyWithFakeLink(_0x5c16e7(0x223)+bnnd+'\x20telah\x20di\x20unban!');break;case _0x5c16e7(0x681):if(!isOwner)return mentions(_0x5c16e7(0x74a),['6288989029718@s.whatsapp.net'],!![]);adminban[_0x5c16e7(0x324)](q+'@s.whatsapp.net'),fs['writeFileSync'](_0x5c16e7(0x4c6),JSON['stringify'](adminban)),replyWithFakeLink('Succes,\x20wa.me/'+q+'\x20telah\x20dijadikan\x20adminban!'),texting='Selamat\x20anda\x20menjadi\x20adminban\x20di\x20SB\x0aFitur\x20yang\x20bisa\x20anda\x20gunakan\x0a'+a+_0x5c16e7(0x694)+a+_0x5c16e7(0x435);var optionns={'text':texting};patrick[_0x5c16e7(0x74d)](q+'@s.whatsapp.net',optionns,text,{'quoted':mek});break;case'delladmin':if(!isAdminban)return mentions(_0x5c16e7(0x74a),['6288989029718@s.whatsapp.net'],!![]);adminban['splice'](q+_0x5c16e7(0x368),0x1),fs[_0x5c16e7(0x5ea)](_0x5c16e7(0x4c6),JSON['stringify'](adminban)),replyWithFakeLink(_0x5c16e7(0x3af)+q+_0x5c16e7(0x662));break;case _0x5c16e7(0x42a):if(!isGroup)return replyWithFakeLink(ind['groupo']);if(!isAdminban)return mentions(_0x5c16e7(0x74a),[_0x5c16e7(0x45b)],!![]);if(args['length']<0x1)return replyWithFakeLink(_0x5c16e7(0x35a)+prefix+_0x5c16e7(0x5a7)+prefix+_0x5c16e7(0x561));if(isKasar(args[0x0]['toLowerCase'](),bad))return replyWithFakeLink('*Kata\x20tersebut\x20sudah\x20ada!*\x0aMohon\x20cek\x20di\x20'+prefix+_0x5c16e7(0x3d4));bad[_0x5c16e7(0x324)](q),fs[_0x5c16e7(0x5ea)](_0x5c16e7(0x652),JSON[_0x5c16e7(0x314)](bad)),replyWithFakeLink(_0x5c16e7(0x270));break;case'delbadword':if(!isGroup)return replyWithFakeLink(ind['groupo']);if(!isAdminban)return replyWithFakeLink(_0x5c16e7(0x358));if(args['length']<0x1)return replyWithFakeLink('*Wrong\x20Format!!*\x0aExample:\x20'+(prefix+command)+_0x5c16e7(0x64e));if(!isKasar(args[0x0][_0x5c16e7(0x2d5)](),bad))return replyWithFakeLink(_0x5c16e7(0x659)+prefix+_0x5c16e7(0x3d4));bad[_0x5c16e7(0x69a)](q),fs[_0x5c16e7(0x5ea)](_0x5c16e7(0x652),JSON['stringify'](bad)),replyWithFakeLink(_0x5c16e7(0x579));break;case _0x5c16e7(0x470):case _0x5c16e7(0x6c1):case'gay':case _0x5c16e7(0x5e6):case _0x5c16e7(0x313):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if((isMedia&&!mek['message'][_0x5c16e7(0x2e9)]||isQuotedImage)&&args[_0x5c16e7(0x1ba)]==0x0){getqu=isQuotedImage?JSON[_0x5c16e7(0x425)](JSON['stringify'](mek)[_0x5c16e7(0x611)]('quotedM','m'))[_0x5c16e7(0x389)]['extendedTextMessage'][_0x5c16e7(0x2b6)]:mek,replyWithFakeLink(ind[_0x5c16e7(0x628)]()),hasilq=await patrick[_0x5c16e7(0x354)](getqu);var imgbb=require('imgbb-uploader');anu=await imgbb(_0x5c16e7(0x263),hasilq),teks=''+anu[_0x5c16e7(0x4f8)],anull=await getBuffer('https://some-random-api.ml/canvas/'+command+_0x5c16e7(0x48b)+teks),patrick['sendMessage'](from,anull,image,{'quoted':freply});}else replyWithFakeLink(_0x5c16e7(0x6be));}catch(_0x2dfa09){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x2dfa09,'red')),replyWithFakeLink(ind['error']());}await limitAdd(sender);break;case'removebg':case _0x5c16e7(0x421):case _0x5c16e7(0x331):case'ad':case _0x5c16e7(0x224):case _0x5c16e7(0x562):case _0x5c16e7(0x399):case _0x5c16e7(0x3ce):case _0x5c16e7(0x5ba):case _0x5c16e7(0x4ad):case _0x5c16e7(0x6b3):case _0x5c16e7(0x663):case'facepalm':case _0x5c16e7(0x26d):case _0x5c16e7(0x34a):case _0x5c16e7(0x60c):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if((isMedia&&!mek[_0x5c16e7(0x389)][_0x5c16e7(0x2e9)]||isQuotedImage)&&args[_0x5c16e7(0x1ba)]==0x0){getqu=isQuotedImage?JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)]('quotedM','m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)]:mek,replyWithFakeLink(ind[_0x5c16e7(0x628)]()),hasilq=await patrick[_0x5c16e7(0x354)](getqu);var imgbb=require(_0x5c16e7(0x332));anu=await imgbb(_0x5c16e7(0x263),hasilq),teks=''+anu[_0x5c16e7(0x4f8)],anull=await getBuffer('https://dapuhy-api.herokuapp.com/api/canvas/'+command+_0x5c16e7(0x739)+anu[_0x5c16e7(0x4f8)]+_0x5c16e7(0x68d)),patrick['sendMessage'](from,anull,image,{'quoted':freply});}else replyWithFakeLink('*Wrong\x20Format*\x0aReply\x20the\x20picture!!!');}catch(_0x4577ae){console['log']('Error\x20:',color(_0x4577ae,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}await limitAdd(sender);break;case'csgo':case _0x5c16e7(0x1f2):case'silk':case'warface':case _0x5c16e7(0x592):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(args['length']<0x1)return replyWithFakeLink(_0x5c16e7(0x225)+(prefix+command)+'\x20'+pushname);teksnya=args['join']('\x20'),replyWithFakeLink(ind[_0x5c16e7(0x628)]()),poto=await getBuffer(_0x5c16e7(0x6c5)+command+_0x5c16e7(0x204)+teksnya+'&apikey='+leysApi),patrick[_0x5c16e7(0x74d)](from,poto,image,{'quoted':ftoko}),await limitAdd(sender);}catch(_0x331b29){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x331b29,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case'hartatahta':try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x4a2)+(prefix+command)+'\x20'+pushname);replyWithFakeLink(ind['wait']()),patrickganss=await fetchJson('https://leyscoders-api.herokuapp.com/api/harta-tahta?teks='+q+'&apikey='+leysApi),hasil=patrickganss[_0x5c16e7(0x50b)],poto=await getBuffer(hasil[_0x5c16e7(0x5dd)]),patrick[_0x5c16e7(0x74d)](from,poto,image,{'quoted':ftoko}),await limitAdd(sender);}catch(_0x57c01f){console[_0x5c16e7(0x1bd)]('Error\x20:',color(_0x57c01f,'red')),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x3c2):case _0x5c16e7(0x69c):case'brokenglass':case _0x5c16e7(0x3dc):case _0x5c16e7(0x3fb):case'cloud':case _0x5c16e7(0x622):case _0x5c16e7(0x507):case _0x5c16e7(0x39b):case _0x5c16e7(0x384):case'neon':try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(ind['baned']());if(args['length']<0x1)replyWithFakeLink(_0x5c16e7(0x225)+(prefix+command)+'\x20'+pushname);teksnya=args[_0x5c16e7(0x304)]('\x20'),replyWithFakeLink(ind[_0x5c16e7(0x628)]()),poto=await getBuffer(_0x5c16e7(0x688)+command+'?text='+q+_0x5c16e7(0x51c)+dappaApi),patrick[_0x5c16e7(0x74d)](from,poto,image,{'quoted':ftoko}),await limitAdd(sender);}catch(_0x2ec563){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x2ec563,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x463):case _0x5c16e7(0x6a1):case _0x5c16e7(0x6b5):case _0x5c16e7(0x654):case _0x5c16e7(0x5f3):case _0x5c16e7(0x741):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x1cc)+(prefix+command)+_0x5c16e7(0x61c));replyWithFakeLink(ind['wait']());var has=q['split'](':')[0x0],kas=q[_0x5c16e7(0x366)](':')[0x1];patrickganss=await getBuffer(_0x5c16e7(0x371)+command+_0x5c16e7(0x3ae)+has+_0x5c16e7(0x342)+kas+'&apikey='+dappaApi),patrick[_0x5c16e7(0x74d)](from,patrickganss,image,{'quoted':ftoko}),await limitAdd(sender);}catch(_0x212a44){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x212a44,'red')),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x2e5):case _0x5c16e7(0x403):case _0x5c16e7(0x6e7):case _0x5c16e7(0x507):case'holographic':case _0x5c16e7(0x52f):case _0x5c16e7(0x328):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(ind['baned']());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x4a2)+(prefix+command)+'\x20'+pushname+_0x5c16e7(0x1d6));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),patrickganss=await getBuffer(_0x5c16e7(0x688)+command+_0x5c16e7(0x71e)+q+'&apikey='+dappaApi),patrick[_0x5c16e7(0x74d)](from,patrickganss,image,{'quoted':ftoko}),await limitAdd(sender);}catch(_0x2542da){console[_0x5c16e7(0x1bd)]('Error\x20:',color(_0x2542da,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case'attp':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+_0x5c16e7(0x508));attp2=await getBuffer(_0x5c16e7(0x1e6)+q),patrick[_0x5c16e7(0x74d)](from,attp2,sticker,{'quoted':fkontak});break;case _0x5c16e7(0x4c8):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink('Example:\x20'+(prefix+command)+_0x5c16e7(0x508));ttp=await getBuffer('https://api.xteam.xyz/ttp?file&text='+q),patrick[_0x5c16e7(0x74d)](from,ttp,sticker,{'quoted':ftoko});break;case _0x5c16e7(0x3a9):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));const tex=encodeURIComponent(body[_0x5c16e7(0x275)](0x8));if(!tex)return patrick['sendMessage'](from,_0x5c16e7(0x537),text,{'quoted':fgclink});const butff=await getBuffer(_0x5c16e7(0x305)+tex);patrick[_0x5c16e7(0x74d)](from,butff,image,{'quoted':ftoko}),await limitAdd(sender);break;case _0x5c16e7(0x321):case _0x5c16e7(0x52d):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));var gh=body[_0x5c16e7(0x275)](0xc),quote=gh[_0x5c16e7(0x366)](':')[0x0],wm=gh['split'](':')[0x1];const pref='Usage:\x20\x0a'+prefix+'quotemaker\x20teks:watermark\x0a\x0aEx\x20:\x0a'+prefix+'quotemaker\x20ini\x20contoh|bicit';if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(pref);replyWithFakeLink(ind['wait']()),anu=await fetchJson(_0x5c16e7(0x6b4)+quote+_0x5c16e7(0x6c8)+wm+'&tipe=random',{'method':_0x5c16e7(0x269)}),buffer=await getBuffer(anu['result']),patrick[_0x5c16e7(0x74d)](from,buffer,image,{'caption':_0x5c16e7(0x3d6),'quoted':ftoko}),await limitAdd(sender);break;case _0x5c16e7(0x6e2):if(isLimit(sender))return replyWithFakeLink(mess[_0x5c16e7(0x6ef)]);if(!q)return replyWithFakeLink('Example\x20:\x20'+(prefix+command)+'\x20😗');qes=args[_0x5c16e7(0x304)]('\x20'),emoji[_0x5c16e7(0x269)](''+qes)[_0x5c16e7(0x6d8)](_0xc73ce3=>{const _0x26b13f=_0x5c16e7;teks=''+_0xc73ce3[_0x26b13f(0x700)][0x4][_0x26b13f(0x5dd)],sendStickerFromUrl(from,''+teks),console['log'](teks);}),limitAdd(sender);break;case _0x5c16e7(0x587):if(!q)return reply(_0x5c16e7(0x245)+(prefix+command)+_0x5c16e7(0x6b8));hileh=q[_0x5c16e7(0x611)](/[i|u|e|o]/gi,'a'),reply(hileh);break;case'hilih':if(!q)return reply(_0x5c16e7(0x245)+(prefix+command)+'\x20Patrick');hileh=q[_0x5c16e7(0x611)](/[a|u|e|o]/gi,'i'),reply(hileh);break;case _0x5c16e7(0x4df):if(!q)return reply(_0x5c16e7(0x245)+(prefix+command)+_0x5c16e7(0x6b8));hileh=q[_0x5c16e7(0x611)](/[i|a|e|o]/gi,'u'),reply(hileh);break;case _0x5c16e7(0x28e):if(!q)return reply('*Wrong\x20Format!!*\x0aExample:\x20'+(prefix+command)+'\x20Patrick');hileh=q[_0x5c16e7(0x611)](/[i|u|a|o]/gi,'e'),reply(hileh);break;case _0x5c16e7(0x6a3):if(!q)return reply(_0x5c16e7(0x245)+(prefix+command)+'\x20Patrick');hileh=q[_0x5c16e7(0x611)](/[i|u|e|a]/gi,'o'),reply(hileh);break;case'chatdia':if(!isRegistered)return reply(ind[_0x5c16e7(0x1e4)]());if(args[_0x5c16e7(0x1ba)]<0x1)return reply(_0x5c16e7(0x245)+(prefix+command)+_0x5c16e7(0x645));if(!args[0x0][_0x5c16e7(0x686)]('62'))return reply(_0x5c16e7(0x2a1));if(!args[0x0][_0x5c16e7(0x686)](_0x5c16e7(0x32e)))return;const noorg2=q[_0x5c16e7(0x366)](':')[0x0];if(isNaN(noorg2))return await reply(_0x5c16e7(0x4d7));const katakita2=q[_0x5c16e7(0x366)](':')[0x1],kataorg2=''+sender[_0x5c16e7(0x611)](_0x5c16e7(0x368));patrick['sendMessage'](noorg2+_0x5c16e7(0x368),_0x5c16e7(0x4dc)+pushname+'\x0a•\x20Number:\x20@'+sender[_0x5c16e7(0x366)]('@')[0x0]+_0x5c16e7(0x6cc)+katakita2+_0x5c16e7(0x2ec)+(prefix+command)+_0x5c16e7(0x6bc)+sender[_0x5c16e7(0x611)](_0x5c16e7(0x368),'')+_0x5c16e7(0x58a),text,{'quoted':{'key':{'participant':noorg2+_0x5c16e7(0x368)},'message':{'conversation':''+kataorg2,'contextInfo':{'mentionedJid':[sender]}}}}),reply(_0x5c16e7(0x710));break;case'addsay':if(isBanned)return reply(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return reply(ind[_0x5c16e7(0x1e4)]());if(!q)return reply('*Wrong\x20Format!!*\x0aExample:\x20'+(prefix+command)+'\x20Hello');say[_0x5c16e7(0x324)](q),fs[_0x5c16e7(0x5ea)](_0x5c16e7(0x5fe),JSON[_0x5c16e7(0x314)](say)),reply('Succes,\x20Kata\x20'+q+'\x20telah\x20ditambahkan\x20ke\x20database');break;case _0x5c16e7(0x491):case _0x5c16e7(0x72f):if(isBanned)return reply(ind['baned']());if(!isRegistered)return reply(ind['noregis']());teks=_0x5c16e7(0x68a);for(let xyz of say){teks+='•\x20'+xyz+'\x0a';}teks+=_0x5c16e7(0x3f1)+say['length'],patrick['sendMessage'](from,teks[_0x5c16e7(0x684)](),extendedText,{'quoted':mek,'contextInfo':{'mentionedJid':say}});break;case _0x5c16e7(0x749):if(isBanned)return;if(!isRegistered)return;hasil=say[Math['floor'](Math[_0x5c16e7(0x567)]()*say[_0x5c16e7(0x1ba)])],reply(hasil);break;case'fitnah':if(!isRegistered)return reply(ind[_0x5c16e7(0x1e4)]());if(isBanned)return reply(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return reply(ind['limitend'](pusname));if(!isGroup)return reply(ind['groupo']());if(args[_0x5c16e7(0x1ba)]<0x1)return reply(_0x5c16e7(0x59c)+(prefix+command)+'fitnah\x20@tag:pesan:balasan*');var gh=body['slice'](0x8);mentioned=mek['message'][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)][_0x5c16e7(0x49b)];var replace=gh[_0x5c16e7(0x366)](':')[0x0],target=gh[_0x5c16e7(0x366)](':')[0x1],bot=gh[_0x5c16e7(0x366)](':')[0x2];patrick[_0x5c16e7(0x74d)](from,''+bot,text,{'quoted':{'key':{'fromMe':![],'participant':''+mentioned,...from?{'remoteJid':from}:{}},'message':{'conversation':''+target}}});break;case'darkjoke':case'estetik':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());replyWithFakeLink(ind['wait']()),anu=await getBuffer(_0x5c16e7(0x40b)+command+_0x5c16e7(0x511)+leysApi),patrick[_0x5c16e7(0x74d)](from,anu,image,{'quoted':freply}),await limitAdd(sender);break;case _0x5c16e7(0x754):case _0x5c16e7(0x2c0):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());replyWithFakeLink(ind[_0x5c16e7(0x628)]()),anu=await fetchJson(_0x5c16e7(0x276)+leysApi),cowo=await getBuffer(anu['result']['male']),patrick[_0x5c16e7(0x74d)](from,cowo,image,{'quoted':freply,'caption':'*PP\x20Couple\x20Cowok*'}),cewe=await getBuffer(anu[_0x5c16e7(0x50b)][_0x5c16e7(0x450)]),patrick[_0x5c16e7(0x74d)](from,cewe,image,{'quoted':freply,'caption':'*PP\x20Couple\x20Cewek*'}),await limitAdd(sender);break;case'artimimpi':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args['length']<0x1)return replyWithFakeLink('Example:\x20'+(prefix+command)+_0x5c16e7(0x6b8));anu=await fetchJson(_0x5c16e7(0x391)+q,{'method':_0x5c16e7(0x269)}),teks=_0x5c16e7(0x69e)+q,teks+='*'+t[_0x5c16e7(0x50b)]['array']+'\x0aFollow\x20Me\x20in\x20Insta:\x20_pa7rick\x20:)\x0a\x0a=================\x0a',patrick[_0x5c16e7(0x74d)](from,teks,text),await limitAdd(sender);break;case _0x5c16e7(0x36d):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind['limitend'](pushname));ranp=getRandom('.png'),rano=getRandom(_0x5c16e7(0x213)),random=''+Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*0x6),hasil=_0x5c16e7(0x4b5)+random+_0x5c16e7(0x242),exec(_0x5c16e7(0x318)+hasil+_0x5c16e7(0x3a8)+ranp+_0x5c16e7(0x6c2)+ranp+'\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=15\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20'+rano,_0x25c307=>{const _0x1fbeff=_0x5c16e7;fs[_0x1fbeff(0x599)](ranp);if(_0x25c307)return replyWithFakeLink(ind['wait']());buffer=fs['readFileSync'](rano),patrick[_0x1fbeff(0x74d)](from,buffer,sticker,{'quoted':mek}),fs[_0x1fbeff(0x599)](rano);});break;case'timer':if(isBanned)return replyWithFakeLink(ind['baned']());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[0x1]=='detik')var timer=args[0x0]+_0x5c16e7(0x557);else{if(args[0x1]==_0x5c16e7(0x618))var timer=args[0x0]+_0x5c16e7(0x44c);else{if(args[0x1]==_0x5c16e7(0x5db))var timer=args[0x0]+'00000';else return replyWithFakeLink(_0x5c16e7(0x6ab));}}setTimeout(()=>{const _0x1d4932=_0x5c16e7;replyWithFakeLink(_0x1d4932(0x32c));},timer);break;case _0x5c16e7(0x2ed):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),memein=await fetchJson(_0x5c16e7(0x5b4)+zeksApi),buffer=await getBuffer(memein['result']),patrick[_0x5c16e7(0x74d)](from,buffer,image,{'quoted':fgclink,'caption':'*Nih\x20Meme,\x20Jangan\x20Lupa\x20Follow\x20_pa7rick\x20:)*'}),await limitAdd(sender);break;case _0x5c16e7(0x648):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));kapankah=body['slice'](0x1);const kapan=[_0x5c16e7(0x247),_0x5c16e7(0x6e4),_0x5c16e7(0x418),'4\x20Hari\x20Lagi',_0x5c16e7(0x398),_0x5c16e7(0x6ff),'1\x20Minggu\x20Lagi',_0x5c16e7(0x30b),_0x5c16e7(0x6f3),'1\x20Bulan\x20Lagi',_0x5c16e7(0x658),_0x5c16e7(0x720),_0x5c16e7(0x488),_0x5c16e7(0x5fa),_0x5c16e7(0x5c9),_0x5c16e7(0x5ae),'2\x20Tahun\x20Lagi',_0x5c16e7(0x43b),_0x5c16e7(0x221),_0x5c16e7(0x5d9),_0x5c16e7(0x58d),_0x5c16e7(0x256),_0x5c16e7(0x674),_0x5c16e7(0x249)],koh=kapan[Math[_0x5c16e7(0x4fc)](Math['random']()*kapan[_0x5c16e7(0x1ba)])];patrick['sendMessage'](from,_0x5c16e7(0x593)+kapankah+_0x5c16e7(0x394)+koh,text,{'quoted':ftoko}),await limitAdd(sender);break;case'tictactoe':if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(isTicTacToe(from,tictactoe))return replyWithFakeLink(_0x5c16e7(0x1ae));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink('Kirim\x20perintah\x20*'+prefix+'tictactoe*\x20@tag');mentioned=mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)]['mentionedJid'];if(mentioned[_0x5c16e7(0x1ba)]!==0x0){if(mentioned[0x0]===sender)return replyWithFakeLink(_0x5c16e7(0x282));mentions(monospace('@'+sender[_0x5c16e7(0x366)]('@')[0x0]+_0x5c16e7(0x27c)+mentioned[0x0][_0x5c16e7(0x366)]('@')[0x0]+_0x5c16e7(0x3cc)),[sender,mentioned[0x0]],![]),tictactoe[_0x5c16e7(0x324)]({'id':from,'status':null,'penantang':sender,'ditantang':mentioned[0x0],'TicTacToe':[_0x5c16e7(0x24a),'2️⃣',_0x5c16e7(0x20f),'4️⃣',_0x5c16e7(0x25e),_0x5c16e7(0x2b3),_0x5c16e7(0x2ff),_0x5c16e7(0x2c6),_0x5c16e7(0x6d5)]});}else replyWithFakeLink(_0x5c16e7(0x602)+prefix+_0x5c16e7(0x469));break;case _0x5c16e7(0x6e8):case _0x5c16e7(0x3f9):if(!isGroup)return replyWithFakeLink('only\x20grup');if(!isOwner)return replyWithFakeLink(_0x5c16e7(0x1a9));if(!isTicTacToe(from,tictactoe))return replyWithFakeLink(_0x5c16e7(0x316));tictactoe[_0x5c16e7(0x69a)](getPosTic(from,tictactoe),0x1),replyWithFakeLink(_0x5c16e7(0x20b));break;case _0x5c16e7(0x707):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));bisakah=body[_0x5c16e7(0x275)](0x1);const bisa=[_0x5c16e7(0x718),_0x5c16e7(0x29b),_0x5c16e7(0x49d),_0x5c16e7(0x4f7),_0x5c16e7(0x563)],keh=bisa[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*bisa[_0x5c16e7(0x1ba)])];patrick[_0x5c16e7(0x74d)](from,'Pertanyaan\x20:\x20*'+bisakah+_0x5c16e7(0x394)+keh,text,{'quoted':mek}),await limitAdd(sender);break;case'tqto':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x56d),text,{'quoted':mek}),await limitAdd(sender);break;case _0x5c16e7(0x2a3):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));apakah=body['slice'](0x1);const apa=['Iya',_0x5c16e7(0x503),'Bisa\x20Jadi',_0x5c16e7(0x49d),_0x5c16e7(0x3ee)],kah=apa[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*apa[_0x5c16e7(0x1ba)])];patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x593)+apakah+_0x5c16e7(0x394)+kah,text,{'quoted':mek}),await limitAdd(sender);break;case _0x5c16e7(0x303):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));rate=body[_0x5c16e7(0x275)](0x1);const ra=['4','9','17','28','34','48','59','62','74','83','97',_0x5c16e7(0x530),'29','94','75','82','41','39'],te=ra[Math['floor'](Math[_0x5c16e7(0x567)]()*ra['length'])];patrick[_0x5c16e7(0x74d)](from,'Pertanyaan\x20:\x20*'+rate+_0x5c16e7(0x394)+te+'%',text,{'quoted':mek}),await limitAdd(sender);break;case _0x5c16e7(0x1d7):axios[_0x5c16e7(0x269)](_0x5c16e7(0x1bf))[_0x5c16e7(0x6d8)](_0x4be6ca=>_0x4be6ca[_0x5c16e7(0x1b1)])[_0x5c16e7(0x6d8)](_0xf13b6b=>textImg('Nih\x20Liat\x20Data\x20Gay\x20Si\x20'+q+_0x5c16e7(0x1c7)+_0xf13b6b[_0x5c16e7(0x49c)]+_0x5c16e7(0x4c9)+_0xf13b6b[_0x5c16e7(0x5c5)]));break;case _0x5c16e7(0x1db):case _0x5c16e7(0x21c):case _0x5c16e7(0x424):case _0x5c16e7(0x24e):case _0x5c16e7(0x2ab):case _0x5c16e7(0x33e):case'vwibu':case _0x5c16e7(0x206):case'vpakgirl':case _0x5c16e7(0x345):case _0x5c16e7(0x5cd):case _0x5c16e7(0x752):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());membr=[];const noll=groupMembers,dissinni=noll[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*noll[_0x5c16e7(0x1ba)])],vcare=_0x5c16e7(0x5a5)+_0x5c16e7(0x2cf)+(_0x5c16e7(0x577)+command[_0x5c16e7(0x611)]('v','')+'\x20\x0a')+_0x5c16e7(0x1f3)+(_0x5c16e7(0x1c6)+dissinni[_0x5c16e7(0x338)][_0x5c16e7(0x366)]('@')[0x0]+':+'+dissinni[_0x5c16e7(0x338)][_0x5c16e7(0x366)]('@')[0x0]+'\x0a')+_0x5c16e7(0x609);membr[_0x5c16e7(0x324)](dissinni[_0x5c16e7(0x338)]),patrick[_0x5c16e7(0x74d)](from,{'displayname':_0x5c16e7(0x5b0),'vcard':vcare},MessageType[_0x5c16e7(0x36b)]),patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x1b7),text,{'quoted':fkontak});break;case _0x5c16e7(0x706):case _0x5c16e7(0x472):case _0x5c16e7(0x257):case _0x5c16e7(0x50e):case _0x5c16e7(0x501):case'hebat':case _0x5c16e7(0x2b2):case _0x5c16e7(0x536):case _0x5c16e7(0x729):case _0x5c16e7(0x483):case _0x5c16e7(0x251):case _0x5c16e7(0x68f):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());membr=[];const nus=groupMembers,msl=groupMembers,siapss=nus[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*nus[_0x5c16e7(0x1ba)])],sipss=pushname[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*msl[_0x5c16e7(0x1ba)])];teks=_0x5c16e7(0x359)+command+'\x20disini\x20Adalah\x20:\x20@'+siapss['jid']['split']('@')[0x0],membr[_0x5c16e7(0x324)](siapss['jid']),mentions(teks,membr,!![]);break;case _0x5c16e7(0x24b):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));const trut=[_0x5c16e7(0x240),'Kalau\x20boleh\x20atau\x20kalau\x20mau,\x20di\x20gc/luar\x20gc\x20siapa\x20yang\x20akan\x20kamu\x20jadikan\x20sahabat?(boleh\x20beda/sma\x20jenis)',_0x5c16e7(0x3cf),_0x5c16e7(0x205),_0x5c16e7(0x480),_0x5c16e7(0x2a4),_0x5c16e7(0x28f),_0x5c16e7(0x2d4),_0x5c16e7(0x24f),_0x5c16e7(0x279),_0x5c16e7(0x632),'hal\x20membanggakan\x20apa\x20yang\x20kamu\x20dapatkan\x20di\x20tahun\x20ini',_0x5c16e7(0x32f),_0x5c16e7(0x490),_0x5c16e7(0x6dc),'Siapa\x20yang\x20paling\x20mendekati\x20tipe\x20pasangan\x20idealmu\x20di\x20sini','suka\x20mabar(main\x20bareng)sama\x20siapa?',_0x5c16e7(0x1ce),'Sebutkan\x20kejadian\x20yang\x20bikin\x20kamu\x20sakit\x20hati\x20yang\x20masih\x20di\x20inget',_0x5c16e7(0x43e),_0x5c16e7(0x2ba)],ttrth=trut[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*trut[_0x5c16e7(0x1ba)])];truteh=await getBuffer('https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'),patrick[_0x5c16e7(0x74d)](from,truteh,image,{'caption':_0x5c16e7(0x4de)+ttrth,'quoted':freply}),await limitAdd(sender);break;case _0x5c16e7(0x696):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));const dare=[_0x5c16e7(0x53c),_0x5c16e7(0x34d),_0x5c16e7(0x6d6),_0x5c16e7(0x3d3),_0x5c16e7(0x2ac),_0x5c16e7(0x546),_0x5c16e7(0x485),'drop\x20kutipan\x20lagu/quote,\x20terus\x20tag\x20member\x20yang\x20cocok\x20buat\x20kutipan\x20itu',_0x5c16e7(0x677),'ketik\x20pake\x20bahasa\x20daerah\x2024\x20jam',_0x5c16e7(0x3a7),_0x5c16e7(0x756),_0x5c16e7(0x350),'record\x20voice\x20baca\x20surah\x20al-kautsar',_0x5c16e7(0x47a),'sebutkan\x20tipe\x20pacar\x20mu!',_0x5c16e7(0x2af),_0x5c16e7(0x3e3),_0x5c16e7(0x62e),_0x5c16e7(0x515),'teriak\x20pake\x20kata\x20kasar\x20sambil\x20vn\x20trus\x20kirim\x20kesini',_0x5c16e7(0x411),_0x5c16e7(0x1df),_0x5c16e7(0x461)],der=dare[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*dare['length'])];tod=await getBuffer(_0x5c16e7(0x4cb)),patrick[_0x5c16e7(0x74d)](from,tod,image,{'quoted':freply,'caption':_0x5c16e7(0x1b2)+der}),await limitAdd(sender);break;case _0x5c16e7(0x698):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));hobby=body[_0x5c16e7(0x275)](0x1);const hob=[_0x5c16e7(0x2b7),_0x5c16e7(0x244),_0x5c16e7(0x6ba),_0x5c16e7(0x623),_0x5c16e7(0x5a6),'Membantu\x20Atok',_0x5c16e7(0x610),_0x5c16e7(0x3e9),_0x5c16e7(0x6bb),_0x5c16e7(0x34b),_0x5c16e7(0x6eb),_0x5c16e7(0x1eb),_0x5c16e7(0x566),'Nyanyi',_0x5c16e7(0x4ec),'Bertumbuk','Menggambar',_0x5c16e7(0x565),_0x5c16e7(0x5f6),_0x5c16e7(0x2a9),_0x5c16e7(0x5e7)],by=hob[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*hob[_0x5c16e7(0x1ba)])];patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x593)+hobby+_0x5c16e7(0x394)+by,text,{'quoted':freply}),await limitAdd(sender);break;case _0x5c16e7(0x3c8):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);await patrickhay(ind['group'](prefix),MessageType[_0x5c16e7(0x70f)],tescuk,''+ucapanFakereply);break;case'caripesan':if(!q)return replyWithFakeLink(_0x5c16e7(0x67f));let v=await patrick[_0x5c16e7(0x588)](q,from,0xa,0x1),s=v[_0x5c16e7(0x554)],el=s[_0x5c16e7(0x4da)](_0x5ddd4e=>_0x5ddd4e[_0x5c16e7(0x389)]);el[_0x5c16e7(0x220)]();try{if(el[0x0]['message'][_0x5c16e7(0x3da)]==undefined)return;replyWithFakeLink(_0x5c16e7(0x6a0)+el[_0x5c16e7(0x1ba)]+_0x5c16e7(0x427)),await sleep(0xbb8);for(let i=0x0;i<el[_0x5c16e7(0x1ba)];i++){await patrick['sendMessage'](from,'Nih\x20pesannya',text,{'quoted':el[i]});}}catch(_0x30ed4b){replyWithFakeLink(_0x5c16e7(0x633));}break;case _0x5c16e7(0x534):if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(!isGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x29f)]());if(!isBotGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x1fc)]());media=await patrick[_0x5c16e7(0x354)](mek),await patrick['updateProfilePicture'](from,media),replyWithFakeLink(_0x5c16e7(0x564));break;case _0x5c16e7(0x1f7):if(!isGroup)return replyWithFakeLink(ind['groupo']());if(!isGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x29f)]());if(!isBotGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x1fc)]());if(args['length']<0x1)return replyWithFakeLink(_0x5c16e7(0x6a7));if(args[0x0][_0x5c16e7(0x686)]('08'))return replyWithFakeLink(_0x5c16e7(0x333));try{num=args[0x0][_0x5c16e7(0x611)](/ /g,'')+_0x5c16e7(0x368),patrick['groupAdd'](from,[num]);}catch(_0x3664fb){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),_0x3664fb),replyWithFakeLink(_0x5c16e7(0x520));}break;case'grup':case _0x5c16e7(0x6de):if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(!isGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x29f)]());if(!isBotGroupAdmins)return replyWithFakeLink(ind['badmin']());if(args[0x0]===_0x5c16e7(0x2da))replyWithFakeLink(_0x5c16e7(0x529)),patrick['groupSettingChange'](from,GroupSettingChange[_0x5c16e7(0x235)],![]);else args[0x0]===_0x5c16e7(0x53b)&&(replyWithFakeLink(_0x5c16e7(0x568)),patrick[_0x5c16e7(0x72e)](from,GroupSettingChange[_0x5c16e7(0x235)],!![]));break;case _0x5c16e7(0x5b5):if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(!isGroupAdmins)return replyWithFakeLink(ind['admin']());if(!isBotGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x1fc)]());patrick[_0x5c16e7(0x582)](from,''+body[_0x5c16e7(0x275)](0x9)),patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x61e),text,{'quoted':freply});break;case _0x5c16e7(0x4e3):if(!isGroup)return replyWithFakeLink(ind['groupo']());if(!isGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x29f)]());if(!isBotGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x1fc)]());patrick['groupUpdateDescription'](from,''+body[_0x5c16e7(0x275)](0x9)),patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x605),text,{'quoted':freply});break;case _0x5c16e7(0x6c0):if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(!isGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x29f)]());if(!isBotGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x1fc)]());if(mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]===undefined||mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]===null)return replyWithFakeLink('𝗧𝗮𝗴\x20𝘁𝗮𝗿𝗴𝗲𝘁\x20𝘆𝗮𝗻𝗴\x20𝗶𝗻𝗴𝗶𝗻\x20𝗱𝗶\x20𝘁𝗲𝗻𝗱𝗮𝗻𝗴!');mentioned=mek[_0x5c16e7(0x389)]['extendedTextMessage']['contextInfo'][_0x5c16e7(0x49b)];if(mentioned['length']>0x1){teks='';for(let _ of mentioned){teks+=_0x5c16e7(0x5e1),teks+='@_.split(\x27@\x27)[0]';}mentions(teks,mentioned,!![]),patrick[_0x5c16e7(0x31d)](from,mentioned);}else mentions('Status\x20adminmu\x20dicopot.\x20Makanya\x20jan\x20jadi\x20sider🏃\x0a@'+mentioned[0x0]['split']('@')[0x0],mentioned,!![]),patrick[_0x5c16e7(0x31d)](from,mentioned);break;case _0x5c16e7(0x6d0):if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(!isGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x29f)]());if(!isBotGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x1fc)]());if(mek['message'][_0x5c16e7(0x65a)]===undefined||mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]===null)return replyWithFakeLink('𝗧𝗮𝗴\x20𝘁𝗮𝗿𝗴𝗲𝘁\x20𝘆𝗮𝗻𝗴\x20𝗶𝗻𝗴𝗶𝗻\x20𝗱𝗶\x20𝘁𝗲𝗻𝗱𝗮𝗻𝗴!');mentioned=mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)][_0x5c16e7(0x49b)];if(mentioned[_0x5c16e7(0x1ba)]>0x1){teks='';for(let _ of mentioned){teks+=_0x5c16e7(0x302),teks+=_0x5c16e7(0x1b9);}mentions(teks,mentioned,!![]),patrick[_0x5c16e7(0x2ea)](from,mentioned);}else mentions(_0x5c16e7(0x320)+mentioned[0x0][_0x5c16e7(0x366)]('@')[0x0]+_0x5c16e7(0x6d4),mentioned,!![]),patrick[_0x5c16e7(0x2ea)](from,mentioned);break;case _0x5c16e7(0x634):if(!isGroup)return replyWithFakeLink(ind['groupo']());teks=_0x5c16e7(0x383)+groupMetadata[_0x5c16e7(0x47f)]+_0x5c16e7(0x364)+groupAdmins[_0x5c16e7(0x1ba)]+'\x0a\x0a',no=0x0;for(let admon of groupAdmins){no+=0x1,teks+='['+no[_0x5c16e7(0x22d)]()+']\x20@'+admon[_0x5c16e7(0x366)]('@')[0x0]+'\x0a';}mentions(teks,groupAdmins,!![]);break;case _0x5c16e7(0x62a):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());var waw=mek[_0x5c16e7(0x4b9)];const tag={'text':'@'+waw[_0x5c16e7(0x366)](_0x5c16e7(0x368))[0x0]+_0x5c16e7(0x300),'contextInfo':{'mentionedJid':[waw]}};patrick[_0x5c16e7(0x74d)](from,tag,text,{'quoted':freply});break;case'hidetag':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(!isGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x29f)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());var value=body[_0x5c16e7(0x275)](0x9),group=await patrick['groupMetadata'](from),member=group[_0x5c16e7(0x3e0)],mem=[];member[_0x5c16e7(0x65c)](async _0x3bf5e2=>{const _0x35015a=_0x5c16e7;mem[_0x35015a(0x324)](_0x3bf5e2['id']['replace']('c.us',_0x35015a(0x32d)));});var options={'text':value,'contextInfo':{'mentionedJid':mem},'quoted':freply};patrick[_0x5c16e7(0x74d)](from,options,text),await limitAdd(sender);break;case _0x5c16e7(0x370):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());await patrickhay(ind[_0x5c16e7(0x708)](prefix),MessageType[_0x5c16e7(0x70f)],tescuk,''+ucapanFakereply);break;case _0x5c16e7(0x640):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));anu=await fetchJson(_0x5c16e7(0x607),{'method':_0x5c16e7(0x269)}),quran=anu[_0x5c16e7(0x639)]['ar'][_0x5c16e7(0x458)]+'\x0a\x0a'+anu[_0x5c16e7(0x639)]['id']['teks']+_0x5c16e7(0x6a6)+anu[_0x5c16e7(0x2d6)]['nama']+_0x5c16e7(0x66d)+anu[_0x5c16e7(0x639)]['id'][_0x5c16e7(0x2e4)],patrick[_0x5c16e7(0x74d)](from,quran,text,{'quoted':ftoko}),await limitAdd(sender);break;case _0x5c16e7(0x36c):if(!q)return reply(_0x5c16e7(0x35a)+prefix+'suit\x20gunting\x20/\x20batu\x20/\x20kertas');const userspilih=q;var ininy=Math[_0x5c16e7(0x59d)](Math[_0x5c16e7(0x567)]()*0x7530);if(!userspilih['match'](/batu|gunting|kertas/))return reply('*Wrong\x20Format!!*\x0aList\x20Option\x0a•\x20Batu\x0a•\x20Gunting\x0aKertas\x0aExample:\x20'+prefix+_0x5c16e7(0x464));var computer=Math['random']();if(computer<0.34)computer=_0x5c16e7(0x3dd);else computer>=0.34&&computer<0.67?computer='gunting':computer=_0x5c16e7(0x539);if(userspilih==computer)reply(_0x5c16e7(0x3b4)+q+'*\x0aComp\x20memlih\x20*'+computer+_0x5c16e7(0x6f0));else{if(userspilih=='batu')computer==_0x5c16e7(0x1cd)?reply(_0x5c16e7(0x4a0)):reply(_0x5c16e7(0x3b2));else{if(userspilih==_0x5c16e7(0x1cd))computer==_0x5c16e7(0x3dd)?reply('((\x20S\x20U\x20I\x20T\x20))\x0aKamu\x20memilih\x20*Gunting*\x0aComp\x20memlih\x20*Batu*\x0a*Kamu\x20telah\x20kalah!\x20:(*'):reply('((\x20S\x20U\x20I\x20T\x20))\x0aKamu\x20memilih\x20*Gunting*\x0aComp\x20memlih\x20*Kertas*\x0a*Kamu\x20telah\x20menang!\x20:)*');else userspilih==_0x5c16e7(0x539)&&(computer=='batu'?reply(_0x5c16e7(0x202)):reply('((\x20S\x20U\x20I\x20T\x20))\x0aKamu\x20memilih\x20*Kertas*\x0aComp\x20memlih\x20*Gunting*\x0a*Kamu\x20telah\x20kalah!\x20:(*'));}}break;case _0x5c16e7(0x558):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game['isfam'](from,family100))return replyWithFakeLink('Masih\x20ada\x20soal\x20yang\x20belum\x20di\x20selesaikan');let anehaja=await fetchJson('https://api.zeks.xyz/api/family100?apikey='+zeksApi);getFamily=anehaja[_0x5c16e7(0x1b1)],replyWithFakeLink(_0x5c16e7(0x713)+getFamily['pertanyaan']+_0x5c16e7(0x2f8)+getFamily[_0x5c16e7(0x73b)][_0x5c16e7(0x428)]['length']+'\x0a\x0aWaktu\x20:\x20'+gamewaktu+'s');let anoh=getFamily['jawaban'][_0x5c16e7(0x428)],rgfds=[];for(let i of anoh){let fefs=i[_0x5c16e7(0x366)]('/')?i[_0x5c16e7(0x366)]('/')[0x0]:i,iuhbb=fefs[_0x5c16e7(0x686)]('\x20')?fefs[_0x5c16e7(0x611)]('\x20',''):fefs,axsf=iuhbb[_0x5c16e7(0x5cf)]('\x20')?iuhbb['replace'](iuhbb[_0x5c16e7(0x275)](-0x1),''):iuhbb;rgfds[_0x5c16e7(0x324)](axsf['toLowerCase']());}game[_0x5c16e7(0x3ab)](from,rgfds,gamewaktu,family100),limitAdd(sender);break;case _0x5c16e7(0x5c8):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game['isMath'](from,math))return replyWithFakeLink('Masih\x20ada\x20soal\x20yang\x20belum\x20di\x20selesaikan');gamewaktus=0x14,extsoal5=''+extsoal,extanswer5=''+extanswer,replyWithFakeLink('*Jawablah\x20Soal\x20Berikut\x20Ini*\x0a\x0a*Soal\x20:*\x20'+extsoal5+'\x0a\x0aWaktu\x20:\x20'+gamewaktus+'s');let anihs=extanswer5[_0x5c16e7(0x2d5)]();game['addmath'](from,anihs,gamewaktus,math),limitAdd(sender);break;case _0x5c16e7(0x6dd):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game[_0x5c16e7(0x5ec)](from,tebakgambar))return replyWithFakeLink('Masih\x20ada\x20soal\x20yang\x20belum\x20di\x20selesaikan');let aneaja=await fetchJson('https://dapuhy-api.herokuapp.com/api/fun/tebakgambar?apikey='+dappaApi);sendFileFromUrl(from,aneaja[_0x5c16e7(0x50b)][_0x5c16e7(0x595)],monospace('Silahkan\x20jawab\x20soal\x20berikut\x20ini\x0a\x0aPetunjuk\x20:\x20'+aneaja[_0x5c16e7(0x50b)][_0x5c16e7(0x4f1)]+_0x5c16e7(0x47b)+gamewaktu+'s'),mek);let anih=aneaja['result']['jawaban'][_0x5c16e7(0x2d5)]();game[_0x5c16e7(0x234)](from,anih,gamewaktu,tebakgambar),limitAdd(sender);break;case _0x5c16e7(0x482):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game[_0x5c16e7(0x336)](from,siapakah))return replyWithFakeLink('Masih\x20ada\x20soal\x20yang\x20belum\x20di\x20selesaikan');let anesk=await fetchJson(_0x5c16e7(0x2a8)+zeksApi);replyWithFakeLink('*Jawablah\x20Soal\x20Berikut\x20Ini*\x0a\x0a*Soal\x20:*\x20'+anesk[_0x5c16e7(0x1b1)]['soal']+'\x0a\x0aWaktu\x20:\x20'+gamewaktu+'s');let anihp=anesk[_0x5c16e7(0x1b1)]['jawaban'][_0x5c16e7(0x2d5)]();game[_0x5c16e7(0x657)](from,anihp,gamewaktu,siapakah),limitAdd(sender);break;case _0x5c16e7(0x73f):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game[_0x5c16e7(0x35e)](from,tekateki))return replyWithFakeLink(_0x5c16e7(0x301));let anoohh=await fetchJson(_0x5c16e7(0x6a8)+dappaApi);replyWithFakeLink('*Jawablah\x20Soal\x20Berikut\x20Ini*\x0a\x0a*Soal\x20:*\x20'+anoohh[_0x5c16e7(0x45c)]+_0x5c16e7(0x296)+gamewaktu+'s');let anohc=anoohh[_0x5c16e7(0x73b)][_0x5c16e7(0x2d5)]();game['addTek'](from,anohc,gamewaktu,tekateki),limitAdd(sender);break;case _0x5c16e7(0x4bf):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game[_0x5c16e7(0x703)](from,susunkata))return replyWithFakeLink('Masih\x20ada\x20soal\x20yang\x20belum\x20di\x20selesaikan');let aneeuh=await fetchJson(_0x5c16e7(0x438)+dappaApi);replyWithFakeLink(_0x5c16e7(0x713)+aneeuh[_0x5c16e7(0x639)]+_0x5c16e7(0x1c3)+aneeuh['tipe']+_0x5c16e7(0x296)+gamewaktu+'s');let anicch=aneeuh[_0x5c16e7(0x73b)]['toLowerCase']();game['addSK'](from,anicch,gamewaktu,susunkata),limitAdd(sender);break;case'asahotak':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game[_0x5c16e7(0x584)](from,asahotak))return replyWithFakeLink(_0x5c16e7(0x301));let anuh=await fetchJson(_0x5c16e7(0x541)+dappaApi);replyWithFakeLink(_0x5c16e7(0x713)+anuh[_0x5c16e7(0x639)]+_0x5c16e7(0x296)+gamewaktu+'s');let anncch=anuh[_0x5c16e7(0x73b)][_0x5c16e7(0x2d5)]();game['addAO'](from,anncch,gamewaktu,asahotak),limitAdd(sender);break;case _0x5c16e7(0x61b):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(limitend(pushname));if(game[_0x5c16e7(0x4e9)](from,tebakangka))return replyWithFakeLink(_0x5c16e7(0x301));gamewaktuts=0xa,angkaBot=''+Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*0xa),replyWithFakeLink('*Tebak\x20Angka*\x0a\x0aPilih\x20Angka\x20\x20Dari\x201-10\x0aContoh:\x204\x0aWaktu\x20:\x20'+gamewaktuts+'s');let anoehs=angkaBot['toLowerCase']();game['addAngka'](from,anoehs,gamewaktuts,tebakangka),limitAdd(sender);break;case _0x5c16e7(0x50d):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());replyWithFakeLink(ind[_0x5c16e7(0x628)]()),payout=body['slice'](0xa);const koinPerlimit=0x1388,total=koinPerlimit*payout;if(total<0x1)return replyWithFakeLink(_0x5c16e7(0x323));if(checkATMuser(sender)<=total)return replyWithFakeLink(_0x5c16e7(0x31e));checkATMuser(sender)>=total&&(confirmATM(sender,total),bayarLimit(sender,payout),await replyWithFakeLink(_0x5c16e7(0x6d7)+pushname+_0x5c16e7(0x2fc)+payout+_0x5c16e7(0x3fc)+koinPerlimit+'/Limit\x0a>\x20*Saldo\x20Mu*\x20:\x20Ub\x20\x20'+checkATMuser(sender)+_0x5c16e7(0x22e)+createSerial(0xa)+_0x5c16e7(0x747)+time+_0x5c16e7(0x64c)));break;case _0x5c16e7(0x492):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));quotes=body[_0x5c16e7(0x275)](0x1);const quo=[_0x5c16e7(0x3a2),_0x5c16e7(0x5be),_0x5c16e7(0x5bb),_0x5c16e7(0x6fe),_0x5c16e7(0x426),'Hidup\x20itu\x20seperti\x20sebuah\x20sepeda,\x20agar\x20tetap\x20seimbang\x20kita\x20harus\x20tetap\x20bergerak.','Perbedaan\x20masa\x20lalu,\x20sekarang,\x20dan\x20masa\x20depan\x20tak\x20lebih\x20dari\x20ilusi\x20yang\x20keras\x20kepala.','Sebuah\x20meja,\x20sebuah\x20kursi,\x20semangkuk\x20buah,\x20dan\x20sebuah\x20biola;\x20apa\x20lagi\x20yang\x20dibutuhkan\x20agar\x20seseorang\x20bisa\x20merasa\x20bahagia?',_0x5c16e7(0x543),_0x5c16e7(0x51e),_0x5c16e7(0x667),_0x5c16e7(0x721),_0x5c16e7(0x603),_0x5c16e7(0x699),_0x5c16e7(0x457),_0x5c16e7(0x356),_0x5c16e7(0x26a),_0x5c16e7(0x701),_0x5c16e7(0x337),'Cinta\x20bukan\x20saling\x20menatap\x20mata,\x20namun\x20melihat\x20ke\x20arah\x20yang\x20sama\x20bersama-sama.','Kita\x20adalah\x20apa\x20yang\x20kita\x20kerjakan\x20berulang\x20kali.\x20Dengan\x20demikian,\x20kecemerlangan\x20bukan\x20tindakan,\x20tetapi\x20kebiasaan.',_0x5c16e7(0x672),'Jika\x20Anda\x20bisa\x20membuat\x20orang\x20lain\x20tertawa,\x20maka\x20Anda\x20akan\x20mendapatkan\x20semua\x20cinta\x20yang\x20Anda\x20inginkan.',_0x5c16e7(0x2e7),'Kita\x20tak\x20bisa\x20melakukan\x20apapun\x20untuk\x20mengubah\x20masa\x20lalu.\x20Tapi\x20apapun\x20yang\x20kita\x20lakukan\x20bisa\x20mengubah\x20masa\x20depan.','Kesabaran\x20adalah\x20teman\x20dari\x20kebijaksanaan.',_0x5c16e7(0x5b3),_0x5c16e7(0x50f),_0x5c16e7(0x1e3),_0x5c16e7(0x717),'Satu\x20jam\x20yang\x20intensif,\x20jauh\x20lebih\x20baik\x20dan\x20menguntungkan\x20daripada\x20bertahun-tahun\x20bermimpi\x20dan\x20merenung-renung.',_0x5c16e7(0x544),_0x5c16e7(0x401),_0x5c16e7(0x6f7)],tes=quo[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*quo[_0x5c16e7(0x1ba)])];patrick['sendMessage'](from,''+tes+'\x0a\x0a_By\x20:\x20PatrickBot._',text,{'quoted':freply}),await limitAdd(sender);break;case _0x5c16e7(0x217):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());patrick[_0x5c16e7(0x74d)](from,listsurah(),text,tescuk,''+ucapanFakereply);break;case _0x5c16e7(0x3d4):let lbw=_0x5c16e7(0x22b)+bad[_0x5c16e7(0x1ba)]+'\x0a';for(let i of bad){lbw+='➸\x20'+i[_0x5c16e7(0x611)](bad)+'\x0a';}await replyWithFakeLink(lbw);break;case'delete':case'del':case'd':if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(isOwner||isGroupAdmins)patrick['deleteMessage'](from,{'id':mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]['contextInfo'][_0x5c16e7(0x516)],'remoteJid':from,'fromMe':!![]});else replyWithFakeLink(ind[_0x5c16e7(0x29f)]());break;case _0x5c16e7(0x6e1):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!q[_0x5c16e7(0x28c)]('|'))return replyWithFakeLink(ind[_0x5c16e7(0x6c7)]());const tujuan=q[_0x5c16e7(0x2e2)](0x0,q[_0x5c16e7(0x1f6)]('|')-0x1),jumblah=q[_0x5c16e7(0x2e2)](q[_0x5c16e7(0x434)]('|')+0x1);if(isNaN(jumblah))return await replyWithFakeLink(_0x5c16e7(0x2d0));if(jumblah<0x1f4)return replyWithFakeLink(_0x5c16e7(0x4ae));if(checkATMuser(sender)<jumblah)return replyWithFakeLink(_0x5c16e7(0x646));const tujuantf=tujuan[_0x5c16e7(0x611)]('@','')+_0x5c16e7(0x368);fee=0.005*jumblah,hasiltf=jumblah-fee,addKoinUser(tujuantf,hasiltf),confirmATM(sender,jumblah),addKoinUser(_0x5c16e7(0x45b),fee),replyWithFakeLink(_0x5c16e7(0x45a)+sender['split']('@')[0x0]+_0x5c16e7(0x679)+tujuan+_0x5c16e7(0x233)+jumblah+_0x5c16e7(0x339)+fee+_0x5c16e7(0x43a)+createSerial(0xa)+'\x0a\x20\x20Sisa\x20Saldo\x20Anda\x20:\x20Ub\x20\x20'+checkATMuser(sender)+_0x5c16e7(0x519)+time+_0x5c16e7(0x1af));break;case _0x5c16e7(0x54c):if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isGroup)return replyWithFakeLink(ind['groupo']());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);jds=[];const jdii=groupMembers,koss=groupMembers,akuu=jdii[Math['floor'](Math[_0x5c16e7(0x567)]()*jdii[_0x5c16e7(0x1ba)])],diaa=koss[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*koss[_0x5c16e7(0x1ba)])];teks=a+_0x5c16e7(0x63b)+a+_0x5c16e7(0x505)+akuu[_0x5c16e7(0x338)][_0x5c16e7(0x366)]('@')[0x0]+_0x5c16e7(0x3ef)+diaa[_0x5c16e7(0x338)]['split']('@')[0x0]+'*',jds['push'](akuu[_0x5c16e7(0x338)]),jds[_0x5c16e7(0x324)](diaa[_0x5c16e7(0x338)]),mentions(teks,jds,!![]),await limitAdd(sender);break;case'verify':case _0x5c16e7(0x3bf):if(isRegistered)return;const codeMeme=[''+codeVerification,''+codeVerification1],codeMeme1=[''+codeVerification,''+codeVerification1],codeMeme2=[''+codeVerification,''+codeVerification1,''+codeVerification2,''+codeVerification2],gettNyaa=codeMeme[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*codeMeme[_0x5c16e7(0x1ba)])],gettNyaa1=codeMeme1[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*codeMeme1[_0x5c16e7(0x1ba)])];let gettNyaa2=gettNyaa1===gettNyaa?''+codeVerification2:gettNyaa1;meeen=sender[_0x5c16e7(0x611)]('@s.whatsapp.net','')+_0x5c16e7(0x368),console[_0x5c16e7(0x1bd)](_0x5c16e7(0x4d1)+codeVerification+_0x5c16e7(0x3e8)+sender+'\x0a}'),textoing=a+_0x5c16e7(0x691)+codeVerification+_0x5c16e7(0x2c4)+a;var optios={'text':textoing};patrick[_0x5c16e7(0x74d)](''+meeen,optios,text,{'quoted':mek});const btetemes={'contentText':a+_0x5c16e7(0x2c3)+a+_0x5c16e7(0x3c3)+prefix+'verify!*\x20to\x0aget\x20the\x20code\x20again\x0a\x0aCode\x20Expired\x2010s!','footerText':_0x5c16e7(0x255),'buttons':[{'buttonId':''+gettNyaa,'buttonText':{'displayText':''+gettNyaa},'type':0x1},{'buttonId':''+gettNyaa2,'buttonText':{'displayText':''+gettNyaa2},'type':0x1}],'headerType':0x1};verifyfy=await patrick[_0x5c16e7(0x74d)](from,btetemes,MessageType[_0x5c16e7(0x4d9)]);if(isGroup)replyWithFakeLink(a+_0x5c16e7(0x57b)+a);setTimeout(()=>{const _0x2cae1a=_0x5c16e7,_0x332e5e=Math[_0x2cae1a(0x4fc)](Math[_0x2cae1a(0x567)](0x28)*0x45a2)+0x22,_0x591c8c=Math[_0x2cae1a(0x4fc)](Math['random'](0x28)*0x4ee1)+0x4d,_0x4aa24e=Math[_0x2cae1a(0x4fc)](Math[_0x2cae1a(0x567)](0x28)*0x4732)+0x20;codeVerification=''+_0x332e5e,codeVerification1=''+_0x591c8c,codeVerification2=''+_0x4aa24e,console[_0x2cae1a(0x1bd)](_0x2cae1a(0x676)+_0x332e5e+_0x2cae1a(0x365)+_0x591c8c+'\x0a\x20\x20\x20\x20Code\x203\x20=\x20'+_0x4aa24e+_0x2cae1a(0x3e8)+sender+'\x20'+pushname+'\x0a}'),patrick[_0x2cae1a(0x58e)](from,verifyfy[_0x2cae1a(0x494)]);},0x2710);break;case'listonline':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isOwner||isGroupAdmins){let ido=args&&/\d+\-\d+@g.us/['test'](args[0x0])?args[0x0]:from,online=[...Object['keys'](patrick[_0x5c16e7(0x362)]['get'](ido)[_0x5c16e7(0x4ce)]),patrick[_0x5c16e7(0x363)][_0x5c16e7(0x338)]];patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x743)+online['map'](_0x4cb60b=>_0x5c16e7(0x3d7)+_0x4cb60b[_0x5c16e7(0x611)](/@.+/,''))['join']`\n`,text,{'quoted':freply,'contextInfo':{'mentionedJid':online}});}else replyWithFakeLink(ind[_0x5c16e7(0x29f)]());break;case _0x5c16e7(0x4c1):case _0x5c16e7(0x1a5):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(!q)return replyWithFakeLink('Example:\x20'+prefix+_0x5c16e7(0x647));const teks1=_0x5c16e7(0x660)+sender[_0x5c16e7(0x366)](_0x5c16e7(0x368))[0x0]+_0x5c16e7(0x386)+q;var options={'text':teks1,'contextInfo':{'mentionedJid':[nomor]}};mentions(options,[sender],!![]),replyWithFakeLink(_0x5c16e7(0x3a3));break;case _0x5c16e7(0x39f):case _0x5c16e7(0x290):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());const timestamp=speed(),latensi=speed()-timestamp;await patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x1ec)+latensi[_0x5c16e7(0x1d8)](0x4)+'s',text,{'quoted':freply});}catch(_0x3f7be6){console[_0x5c16e7(0x1bd)](_0x3f7be6);}break;case _0x5c16e7(0x1f4):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind['limitend'](pushname));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());const islami=[_0x5c16e7(0x56b),'Ya\x20Allah\x20panggillah\x20diriku\x20dan\x20orang\x20tuaku\x20ke\x20baitullah\x20dalam\x20keadaan\x20sehat\x20walafiat.',_0x5c16e7(0x509),'Allah\x20tidak\x20pernah\x20tidur.\x20Semua\x20pasti\x20akan\x20di\x20balas\x20kelak.\x20Orang-orang\x20jahat\x20yang\x20sekarang\x20bisa\x20tertawa\x20karena\x20banyak\x20uang,\x20berkuasa,\x20tapi\x20besok-besok\x20mereka\x20semua\x20di\x20balas\x20seadil-adilnya.','Jangan\x20putus\x20asa,\x20Allah\x20tidak\x20akan\x20mengecewakan\x20hambanya\x20yang\x20ingin\x20memperbaiki\x20diri.',_0x5c16e7(0x673),_0x5c16e7(0x30c),_0x5c16e7(0x3fa),_0x5c16e7(0x751),_0x5c16e7(0x735),_0x5c16e7(0x535),_0x5c16e7(0x437),_0x5c16e7(0x6df),_0x5c16e7(0x737),_0x5c16e7(0x34e),'Sholatlah\x20agar\x20hatimu\x20tenang,\x20Istighfarlah\x20agar\x20kecewamu\x20hilang,\x20Berdoalah\x20agar\x20bahagiamu\x20segera\x20datang.',_0x5c16e7(0x723),_0x5c16e7(0x46c),_0x5c16e7(0x3ca),_0x5c16e7(0x3ea),'Kematian..Kamu\x20terlalu\x20banyak\x20bercanda.\x20Hingga\x20sampai\x20kamu\x20lupa,\x20kematian\x20mungkin\x20tidak\x20menunggumu\x20selesai\x20tertawa.','Jangan\x20khawatirkan\x20rizkimu,\x20karena\x20Allah\x20telah\x20menjaminnya\x20untukmu,\x20namun\x20khawatirkanlah\x20amalanmu,\x20karena\x20Allah\x20tidak\x20menjamin\x20surga-Nya\x20untukmu..',_0x5c16e7(0x572),_0x5c16e7(0x41a),_0x5c16e7(0x25c),_0x5c16e7(0x502),_0x5c16e7(0x73d),_0x5c16e7(0x6f8),_0x5c16e7(0x39a),_0x5c16e7(0x6c4),'Akan\x20ada\x20saatnya\x20setelah\x20salam\x20dari\x20sholatku,\x20tanganmu\x20yang\x20pertama\x20kali\x20kusentuh.','Mungkin\x20maksud\x20Tuhan\x20mempertemukan\x20kamu\x20dengannya\x20adalah,\x20sekedar\x20mengingatkan\x20bahwa\x20tidak\x20semua\x20yang\x20kamu\x20inginkan\x20bisa\x20kamu\x20dapatkan.',_0x5c16e7(0x6da),'Berterimakasihlah\x20kepada\x20tuhan,\x20Yang\x20memberimu\x20hidup\x20dan\x20kehidupan.',_0x5c16e7(0x287)],isl=islami[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*islami[_0x5c16e7(0x1ba)])];islam=await getBuffer(_0x5c16e7(0x26c)),patrick['sendMessage'](from,islam,image,{'quoted':freply,'caption':_0x5c16e7(0x4eb)+isl}),await limitAdd(sender);break;case _0x5c16e7(0x68c):mentions(_0x5c16e7(0x393)+prefix+_0x5c16e7(0x4d5)+prefix+_0x5c16e7(0x5bf),['6288989029718@s.whatsapp.net',_0x5c16e7(0x6e3)],!![]);break;case'quotesnasehat':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(ind['baned']());const nasehat=[_0x5c16e7(0x5ab),_0x5c16e7(0x26f),_0x5c16e7(0x2b9),'Kamu\x20perlu\x20belajar\x20satu\x20hal\x20:\x20\x22Menghargai\x20seriusnya\x20seseorang.\x22',_0x5c16e7(0x410),'Ketika\x20seseorang\x20menghina\x20kamu,\x20itu\x20adalah\x20sebuah\x20pujian\x20bahwa\x20selama\x20ini\x20mereka\x20menghabiskan\x20banyak\x20waktu\x20untuk\x20memikirkan\x20kamu,\x20bahkan\x20ketika\x20kamu\x20tidak\x20memikirkan\x20mereka.',_0x5c16e7(0x5a1),_0x5c16e7(0x661),_0x5c16e7(0x476),_0x5c16e7(0x4ee),_0x5c16e7(0x2f2),'Ada\x20perbedaan\x20antara\x20menyerah\x20dan\x20tau\x20kapan\x20kamu\x20merasa\x20cukup\x20dalam\x20berusaha.',_0x5c16e7(0x3e1),_0x5c16e7(0x45e),_0x5c16e7(0x5d1),_0x5c16e7(0x525),'Hidup\x20memang\x20bukan\x20balapan,\x20tetapi\x20kamu\x20memang\x20perlu\x20untuk\x20terus\x20bergerak\x20maju.',_0x5c16e7(0x3a1),'Sebaik-baiknya\x20permintaan\x20maaf\x20adalah\x20membaiknya\x20tingkah\x20laku.',_0x5c16e7(0x1de),_0x5c16e7(0x671),_0x5c16e7(0x2b4),_0x5c16e7(0x4fb),_0x5c16e7(0x55e),_0x5c16e7(0x5b7),_0x5c16e7(0x742),_0x5c16e7(0x1d3),_0x5c16e7(0x6e9),_0x5c16e7(0x43c),'Jangan\x20pernah\x20bandingkan\x20dirimu\x20dengan\x20orang\x20lain,\x20tapi\x20bandingkanlah\x20dengan\x20dirimu\x20yang\x20lalu,\x20apakah\x20hari\x20ini\x20sudah\x20lebih\x20baik?',_0x5c16e7(0x479),_0x5c16e7(0x4e5),_0x5c16e7(0x589),'Raihlah\x20kesuksesan\x20yang\x20tidak\x20seseorangpun\x20berfikir\x20kamu\x20bisa\x20meraihnya.\x20Buktikan\x20pada\x20mereka\x20kalau\x20kamu\x20bisa!',_0x5c16e7(0x549),_0x5c16e7(0x4fa),_0x5c16e7(0x351),_0x5c16e7(0x54d),_0x5c16e7(0x388),_0x5c16e7(0x274),'Tunjukkan\x20keburukanmu,\x20lalu\x20lihat\x20siapa\x20yang\x20bertahan.',_0x5c16e7(0x443),'Jangan\x20pernah\x20lupa\x20bilang\x20\x22Terima\x20Kasih.\x22\x20Jangan\x20pernah\x20gengsi\x20bilang\x20\x22Maaf.\x22\x20Jangan\x20pernah\x20jadi\x20terlalu\x20sombong\x20untuk\x20bilang\x20\x22Tolong.\x22','Masa\x20lalu\x20tidak\x20bisa\x20berubah,\x20diubah,\x20dilupakan,\x20ataupun\x20di\x20hapus.\x20Masa\x20lalu\x20hanya\x20bisa\x20di\x20terima',_0x5c16e7(0x5aa),'Tidak\x20peduli\x20seberapa\x20baiknya\x20kamu,\x20Kebaikan\x20tidak\x20akan\x20berarti\x20apa-apa\x20jika\x20kamu\x20memberikan\x20kepada\x20orang\x20yang\x20salah.','Orang\x20sabar\x20selalu\x20menang,\x20Orang\x20tamak\x20selalu\x20rugi,\x20Orang\x20marah\x20selalu\x20kalah,\x20Orang\x20baik\x20selalu\x20diuji.',_0x5c16e7(0x347),'Melupakan\x20orang\x20yang\x20melukaimu\x20adalah\x20hadiahmu\x20untuk\x20mereka.\x20Memaafkan\x20orang\x20yang\x20melukaimu\x20adalah\x20hadiahmu\x20untuk\x20dirimu\x20sendiri.',_0x5c16e7(0x692),_0x5c16e7(0x2cb),_0x5c16e7(0x3d2),_0x5c16e7(0x34f),_0x5c16e7(0x4fe),_0x5c16e7(0x3df),_0x5c16e7(0x3db),_0x5c16e7(0x4c3),_0x5c16e7(0x4b1),_0x5c16e7(0x510),'Jangan\x20Mencintai\x20terlalu\x20mudah,\x20Jangan\x20Percaya\x20terlalu\x20cepat,\x20Jangan\x20Berhenti\x20terlalu\x20dini,\x20Jangan\x20Berharap\x20terlalu\x20tinggi,\x20Jangan\x20Bicara\x20terlalu\x20banyak.',_0x5c16e7(0x49f),'Sahabat\x20sejati\x20adalah\x20mereka\x20tau\x20semua\x20kelemahan\x20mu,\x20Tapi\x20tidak\x20menggunakan\x20nya\x20untuk\x20menjatuhkan\x20mu.','Ada\x20tiga\x20hal\x20yang\x20harus\x20dimiliki\x20dalam\x20hidup\x20yaitu\x20:\x20Perubahan,\x20Pilihan\x20dan\x20Prinsip.',_0x5c16e7(0x67e),_0x5c16e7(0x2f1),_0x5c16e7(0x3c7),_0x5c16e7(0x748),_0x5c16e7(0x37b)],nsh=nasehat[Math['floor'](Math[_0x5c16e7(0x567)]()*nasehat[_0x5c16e7(0x1ba)])];nase=await getBuffer(_0x5c16e7(0x3a4)),patrick['sendMessage'](from,nase,image,{'quoted':freply,'caption':'*Quotes\x20Nasehat*\x0a\x0a'+nsh}),await limitAdd(sender);break;case _0x5c16e7(0x2df):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());const motiv=[_0x5c16e7(0x4b6),_0x5c16e7(0x46e),_0x5c16e7(0x6f1),_0x5c16e7(0x636),_0x5c16e7(0x63c),'Belajarlah\x20menikmati\x20apa\x20yang\x20kamu\x20miliki,\x20itu\x20akan\x20membuat\x20hidupmu\x20lebih\x20bernilai','Selalu\x20ada\x20kegelapan\x20yang\x20tergelap\x20sebelum\x20terbitnya\x20fajar',_0x5c16e7(0x375),'Sibuk\x20bukanlah\x20jaminan\x20karir\x20karena\x20hasil\x20jauh\x20lebih\x20didengar\x20orang',_0x5c16e7(0x454),_0x5c16e7(0x60d),_0x5c16e7(0x397),_0x5c16e7(0x330),_0x5c16e7(0x34c),_0x5c16e7(0x5ff),'usia\x20bisa\x20berbohong\x20tapi\x20kedewasaan\x20tidak',_0x5c16e7(0x6b7),_0x5c16e7(0x655),'Terasa\x20sakit\x20selalu\x20hampir\x20tidak\x20ada\x20rasanya\x20setelah\x20apa\x20yang\x20kita\x20perjuangkan\x20tercapai',_0x5c16e7(0x71a),'Bicaralah\x20secukupnya,\x20lakukanlah\x20semampunya.\x20Jangan\x20melakukan\x20sebaliknya',_0x5c16e7(0x498),_0x5c16e7(0x49e),'Kadang\x20cara\x20terbaik\x20untuk\x20Memanfaatkan\x20peluang\x20adalah\x20dengan\x20mengatakan\x20tidak\x20pada\x20peluang\x20baru\x20dan\x20fokus\x20mengembangkan\x20apa\x20yang\x20sudah\x20ada\x20di\x20tanganjangan\x20takut\x20karena\x20masalah\x20yang\x20anda\x20hadapi\x20tidak\x20lebih\x20besar\x20dari\x20jalan\x20keluarnya,\x20Allah\x20siapkan\x20bagi\x20andaAda\x20saatnya\x20penundaan\x20memberikan\x20keuntungan\x20terutama\x20saat\x20terlalu\x20emosi\x20untuk\x20mengambil\x20keputusan',_0x5c16e7(0x3f7),_0x5c16e7(0x430),_0x5c16e7(0x514),_0x5c16e7(0x45f),_0x5c16e7(0x25d),_0x5c16e7(0x6ea),_0x5c16e7(0x1ef),'Anda\x20tidak\x20akan\x20mengubah\x20kehidupan\x20sampai\x20anda\x20mengubah\x20Apa\x20yang\x20anda\x20lakukan\x20setiap\x20hari',_0x5c16e7(0x1e9),_0x5c16e7(0x545),_0x5c16e7(0x5a4),_0x5c16e7(0x3c4),_0x5c16e7(0x329),'Kematian\x20tidak\x20dapat\x20mengubur\x20perbuatan\x20baik\x20seseorang',_0x5c16e7(0x327),_0x5c16e7(0x37d),_0x5c16e7(0x439),_0x5c16e7(0x449),'Tidak\x20perlu\x20keahlian\x20khusus\x20untuk\x20mencari\x20musuh,\x20tapi\x20perlu\x20kesetiaan\x20untuk\x20mempertahankan\x20teman','Orang\x20tua\x20bukan\x20hanya\x20punya\x20kekuatan\x20untuk\x20menatap\x20juga\x20untuk\x20mengalah','Keuletan\x20adalah\x20tanda\x20jadi\x20kesuksesan','cepat\x20atau\x20lambat\x20mereka\x20yang\x20menang\x20adalah\x20mereka\x20yang\x20berfikir\x20dan\x20yakin\x20bahwa\x20mereka\x20bisa',_0x5c16e7(0x553),_0x5c16e7(0x542),_0x5c16e7(0x55f),_0x5c16e7(0x4c5),_0x5c16e7(0x4aa),_0x5c16e7(0x2e8),'goal\x20hanya\x20sekedar\x20goal\x20kalau\x20kita\x20tidak\x20mempunyai\x20alasan\x20yang\x20kuat\x20Mengapa\x20kita\x20harus\x20mencapainya',_0x5c16e7(0x2c9),'orang\x20yang\x20paling\x20Bahagia\x20bukanlah\x20orang\x20yang\x20punya\x20hal-hal\x20terbaik\x20tapi\x20orang\x20yang\x20bisa\x20menjadikan\x20hal-hal\x20yang\x20ia\x20punya\x20menjadi\x20yang\x20terbaikApapun\x20yang\x20terjadi\x20Yakinlah\x20bahwa\x20Allah\x20menginginkan\x20kita\x20akan\x20jadi\x20lebih\x20baik\x20karena\x20Kejadian\x20ini',_0x5c16e7(0x6bd),'Semua\x20yang\x20terlalu\x20sedikit\x20dan\x20terlalu\x20banyak\x20tidak\x20akan\x20membawa\x20kebaikan',_0x5c16e7(0x57a),_0x5c16e7(0x208),_0x5c16e7(0x268),_0x5c16e7(0x512),_0x5c16e7(0x467),_0x5c16e7(0x44b),_0x5c16e7(0x711),_0x5c16e7(0x6bf),_0x5c16e7(0x3ac),_0x5c16e7(0x473),_0x5c16e7(0x266),_0x5c16e7(0x2c1),_0x5c16e7(0x433),_0x5c16e7(0x526),'Siapa\x20yang\x20bisa\x20menerima\x20kelemahannya\x20sesungguhnya\x20baru\x20saja\x20menambah\x20satu\x20kelebihan\x20pada\x20dirinya','Ada\x20saatnya\x20dimana\x20kekalahan\x20rasa\x20manis\x20yaitu\x20Saat\x20anda\x20sudah\x20melakukan\x20yang\x20terbaik',_0x5c16e7(0x4cd),'Jika\x20selamanya\x20anda\x20bermain\x20aman,\x20selamanya\x20juga\x20Anda\x20di\x20tempat\x20yang\x20sama','Lari\x20dari\x20masalah\x20akan\x20membuat\x20masalah\x20menjadi\x20lebih\x20besar,\x20menghadapinya\x20akan\x20membuat\x20anda\x20menjadi\x20lebih\x20besar',_0x5c16e7(0x69f),_0x5c16e7(0x54f),'bila\x20ingin\x20hasil\x20yang\x20besar\x20jangan\x20kerjakan\x20hal\x20yang\x20mudah\x20saja','Jangan\x20biarkan\x20impianmu\x20dijajah\x20oleh\x20pendapat\x20orang\x20lain',_0x5c16e7(0x37c),'Pengaruh\x20perkataan\x20orang\x20kepada\x20anda\x20100%\x20adalah\x20atas\x20izin\x20anda\x20sendiri',_0x5c16e7(0x1c8),_0x5c16e7(0x47d),_0x5c16e7(0x51f),'Kerja\x20keras\x20dan\x20kerja\x20cerdas\x20dapat\x20memastikan\x20keberhasilan\x20dan\x20sedekah\x20dapat\x20memudahkannya',_0x5c16e7(0x571),_0x5c16e7(0x4c0),_0x5c16e7(0x1cb),_0x5c16e7(0x444),_0x5c16e7(0x3bb),_0x5c16e7(0x65d),'Kesalahan\x20dan\x20kegagalan\x20adalah\x20guru\x20terbaik\x20jika\x20kita\x20mau\x20jujur\x20mengakui\x20dan\x20belajar\x20darinya',_0x5c16e7(0x600),_0x5c16e7(0x477),_0x5c16e7(0x253),_0x5c16e7(0x550),_0x5c16e7(0x5a3),_0x5c16e7(0x3fe),_0x5c16e7(0x6b2),_0x5c16e7(0x3e7),_0x5c16e7(0x2fa),_0x5c16e7(0x74f),_0x5c16e7(0x4d0),_0x5c16e7(0x66b),_0x5c16e7(0x35b),_0x5c16e7(0x5e3),_0x5c16e7(0x1d4),'Kualitas\x20pikiran\x20anda\x20menentukan\x20kualitas\x20kehidupan\x20anda',_0x5c16e7(0x4fd),_0x5c16e7(0x6ec),_0x5c16e7(0x531),'1000\x20perkataan\x20dan\x20pengetahuan\x20tidak\x20berarti\x20tanpa\x20adanya\x20satu\x20tindakan\x20yang\x20nyata',_0x5c16e7(0x620),_0x5c16e7(0x267),'Seorang\x20pemberani\x20bukan\x20orang\x20yang\x20tidak\x20mempunyai\x20rasa\x20takut.\x20Tapi\x20orang\x20yang\x20mampu\x20berjalan\x20diatas\x20rasa\x20takutnya',_0x5c16e7(0x61d),_0x5c16e7(0x2a6),_0x5c16e7(0x37f),_0x5c16e7(0x615),_0x5c16e7(0x5c3),_0x5c16e7(0x2f7),_0x5c16e7(0x1b3),_0x5c16e7(0x606),_0x5c16e7(0x631),'Allah,\x20aku\x20tahu\x20bahwa\x20saat\x20aku\x20kehilangan\x20sesuatu\x20engkau\x20sedang\x20mempersiapkan\x20hal\x20yang\x20lebih\x20baik\x20untukkuAnda\x20tidak\x20dapat\x20mengubah\x20masa\x20lalu\x20anda\x20dan\x20janganlah\x20terlalu\x20khawatir\x20dengan\x20hari\x20esok\x20.Hari\x20ini\x20adalah\x20hari\x20yang\x20dapat\x20mengubah\x20masa\x20depan\x20Anda',_0x5c16e7(0x68e),_0x5c16e7(0x53f),_0x5c16e7(0x2cc),'Dalam\x20hidup\x20ini\x20banyak\x20orang\x20tahu\x20apa\x20yang\x20harus\x20dilakukan,\x20tetapi\x20hanya\x20sedikit\x20yang\x20melakukan\x20apa\x20yang\x20ia\x20ketahui.\x20Mengetahui\x20tidaklah\x20cukup,\x20Anda\x20harus\x20mengambil\x20tindakan','Berilah\x20perhatian\x20lebih\x20ke\x20orang\x20yang\x20kamu\x20sayangi,\x20itu\x20yang\x20mereka\x20butuhkan',_0x5c16e7(0x32a),'Kita\x20mungkin\x20terpisah\x20sejak\x20lama\x20ketika\x20tak\x20mampu\x20belajar\x20untuk\x20lebih\x20dewasa',_0x5c16e7(0x1e7),_0x5c16e7(0x495),'Mengetahui\x20tidaklah\x20cukup\x20kita\x20harus\x20melakukannya,\x20keinginan\x20tak\x20cukup\x20hanya\x20dengan\x20berangan\x20kita\x20harus\x20melakukannya',_0x5c16e7(0x38c),'Betapapun\x20jauhnya\x20air\x20mengalir\x20ia\x20takkan\x20pernah\x20lupa\x20hulunya','Lebih\x20baik\x20sendiri\x20daripada\x20bersama\x20dengan\x20orang\x20yang\x20salahBetapapun\x20jauhnya\x20air\x20mengalir\x20ia\x20takkan\x20pernah\x20lupa\x20hulunya',_0x5c16e7(0x709),'Waktu\x20yang\x20memutuskan\x20Dengan\x20siapa\x20kamu\x20akan\x20berjumpa',_0x5c16e7(0x5cb),_0x5c16e7(0x1a8),_0x5c16e7(0x264),_0x5c16e7(0x459),_0x5c16e7(0x415),_0x5c16e7(0x2bb),_0x5c16e7(0x261),'Suatu\x20saat\x20aku\x20akan\x20menjadi\x20tempat\x20yang\x20akan\x20selalu\x20kau\x20rindu',_0x5c16e7(0x5a9),'Diam\x20adalah\x20respon\x20terbaik\x20untuk\x20orang\x20bodoh','Jangan\x20pernah\x20membuat\x20keputusan\x20yang\x20permanen\x20untuk\x20perasaan\x20yang\x20sementara',_0x5c16e7(0x52c),_0x5c16e7(0x6af),'Anda\x20saat\x20ini\x20adalah\x20hasil\x20dari\x20pengalaman\x20anda',_0x5c16e7(0x2b5),_0x5c16e7(0x6ee),_0x5c16e7(0x306),_0x5c16e7(0x3ed),_0x5c16e7(0x21e),_0x5c16e7(0x379),'Allah\x20masih\x20mencintai\x20anda\x20jika\x20masih\x20banyak\x20cobaan\x20dan\x20tantangan\x20hidup\x20yang\x20datang\x20menghampiri\x20anda.\x20Allah\x20percaya\x20bahwa\x20anda\x20mampu\x20melaluinya,\x20maka\x20jagalah\x20kepercayaan\x20itu','Ketika\x20orang\x20mengatakan\x20anda\x20sudah\x20berubah\x20sebenarnya\x20itu\x20hanya\x20karena\x20anda\x20berhenti\x20melakukan\x20apa\x20yang\x20mereka\x20ingin\x20anda\x20lakukan',_0x5c16e7(0x29e),'Orang-orang\x20yang\x20mengikuti\x20keramaian\x20biasanya\x20tersesat\x20di\x20dalamnya',_0x5c16e7(0x60e),_0x5c16e7(0x581),_0x5c16e7(0x521),_0x5c16e7(0x298),_0x5c16e7(0x6e6),_0x5c16e7(0x5a2),_0x5c16e7(0x1e1),_0x5c16e7(0x20d),_0x5c16e7(0x369),_0x5c16e7(0x513),_0x5c16e7(0x3ba),'Bekerja\x20keraslah,\x20Bermimpilah\x20lebih\x20besar\x20dan\x20jadilah\x20yang\x20terbaik',_0x5c16e7(0x69b),_0x5c16e7(0x58b),_0x5c16e7(0x405),'Hidup\x20adalah\x20cermin\x20dan\x20akan\x20merefleksikan\x20kembali\x20kepada\x20para\x20pemikir\x20mengenai\x20apa\x20yang\x20mereka\x20pikirkan.',_0x5c16e7(0x4dd),_0x5c16e7(0x4ab),_0x5c16e7(0x1f1),_0x5c16e7(0x310),'Hidup\x20adalah\x20mimpi\x20bagi\x20mereka\x20yang\x20bijaksana,\x20permainan\x20bagi\x20mereka\x20yang\x20bodoh,\x20komedi\x20bagi\x20mereka\x20yang\x20kaya,\x20dan\x20tragedi\x20bagi\x20mereka\x20yang\x20miskin',_0x5c16e7(0x6c6),_0x5c16e7(0x73e),_0x5c16e7(0x2fd)],vasi=motiv[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*motiv[_0x5c16e7(0x1ba)])];vass=await getBuffer('https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg'),patrick[_0x5c16e7(0x74d)](from,vass,image,{'quoted':freply,'caption':'*Motivasi*\x0a\x0a'+cin}),await limitAdd(sender);break;case _0x5c16e7(0x272):case'lb':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());_level[_0x5c16e7(0x57f)]((_0x51c0fc,_0x256005)=>_0x51c0fc['xp']<_0x256005['xp']?0x1:-0x1),uang[_0x5c16e7(0x57f)]((_0x368f3e,_0x1d89ec)=>_0x368f3e['uang']<_0x1d89ec[_0x5c16e7(0x5e9)]?0x1:-0x1);let leaderboardlvl=_0x5c16e7(0x569),leaderboarduang=_0x5c16e7(0x4a7),nom=0x0;try{for(let i=0x0;i<0xa;i++){nom++,leaderboardlvl+='*'+nom+_0x5c16e7(0x74b)+_level[i]['id'][_0x5c16e7(0x611)](_0x5c16e7(0x368),'')+_0x5c16e7(0x396)+_level[i]['xp']+_0x5c16e7(0x3e6)+_level[i][_0x5c16e7(0x3b6)]+'\x0a',leaderboarduang+='*['+nom+_0x5c16e7(0x295)+uang[i]['id'][_0x5c16e7(0x611)]('@s.whatsapp.net','')+'\x0a\x20>\x20*Ub*\x20:\x20_Ub'+uang[i][_0x5c16e7(0x5e9)]+_0x5c16e7(0x4be)+(initialLimit-_limit[i][_0x5c16e7(0x6ef)])+'\x0a';}await replyWithFakeLink(leaderboardlvl),await replyWithFakeLink(leaderboarduang);}catch(_0x4e2c70){console[_0x5c16e7(0x2bd)](_0x4e2c70),await replyWithFakeLink('minimal\x2010\x20user\x20untuk\x20bisa\x20mengakses\x20database');}break;case _0x5c16e7(0x48e):teks=_0x5c16e7(0x335);for(let block of blocked){teks+=_0x5c16e7(0x57d)+block[_0x5c16e7(0x366)]('@')[0x0]+'\x0a';}teks+='𝗧𝗼𝘁𝗮𝗹\x20:\x20'+blocked[_0x5c16e7(0x1ba)],patrick[_0x5c16e7(0x74d)](from,teks['trim'](),extendedText,{'quoted':freply,'contextInfo':{'mentionedJid':blocked}});break;case _0x5c16e7(0x2aa):case _0x5c16e7(0x5d6):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);const benn=JSON[_0x5c16e7(0x425)](fs[_0x5c16e7(0x3b3)](_0x5c16e7(0x67d)));teks=_0x5c16e7(0x668);for(let benn of ban){teks+=_0x5c16e7(0x57d)+benn[_0x5c16e7(0x611)](_0x5c16e7(0x368),'')+'\x0a';}teks+=_0x5c16e7(0x33c)+ban[_0x5c16e7(0x1ba)],patrick[_0x5c16e7(0x74d)](from,teks['trim'](),extendedText,{'quoted':freply,'contextInfo':{'mentionedJid':ban}});break;case _0x5c16e7(0x441):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return patrick[_0x5c16e7(0x74d)](from,'Diperlukan\x20kode\x20bahasa!!',text,{'quoted':freply});const gtts=require('./lib/gtts')(args[0x0]);if(args['length']<0x2)return patrick[_0x5c16e7(0x74d)](from,_0x5c16e7(0x487),text,{'quoted':freply});dtt=body['slice'](0x8),ranm=getRandom(_0x5c16e7(0x281)),rano=getRandom('.ogg'),dtt[_0x5c16e7(0x1ba)]>0x1f4?replyWithFakeLink(_0x5c16e7(0x1c4)):gtts[_0x5c16e7(0x341)](ranm,dtt,function(){const _0x6aa895=_0x5c16e7;exec(_0x6aa895(0x580)+ranm+'\x20-ar\x2048000\x20-vn\x20-c:a\x20libopus\x20'+rano,_0x59d4b3=>{const _0x2a2e54=_0x6aa895;fs[_0x2a2e54(0x599)](ranm),buffer=fs[_0x2a2e54(0x3b3)](rano);if(_0x59d4b3)return replyWithFakeLink(ind['stikga']());patrick[_0x2a2e54(0x74d)](from,buffer,audio,{'quoted':fakevn,'ptt':!![]}),fs['unlinkSync'](rano);});}),await limitAdd(sender);break;case'linkgc':case _0x5c16e7(0x6a4):if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(!isBotGroupAdmins)return replyWithFakeLink(ind[_0x5c16e7(0x1fc)]());linkgc=await patrick[_0x5c16e7(0x44f)](from),yeh=_0x5c16e7(0x653)+groupName+'\x0ahttps://chat.whatsapp.com/'+linkgc+'\x0a~\x20SB-129',patrick[_0x5c16e7(0x74d)](from,yeh,text,{'quoted':freply}),await limitAdd(sender);break;case _0x5c16e7(0x745):if(!isGroup)return replyWithFakeLink(ind['groupo']());if(!isGroupAdmins)return replyWithFakeLink(ind['admin']());members_id=[],teks=args['length']>0x1?body[_0x5c16e7(0x275)](0x8)[_0x5c16e7(0x684)]():'',teks+='\x0a\x0a͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\x20';for(let mem of groupMembers){teks+=_0x5c16e7(0x66a)+mem[_0x5c16e7(0x338)][_0x5c16e7(0x366)]('@')[0x0]+'\x0a',members_id[_0x5c16e7(0x324)](mem[_0x5c16e7(0x338)]);}mentions(teks,members_id,!![]);break;case _0x5c16e7(0x3d9):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isGroup)return replyWithFakeLink(_0x5c16e7(0x250));anug=getRegisteredRandomId(_registered)[_0x5c16e7(0x611)]('@s.whatsapp.net',''),await replyWithFakeLink('Looking\x20for\x20a\x20partner...'),await replyWithFakeLink(_0x5c16e7(0x30d)+anug),await replyWithFakeLink('Partner\x20found:\x20🙉\x0a*'+prefix+'next*\x20—\x20find\x20a\x20new\x20partner'),sendButImage(from,menu,_0x5c16e7(0x70e),thumb,[{'buttonId':prefix+'next','buttonText':{'displayText':_0x5c16e7(0x2dc)},'type':0x1}]);break;case _0x5c16e7(0x4a1):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isGroup)return replyWithFakeLink(_0x5c16e7(0x250));anug=getRegisteredRandomId(_registered)[_0x5c16e7(0x611)](_0x5c16e7(0x368),''),await replyWithFakeLink('Looking\x20for\x20a\x20partner...'),await replyWithFakeLink(_0x5c16e7(0x30d)+anug),await replyWithFakeLink(_0x5c16e7(0x746)+prefix+_0x5c16e7(0x4f0));break;case _0x5c16e7(0x1ee):if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);let pi=patrick['prepareMessageFromContent'](from,{'listMessage':{'title':_0x5c16e7(0x344),'footerText':_0x5c16e7(0x70e),'description':_0x5c16e7(0x353)+pushname+_0x5c16e7(0x30f)+(isAntiLink?_0x5c16e7(0x2c5):'Belum\x20Aktif!')+_0x5c16e7(0x352)+(isAntiVirtex?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x45d)+(isBadWord?_0x5c16e7(0x2c5):'Belum\x20Aktif!')+_0x5c16e7(0x74e)+(isWelcome?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x1d9)+(isSimi?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x3ad)+(isLevelingOn?'*Aktif!*':_0x5c16e7(0x2c7))+_0x5c16e7(0x3bd)+(isAntiSpam?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7)),'buttonText':'Click\x20Disini\x20||\x20Click\x20Here','listType':_0x5c16e7(0x4ca),'sections':[{'title':_0x5c16e7(0x241),'rows':[{'title':'Anti\x20Badword','rowId':'0'},{'title':_0x5c16e7(0x2ef),'rowId':'0'},{'title':_0x5c16e7(0x203),'rowId':'0'},{'title':_0x5c16e7(0x317),'rowId':'0'},{'title':_0x5c16e7(0x527),'rowId':'0'},{'title':_0x5c16e7(0x46f),'rowId':'0'},{'title':_0x5c16e7(0x5ce),'rowId':'0'}]}]}},{});patrick['relayWAMessage'](pi,{'waitForAck':!![]});break;case _0x5c16e7(0x504):if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);let po=patrick[_0x5c16e7(0x532)](from,{'listMessage':{'title':_0x5c16e7(0x344),'footerText':_0x5c16e7(0x70e),'description':'Hello\x20'+pushname+_0x5c16e7(0x3a5)+(isAntiLink?'*Aktif!*':_0x5c16e7(0x2c7))+_0x5c16e7(0x642)+(isAntiVirtex?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x3be)+(isBadWord?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x500)+(isAntiSpam?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x432)+(isWelcome?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+'\x0a❏\x20*SimiSimi:*\x0a╰──\x20'+(isSimi?_0x5c16e7(0x2c5):_0x5c16e7(0x2c7))+_0x5c16e7(0x48a)+(isLevelingOn?_0x5c16e7(0x2c5):'Belum\x20Aktif!'),'buttonText':_0x5c16e7(0x47c),'listType':_0x5c16e7(0x4ca),'sections':[{'title':_0x5c16e7(0x241),'rows':[{'title':_0x5c16e7(0x63e),'rowId':'0'},{'title':'Disable\x20Anti\x20Virtex','rowId':'0'},{'title':_0x5c16e7(0x517),'rowId':'0'},{'title':_0x5c16e7(0x489),'rowId':'0'},{'title':_0x5c16e7(0x5df),'rowId':'0'},{'title':'Disable\x20Simi\x20Simi','rowId':'0'},{'title':_0x5c16e7(0x33a),'rowId':'0'}]}]}},{});patrick[_0x5c16e7(0x4b4)](po,{'waitForAck':!![]});break;case _0x5c16e7(0x3de):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());axios[_0x5c16e7(0x269)](_0x5c16e7(0x4bb))['then'](_0xc7c4cb=>{const _0x3548de=_0x5c16e7;imageToBase64(_0xc7c4cb[_0x3548de(0x1b1)][_0x3548de(0x5dd)])[_0x3548de(0x6d8)](_0x9ebd8e=>{const _0x37160a=_0x3548de;var _0x26b3b8=Buffer['from'](_0x9ebd8e,_0x37160a(0x1e8));patrick['sendMessage'](from,_0x26b3b8,image,{'quoted':mek,'caption':_0x37160a(0x712)});});});}catch(_0x2f540e){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x2f540e,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case'walpaperanime':try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());axios[_0x5c16e7(0x269)]('https://nekos.life/api/v2/img/wallpaper')[_0x5c16e7(0x6d8)](_0x409cf6=>{const _0x440667=_0x5c16e7;imageToBase64(_0x409cf6[_0x440667(0x1b1)][_0x440667(0x5dd)])[_0x440667(0x6d8)](_0x1e72b0=>{const _0xecf080=_0x440667;var _0x9e4486=Buffer['from'](_0x1e72b0,_0xecf080(0x1e8));patrick[_0xecf080(0x74d)](from,_0x9e4486,image,{'quoted':mek,'caption':_0xecf080(0x3e2)});});});}catch(_0x22d922){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x22d922,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x23b):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());axios['get']('https://nekos.life/api/v2/img/kemonomimi')[_0x5c16e7(0x6d8)](_0x5dc105=>{const _0x5140c5=_0x5c16e7;imageToBase64(_0x5dc105[_0x5140c5(0x1b1)]['url'])[_0x5140c5(0x6d8)](_0x42c6c8=>{const _0x3abb5e=_0x5140c5;var _0x4f8bbc=Buffer[_0x3abb5e(0x207)](_0x42c6c8,_0x3abb5e(0x1e8));patrick[_0x3abb5e(0x74d)](from,_0x4f8bbc,image,{'quoted':mek,'caption':_0x3abb5e(0x288)});});});}catch(_0x4403fb){console['log'](_0x5c16e7(0x5f0),color(_0x4403fb,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x44d):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());axios['get'](_0x5c16e7(0x41d))[_0x5c16e7(0x6d8)](_0x36498f=>{const _0x11d2eb=_0x5c16e7;imageToBase64(_0x36498f['data'][_0x11d2eb(0x5dd)])['then'](_0x376773=>{const _0xdc5f66=_0x11d2eb;var _0x7bbefd=Buffer[_0xdc5f66(0x207)](_0x376773,_0xdc5f66(0x1e8));patrick[_0xdc5f66(0x74d)](from,_0x7bbefd,image,{'quoted':mek,'caption':'ONII\x20CHAN\x20BAKA!!'});});});}catch(_0x16a871){console['log'](_0x5c16e7(0x5f0),color(_0x16a871,_0x5c16e7(0x4b0))),replyWithFakeLink(ind['error']());}break;case _0x5c16e7(0x271):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());axios['get']('https://nekos.life/api/v2/img/kuni')[_0x5c16e7(0x6d8)](_0x17e538=>{const _0x4d17b9=_0x5c16e7;imageToBase64(_0x17e538[_0x4d17b9(0x1b1)][_0x4d17b9(0x5dd)])[_0x4d17b9(0x6d8)](_0x40beda=>{const _0x4a5801=_0x4d17b9;var _0x3cf6f7=Buffer[_0x4a5801(0x207)](_0x40beda,_0x4a5801(0x1e8));patrick[_0x4a5801(0x74d)](from,_0x3cf6f7,image,{'quoted':mek,'caption':_0x4a5801(0x559)});});});}catch(_0x54dd23){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x54dd23,'red')),replyWithFakeLink(ind['error']());}break;case'neko':try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());axios[_0x5c16e7(0x269)](_0x5c16e7(0x3c6))[_0x5c16e7(0x6d8)](_0x55aace=>{const _0x37f783=_0x5c16e7;imageToBase64(_0x55aace[_0x37f783(0x1b1)][_0x37f783(0x5dd)])[_0x37f783(0x6d8)](_0x5835ea=>{const _0x77658f=_0x37f783;var _0xf42bb6=Buffer['from'](_0x5835ea,_0x77658f(0x1e8));patrick[_0x77658f(0x74d)](from,_0xf42bb6,image,{'quoted':mek,'caption':'NYANG!!'});});});}catch(_0x3996f9){console['log']('Error\x20:',color(_0x3996f9,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x42b):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());axios[_0x5c16e7(0x269)](_0x5c16e7(0x21a))[_0x5c16e7(0x6d8)](_0x48aaad=>{const _0x37f841=_0x5c16e7;imageToBase64(_0x48aaad[_0x37f841(0x1b1)]['url'])[_0x37f841(0x6d8)](_0x23b25a=>{const _0x338159=_0x37f841;var _0x3a393d=Buffer[_0x338159(0x207)](_0x23b25a,_0x338159(0x1e8));patrick[_0x338159(0x74d)](from,_0x3a393d,image,{'quoted':mek,'caption':_0x338159(0x265)});});});}catch(_0x3beea0){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x3beea0,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x626):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());await patrickhay(ind[_0x5c16e7(0x3c5)](prefix),MessageType[_0x5c16e7(0x70f)],tescuk,''+ucapanFakereply);break;case _0x5c16e7(0x466):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());judul=args[_0x5c16e7(0x304)]('\x20'),ambl=await fetchJson(_0x5c16e7(0x4b8)+judul+_0x5c16e7(0x51c)+leysApi),d=ambl[_0x5c16e7(0x50b)],thm=await getBuffer(d[_0x5c16e7(0x54b)]),tmlisan=_0x5c16e7(0x649)+d[_0x5c16e7(0x1d0)]+'\x0aAlbum\x20:\x20'+d['album']+_0x5c16e7(0x70c)+d[_0x5c16e7(0x533)]+_0x5c16e7(0x597)+d[_0x5c16e7(0x285)],limrik=_0x5c16e7(0x733)+ambl[_0x5c16e7(0x414)][_0x5c16e7(0x50b)],patrick[_0x5c16e7(0x74d)](from,tmlisan,text,{'quoted':fkontak}),replyWithFakeLink(limrik),await limitAdd(sender);break;case _0x5c16e7(0x682):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!q)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+_0x5c16e7(0x6b8));if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));replyWithFakeLink(ind['wait']()),fot=await fetchJson(_0x5c16e7(0x3b9)+q+_0x5c16e7(0x51c)+dappaApi),foto=result[_0x5c16e7(0x4e4)],getfoto=JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](foto[_0x5c16e7(0x50b)])),randomfoto=getfoto[Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)]()*getfoto[_0x5c16e7(0x1ba)])],getimage=await getBuffer(randomfoto),textnya=_0x5c16e7(0x254)+fot[_0x5c16e7(0x25a)]+'\x0a',textnya+=_0x5c16e7(0x308)+fot[_0x5c16e7(0x408)]+'\x0a',textnya+=_0x5c16e7(0x61a)+prefix+_0x5c16e7(0x4d3),patrick[_0x5c16e7(0x74d)](from,getimage,image,{'quoted':freply,'caption':textnya}),await limitAdd(sender);break;case _0x5c16e7(0x373):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!q)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+_0x5c16e7(0x6b8));if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),foto=await fetchJson(_0x5c16e7(0x3b9)+q+_0x5c16e7(0x51c)+dappaApi),patrick[_0x5c16e7(0x74d)](from,await getBuffer(foto[_0x5c16e7(0x595)]),image,{'quoted':freply,'caption':_0x5c16e7(0x380)}),await limitAdd(sender);break;case'pinterest':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(!q)return replyWithFakeLink('Example:\x20'+(prefix+command)+_0x5c16e7(0x6b8));if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));teksnyaoi=args[0x0],replyWithFakeLink(ind['wait']()),foto=await getBuffer(_0x5c16e7(0x5d2)+teksnyaoi+'&apikey='+dappaApi),patrick[_0x5c16e7(0x74d)](from,foto,image,{'quoted':freply,'caption':_0x5c16e7(0x380)}),await limitAdd(sender);break;case _0x5c16e7(0x1e5):try{if(!q)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+_0x5c16e7(0x1e0));if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(isBanned)return replyWithFakeLink(_0x5c16e7(0x50a));anu=await fetchJson(_0x5c16e7(0x4d4)+q+'&apikey='+dappaApi),buffer=await getBuffer(anu[_0x5c16e7(0x50b)][_0x5c16e7(0x4cc)]),textnyak=_0x5c16e7(0x55d),textnyak+=_0x5c16e7(0x5b2)+anu[_0x5c16e7(0x50b)][_0x5c16e7(0x496)]+'\x0a',textnyak+=_0x5c16e7(0x412)+anu[_0x5c16e7(0x50b)][_0x5c16e7(0x211)]+'\x0a',textnyak+=_0x5c16e7(0x36f)+anu['result'][_0x5c16e7(0x6d2)]+'\x0a',textnyak+=_0x5c16e7(0x614)+anu[_0x5c16e7(0x50b)][_0x5c16e7(0x73c)]+'\x0a',textnyak+='*Video\x20PX*\x20:\x20'+anu[_0x5c16e7(0x50b)][_0x5c16e7(0x60f)]+'\x0a',textnyak+=_0x5c16e7(0x744)+anu[_0x5c16e7(0x50b)][_0x5c16e7(0x2ca)]+'\x0a',textnyak+='*Chipset*\x20:\x20'+anu['result'][_0x5c16e7(0x2f5)]+'\x0a',textnyak+='*Battery*\x20:\x20'+anu['result'][_0x5c16e7(0x33d)]+'\x0a',textnyak+=_0x5c16e7(0x54e)+anu['result']['body']+'\x0a',textnyak+=_0x5c16e7(0x33b)+anu[_0x5c16e7(0x50b)][_0x5c16e7(0x2a5)]+'\x0a',textnyak+=_0x5c16e7(0x21d)+anu[_0x5c16e7(0x50b)]['os']+'\x0a',textnyak+=_0x5c16e7(0x5f8)+anu['result'][_0x5c16e7(0x5d5)]+'\x0a',textnyak+=_0x5c16e7(0x4f9)+anu[_0x5c16e7(0x50b)][_0x5c16e7(0x5dd)],patrick[_0x5c16e7(0x74d)](from,buffer,image,{'quoted':fgclink,'caption':textnyak}),await limitAdd(sender);}catch(_0x355116){console['log'](_0x5c16e7(0x5f0),color(_0x355116,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x714):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());replyWithFakeLink(ind[_0x5c16e7(0x628)]()),anu=await fetchJson('http://zekais-api.herokuapp.com/yts?query='+q+'&apikey='+zekaisApi),teks=_0x5c16e7(0x719);for(let i of anu[_0x5c16e7(0x50b)]){teks+=_0x5c16e7(0x1fd)+i[_0x5c16e7(0x53d)]+_0x5c16e7(0x5b1)+i[_0x5c16e7(0x591)]+_0x5c16e7(0x471)+i['durasi']+_0x5c16e7(0x727)+i[_0x5c16e7(0x1ca)]+_0x5c16e7(0x2f4)+i[_0x5c16e7(0x5dd)]+'\x0a=================\x0a';}replyWithFakeLink(teks[_0x5c16e7(0x684)]()),await limitAdd(sender);break;case'estetik':case _0x5c16e7(0x2a7):try{if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));fakestatus(ind['wait']()),tekss=args[0x0],anu=await getBuffer(_0x5c16e7(0x39c)+zeksApi+'\x20'),patrick[_0x5c16e7(0x74d)](from,tamnel,image,{'quoted':freply,'caption':_0x5c16e7(0x5d0)}),await limitAdd(sender);}catch(_0x58d629){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x58d629,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case'shopee':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(isBanned)return replyWithFakeLink(ind['banned']());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x730)+(prefix+command)+_0x5c16e7(0x62f));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),cari=args['join']('\x20'),yee=await fetchJson(_0x5c16e7(0x227)+cari+_0x5c16e7(0x51c)+leysApi),dpauhy=yee[_0x5c16e7(0x50b)],hsll=_0x5c16e7(0x63a)+dpauhy['judul']+_0x5c16e7(0x1ed)+dpauhy[_0x5c16e7(0x294)]+_0x5c16e7(0x1fb)+dpauhy[_0x5c16e7(0x496)]+'\x0aStock\x20:\x20'+dpauhy['stock']+'\x0aLike\x20:\x20'+dpauhy['like']+_0x5c16e7(0x5bd)+dpauhy['views']+'\x0aTerjual\x20:\x20'+dpauhy[_0x5c16e7(0x52a)],patrick['sendMessage'](from,hsll,text,{'quoted':fkontak}),await limitAdd;break;case _0x5c16e7(0x6f5):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['banned']());if(isLimit(sender))return replyWithFakeLink(ind['limitend']());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x730)+(prefix+command)+'\x20whatsapp');replyWithFakeLink(ind['wait']()),dpganzz=args[_0x5c16e7(0x304)]('\x20'),anu=await fetchJson(_0x5c16e7(0x656)+dpganzz+_0x5c16e7(0x51c)+leysApi),teks=_0x5c16e7(0x719);for(let i of anu[_0x5c16e7(0x50b)]){teks+=_0x5c16e7(0x1b5)+i[_0x5c16e7(0x53d)]+_0x5c16e7(0x2e6)+i['img']+_0x5c16e7(0x259)+i['url']+_0x5c16e7(0x4a9);}replyWithFakeLink(teks[_0x5c16e7(0x684)]()),await limitAdd(sender);break;case _0x5c16e7(0x1ea):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x730)+(prefix+command)+_0x5c16e7(0x5f4));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),dpganzz=args[_0x5c16e7(0x304)]('\x20'),anu=await fetchJson('https://leyscoders-api.herokuapp.com/api/halal?q='+dpganzz+'&apikey='+leysApi),teks='=================\x0a';for(let i of anu['result']){teks+=_0x5c16e7(0x47e)+i[_0x5c16e7(0x442)]+_0x5c16e7(0x4a9);}replyWithFakeLink(teks[_0x5c16e7(0x684)]()),await limitAdd(sender);break;case _0x5c16e7(0x1f8):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x730)+(prefix+command)+'\x20game');replyWithFakeLink(ind[_0x5c16e7(0x628)]()),dpganzz=args[_0x5c16e7(0x304)]('\x20'),anu=await fetchJson(_0x5c16e7(0x556)+dpganzz+_0x5c16e7(0x51c)+leysApi),teks='=================\x0a';for(let i of anu['result']){teks+=_0x5c16e7(0x1b5)+i[_0x5c16e7(0x53d)]+_0x5c16e7(0x55a)+i['category']+_0x5c16e7(0x23f)+i[_0x5c16e7(0x408)]+_0x5c16e7(0x48f)+i[_0x5c16e7(0x57c)]+_0x5c16e7(0x3d8)+i[_0x5c16e7(0x258)]+_0x5c16e7(0x2e6)+i[_0x5c16e7(0x54b)]+_0x5c16e7(0x259)+i['url']+_0x5c16e7(0x4a9);}replyWithFakeLink(teks['trim']()),await limitAdd(sender);break;case _0x5c16e7(0x69d):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(isLimit(sender))return replyWithFakeLink(ind['limitend']());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink('apa\x20yang\x20mau\x20dicari\x20ngab?\x0acontoh\x20'+(prefix+command)+_0x5c16e7(0x212));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),dpganzz=args[_0x5c16e7(0x304)]('\x20'),anu=await fetchJson(_0x5c16e7(0x5ed)+dpganzz+_0x5c16e7(0x51c)+leysApi),teks='=================\x0a';for(let i of anu[_0x5c16e7(0x50b)]){teks+=_0x5c16e7(0x1b5)+i[_0x5c16e7(0x53d)]+_0x5c16e7(0x1a7)+i['id']+_0x5c16e7(0x22f)+i[_0x5c16e7(0x4cc)]+_0x5c16e7(0x259)+i[_0x5c16e7(0x5dd)]+'\x0a=================\x0a';}replyWithFakeLink(teks['trim']()),await limitAdd(sender);break;case'rexdl':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink('apa\x20yang\x20mau\x20dicari\x20ngab?\x0acontoh\x20'+(prefix+command)+_0x5c16e7(0x6f4));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),dpganzz=args['join']('\x20'),anu=await fetchJson(_0x5c16e7(0x4d8)+dpganzz+_0x5c16e7(0x51c)+leysApi),teks=_0x5c16e7(0x719);for(let i of anu['result']){teks+=_0x5c16e7(0x1b5)+i['title']+'\x0aUpdate\x20On\x20:\x20'+i[_0x5c16e7(0x4ff)]+'\x0aDeskripsi\x20:\x20'+i[_0x5c16e7(0x5c5)]+'\x0aImage\x20:\x20'+i[_0x5c16e7(0x54b)]+_0x5c16e7(0x259)+i[_0x5c16e7(0x5dd)]+_0x5c16e7(0x4a9);}replyWithFakeLink(teks[_0x5c16e7(0x684)]()),await limitAdd(sender);break;case _0x5c16e7(0x25b):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x730)+(prefix+command)+_0x5c16e7(0x6f4));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),dpganzz=args[_0x5c16e7(0x304)]('\x20'),anu=await fetchJson(_0x5c16e7(0x42e)+dpganzz+_0x5c16e7(0x51c)+leysApi),teks='=================\x0a';for(let i of anu[_0x5c16e7(0x50b)]){teks+=_0x5c16e7(0x1b5)+i[_0x5c16e7(0x53d)]+_0x5c16e7(0x2e6)+i[_0x5c16e7(0x54b)]+_0x5c16e7(0x259)+i[_0x5c16e7(0x5dd)]+_0x5c16e7(0x4a9);}replyWithFakeLink(teks[_0x5c16e7(0x684)]()),await limitAdd(sender);break;case _0x5c16e7(0x71b):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink('apa\x20yang\x20mau\x20dicari\x20ngab?\x0acontoh\x20'+(prefix+command)+_0x5c16e7(0x381));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),dpganzz=args[_0x5c16e7(0x304)]('\x20'),anu=await fetchJson('https://leyscoders-api.herokuapp.com/api/sfile?q='+dpganzz+_0x5c16e7(0x51c)+leysApi),teks=_0x5c16e7(0x719);for(let i of anu[_0x5c16e7(0x50b)]){teks+=_0x5c16e7(0x1b5)+i[_0x5c16e7(0x53d)]+_0x5c16e7(0x26e)+i[_0x5c16e7(0x2f0)]+_0x5c16e7(0x259)+i[_0x5c16e7(0x5dd)]+_0x5c16e7(0x4a9);}replyWithFakeLink(teks[_0x5c16e7(0x684)]()),await limitAdd(sender);break;case _0x5c16e7(0x374):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());await patrickhay(ind[_0x5c16e7(0x322)](prefix),MessageType['text'],tescuk,''+ucapanFakereply);break;case _0x5c16e7(0x670):if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x602)+prefix+_0x5c16e7(0x1bc));replyWithFakeLink(ind[_0x5c16e7(0x628)]());let yut=await yts(q);yta(yut[_0x5c16e7(0x5fd)][0x0]['url'])[_0x5c16e7(0x6d8)](async _0x139007=>{const _0x4fdd76=_0x5c16e7,{thumb:_0x229f1f,title:_0x584815,filesizeF:_0x1d0aa9,filesize:_0x2aff9c}=_0x139007,_0x495cfc=_0x4fdd76(0x445)+_0x584815+_0x4fdd76(0x2b0)+_0x1d0aa9+_0x4fdd76(0x755)+yut[_0x4fdd76(0x5fd)][0x0][_0x4fdd76(0x1ca)]+_0x4fdd76(0x56a)+yut['videos'][0x0][_0x4fdd76(0x67a)]+_0x4fdd76(0x237)+yut[_0x4fdd76(0x5fd)][0x0]['url'];ya=await getBuffer(_0x229f1f),py=await patrick[_0x4fdd76(0x349)](from,ya,image),gbutsan=[{'buttonId':''+q,'buttonText':{'displayText':'AUDIO'},'type':0x1},{'buttonId':''+q,'buttonText':{'displayText':_0x4fdd76(0x278)},'type':0x1}],gbuttonan={'imageMessage':py['message'][_0x4fdd76(0x1a6)],'contentText':_0x495cfc,'footerText':_0x4fdd76(0x5a0),'buttons':gbutsan,'headerType':0x4},await patrick[_0x4fdd76(0x74d)](from,gbuttonan,MessageType[_0x4fdd76(0x4d9)],{'quoted':mek});});break;case'playv2':try{if(!q)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+_0x5c16e7(0x284));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind['limitend'](pushname));fakestatus(ind[_0x5c16e7(0x628)]()),tekss=args[0x0],anu=await fetchJson('http://zekais-api.herokuapp.com/ytplay?query='+q+_0x5c16e7(0x51c)+zekaisApi),textnya=_0x5c16e7(0x311),textnya+=_0x5c16e7(0x246)+anu['channel']+'\x0a',textnya+=_0x5c16e7(0x447)+anu[_0x5c16e7(0x1ca)]+'\x0a',textnya+=_0x5c16e7(0x46b)+anu[_0x5c16e7(0x62b)]+'\x0a',textnya+=_0x5c16e7(0x31c)+anu[_0x5c16e7(0x30a)]+'\x0a',textnya+=_0x5c16e7(0x1b0)+anu[_0x5c16e7(0x2f0)]+'\x0a',textnya+=_0x5c16e7(0x624)+anu[_0x5c16e7(0x583)]+'\x0a',textnya+='*Tunggu!,\x20Sedang\x20Proses\x20Download*',pla=await getBuffer(anu['thumb']),patrick[_0x5c16e7(0x74d)](from,pla,image,{'quoted':freply,'caption':textnya}),play=await getBuffer(anu[_0x5c16e7(0x50b)]),patrick[_0x5c16e7(0x74d)](from,play,audio,{'mimetype':'audio/mp4','quoted':freply});}catch(_0x219f4a){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x219f4a,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x4d6):if(!isGroup)return replyWithFakeLink(ind[_0x5c16e7(0x6c9)]());if(!q)return replyWithFakeLink(a+_0x5c16e7(0x1fa)+prefix+_0x5c16e7(0x31a));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),datai=[];try{ysearch=await yts(q),hdata=ysearch[_0x5c16e7(0x22a)];}catch(_0x3d8dcc){return replyWithFakeLink(_0x5c16e7(0x5d4));}num=0x1;for(let i=0x0;i<hdata['length'];i++){datai[_0x5c16e7(0x324)]({'rows':[{'title':_0x5c16e7(0x448),'description':_0x5c16e7(0x3e5)+hdata[i]['title'],'rowId':hdata[i][_0x5c16e7(0x5dd)]},{'title':_0x5c16e7(0x4a4),'description':_0x5c16e7(0x3e5)+hdata[i]['title'],'rowId':hdata[i][_0x5c16e7(0x5dd)]}],'title':num}),num+=0x1;}let paoa=patrick['prepareMessageFromContent'](from,{'listMessage':{'title':_0x5c16e7(0x319),'description':_0x5c16e7(0x71c)+pushname+'\x0a*Hasil\x20Pencarian\x20:\x20'+q+_0x5c16e7(0x1d2),'buttonText':_0x5c16e7(0x46d),'listType':'SINGLE_SELECT','sections':datai}},{});patrick[_0x5c16e7(0x4b4)](paoa,{'waitForAck':!![]});break;case _0x5c16e7(0x643):if(!q)return replyWithFakeLink(_0x5c16e7(0x1fa)+(prefix+command)+_0x5c16e7(0x722));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));sendButMessage(from,_0x5c16e7(0x4a8)+pushname+_0x5c16e7(0x594),''+footerButton,[{'buttonId':'audio\x20'+q,'buttonText':{'displayText':_0x5c16e7(0x23c)},'type':0x1},{'buttonId':_0x5c16e7(0x5e4)+q,'buttonText':{'displayText':_0x5c16e7(0x5e2)},'type':0x1}]),await limitAdd(sender);break;case'ytmp3v2':try{if(!q)return replyWithFakeLink(_0x5c16e7(0x245)+(prefix+command)+'\x20https://youtu.be/dQw4w9WgXcQ');if(isBanned)return replyWithFakeLink(ind['baned']());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));fakestatus(ind[_0x5c16e7(0x628)]()),tekss=args[0x0],anu=await fetchJson(_0x5c16e7(0x4ed)+q+'&apikey='+zekaisApi),gmteng=anu[_0x5c16e7(0x50b)],textnya=_0x5c16e7(0x1fd)+gmteng[_0x5c16e7(0x53d)]+'\x0a',textnya+=_0x5c16e7(0x74c)+gmteng[_0x5c16e7(0x3d5)]+'\x0a',textnya+=_0x5c16e7(0x325)+gmteng['views']+'\x0a',textnya+='Dislike:\x20'+gmteng[_0x5c16e7(0x1ca)]+'\x0a',textnya+=_0x5c16e7(0x4f2)+gmteng[_0x5c16e7(0x1ca)]+'\x0a',textnya+=_0x5c16e7(0x252)+gmteng[_0x5c16e7(0x591)]+'\x0a',textnya+=_0x5c16e7(0x402),tamnel=await getBuffer(gmteng['thumb']),patrick['sendMessage'](from,tamnel,image,{'quoted':freply,'caption':textnya}),pimdeo=await getBuffer(gmteng['url']),patrick['sendMessage'](from,pimdeo,video,{'mimetype':_0x5c16e7(0x1c2),'filename':gmteng[_0x5c16e7(0x53d)]+_0x5c16e7(0x1d1),'quoted':fvideo}),await limitAdd(sender);}catch(_0x2f96ab){console[_0x5c16e7(0x1bd)]('Error\x20:',color(_0x2f96ab,_0x5c16e7(0x4b0))),replyWithFakeLink('Error!,\x20Harap\x20coba\x20.playv2');}break;case'ytmp3':try{if(!q)return replyWithFakeLink(_0x5c16e7(0x245)+(prefix+command)+_0x5c16e7(0x722));if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));fakestatus(ind[_0x5c16e7(0x628)]()),tekss=args[0x0],anu=await fetchJson(_0x5c16e7(0x22c)+q+_0x5c16e7(0x51c)+dappaApi),gmteng=anu['result'],textnya=_0x5c16e7(0x63a)+gmteng[_0x5c16e7(0x53d)]+'\x0a',textnya+='Channel\x20:\x20'+gmteng[_0x5c16e7(0x591)]+'\x0a',textnya+='Published\x20:\x20'+gmteng['published']+'\x0a',textnya+=_0x5c16e7(0x1ad)+gmteng['views']+'\x0a',textnya+='Tunggu!,\x20Sedang\x20Proses\x20Download',tamnel=await getBuffer(gmteng[_0x5c16e7(0x4cc)]),patrick[_0x5c16e7(0x74d)](from,tamnel,image,{'quoted':freply,'caption':textnya}),aumdeo=await getBuffer(gmteng[_0x5c16e7(0x5dd)]),patrick['sendMessage'](from,aumdeo,audio,{'mimetype':_0x5c16e7(0x214),'filename':gmteng[_0x5c16e7(0x53d)]+_0x5c16e7(0x1d1),'quoted':fakevn}),await limitAdd(sender);}catch(_0x2e4f5a){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x2e4f5a,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x390):try{if(!q)return replyWithFakeLink(_0x5c16e7(0x245)+(prefix+command)+'\x20https://youtu.be/dQw4w9WgXcQ');if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));fakestatus(ind['wait']()),tekss=args[0x0],anu=await fetchJson(_0x5c16e7(0x4ed)+q+_0x5c16e7(0x51c)+zekaisApi),gmteng=anu[_0x5c16e7(0x50b)],textnya=_0x5c16e7(0x1fd)+gmteng['title']+'\x0a',textnya+=_0x5c16e7(0x74c)+gmteng[_0x5c16e7(0x3d5)]+'\x0a',textnya+=_0x5c16e7(0x325)+gmteng[_0x5c16e7(0x1ca)]+'\x0a',textnya+=_0x5c16e7(0x5f2)+gmteng[_0x5c16e7(0x1ca)]+'\x0a',textnya+=_0x5c16e7(0x4f2)+gmteng['views']+'\x0a',textnya+='Upload\x20Date:\x20'+gmteng[_0x5c16e7(0x591)]+'\x0a',textnya+=_0x5c16e7(0x402),tamnel=await getBuffer(gmteng[_0x5c16e7(0x4cc)]),patrick[_0x5c16e7(0x74d)](from,tamnel,image,{'quoted':freply,'caption':hehe}),pimdeo=await getBuffer(gmteng[_0x5c16e7(0x5dd)]),patrick[_0x5c16e7(0x74d)](from,pimdeo,video,{'mimetype':_0x5c16e7(0x1c2),'filename':gmteng[_0x5c16e7(0x53d)]+_0x5c16e7(0x1d1),'quoted':fvideo}),await limitAdd(sender);}catch(_0x3bbcf1){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x3bbcf1,'red')),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case'ytmp4':try{if(!q)return replyreplyWithFakeLink(_0x5c16e7(0x245)+(prefix+command)+_0x5c16e7(0x722));if(isBanned)return replyWithFakeLink(ind['baned']());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));fakestatus(ind['wait']()),tekss=args[0x0],anu=await fetchJson('https://dapuhy-api.herokuapp.com/api/socialmedia/ytmp4?url='+q+_0x5c16e7(0x51c)+dappaApi),gmteng=anu[_0x5c16e7(0x50b)],textnya=_0x5c16e7(0x63a)+gmteng[_0x5c16e7(0x53d)]+'\x0a',textnya+=_0x5c16e7(0x40e)+gmteng[_0x5c16e7(0x591)]+'\x0a',textnya+=_0x5c16e7(0x732)+gmteng[_0x5c16e7(0x3d5)]+'\x0a',textnya+=_0x5c16e7(0x1ad)+gmteng[_0x5c16e7(0x1ca)]+'\x0a',textnya+=_0x5c16e7(0x402),tamnel=await getBuffer(gmteng['thumb']),patrick[_0x5c16e7(0x74d)](from,tamnel,image,{'quoted':freply,'caption':hehe}),pimdeo=await getBuffer(gmteng[_0x5c16e7(0x5dd)]),patrick['sendMessage'](from,pimdeo,video,{'mimetype':_0x5c16e7(0x1c2),'filename':gmteng[_0x5c16e7(0x53d)]+_0x5c16e7(0x1d1),'quoted':fvideo}),await limitAdd(sender);}catch(_0x3ec09b){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x3ec09b,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x2cd):case _0x5c16e7(0x728):try{if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x245)+(prefix+command)+'\x20https://vm.tiktok.com/ZSJkHUCwK/');replyWithFakeLink(ind[_0x5c16e7(0x628)]()),link=args[_0x5c16e7(0x304)]('\x20'),dppa=await getBuffer(_0x5c16e7(0x71f)+q+'&apikey='+dappaApi),patrick[_0x5c16e7(0x74d)](from,dppa,video,{'quoted':mek,'caption':_0x5c16e7(0x27e)}),await limitAdd(sender);}catch(_0x5e8072){console[_0x5c16e7(0x1bd)](_0x5c16e7(0x5f0),color(_0x5e8072,_0x5c16e7(0x4b0))),replyWithFakeLink(ind[_0x5c16e7(0x2bd)]());}break;case _0x5c16e7(0x478):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x468)+(prefix+command)+_0x5c16e7(0x725));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),link=args[0x0],resultnya=await fetchJson(_0x5c16e7(0x273)+link+'&apikey='+leysApi),buffer=await getBuffer(resultnya[_0x5c16e7(0x50b)]),patrick[_0x5c16e7(0x74d)](from,buffer,MessageType['video'],{'quoted':freply}),await limitAdd(sender);break;case'igphoto':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x468)+(prefix+command)+_0x5c16e7(0x664));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),link=args[0x0],resultnya=await fetchJson(_0x5c16e7(0x60b)+link+'&apikey='+leysApi),buffer=await getBuffer(resultnya['result']),patrick[_0x5c16e7(0x74d)](from,buffer,MessageType[_0x5c16e7(0x595)],{'quoted':freply}),await limitAdd(sender);break;case _0x5c16e7(0x222):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind['baned']());if(isLimit(sender))return replyWithFakeLink(ind['limitend'](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x232)+(prefix+command)+_0x5c16e7(0x475));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),get_result=await fetchJson(_0x5c16e7(0x42d)+q+'&apikey='+dappaApi),get_result=get_result['result'],ini_txt=_0x5c16e7(0x2c8);for(var x of get_result){ini_txt+='Name\x20:\x20'+x[_0x5c16e7(0x53d)]+'\x0a',ini_txt+=_0x5c16e7(0x731)+x[_0x5c16e7(0x750)]+'\x0a',ini_txt+=_0x5c16e7(0x2d8)+x[_0x5c16e7(0x547)]+'\x0a',ini_txt+=_0x5c16e7(0x51d)+x[_0x5c16e7(0x360)]+'\x0a',ini_txt+=_0x5c16e7(0x21b)+x['link']+'\x0a';}thumb=get_result['icon'],patrick[_0x5c16e7(0x74d)](from,thumb,image,{'quoted':freply,'caption':ini_txt}),replyWithFakeLink(ini_txt),await limitAdd(sender);break;case _0x5c16e7(0x262):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());await patrickhay(ind[_0x5c16e7(0x404)](prefix),MessageType[_0x5c16e7(0x70f)],tescuk,''+ucapanFakereply);break;case'img2url':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);(isMedia&&!mek[_0x5c16e7(0x389)][_0x5c16e7(0x2e9)]||isQuotedImage||isQuotedVideo)&&args['length']==0x0?(boij=isQuotedImage||isQuotedVideo?JSON[_0x5c16e7(0x425)](JSON['stringify'](mek)[_0x5c16e7(0x611)]('quotedM','m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]['contextInfo']:mek,owgi=await patrick[_0x5c16e7(0x5e0)](boij),res=await upload(owgi),replyWithFakeLink(res)):replyWithFakeLink('kirim/reply\x20gambar/video');break;case _0x5c16e7(0x685):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind['limitend']());if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x23d)+prefix+_0x5c16e7(0x4e7));link=body[_0x5c16e7(0x275)](0xb),replyWithFakeLink(ind['wait']()),anu=await fetchJson(_0x5c16e7(0x5ac)+link+_0x5c16e7(0x51c)+leysApi),teks=_0x5c16e7(0x20c)+link+_0x5c16e7(0x5b9)+anu[_0x5c16e7(0x50b)],patrick['sendMessage'](from,teks,text,{'quoted':fkontak}),await limitAdd(sender);break;case _0x5c16e7(0x1fe):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(args['length']<0x1)return replyWithFakeLink(_0x5c16e7(0x23d)+prefix+_0x5c16e7(0x4e7));link=body[_0x5c16e7(0x275)](0xc),replyWithFakeLink(ind[_0x5c16e7(0x628)]()),anu=await fetchJson(_0x5c16e7(0x6ca)+link+'&apikey='+leysApi),teks=_0x5c16e7(0x20c)+link+'\x0a▢\x20To\x20ShortLink\x20:\x20'+anu[_0x5c16e7(0x50b)],patrick['sendMessage'](from,teks,text,{'quoted':fkontak}),await limitAdd(sender);break;case _0x5c16e7(0x1b4):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x5f9)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x23d)+prefix+_0x5c16e7(0x4e7));link=body[_0x5c16e7(0x275)](0xc),replyWithFakeLink(ind[_0x5c16e7(0x628)]()),anu=await fetchJson(_0x5c16e7(0x58c)+link+_0x5c16e7(0x51c)+leysApi),teks='*ShortLink\x20URL*\x0a▢\x20From\x20:\x20'+link+_0x5c16e7(0x5b9)+anu[_0x5c16e7(0x50b)],patrick[_0x5c16e7(0x74d)](from,teks,text,{'quoted':fkontak}),await limitAdd(sender);break;case _0x5c16e7(0x422):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(limits[_0x5c16e7(0x499)](pushname));if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x3b1));teks=''+body[_0x5c16e7(0x275)](0x7),replyWithFakeLink(ind[_0x5c16e7(0x628)]()),anu=await fetchJson('https://mnazria.herokuapp.com/api/screenshotweb?url='+teks),ssweb=await getBuffer(anu['gambar']),patrick['sendMessage'](from,ssweb,image,{'quoted':freply}),await limitAdd(sender);break;case'stiker':case'sticker':case's':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));await limitAdd(sender);if((isMedia&&!mek[_0x5c16e7(0x389)]['videoMessage']||isQuotedImage)&&args[_0x5c16e7(0x1ba)]==0x0){const encmedia=isQuotedImage?JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)]:mek,media=await patrick['downloadAndSaveMediaMessage'](encmedia);ran=getRandom(_0x5c16e7(0x213)),await ffmpeg('./'+media)[_0x5c16e7(0x367)](media)['on']('start',function(_0x5186fa){const _0x2b1582=_0x5c16e7;console[_0x2b1582(0x1bd)](_0x2b1582(0x1cf)+_0x5186fa);})['on']('error',function(_0x38134d){const _0x5ecb48=_0x5c16e7;console[_0x5ecb48(0x1bd)]('Error\x20:\x20'+_0x38134d),fs[_0x5ecb48(0x599)](media),replyWithFakeLink(ind[_0x5ecb48(0x27b)]());})['on'](_0x5c16e7(0x35d),function(){const _0x2fcea9=_0x5c16e7;muach=getRandom(''),exif[_0x2fcea9(0x312)](_0x2fcea9(0x2ee),'',_0x2fcea9(0x734)+muach),exec(_0x2fcea9(0x695)+muach+_0x2fcea9(0x6c3)+ran+_0x2fcea9(0x690)+ran,async _0x4f276e=>{const _0x435078=_0x2fcea9;console[_0x435078(0x1bd)](_0x435078(0x4e8));if(_0x4f276e)return console[_0x435078(0x1bd)](_0x4f276e)&&replyWithFakeLink('Error,\x20Harap\x20coba\x20lagi\x20nanti!');patrick['sendMessage'](from,fs['readFileSync'](ran),sticker,{'quoted':freply}),fs[_0x435078(0x599)](media),fs[_0x435078(0x599)](ran);});})['addOutputOptions']([_0x5c16e7(0x37a),_0x5c16e7(0x5cc),_0x5c16e7(0x4bd),_0x5c16e7(0x3a6)])[_0x5c16e7(0x409)](_0x5c16e7(0x38d))[_0x5c16e7(0x341)](ran);}else{if((isMedia&&mek['message']['videoMessage'][_0x5c16e7(0x486)]<0xb||isQuotedVideo&&mek[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)][_0x5c16e7(0x705)][_0x5c16e7(0x2e9)]['seconds']<0xb)&&args[_0x5c16e7(0x1ba)]==0x0){const encmedia=isQuotedVideo?JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)]:mek,media=await patrick[_0x5c16e7(0x354)](encmedia);ran=getRandom('.webp'),replyWithFakeLink(ind[_0x5c16e7(0x628)]()),await ffmpeg('./'+media)['inputFormat'](media[_0x5c16e7(0x366)]('.')[0x1])['on']('start',function(_0x27355a){const _0x1935da=_0x5c16e7;console[_0x1935da(0x1bd)]('Started\x20:\x20'+_0x27355a);})['on'](_0x5c16e7(0x2bd),function(_0x49de9e){const _0x1fb9fc=_0x5c16e7;console['log']('Error\x20:\x20'+_0x49de9e),fs['unlinkSync'](media),tipe=media[_0x1fb9fc(0x5cf)](_0x1fb9fc(0x1d1))?_0x1fb9fc(0x377):_0x1fb9fc(0x21f),replyWithFakeLink(ind[_0x1fb9fc(0x27b)]());})['on'](_0x5c16e7(0x35d),function(){const _0x392695=_0x5c16e7;console[_0x392695(0x1bd)](_0x392695(0x4e8)),exif[_0x392695(0x312)](_0x392695(0x2ee),'','takestick_'+sender),exec(_0x392695(0x201)+sender+'.exif\x20'+ran+_0x392695(0x690)+ran,async _0x4aaa68=>{const _0xe50373=_0x392695;if(_0x4aaa68)return replyWithFakeLink(ind[_0xe50373(0x27b)]());patrick[_0xe50373(0x74d)](from,fs['readFileSync'](ran),sticker,{'quoted':freply}),fs['unlinkSync'](media),fs[_0xe50373(0x599)](ran);});})[_0x5c16e7(0x704)]([_0x5c16e7(0x37a),_0x5c16e7(0x5cc),_0x5c16e7(0x4bd),_0x5c16e7(0x3a6)])[_0x5c16e7(0x409)](_0x5c16e7(0x38d))[_0x5c16e7(0x341)](ran);}else replyWithFakeLink(_0x5c16e7(0x41b)+prefix+_0x5c16e7(0x2ce));}break;case'tagsticker':if(!isAdminban)return replyWithFakeLink(_0x5c16e7(0x1ac));if((isMedia&&!mek[_0x5c16e7(0x389)]['videoMessage']||isQuotedSticker)&&args[_0x5c16e7(0x1ba)]==0x0){const encmedia=isQuotedSticker?JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)['replace'](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)]:mek;filePath=await patrick['downloadAndSaveMediaMessage'](encmedia,filename=getRandom());var value=args['join']('\x20'),group=await patrick[_0x5c16e7(0x4a5)](from),member=group[_0x5c16e7(0x3e0)],mem=[];member[_0x5c16e7(0x65c)](async _0x3f5529=>{const _0x28856c=_0x5c16e7;mem[_0x28856c(0x324)](_0x3f5529['id'][_0x28856c(0x611)](_0x28856c(0x46a),_0x28856c(0x32d)));});var options={'contextInfo':{'mentionedJid':mem},'quoted':freply};ini_buffer=fs[_0x5c16e7(0x3b3)](filePath),patrick[_0x5c16e7(0x74d)](from,ini_buffer,sticker,options),fs['unlinkSync'](filePath);}else replyWithFakeLink('Tag\x20sticker\x20yang\x20sudah\x20dikirim');break;case'toimg':if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isQuotedSticker)return replyWithFakeLink(_0x5c16e7(0x493));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),encmedia=JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)]['extendedTextMessage'][_0x5c16e7(0x2b6)],media=await patrick['downloadAndSaveMediaMessage'](encmedia),ran=getRandom(_0x5c16e7(0x242)),exec(_0x5c16e7(0x580)+media+'\x20'+ran,_0x52e4f1=>{const _0x446a0c=_0x5c16e7;fs[_0x446a0c(0x599)](media);if(_0x52e4f1)return replyWithFakeLink(ind[_0x446a0c(0x27b)]());buffer=fs['readFileSync'](ran),patrick['sendMessage'](from,buffer,image,{'quoted':freply,'caption':_0x446a0c(0x376)}),fs['unlinkSync'](ran);}),await limitAdd(sender);break;case _0x5c16e7(0x2f9):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));patrick[_0x5c16e7(0x68b)](from,Presence['composing']);if(!isQuotedVideo)return replyWithFakeLink(_0x5c16e7(0x573));replyWithFakeLink(ind[_0x5c16e7(0x628)]()),encmedia=JSON[_0x5c16e7(0x425)](JSON['stringify'](mek)['replace']('quotedM','m'))['message']['extendedTextMessage'][_0x5c16e7(0x2b6)],media=await patrick[_0x5c16e7(0x354)](encmedia),ran=getRandom(_0x5c16e7(0x1d1)),exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x56fd8c=>{const _0x1156e9=_0x5c16e7;fs[_0x1156e9(0x599)](media);if(_0x56fd8c)return replyWithFakeLink('Gagal,\x20pada\x20saat\x20mengkonversi\x20video\x20ke\x20mp3');bufferlkj=fs[_0x1156e9(0x3b3)](ran),patrick[_0x1156e9(0x74d)](from,bufferlkj,audio,{'mimetype':_0x1156e9(0x214),'quoted':freply}),fs['unlinkSync'](ran);}),await limitAdd(sender);break;case _0x5c16e7(0x1bb):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());encmedia=JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)]['contextInfo'],media=await patrick[_0x5c16e7(0x354)](encmedia),ran=getRandom(_0x5c16e7(0x281)),exec('ffmpeg\x20-i\x20'+media+_0x5c16e7(0x4af)+ran,(_0xc72cc9,_0x3be51a,_0x244b7d)=>{const _0x80cc8c=_0x5c16e7;fs[_0x80cc8c(0x599)](media);if(_0xc72cc9)return replyWithFakeLink('Error!');uhh=fs[_0x80cc8c(0x3b3)](ran),patrick[_0x80cc8c(0x74d)](from,uhh,audio,{'mimetype':_0x80cc8c(0x214),'ptt':!![],'quoted':freply}),fs['unlinkSync'](ran);});break;case _0x5c16e7(0x5de):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());encmedia=JSON['parse'](JSON[_0x5c16e7(0x314)](mek)['replace'](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)],media=await patrick[_0x5c16e7(0x354)](encmedia),ran=getRandom(_0x5c16e7(0x281)),exec(_0x5c16e7(0x580)+media+'\x20-filter:a\x20\x22atempo=0.5,asetrate=65100\x22\x20'+ran,(_0x5d47ce,_0x2df9c9,_0x5a5fdf)=>{const _0x1623e9=_0x5c16e7;fs['unlinkSync'](media);if(_0x5d47ce)return replyWithFakeLink('Error!');hah=fs['readFileSync'](ran),patrick[_0x1623e9(0x74d)](from,hah,audio,{'mimetype':_0x1623e9(0x214),'ptt':!![],'quoted':freply}),fs[_0x1623e9(0x599)](ran);});break;case _0x5c16e7(0x5d8):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':'▨\x20VERIFY\x20▨'},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());encmedia=JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)[_0x5c16e7(0x611)](_0x5c16e7(0x230),'m'))[_0x5c16e7(0x389)][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)],media=await patrick[_0x5c16e7(0x354)](encmedia),ran=getRandom(_0x5c16e7(0x281)),exec('ffmpeg\x20-i\x20'+media+_0x5c16e7(0x260)+ran,(_0x43d31a,_0x54152b,_0x302b1f)=>{const _0x3dff1b=_0x5c16e7;fs[_0x3dff1b(0x599)](media);if(_0x43d31a)return replyWithFakeLink('Error!');hah=fs[_0x3dff1b(0x3b3)](ran),patrick['sendMessage'](from,hah,audio,{'mimetype':_0x3dff1b(0x214),'ptt':!![],'quoted':freply}),fs['unlinkSync'](ran);});break;case _0x5c16e7(0x58f):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());encmedia=JSON[_0x5c16e7(0x425)](JSON[_0x5c16e7(0x314)](mek)['replace']('quotedM','m'))['message'][_0x5c16e7(0x65a)][_0x5c16e7(0x2b6)],media=await patrick['downloadAndSaveMediaMessage'](encmedia),ran=getRandom(_0x5c16e7(0x281)),exec(_0x5c16e7(0x580)+media+_0x5c16e7(0x50c)+ran,(_0x524559,_0x172c31,_0x29ee61)=>{const _0x2e44cf=_0x5c16e7;fs[_0x2e44cf(0x599)](media);if(_0x524559)return replyWithFakeLink(_0x2e44cf(0x5ca));hah=fs[_0x2e44cf(0x3b3)](ran),patrick['sendMessage'](from,hah,audio,{'mimetype':'audio/mp4','ptt':!![],'quoted':freply}),fs[_0x2e44cf(0x599)](ran);});break;case _0x5c16e7(0x3f6):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)]());if(args[_0x5c16e7(0x1ba)]<0x1)return replyWithFakeLink(_0x5c16e7(0x245)+(prefix+command)+_0x5c16e7(0x5ee));replyWithFakeLink(ind['wait']()),anu=await fetchJson(_0x5c16e7(0x598)+q+_0x5c16e7(0x68d));if(anu[_0x5c16e7(0x52e)]===!![]){teks=_0x5c16e7(0x719);for(let s of anu[_0x5c16e7(0x50b)]){teks+=_0x5c16e7(0x6e0)+s[_0x5c16e7(0x5db)]+_0x5c16e7(0x6a2)+s['tayang']+_0x5c16e7(0x4a9);}replyWithFakeLink(teks[_0x5c16e7(0x684)]()),await limitAdd(sender);}else anu[_0x5c16e7(0x52e)]===![]&&replyWithFakeLink('Channel\x20Tidak\x20Ditemukan!!\x0aList\x20Channel:\x0a*•\x20NET*\x0a*•\x20INDOSIAR*\x0a*•\x20SCTV*\x0a*•\x20TVOne*\x0a*•\x20MNCTV*\x0a*•\x20ANTV*\x0a*•\x20GTV*\x0a*•\x20INEWS*\x0a*•\x20RTV*n*•\x20RCTI*');break;case _0x5c16e7(0x423):if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(isLimit(sender))return replyWithFakeLink(ind[_0x5c16e7(0x499)](pushname));brien=body[_0x5c16e7(0x275)](0x9),brainly(''+brien)['then'](_0x4167c=>{const _0x3c0311=_0x5c16e7;teks=_0x3c0311(0x5e8);for(let _0x59c7e2 of _0x4167c[_0x3c0311(0x1b1)]){teks+='\x0a*Brainly*\x0a\x0a*>\x20Pertanyaan:*\x20'+_0x59c7e2['pertanyaan']+_0x3c0311(0x61f)+_0x59c7e2['jawaban'][0x0][_0x3c0311(0x70f)]+'\x0a-------------------\x0a';}patrick[_0x3c0311(0x74d)](from,teks,text,{'quoted':mek,'detectLinks':![]}),console[_0x3c0311(0x1bd)](_0x4167c);}),await limitAdd(sender);break;case'profile':if(isBanned)return replyWithFakeLink(ind[_0x5c16e7(0x6f2)]());if(!isRegistered)return sendButMessage(from,''+descButton,''+footerButton,[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);if(isPrem){const kanting=a+_0x5c16e7(0x30e)+premi+_0x5c16e7(0x219)+checkATMuser(sender)+_0x5c16e7(0x387)+a+_0x5c16e7(0x5dc)+prefix+_0x5c16e7(0x617);patrick[_0x5c16e7(0x74d)](from,kanting,text,{'quoted':mek});}else{if(!isPrem)for(u of _limit){if(u['id']===sender){let letCount=initialLimit-u[_0x5c16e7(0x6ef)];const kantong=a+_0x5c16e7(0x30e)+premi+_0x5c16e7(0x753)+checkATMuser(sender)+_0x5c16e7(0x2fe)+letCount+_0x5c16e7(0x5f7)+a+_0x5c16e7(0x5dc)+prefix+_0x5c16e7(0x617);patrick[_0x5c16e7(0x74d)](from,kantong,text,{'quoted':mek});}}}break;default:if(_chats['startsWith'](''+codeVerification)){if(isRegistered)return;const serialUser=createSerial(0x14);addRegisteredUser(sender,serialUser),addATM(sender),addLevelingId(sender);const kenver=a+'Succes\x20Registered'+a+'\x0a'+a+'❏\x20Email\x20:\x20'+pushname['replace']('\x20','')+'@bot.id\x0a❏\x20Waktu\x20Verify\x20:\x20'+time+_0x5c16e7(0x619)+serialUser+_0x5c16e7(0x456)+_registered[_0x5c16e7(0x1ba)]+a,raVe=Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)](0x28)*0x4206)+0x32,raVe1=Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)](0x28)*0x39b8)+0x56,raVe2=Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)](0x28)*0x3b8b)+0x2b;codeVerification=''+raVe,codeVerification1=''+raVe1,codeVerification2=''+raVe2,sendButMessage(from,''+kenver,''+footerButton,[{'buttonId':prefix+'rules','buttonText':{'displayText':_0x5c16e7(0x5a8)},'type':0x1},{'buttonId':prefix+_0x5c16e7(0x522),'buttonText':{'displayText':'▨\x20MENU\x20▨'},'type':0x1}]);}if(_chats[_0x5c16e7(0x686)](''+codeVerification1)){if(isRegistered)return;const fraVe=Math[_0x5c16e7(0x4fc)](Math['random'](0x28)*0x4206)+0x32,fraVe1=Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)](0x28)*0x395e)+0x2c,fraVe2=Math['floor'](Math['random'](0x28)*0x3b8b)+0x35;codeVerification=''+fraVe,codeVerification1=''+fraVe1,codeVerification2=''+fraVe2,sendButMessage(from,a+_0x5c16e7(0x687)+a+_0x5c16e7(0x2bc),_0x5c16e7(0x2bf)+prefix+'verify',[{'buttonId':prefix+_0x5c16e7(0x4b2),'buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);}if(_chats[_0x5c16e7(0x686)](''+codeVerification2)){if(isRegistered)return;const ffraVe=Math[_0x5c16e7(0x4fc)](Math['random'](0x28)*0x4a03)+0x32,ffraVe1=Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)](0x28)*0x3d06)+0x2c,ffraVe2=Math[_0x5c16e7(0x4fc)](Math[_0x5c16e7(0x567)](0x28)*0x4094)+0x35;codeVerification=''+ffraVe,codeVerification1=''+ffraVe1,codeVerification2=''+ffraVe2,sendButMessage(from,a+_0x5c16e7(0x687)+a+_0x5c16e7(0x2bc),_0x5c16e7(0x2bf)+prefix+_0x5c16e7(0x4b2),[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x5c16e7(0x6b1)},'type':0x1}]);}isGroup&&!isCmd&&isSimi&&budy!=undefined&&(console[_0x5c16e7(0x1bd)](budy),muehe=await simih(budy),replyWithFakeLink(muehe));}
} catch (e) {
	e = String(e)
        if (!e.includes("this.isZero")) {
		console.log('Error : %s', color(e, 'red'))
		}
    }
  })
}

starts()