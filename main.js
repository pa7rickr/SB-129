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
/*const {
	ind
} = require('./data/language')*/
const { 
    EmojiAPI
} = require("emoji-api");
const emoji = new EmojiAPI()
const { 
    yta, 
    ytv 
} = require("./lib/ytdl");
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
const badword = JSON.parse(fs.readFileSync('./data/data/badword.json'))
const welcome = JSON.parse(fs.readFileSync('./data/data/welcome.json'))
const _registered = JSON.parse(fs.readFileSync('./data/data/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./data/data/limit.json'))
const uang = JSON.parse(fs.readFileSync('./data/data/uang.json'))
const say = JSON.parse(fs.readFileSync('./data/data/say.json'))
const adminban = JSON.parse(fs.readFileSync('./data/data/admin.json'))
const sewa = JSON.parse(fs.readFileSync('./data/data/sewa.json'))
const claim = JSON.parse(fs.readFileSync('./data/data/claim.json'))
const nsfw = JSON.parse(fs.readFileSync('./data/data/nsfw.json'))
const stc = JSON.parse(fs.readFileSync('./data/data/stc.json'))
const sensticker = JSON.parse(fs.readFileSync('./data/data/sensticker.json'));
const prem = JSON.parse(fs.readFileSync('./data/data/prem.json'))
const ban = JSON.parse(fs.readFileSync('./data/data/banned.json'))
const bad = JSON.parse(fs.readFileSync('./data/data/bad.json'))

/******************* Settings  *******************/
const setting = JSON.parse(fs.readFileSync('./config.json'))
const {
	botName,
	ownerName,
	patrickgrupp,
	numberOwner,
	zeksApi,
	zahirApi,
	leysApi,
	xteamApi,
	dappaApi,
	zekaisApi,
	dhApi,
	keyprem,
	gamewaktu
} = setting
numbernye = '0@s.whatsapp.net'
const ownerNumber = [`${numberOwner}@s.whatsapp.net`]
const vcard = 'BEGIN:VCARD\n' +
	'VERSION:3.0\n' +
	`FN:${ownerName}\n` +
	`ORG:Pengembang ${botName}\n` +
	`TEL;type=CELL;type=VOICE;waid=${numberOwner}:+${numberOwner}\n` +
	'END:VCARD'

const uang1 = 200
const uang2 = 175
const uang3 = 150
const uang4 = 100
const uang5 = 300
blocked = []
codeReedem = 'XtiLjKqOp09Ii57e3'
numbernye: 0
shp = '⬡'
codeVerification = '252618'
codeVerification1 = '266221'
codeVerification2 = '278223'
hit_today = []
groupLimit = 20
initialLimit =  20
memberLimit = 13

let tictactoe = []
let tebakgambar = []
let family100 = []
let siapakah = []
let tebakangka = []
let susunkata = []
let tekateki = []
let tebakbendera = []

/******************* XP, Level, Limit, Registered PatrickBot  *******************/
/** 
    * Registered
 **/
 const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, lang) => {
    const obj = { id: userid, serial: lang }
    _registered.push(obj)
    fs.writeFileSync('./data/data/registered.json', JSON.stringify(_registered))
}
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const checkRegisteredUser = (userid) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
        if (_registered[i].id === userid) {
            status = true
        }
    })
    return status
}
/** 
    * Limit & Points
 **/
const addATM = (userid) => {
	const obj = {id: userid, uang : 0}
    uang.push(obj)
    fs.writeFileSync('./data/data/uang.json', JSON.stringify(uang))
}
const addKoinUser = (userid, amount) => {
    let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang += amount
        fs.writeFileSync('./data/data/uang.json', JSON.stringify(uang))
    }
}
const checkATMuser = (userid) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return uang[position].uang
    }
}
const bayarLimit = (userid, amount) => {
	let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./data/data/limit.json', JSON.stringify(_limit))
    }
}
const confirmATM = (userid, amount) => {
	let position = false
    Object.keys(uang).forEach((i) => {
        if (uang[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        uang[position].uang -= amount
        fs.writeFileSync('./data/data/uang.json', JSON.stringify(uang))
    }
}
const limitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./data/data/limit.json', JSON.stringify(_limit))
    }
} 
/** 
    * Premium & Premium Expired
 **/
const addPremiumUser = (userId, expired, _dir) => {
    const obj = { id: userId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
    fs.writeFileSync('./data/data/prem.json', JSON.stringify(_dir))
}
const getPremiumPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getPremiumExpired = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}
const checkPremiumUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}
const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Premium expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./data/data/prem.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const getAllPremiumUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Add Sewa group.
 */
const addSewaGroup = (gid, expired, _dir) => {
    const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
    _dir.push(obj)
    fs.writeFileSync('./data/data/sewa.json', JSON.stringify(_dir))
}
const getSewaPosition = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getSewaExpired = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}
const checkSewaGroup = (gid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            status = true
        }
    })
    return status
}
const expiredCheckSewa = (patrick, _dir, text) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa expired: ${_dir[position].id}`)
            if (_dir[position].status === true){
            	    patrick.sendMessage(_dir[position].id, '*Sewa PatrickBot telah Expired!*\n*Silahkan chat owner untuk memperpanjang*', text) 
                    sleep(5000)
                    patrick.groupLeave(_dir[position].id)
                    _dir.splice(position, 1)
                    fs.writeFileSync('./data/data/sewa.json', JSON.stringify(_dir))
            }
        }
    }, 1000)
}

// const mutual = JSON.parse(fs.readFileSync('./temp/chats.json'))
// const mutualChats = JSON.parse(fs.readFileSync('./temp/isChats.json'))

mutual = []
mutualChats = []
const checkMe = (userId) => {
    let position = null
    Object.keys(mutual).forEach((i) => {
        if (mutual[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return mutual[position].id
    }
}
const checkFriendID = (userId) => {
    let position = null
    Object.keys(mutual).forEach((i) => {
        if (mutual[i].friends === userId) {
            position = i
        }
    })
    if (position !== null) {
        return mutual[position].friends
    }
}
const sendFriends = (userId) => {
    let position = null
    Object.keys(mutual).forEach((i) => {
        if (mutual[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return mutual[position].friends
    }
}
const sendMe = (userId) => {
    let position = null
    Object.keys(mutual).forEach((i) => {
        if (mutual[i].friends === userId) {
            position = i
        }
    })
    if (position !== null) {
        return mutual[position].id
    }
}
const deleteChats = (sender) => {
    Object.keys(mutual).forEach((i) => {
        if (mutual[i].id === sender) {
            mutual.splice(i, 1)
            fs.writeFileSync('./temp/chats.json', JSON.stringify(mutual))
        }
    })
    return true
}
const deleteFriendsChats = (sender) => {
    Object.keys(mutual).forEach((i) => {
        if (mutual[i].friends === sender) {
            mutual.splice(i, 1)
            fs.writeFileSync('./temp/chats.json', JSON.stringify(mutual))
        }
    })
    return true
}
/**
  * Sticker Spam
  * Badword Count
**/
const addCountStc = function(sender, _dir){
    var found = false;
    Object.keys(_dir).forEach((i) => {
        if(_dir[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _dir[found].count += 1;
        fs.writeFileSync('./data/data/sensticker.json',JSON.stringify(_dir));
    }
}
const isCountStc = function(sender, _dir){
    let found = false
    for (let i of _dir) {
        if (i.id === sender) {
            let counts = i.count
            if (counts >= 5) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false){
        const obj = { id: sender, count: 1 }
        _dir.push(obj)
        fs.writeFileSync('./data/data/sensticker.json', JSON.stringify(_dir))
        return false
    }
}
const delCountStc = function(sender, _dir){
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === sender) {
            _dir.splice(i, 1)
            fs.writeFileSync('./data/data/sensticker.json', JSON.stringify(_dir))
        }
    })
    return true
}

const addClaim = (userId, expired, _dir) => {
    const obj = { id: userId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
    fs.writeFileSync('./data/data/claim.json', JSON.stringify(_dir))
}
const checkClaimUser = (userId, _dir,reply) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
        	let cekclaim = ms(_dir[i].expired - Date.now())
        	reply(`*Kamu sudah mengklaim bonus harian, tunggu*\n*${cekclaim.hours} jam* *${cekclaim.minutes} menit(s)* *${cekclaim.seconds} detik(s)*`)
            status = true
        }
    })
    return status
}
const expiredClaim = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./data/data/claim.json', JSON.stringify(_dir))
        }
    }, 1000)
}
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

const checkLimitUser = (userid) => {
	let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        return  initialLimit - _limit[position].limit
    }
}

async function starts() {
	const patrick = new WAConnection()
	 patrick.version = [2, 2134, 10]
	 patrick.browserDescription = ["SB-129", "Edge", "3.0"];
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
    patrick.on('message-delete', async (m) => {
        if (m.key.remoteJid == 'status@broadcast') return
        if (m.key.fromMe) return
        const moment = require('moment-timezone')
        const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
        let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
        let calender = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        patrick.sendMessage(m.key.remoteJid, 
`ANTI DELETE
• Nama : @${m.participant.split("@")[0]}
• Waktu : ${jam} ${week} ${calender}
• Type : ${Object.keys(m.message)[0]}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
        patrick.copyNForward(m.key.remoteJid, m.message);
    })
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
			var iwelcome = await getBuffer(`https://api-yogipw.herokuapp.com/api/welcome3?name=${encodeUrl(namaewa)}%20&mem=50&msg=Welcome In ${encodeUrl(mdata.subject)}&picurl=${ppimg}&bgurl=https://i.ibb.co/NY6Sjgb/Proyek-Baru-635-65-C471-D.png`)
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
patrick.on ('CB:Presence', json => console.log(json.id + " presence is " + json.type))
await patrick.requestPresenceUpdate ("6288989029718@c.us")
    patrick.on('CB:action,,call', async json => {
	const callerId = json[2][0][1].from;
	console.log('call dari ' + callerId)
	patrick.sendMessage(callerId, '*Auto block system, dont call please*', MessageType.text)
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
			if (m.isBaileys) return
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
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const perepix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '.'
			var prefixRegEx = /^[!z?#.+\/]/gi;
		    let _chats = (type === 'conversation' && mek.message.conversation.startsWith(perepix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(perepix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(perepix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(perepix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : "";
		    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : ".";
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
			const isGroupAdmins = groupAdmins.includes(sender) || false 
			const isWelcome = isGroup ? welcome.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false 
            const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
            const isAntiSpam = isGroup ? stc.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isBanned = ban.includes(sender)
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isOwner = ownerNumber.includes(sender)
			const isChats = mutualChats.includes(sender)
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
            const add = function(from, orangnya) {
			patrick.groupAdd(from, orangnya);
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
		if (time2 == "21:40:00") {
			var ngonsol = []
			rest = _limit.indexOf([])
		    _limit.splice(rest)
		    fs.writeFileSync('./data/data/limit.json', JSON.stringify(ngonsol))
		    console.log('Limit has been reset!')
		    patrick.sendMessage('6288989029718@s.whatsapp.net', 'Limit has been reset', text)
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
			'caption': `${ucapanFakereply}\n  command: ${prefix + command}`,
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
                "title": `*Hello* ${pushname}\n${ufr}\nFollow me _pa7rick`,
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
	const media = await patrick.prepareMessage(from, kma, image)
	let mhan = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
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
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    const loc = await patrick.prepareMessage(from, kma, location)
    let mhan = loc.message["ephemeralMessage"] ? loc.message.ephemeralMessage : loc
    const buttonMessages = {
         locationMessage: mhan.message.locationMessage,
         contentText: text1,
         footerText: desc1,
         buttons: but,
         headerType: 6
     }
     patrick.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
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

var premi = 'Free Member'
if (isPrem) {
	premi = 'Premium Member'
}
if (isOwner) {
	premi = 'Owner'
}

        /**
           * English type!
           * Language Support 
        **/
        
        en = {
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
			wrongf: `*Format Salah!*\n*Penggunaan:*\n`,
			limitend: `*Limit anda telah habis!*\nSilakan ketik ${prefix}buylimit untuk mendapatkan limit!\n\n*NOTE:* Limit akan direset pada jam 21:00`,
			type: `Hello ${pushname} 👋\n*${botName} by ${ownerName}*\n*This is all menu in ${botName}*`,
		}
		/**
           * Indonesia type!
           * Language Support
        **/        
		ind = {
			wait: `*Tunggu SB sedang memproses!*`,
			succes: `*Sukses!*`,
			error: `*Gagal, coba lagi nanti!*`,
			baned: `*Kamu telah dibanned!*`,
			stikga: `*Gagal, coba lagi nanti!*`,
			linkga: `*Silahkan cek kembali linknya!*`,
			groupo: `*Fitur ini hanya tersedia di Grup!*`,
			ownerb: `*Fitur ini hanya untuk owner SB!*`,
			admin: `*Fitur ini hanya untuk Admin Grup!*`,
			badmin: `Jika ingin memakai fitur ini\n*Jadikan SB-129 sebagai Admin Grup*`,
			wrongf: `*Format salah!*`,
			limitend: `*Limit anda telah habis!*\nSilakan ketik ${prefix}buylimit untuk mendapatkan limit!`,
			type: `Halo ${pushname} 👋\n*${botName} by ${ownerName}*\n*Ini semua menu ${botName}*`,
		}
		lang = ind
		
const notepad = ['Jika kamu ingin mengubah gambar menjadi stiker, *kirim gambar dengan caption .sticker*', 'Jika kamu ingin membuat suara google, *ketik .tts <kata>*', 'Jika kamu ingin mendapatkan points, cukup bermain game yang ada didalam bot!', 'Jika kamu ingin mengubah stiker menjadi gambar, *reply sticker dengan caption .toimg*', 'Jika kamu ingin menjadi member premium, cukup ketik *.buycode*', 'Jika kamu ingin mencari jawaban dari soal dengan brainly, cukup ketik *.brainly <soal>*', 'Member premium mempunyai limit tidak terbatas', 'Jika kamu ingin mendengarkan lagu yang kamu inginkan ketik *.play <lagu>*', 'Jika kamu ingin mendownload video dari youtube, ketik *.ytmp4 <link>*', 'Jika kamu ingin mendownload audio dari youtube, ketik *.ytmp3 <link>*', 'Jika kamu ingin mendownload video dari tiktok, ketik *.tiktok <link>*']
const note = notepad[Math.floor(Math.random() * notepad.length)]

expiredCheckSewa(patrick, sewa)
expiredClaim(claim)
expiredCheck(prem)

const isLimit = (sender) => {
	if (isPrem) return false
	let position = false
	for (let i of _limit) {
		if (i.id === sender) {
			let limits = i.limit
			if (limits >= initialLimit) {
				position = true 
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
			limit: 0
		}
		_limit.push(obj)
		fs.writeFileSync('./data/data/limit.json', JSON.stringify(_limit))
		return false
	}
}

if (isRegistered && isCmd) {
	const checkATM = checkATMuser(sender)
	try {
		if (checkATM === undefined) addATM(sender)
		const uangsaku = randomNomor(5)
		addKoinUser(sender, uangsaku)
	} catch (err) {
		console.error(err)
	}
}
            if (budy.includes("://chat.whatsapp.com/" && isAntiLink && isGroup)) { 
            getLink = await patrick.groupInviteCode(from) 
	        if (budy.includes(`${getLink}`)) return replyWithFakeLink(`Kamu telah mengirim linkgrup ini\n${botName} tidak akan kick!`)
			if (isGroupAdmins) return replyWithFakeLink(`*Because your admin group*\n*${botName} not kick you!*`)
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			replyWithFakeLink(`*「 ANTI LINK GROUP 」*\nKamu akan dikick karena telah mengirim link grup`)
			setTimeout(() => {
				patrick.groupRemove(from, [kic]).catch((e) => {
					replyWithFakeLink(`*${botName} tidak menjadi admin tidak dapat kick!*`)
				})
			}, 3000)
		}
		/*
	    let werewolf = JSON.parse(fs.readFileSync(`./lib/werewolf/${from}.json`));
		let listww = JSON.parse(fs.readFileSync(`./lib/werewolf/list_${from}.json`));
		let numberVote = JSON.parse(fs.readFileSync(`./lib/werewolf/number_${from}.json`));
		let players = JSON.parse(fs.readFileSync(`./lib/werewolf/players_${from}.json`));
		let wwplayer = JSON.parse(fs.readFileSync(`./lib/werewolf/ww_${from}.json`));
		voter = []
		voting = []
		wwvote = []
		players = []
		gamesOn = []
		hasVoteBL = []
		const isWW = wwplayer.includes(sender)
		const isWerewolf = isGroup ? werewolf.includes(from) : false 
		const addVote = (owh) => {
			voter.push(owh)
		}
		const addedVote = (owh) => {
			voting.push(owh)
		}
		const addExpiredWerewolf = (userId, expired) => {
            const obj = { id: userId, expired: Date.now() + toMs(expired) }
            wwvote.push(obj)
        }
        function findWord(arr) {
            var hs = {};
            for (var i = 0; i < arr.length; i++) {
                if (hs.hasOwnProperty(arr[i])) {
                    hs[arr[i]] = hs[arr[i]] + 1;
                 } else {
                    hs[arr[i]] = 1;
                 }
            }
            var Key = "";
            var Value = 0;
            for (const [key, value] of Object.entries(hs)) {
                if (value > Value) {
                Value = value;
                Key = key;
                }
            }
            return Key;
        }
const expiredtoNight = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Players Voting expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
			var freq = findWord(voting)
			var getFreq = players + '[' + freq + ']'
			players.splice(ww[`${getFreq}`], 1)
			if (getFreq.includes(ww) && !getFreq.includes(players)) mentions(`Hasil ${getFreq} adalah werewolf!`, [`${getFreq}`], true)
			if (getFreq.includes(players) && !getFreq.includes(ww)) mentions(`Hasil ${getFreq} adalah warga!`, [`${getFreq}`], true)
        }
    }, 1000)
}

const expiredtoVoteWW = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Werewolf Voting expired: ${_dir[position].id}`)
            reply(
        }
    }, 1000)
}

const expiredtoVoteWW = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Werewolf Voting expired: ${_dir[position].id}`)
            if (budy.toLowerCase() === q) {
				addExpiredNight(from, 80s)
				let fil = vote.map((v) => v.participant);
				let id_vote = sender ? sender : "6288989029718@s.whatsapp.net";
				if (fil.includes(id_vote)) {
					return reply(`Kamu telah vote ${players[`${q}`]}!`)
				} else {
					addBlackList(q)
					reply(`Kamu telah vote ${players[`${q}`]}!`)
				}
			}
        }
    }, 1000)
}

const expiredtoMorning = (_dir) => { // Hasil dari voting ww
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Werewolf Voting expired: ${_dir[position].id}`)
            if (blacklist.length < 1) return reply('Werewolf ga bunuh siapapun!')
            players.splice(blacklist, 1)
			mentions(`@${blacklist.split('@')} telah dibunuh werewolf`, [`${blacklist}`], true)
			blacklist.splice(blacklist, 1)
        }
    }, 1000)
}
// Done
		if (isGroup && isWerewolf && isVote && isMorning) { // Voting warga
			if (q > players.length) return reply(`Kamu hanya bisa vote nomer yang ada di list!`)
			if (budy.toLowerCase() === q) {
				addExpiredWerewolf(from, 120s)
				if (players.includes(sender)) {
					return mentions("@" + sender.split("@")[0] + " Anda sudah vote", fil, true);
				} else {
					addVote(q)
					addedVote(sender)
					let _vote =`*[ Werewolf Game ]*\n*Jumlah Vote* : ${vote.length} Vote\n`;
					reply(_vote);
				}
			} 
		
		if (isGroup && isWerewolf && isNight) { // Voting Punya WW
			if (q > players.length) return reply('Kamu hanya bisa vote nomer yang ada di list!')
			if (budy.toLowerCase() === q) {
				addExpiredNight(from, 80s)
				if (hasVoteBL.includes(sender)) {
					return reply(`Kamu telah vote ${players[`${q}`]}!`)
				} else {
					addBlackList(q)
					reply(`Kamu telah vote ${players[`${q}`]}!`)
				}
			}
		if (isGroup && isResults) {
			let ww = JSON.parse(fs.readFileSync(`./lib/werewolf/players_${from}.json`)); 
			let numberVote = JSON.parse(fs.readFileSync(`./lib/werewolf/number_${from}.json`));
			var freq = findWord(numberVote)
			var getFreq = ww + '[' + freq + ']'
			ww.splice(ww[`${getFreq}`], 1)
			if (getFreq.includes(ww) && !getFreq.includes(players)) mentions(`Hasil ${getFreq} adalah werewolf!`, [`${getFreq}`], true)
			if (getFreq.includes(players) && !getFreq.includes(ww)) mentions(`Hasil ${getFreq} adalah warga!`, [`${getFreq}`], true)
		}
      */

    if (txt.length > 14000) {
	if (!isGroup) return
	if (!isAntiVirtex) return
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	patrick.sendMessage(from, `Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`, text)
	setTimeout(() => {
		patrick.groupRemove(from, [kic])
        .catch((e) => {
			replyWithFakeLink(`*Error:* ${e}`)
		})
		patrick.blockUser(sender, "add")
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text)
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text)
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text)
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text) 
		patrick.sendMessage(from, '*TANDAI TELAH DIBACA*\nSeseorang Telah Mengirim Virtex\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*', text)
	}, 0)
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
			         replyWithFakeLink(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
		         } catch (e) { 
			         console.log(e)
			     }
			}
			if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
 bugsol = mek.participants[0]
 tekuss = `\`\`\`Bug Terdeteksi\`\`\`












































 

 

























































































































































































\`\`\`@⁨${bugsol.split('@')[0]} Mengirim Bug Digrup ${groupName}\`\`\``
                    patrick.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
                    patrick.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, { contexInfo: { mentionedJid:[bugsol] }})
                }
            
			q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
            q2 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
            button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
            rspndbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title: ''
            //====================== Enable Feature Group ====================\\
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
            replyWithFakeLink(lang.stikga)
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
            replyWithFakeLink(lang.stikga)
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

       if (!budy.startsWith(prefix) && !budy.startsWith('stop') && !isGroup && checkFriendID(sender)) { 
            patrick.sendMessage(sendMe(sender), budy, text)
		}
		if (!budy.startsWith(prefix) && !budy.startsWith('stop') && !isGroup && checkMe(sender)) { 
            patrick.sendMessage(sendFriends(sender), budy, text)
		}
		 
	    if (budy.startsWith(prefix) && !budy.startsWith('stop')  && !isGroup && isChats) {
	        reply('Kamu tidak bisa menggunakan command\nKamu masih berada di teman chat\nKetik stop untuk berhenti')
	    }
	   if (budy.startsWith('stop') && !isGroup) {
		if (!isChats) return reply('Kamu tidak berada didalam chat dengan teman!')
		if (checkFriendID(sender)) {
		    patrick.sendMessage(sender, `Chat telah dihentikan, ketik ${prefix}findchat untuk mencari teman chat!`, text)
		    patrick.sendMessage(sendMe(sender), `Chat telah dihentikan oleh teman!\nKetik ${prefix}search untuk mencari teman chat`, text)
		    await sleep(9000)
	        deleteFriendsChats(sender)
		    mutualChats.splice(sender, 1)
		    mutualChats.splice(sendMe(sender), 1)
		   // fs.writeFileSync('./temp/isChats.json', JSON.stringify(mutualChats))
		} else if (checkMe(sender)) {
		    patrick.sendMessage(sender, `Chat telah dihentikan! Ketik ${prefix}findchat untuk mencari teman chat`, text)
		    patrick.sendMessage(sendFriends(sender), `Chat telah dihentikan oleh teman!\nKetik ${prefix}findchat untuk mencari teman chat`, text)
		    await sleep(8000)
		    deleteChats(sender)
		    mutualChats.splice(sender, 1)
		    mutualChats.splice(sendFriends(sender), 1)
		  //  fs.writeFileSync('./temp/isChats.json', JSON.stringify(mutualChats))
		} 
	}
	   if (isChats) return
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
const slotsf = [
	'🍊 | 🍒 | 🍐',
	'🍒 | 🔔 | 🍊',
	'🍊 | 🍋 | 🔔',
	'🔔 | 🍒 | 🍐',
	'🔔 | 🍒 | 🍊',
    '🍊 | 🍋 | 🔔',		
	'🍐 | 🍒 | 🍋',
	'🍊 | 🍒 | 🍒',
	'🔔 | 🔔 | 🍇',
	'🍌 | 🍒 | 🔔',
	'🍐 | 🔔 | 🔔',
	'🍊 | 🍋 | 🍒',
	'🍋 | 🍋 | 🍌',
	'🔔 | 🔔 | 🍇',
	'🔔 | 🍐 | 🍇'
	]
	
const slotsff = [
	'🍊 | 🍋 | 🍒',
	'🍋 | 🍋 | 🍌',
	'🔔 | 🔔 | 🍇',
	'🔔 | 🍐 | 🍇',
	'🍊 | 🍒 | 🍐',
	'🍒 | 🔔 | 🍊',
	'🍊 | 🍋 | 🔔',
	'🔔 | 🍒 | 🍐',
	'🔔 | 🍒 | 🍊',
    '🍊 | 🍋 | 🔔',		
	'🍐 | 🍒 | 🍋',
	'🍊 | 🍒 | 🍒',
	'🔔 | 🔔 | 🍇',
	'🍌 | 🍒 | 🔔',
	'🍐 | 🔔 | 🔔'
	]
		
        game.cekWaktuFam(patrick, family100)
        game.cekWaktuTG(patrick, tebakgambar)
        game.cekWaktuSPK(patrick, siapakah)
        game.cekWaktuAngka(patrick, tebakangka)
        game.cekWaktuTek(patrick, tekateki)
        game.cekWaktuSK(patrick, susunkata)
        game.cekWaktuTB(patrick, tebakbendera)
        if (game.isTebakGambar(from, tebakgambar) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
                var points = randomNomor(50)
                addKoinUser(sender, points)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* ${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }
        if (game.isSiapakah(from, siapakah) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanSPK(from, siapakah))){
                var points = randomNomor(50)
                addKoinUser(sender, points)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSPK(from, siapakah)}\n*+ ${points} points*`)
                siapakah.splice(game.getSPKPosi(from, siapakah), 1)
            }
        }         
        if (game.isTek(from, tekateki) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanTek(from, tekateki))){
                var points = randomNomor(50)
                addKoinUser(sender, points)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTek(from, tekateki)}\n*+ ${points} points*`)
                tekateki.splice(game.getTekPosi(from, tekateki), 1)
            }
        }  
        if (game.isSK(from, susunkata) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanSK(from, susunkata))){
                var points = randomNomor(50)
                addKoinUser(sender, points)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSK(from, susunkata)}\n*+ ${points} points*`)
                susunkata.splice(game.getSKPosi(from, susunkata), 1)
            }
        }         
        if (game.isTB(from, tebakbendera) && isRegistered){
            if (budy.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
                var points = randomNomor(50)
                addKoinUser(sender, points)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSK(from, tebakbendera)}\n*+ ${points} points*`)
                tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
            }
        }         
        if (game.isAngka(from, tebakangka) && isRegistered){
            if (budy.toLowerCase().startsWith(game.getJawabanAngka(from, tebakangka))){
                var points = randomNomor(50)
                addKoinUser(sender, points)
                await replyWithFakeLink(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanAngka(from, tebakangka)}\n*+ ${points} points*`)
                tebakangka.splice(game.getAngkaPosi(from, tebakangka), 1)
            } else 
            if (budy.toLowerCase() && isNaN) {
            var points = randomNomor(42)
            confirmATM(sender, points)
            replyWithFakeLink(`Yah jawabanmu salah!, jawabannya ${game.getJawabanAngka(from, tebakangka)}\n*- ${points} points*`)
            tebakangka.splice(game.getAngkaPosi(from, tebakangka), 1)
            }
        }
        if (game.isfam(from, family100) && isRegistered){
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var points = randomNomor(12)
                    addKoinUser(sender, points)
                    await replyWithFakeLink(`*Jawaban benar*\n*Jawaban:* ${i}\n*Total jawaban yang belum ditebak:* ${anjuy.length - 1}\n*+ ${points} points*`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                patrick.sendMessage(from, `Semua jawaban sudah ditebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
               }
            }
        function clockString(ms) {
	        let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
	        let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
	        let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
	        return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
	    }

switch (button) {
       case 'AUDIO': 
       try {
           replyWithFakeLink(lang.wait)
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
           replyWithFakeLink(lang.wait)
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

if (!isGroup && prefix && command) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInPrivate\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (prefix && command && isGroup && isRegistered) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInGroup\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
if (prefix && command && isRegistered) patrick.chatRead(from)
if (isCmd) cmdadd()
switch (command) {
	//==========================================BATES NGAB==========================================\\ 
	    case 'menu':
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isGroup) {
			const menunya =
`*Hello ${pushname} 👋*
*${botName} by ${ownerName}*
*This is all menu in ${botName}*

*❏ FUN*
├ ${prefix}tts
├ ${prefix}truth
├ ${prefix}dare
├ ${prefix}memeindo
├ ${prefix}darkjoke
└ ${prefix}chatdia

*❏ DOWNLOAD*
├ ${prefix}ytplay
├ ${prefix}play
├ ${prefix}ytmp3
├ ${prefix}ytmp4
└ ${prefix}tiktokdownload

*❏ SEARCH*
├ ${prefix}jooxsearch
├ ${prefix}emoji
├ ${prefix}ppcouple
├ ${prefix}pinterest
├ ${prefix}gimage
├ ${prefix}aesthetic
├ ${prefix}ytsearch
├ ${prefix}githubstalk
├ ${prefix}igstalk
├ ${prefix}tiktokstalk
├ ${prefix}moddroid
├ ${prefix}sfile
└ ${prefix}identifymusic

*❏ ISLAM*
├ ${prefix}quran
├ ${prefix}quotesislami
└ ${prefix}listsurah

*❏ OTHER*
├ ${prefix}sticker 
├ ${prefix}img2url 
├ ${prefix}swm 
├ ${prefix}toimg  
├ ${prefix}ssweb
├ ${prefix}tomp3 
└ ${prefix}shortlink

*❏ ANIME*
├ ${prefix}femdom 
├ ${prefix}wpanime 
├ ${prefix}kawai 
├ ${prefix}kemonomimi  
├ ${prefix}kuni
├ ${prefix}neko 
├ ${prefix}yuri 
└ ${prefix}holo

*❏ NO CATEGORY*
├ ${prefix}claim
├ ${prefix}say
├ ${prefix}info
├ ${prefix}join
├ ${prefix}mutual
├ ${prefix}addcmd
├ ${prefix}listban
├ ${prefix}listprem
└ ${prefix}listblock

*❏ PREMIUM*
├ ${prefix}groupsearch
├ ${prefix}swm
└ ${prefix}take

*❏ OWNER*
├ ${prefix}bc
├ ${prefix}addprem
├ ${prefix}unprem
├ ${prefix}addsewa
├ ${prefix}dellsewa
├ ${prefix}ban
└ ${prefix}unban

*TIPS:* ${note}

~ ${botName}` 
       sendButLocation(from, menunya, `Created by pa7rick`, { jpegThumbnail:fs.readFileSync(`./pathImage/menu.jpeg`)},
        [{
			buttonId: `${prefix}info`,
			buttonText: {
				displayText: `Information`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}donate`,
			buttonText: {
				displayText: `Donation`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}profile`,
			buttonText: {
				displayText: `Profile`,
			},
			type: 1,
		}], { quoted: freply });
		} else
		if (isGroup) {
			const menunon =
`*Hello ${pushname} 👋*
*${botName} by ${ownerName}*
*This is all menu in ${botName}*

*❏ GROUP*
├ ${prefix}enable
├ ${prefix}disable 
├ ${prefix}group
├ ${prefix}add
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}sider
├ ${prefix}groupinfo
├ ${prefix}linkgc
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}listonline
└ ${prefix}caripesan

*❏ MAKER*
├ ${prefix}removebg
├ ${prefix}captcha 
├ ${prefix}multicolor3d
├ ${prefix}pornhub
├ ${prefix}glitch
├ ${prefix}8bit
├ ${prefix}cloud
├ ${prefix}steel 
├ ${prefix}3dglue
├ ${prefix}neon
├ ${prefix}ttp
└ ${prefix}attp

 *❏ KERANG*
├ ${prefix}seberapagay
├ ${prefix}apakah
├ ${prefix}bisakah
├ ${prefix}kapankah
├ ${prefix}rate
├ ${prefix}ganteng
├ ${prefix}beban
├ ${prefix}cantik
└ ${prefix}jelek

*❏ GAME*
├ ${prefix}slot
├ ${prefix}suit
├ ${prefix}tebakgambar
├ ${prefix}tebakbendera
├ ${prefix}tictactoe
├ ${prefix}susunkata
├ ${prefix}tekateki
├ ${prefix}siapakahaku
├ ${prefix}family100
└ ${prefix}tebakangka

*❏ FUN*
├ ${prefix}tts
├ ${prefix}fitnah
├ ${prefix}fitnahpc
├ ${prefix}truth
├ ${prefix}dare
├ ${prefix}memeindo
├ ${prefix}darkjoke
└ ${prefix}chatdia

*❏ DOWNLOAD*
├ ${prefix}ytplay
├ ${prefix}play
├ ${prefix}ytmp3
├ ${prefix}ytmp4
└ ${prefix}tiktokdownload

*❏ SEARCH*
├ ${prefix}jooxsearch
├ ${prefix}emoji
├ ${prefix}ppcouple
├ ${prefix}pinterest
├ ${prefix}gimage
├ ${prefix}aesthetic
├ ${prefix}ytsearch
├ ${prefix}githubstalk
├ ${prefix}igstalk
├ ${prefix}tiktokstalk
├ ${prefix}moddroid
├ ${prefix}sfile
└ ${prefix}identifymusic

*❏ ISLAM*
├ ${prefix}quran
├ ${prefix}quotesislami
└ ${prefix}listsurah

*❏ OTHER*
├ ${prefix}sticker 
├ ${prefix}img2url 
├ ${prefix}swm 
├ ${prefix}toimg  
├ ${prefix}ssweb
├ ${prefix}tomp3 
└ ${prefix}shortlink

*❏ ANIME*
├ ${prefix}femdom 
├ ${prefix}wpanime 
├ ${prefix}kawai 
├ ${prefix}kemonomimi  
├ ${prefix}kuni
├ ${prefix}neko 
├ ${prefix}yuri 
└ ${prefix}holo

*❏ NO CATEGORY*
├ ${prefix}claim
├ ${prefix}say
├ ${prefix}info
├ ${prefix}join
├ ${prefix}mutual
├ ${prefix}findchat
├ ${prefix}inspect
├ ${prefix}addcmd
├ ${prefix}listban
├ ${prefix}listprem
└ ${prefix}listblock

*❏ PREMIUM*
├ ${prefix}groupsearch
├ ${prefix}swm
└ ${prefix}take

*❏ OWNER*
├ ${prefix}bc
├ ${prefix}addprem
├ ${prefix}unprem
├ ${prefix}addsewa
├ ${prefix}dellsewa
├ ${prefix}ban
└ ${prefix}unban

*TIPS:* ${note}

 ~ ${botName} ` 
			sendButLocation(from, menunon, `Created by pa7rick`, { jpegThumbnail:fs.readFileSync(`./pathImage/menu.jpeg`)},
        [{
			buttonId: `${prefix}info`,
			buttonText: {
				displayText: `Information`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}donate`,
			buttonText: {
				displayText: `Donation`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}profile`,
			buttonText: {
				displayText: `Profile`,
			},
			type: 1,
		}], { quoted: freply });
		}
		break 
		case 'donate':
		reply('◉ *PULSA*\n   • 6288989029718 (SmartFren)\n   • 6283816188102 (Axis)\n◉ *GOPAY & OVO & DANA*\n   • 0889-8902-9718\n◉ *FREE FIRE ID*\n   • 928424216\n\nJika ingin donasi chat owner \nwa.me/6288989029718') 
        break
	    case 'groupinfo':
	    case 'infogrup':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isGroup) return replyWithFakeLink(lang.group)
		try {
           var pic = await patrick.getProfilePicture(from)
        } catch {
           var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
		teksnya =
` > *Name :* ${groupName}
 > *ID Grup :* ${from}
 > *Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD MM YYYY | HH:mm:ss')}
 > *Owner Grup :* @${groupMetadata.owner.split('@')[0]}
 > *Jumlah Admin :* ${groupAdmins.length}
 > *Jumlah Peserta :* ${groupMembers.length}

*Feature Group*
 • *Antilink:* ${isAntiLink ? '*Aktif!*' : 'Belum Aktif!'}
 • *Antivirtex:* ${isAntiVirtex ? '*Aktif!*' : 'Belum Aktif!'}
 • *Antibadword:* ${isBadWord ? '*Aktif!*' : 'Belum Aktif!'}
 • *Welcome:* ${isWelcome ? '*Aktif!*' : 'Belum Aktif!'}
 • *Antispam (Stc):* ${isAntiSpam ? '*Aktif!*' : 'Belum Aktif!'}

*NOTE:*
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
		//=============IN MENU==============\\
	    case 'join': 
	    if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		if (!q) return replyWithFakeLink(`*Format salah!*\Penggunaan:\n1. ${prefix + command} linkgrup`)
		var codeInvite = q.split('https://chat.whatsapp.com/')[1]
		console.log(codeInvite)
		if (!codeInvite) return replyWithFakeLink('pastikan link sudah benar!')
		let { size } = await patrick.query({ json: ["query", "invite", codeInvite], expect200: true, });
		if (size <= memberLimit) return replyWithFakeLink(`Tautan grup tidak melebihi ${memberLimit} member\n${botName} tidak dapat masuk!`)
		if (geed.length >= groupLimit) return replyWithFakeLink(`Batas grup telah tercapai\nBatas Group SB total *${groupLimit}*\nHarap chat owner!`)
		var response = await patrick.acceptInvite(codeInvite)
		.then((res) => {
            patrick.sendMessage(res.gid,`*Hello ${botName}!* telah diinvit oleh @${sender.split("@")[0]} untuk masuk ke dalam Group!\nKetik ${prefix}menu untuk Melihat Fitur Bot!`, text, { contextInfo: { mentionedJid: [sender]}, quoted : freply})
            replyWithFakeLink(`_Succes Join Group!_`)
        })
        .catch((e) => reply(jsonformat(e)))
        await limitAdd(sender)
		break
	    case 'info':
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		anu = process.uptime()
		mee = patrick.user
		ca = totalchat
		ginfo = await getBuffer(mee.imgUrl)
		inponya = 
`    *All Info ${botName}*
  ${akyu}•  Name : ${patrick.user.name}${akyu}
  ${akyu}•  Speed : ${latensii.toFixed(4)}s${akyu}
  ${akyu}•  Runtime : ${kyun(process.uptime())}${akyu}
  ${akyu}•  Handphone : ${patrick.user.phone.device_manufacturer}${akyu}
  ${akyu}•  Group Chat : ${geed.length}${akyu}
  ${akyu}•  Personal Chat : ${totalchat.length - geed.length}${akyu}
  ${akyu}•  Normal Limit : ${initialLimit}${akyu}
  ${akyu}•  Group Limit : ${groupLimit}${akyu}


 *Total:*
  ${akyu}•  Total Chat : ${totalchat.length}${akyu}
  ${akyu}•  Total Block Contact : ${blocked.length}${akyu}
  ${akyu}•  Total Registered : ${_registered.length}${akyu}
  ${akyu}•  Total Premium User : ${prem.length}${akyu}

~ ${botName}`
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
		case 'groupsearch':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (!isPrem) return replyWithFakeLink(ind.premon())
		if (isLimit(sender)) return reply(lang.limitend)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} Yahaha`)
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${q}&apikey=${leysApi}`, {
			method: 'get'
		})
		teks = '╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n'
		for (let g of anu.result) {
		teks += `Judul Group : ${g.judul}\nLink Group : ${g.link}\nFollow Me in Insta: _pa7rick :)\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n`
		}
		replyWithFakeLink(teks.trim())
		break
	    case 'swm':
	    case 'stickerwm':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isPrem) return replyWithFakeLink(ind.premon())
		if (type === 'imageMessage' || isQuotedImage) {
			var kls = body.slice(5)
			var pack = kls.split('|')[0]
			var author = kls.split('|')[1]
			const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const dlfile = await patrick.downloadMediaMessage(getbuff)
			replyWithFakeLink(lang.wait)
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (!isPrem) return replyWithFakeLink(ind.premon())
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isQuotedSticker) return replyWithFakeLink(`Example: ${prefix + command} PatrickBot|Pa7rick`)
		var pembawm = body.slice(6)
		var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		var media = await patrick.downloadAndSaveMediaMessage(encmedia, `./temp/${sender}`)
		var packname = pembawm.split('|')[0]
		var author = pembawm.split('|')[1]
		tekes = getRandom('')
		exif.create(packname, author, `takestick_${sender}`)
		exec(`webpmux -set exif ./temp/takestick_${sender}.exif ./temp/${sender}.webp -o ./temp/${sender}.webp`, async (error) => {
			if (error) return replyWithFakeLink(lang.stikga)
			patrick.sendMessage(from, fs.readFileSync(`./temp/${sender}.webp`), MessageType.sticker, {
				quoted: freply
			})
			fs.unlinkSync(media)
			fs.unlinkSync(`./temp/takestick_${sender}.exif`)
		})
		await limitAdd(sender)
		break
		//==========================================BATES NGAB==========================================\\
		//=============OWNER MENU==============\\
		case 'clearall':
        if (!isOwner) return reply(ind.ownerb())
        let chiit = await patrick.chats.all()
        for (let i of chiit) {
            patrick.modifyChat(i.jid, 'delete', {
                includeStarred: false
            })
         }
        reply(`Selesai`)
        break
		case 'addsewa':
         if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
         if (args.length < 1) return reply(`Penggunaan :\n*${prefix}addsewa* linkgc waktu`)
         linked = `${args[0].replace('https://chat.whatsapp.com/','')}`
         patrick.query({ json: ["action", "invite", linked]}).then((res) => {
            addSewaGroup(res.gid, args[1], sewa)
            patrick.sendMessage(res.gid, `Hello, ${botName} disewa di grup ini!\nSelama: ${args[1]}`, text, { quoted: mek })
            reply(lang.succes)
        }).catch(() => reply('Error'))
        break
        case 'delsewa':
        if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
        if (args.length < 1) return reply(`Penggunaan :\n*${prefix}delprem* idgroup`)
    	sewa.splice(getSewaPosition(args[1], sewa), 1)
        fs.writeFileSync('./data/data/sewa.json', JSON.stringify(sewa))
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
        fs.writeFileSync("./data/data/scommand.json", JSON.stringify(_scommand));
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
        case 'debug2':
   res = await patrick.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "callButton": {
          "displayText": "",
          "phoneNumber": "6288989029718@s.whatsapp.net"
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋`,
    "hydratedFooterText": `kskskek`,
    "hydratedButtons": [
      {
        "callButton": {
          "displayText": `Script`,
          "phoneNumber": "6288989029718@s.whatsapp.net"
        },
        "index": 1
      }
    ]
  }
}
}, {})
patrick.relayWAMessage(res)
break
        case 'identifymusic':
        if (isLimit(sender)) return reply(lang.limitend)
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
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		if (args.length < 1) return replyWithFakeLink('.......')
		anu = await patrick.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			buff = await patrick.downloadMediaMessage(encmedia)
			for (let _ of anu) {
				patrick.sendMessage(_.jid, buff, image, {
					caption: `${q}\n\n~ ${botName}`
				})
			}
			replyWithFakeLink('*Succes Broadcast!!*')
		} else {
			for (let _ of anu) {
				sendButMessage(_.jid, `${q}\n\n ~ Broadcast ${botName}`, `Created by pa7rick`, [{
                    buttonId: `${prefix}menu`, 
                    buttonText: {
                        displayText: `Menu`
                    }, type: 1
                 }])
			};
			replyWithFakeLink('*Succes Broadcast!!*')
		}
		break
	    case 'addprem':
		if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		if (args.length < 1 ) return replyWithFakeLink(' tag member')
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
		addPremiumUser(mente, args[1], prem)
		replyWithFakeLink(`${a}Succes, Menambah User Premium${a}`)
		texting = `Selamat anda menjadi premium di bot ini\nanda bisa mengakses fitur premium`
        var optionns = {
            text: texting
        }
        patrick.sendMessage(`${mente}`, optionns, text)
		break
		case 'delprem':
		if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		if (args.length < 1 ) return replyWithFakeLink(' tag member')
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
  	  prem.splice(getPremiumPosition(mente, premium), 1)
		replyWithFakeLink('Done Delete Premium user')
		break
	    case 'ban':
		if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
		ban.push(mente)
		fs.writeFileSync('./data/data/banned.json', JSON.stringify(ban))
		replyWithFakeLink(`Succes!`)
		break
	    case 'unban':
		if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
		ban.splice(mente, 1)
		fs.writeFileSync('./data/data/banned.json', JSON.stringify(ban))
		replyWithFakeLink(`Succes!`)
		break 
		case 'addadmin':
		if (!isOwner) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
		adminban.push(mente)
		fs.writeFileSync('./data/data/admin.json', JSON.stringify(adminban))
		replyWithFakeLink(`Succes, wa.me/${q} telah dijadikan adminban!`)
		texting = `Selamat anda menjadi adminban di SB\nFitur yang bisa anda gunakan\n${a}• .addsewa\n• .dellsewa\n• .ban\n• .unban\n• .prem\n• .unprem\n• .addbadword\n• .delbadword${a}\n\n~ SB-129`
        var optionns = {
            text: texting
        }
        patrick.sendMessage(`${q}@s.whatsapp.net`, optionns, text, {quoted: mek})
		break
	    case 'delladmin':
		if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		mente = `${args[0].replace('@','')}@s.whatsapp.net`
		adminban.splice(mente, 1)
		fs.writeFileSync('./data/data/admin.json', JSON.stringify(adminban))
		replyWithFakeLink(`Succes, wa.me/${q} akan dihapus adminban!`)
		break
	    case 'addbadword':
		if (!isGroup) return replyWithFakeLink(ind.groupo)
		if (!isAdminban) return mentions(`*Perintah ini Khusus Owner @${numberOwner} !*`, [`${numberOwner}@s.whatsapp.net`], true)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} hadeh`)
		if (isKasar(args[0].toLowerCase(), bad)) return replyWithFakeLink(`*Kata tersebut sudah ada!*\nMohon cek di ${prefix}listbadword`)
		bad.push(q)
		fs.writeFileSync('./data/data/bad.json', JSON.stringify(bad))
		replyWithFakeLink('Success Menambahkan Bad Word!')
		break
	    case 'delbadword':
		if (!isGroup) return replyWithFakeLink(ind.groupo)
		if (!isAdminban) return replyWithFakeLink(`*Perintah ini Khusus Adminban!*`)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} hadeh`)
		if (!isKasar(args[0].toLowerCase(), bad)) return replyWithFakeLink(`*Kata tersebut tidak ada!*\nMohon cek di ${prefix}listbadword`)
		bad.splice(q)
		fs.writeFileSync('./data/data/bad.json', JSON.stringify(bad))
		replyWithFakeLink(lang.succes)
		break 
		//==========================================BATES NGAB==========================================\\
		//=============MAKER MENU=============\\
		case "removebg":
		case "captcha":
		try {
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			getqu = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
			replyWithFakeLink(lang.wait)
			hasilq = await patrick.downloadAndSaveMediaMessage(getqu)
			var imgbb = require('imgbb-uploader')
            anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", hasilq)
            teks = `${anu.display_url}`
			anull = await getBuffer(`https://dapuhy-api.herokuapp.com/api/canvas/${command}?img=${anu.display_url}&apikey=${dappaApi}`)
			patrick.sendMessage(from, anull, image, { quoted: freply, thumbnail: fs.readFileSync(`./pathImage/thumbnail.png`)})
		} else {
			replyWithFakeLink(`*Format salah!*\nKirim gambar dengan caption ${prefix + command}`)
		}
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error) 
		}
		await limitAdd(sender) 
		break 
		case 'cloud':
	    case 'steel':     
	    case '3dglue':
	    case 'lava':
	    case '3dbox':
	    case 'neon': 
		try {
			// if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isLimit(sender)) return reply(lang.limitend)
			if (isBanned) return replyWithFakeLink(lang.baned)
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} pa7rick`)
			replyWithFakeLink(lang.wait)
			poto = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/${command}?text=${q}&apikey=${dappaApi}`)
			patrick.sendMessage(from, poto, image, {
				quoted: ftoko,
				thumbnail: fs.readFileSync(`./pathImage/thumbnail.png`)
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
		break 
		case 'pornhub': 
		case 'glitch':
		case '8bit': 
		case 'multicolor3d':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isLimit(sender)) return reply(lang.limitend)
			if (isBanned) return replyWithFakeLink(lang.baned)
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} pa7rick:xyz`)
			if (!q.includes(':')) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} pa7rick:xyz`)
			replyWithFakeLink(lang.wait)
			var has = q.split(":")[0];
			var kas = q.split(":")[1];
			patrickganss = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/${command}?text1=${has}&text2=${kas}&apikey=${dappaApi}`)
			patrick.sendMessage(from, patrickganss, image, {
				quoted: ftoko,
				thumbnail: fs.readFileSync(`./pathImage/thumbnail.png`)
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
		break 
		case 'attp':
		case 'ttp':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} pa7rick`)
		attp2 = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${q}`)
		patrick.sendMessage(from, attp2, sticker, {
			quoted: fkontak
		})
		break
	    case 'qrcode':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
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
		/**
           * Fun Menu
         **/
		case 'emoji':
        if (isLimit(sender)) return replyWithFakeLink(mess.limit)
        if (!q) return replyWithFakeLink(`*Format salah!*\Penggunaan:\n1. ${prefix + command} query\n2. ${prefix + command} 😎`)
        qes = args.join(' ')
        emoji.get(`${qes}`).then(emoji => {
        teks = `${emoji.images[4].url}`
        sendStickerFromUrl(from,`${teks}`)	
        console.log(teks)
        })
        limitAdd(sender)
        break 
        case 'chatdia': 
        if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(lang.limitend)
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} notujuan:pesan\n2. ${prefix + command} 6288989029718:Halo`)
		if (!args[0].startsWith('62')) return reply(lang.wrongf + `1. ${prefix + command} notujuan:pesan\n2. ${prefix + command} 6288989029718:Halo`)
		if (args[0].startsWith('6288989029718')) return 
		if (!q.includes(':')) return reply(lang.wrongf + `1. ${prefix + command} notujuan:pesan\n2. ${prefix + command} 6288989029718:Halo`)
		const noorg2 = q.split(":")[0]
		if(isNaN(noorg2)) return reply(lang.wrongf + `1. ${prefix + command} notujuan:pesan\n2. ${prefix + command} 6288989029718:Halo`)
		const katakita2 = q.split(":")[1]
		const kataorg2 = `${sender.replace('@s.whatsapp.net')}`
		patrick.sendMessage(`${noorg2}@s.whatsapp.net`, 
`Chat SB-129 (Bot)

• From: ${pushname}
• Number: @${sender.split("@")[0]}
   For You

 *Pesan:*
  • ${katakita2}

 Untuk membalas ketik 
 • ${prefix + command} chatt:${sender.replace('@s.whatsapp.net', '')}
 
    ~ SB-129`, text, {quoted: { key: { participant:`${noorg2}@s.whatsapp.net`},
		message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender] }}}});	
		reply(lang.succes)
		break
        case 'addsay':
		if (isBanned) return reply(lang.baned)    
		if (!isRegistered) return reply(ind.noregis())
	    if (!q) return reply(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} Hello`)
		say.push(q)
		fs.writeFileSync('./data/data/say.json', JSON.stringify(say))
		reply(`Succes, Kata ${q} telah ditambahkan ke database`)
		break
        case 'saylist':
        case 'bacotlist':
        if (isBanned) return reply(lang.baned)    
		if (!isRegistered) return reply(ind.noregis())
		teks = 'Say list SB-129:\n'
		for (let xyz of say) {
			teks += `• ${xyz}\n`
		}
		teks += `Total : ${say.length}`
	    patrick.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": say}})
		break                   
        case 'say':
        if (isBanned) return
		if (!isRegistered) return
        hasil = say[Math.floor(Math.random() * (say.length))]
        reply(hasil)
        break
        case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(lang.baned)
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(lang.group)                 
		if (args.length < 1) return reply(`*Wrong Format!!*\nExample: *${prefix + command}fitnah @tag:pesan:balasan*`)
		var gh = body.slice(8)
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		var replace = gh.split(":")[0];
		var target = gh.split(":")[1];
		var bot = gh.split(":")[2];
		patrick.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		break
		case 'darkjoke':
		case 'estetik':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(lang.baned)
        if (isLimit(sender)) return reply(lang.limitend)
		replyWithFakeLink(lang.wait)
		anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/${command}?apikey=${leysApi}`) 
		patrick.sendMessage(from, anu, image, {quoted: freply})
		await limitAdd(sender)
		break 
		case 'fitnahpc':
        if (args.length < 1) return reply(lang.wrongf + `1. ${prefix + command} nomor:pesan:balasanbot\n2. ${prefix}fitnahpc 6288989029718:hai:hai juga`)
        if (!q.includes(':')) return reply(lang.wrongf + `1. ${prefix + command} nomor:pesan:balasanbot\n2. ${prefix}fitnahpc 6288989029718:hai:hai juga`)
        var parti = q.split(":")[0];
        var targetq = q.split(":")[1];
		var bot = q.split(":")[2];
	    patrick.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
		break
		case 'ppcouple':
		case 'couple':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(lang.baned)
        if (isLimit(sender)) return reply(lang.limitend)
		replyWithFakeLink(lang.wait)
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${leysApi}`) 
		cowo = await getBuffer(anu.result.male)
		patrick.sendMessage(from, cowo, image, {quoted: freply, caption: '*PP Couple Cowok*'})
		cewe = await getBuffer(anu.result.female)
		patrick.sendMessage(from, cewe, image, {quoted: freply, caption: '*PP Couple Cewek*'})
		await limitAdd(sender)
		break
		case 'memeindo':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
		replyWithFakeLink(lang.wait)
		memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${zeksApi}`)
		buffer = await getBuffer(memein.result)
		patrick.sendMessage(from, buffer, image, {
			quoted: fgclink,
			caption: '*Nih Meme, Jangan Lupa Follow _pa7rick :)*',
			thumbnail: fs.readFileSync(`./pathImage/thumbnail.png`)
		})
		await limitAdd(sender)
		break
	    case 'kapankah':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		kapankah = body.slice(1)
		const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi', 'Tidak Akan Pernah']
		const koh = kapan[Math.floor(Math.random() * kapan.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, {
			quoted: ftoko
		})
		await limitAdd(sender)
		break
	    case 'tictactoe':
		if (!isGroup) return replyWithFakeLink(lang.group)
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		bisakah = body.slice(1)
		const bisa = ['Bisa', 'Tidak Bisa', 'Coba Ulangi', 'Ngimpi kah?', 'yakin bisa?']
		const keh = bisa[Math.floor(Math.random() * bisa.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, {
			quoted: mek
		})
		await limitAdd(sender)
		break 
	    case 'apakah':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		apakah = body.slice(1)
		const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi', 'Tanyakan Ayam']
		const kah = apa[Math.floor(Math.random() * apa.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, {
			quoted: mek
		})
		await limitAdd(sender)
		break
	    case 'rate':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		rate = body.slice(1)
		const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
		const te = ra[Math.floor(Math.random() * ra.length)]
		patrick.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '%', text, {
			quoted: mek
		})
		await limitAdd(sender)
		break
        case 'seberapagay':
		axios.get(`https://arugaz.herokuapp.com/api/howgay`).then(res => res.data).then(res =>
		reply(`Nih Liat Data Gay Si ${q}\nPersentase Gay : ${res.persen}%\nAlert!!! : ${res.desc}`))
		break
	    case 'ganteng':
	    case 'beban':
	    case 'cantik':
	    case 'jelek':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
		patrick.sendMessage(from, tod, image, {
			quoted: freply,
			caption: '*Dare*\n\n' + der
		})
		await limitAdd(sender)
		break
		/**
           * Group Menu
         **/
        case 'enable':
        if (!isGroup) return reply(lang.group)
        if (!isGroupAdmins) return reply(lang.admin)
        const randomoni = ['antilink', 'antivirtex', 'antibadword', 'welcome', 'simi', 'leveling']
        const randomoffi = randomoni[Math.floor(Math.random() * randomoni.length)]
        if (args.length < 1) return reply(`*Wrong Format!!*\n• List Opinion:\n • antilink\n • antivirtex\n • welcome\n • antibadword\n • antispam\n*Example*: .enable ${randomoffi}`)
        if (args[0] === 'antibadword') {
            if (isBadWord) return reply(`${args[0]} is active!`)
            badword.push(from)
            fs.writeFileSync('./data/data/badword.json', JSON.stringify(badword))
            reply(`Succes enabling ${args[0]}*`)
        } else 
        if (args[0] === 'antivirtex' ) {
			if (isAntiVirtex) return reply(`${args[0]} is active!`)
		    antivirtex.push(from)
		    fs.writeFileSync('./data/data/antivirtex.json', JSON.stringify(antivirtex))
		    reply(`Succes enabling ${args[0]}*`)
        } else
        if (args[0] === 'antilink' ) {
			if (isAntiLink) return reply(`${args[0]} is active!`)
            antilink.push(from)
		    fs.writeFileSync('./data/data/antilink.json', JSON.stringify(antilink))
		    reply(`Succes enabling ${args[0]}*`)
		} else
        if (args[0] === 'welcome' ) {
			if (isWelcome) return reply(`${args[0]} is active!`)
            welcome.push(from)
		    fs.writeFileSync('./data/data/welcome.json', JSON.stringify(antilink))
		    reply(`Succes enabling ${args[0]}*`)
		} else 
		if (args[0] === 'antispam' ) {
			if (isAntiSpam) return reply(`${args[0]} is active!`)
            stc.push(from)
		    fs.writeFileSync('./data/data/stc.json', JSON.stringify(stc))
		    reply(`Succes enabling ${args[0]}* sticker`)
		} else
        reply(`*Wrong Format!!*\nList Opinion:\n • antilink\n • antivirtex\n • welcome\n • antibadword\n • antispam\n*Example*: .enable ${randomoffi}`)
        break
        case 'disable':
        if (!isGroup) return reply(lang.group)
        if (!isGroupAdmins) return reply(lang.admin)
        const randomon = ['antilink', 'antivirtex', 'antibadword', 'welcome', 'simi', 'leveling']
        const randomoff = randomon[Math.floor(Math.random() * randomon.length)]
        if (args.length < 1) return reply(`*Wrong Format!!*\n• List Opinion:\n • antilink\n • antivirtex\n • welcome\n • antibadword\n • antispam\n*Example*: .disable ${randomoff}`)
        if (args[0] === 'antibadword') {
            if (!isBadWord) return reply(`${args[0]} is not active!`)
            badword.splice(from, 1)
            fs.writeFileSync('./data/data/badword.json', JSON.stringify(badword))
            reply(`Succes disabling ${args[0]}*`)
        } else 
        if (args[0] === 'antivirtex' ) {
			if (!isAntiVirtex) return reply(`${args[0]} is not active!`)
		    antivirtex.splice(from, 1)
		    fs.writeFileSync('./data/data/antivirtex.json', JSON.stringify(antivirtex))
		    reply(`Succes disabling ${args[0]}*`)
        } else
        if (args[0] === 'antilink' ) {
			if (!isAntiLink) return reply(`${args[0]} is not active!`)
            antilink.splice(from, 1)
		    fs.writeFileSync('./data/data/antilink.json', JSON.stringify(antilink))
		    reply(`Succes disabling ${args[0]}*`)
		} else
        if (args[0] === 'welcome' ) {
			if (!isWelcome) return reply(`${args[0]} is not active!`)
            welcome.splice(from, 1)
		    fs.writeFileSync('./data/data/welcome.json', JSON.stringify(antilink))
		    reply(`Succes disabling ${args[0]}*`)
		} else 
		if (args[0] === 'antispam' ) {
			if (!isAntiSpam) return reply(`${args[0]} is not active!`)
            stc.splice(from, 1)
		    fs.writeFileSync('./data/data/stc.json', JSON.stringify(stc))
		    reply(`Succes disabling ${args[0]}* stc`)
		} else
        reply(`*Format Salah!*\nList opinion:\n • antilink\n • antivirtex\n • welcome\n • antibadword\n • antispam\n*Example*: .disable ${randomoff}`)
        break 
        case 'sider':
        if (!isGroup) return reply(lang.groupo)
        infom = await patrick.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
        tagg = []
        teks = `Telah Dibaca Oleh :\n\n`
        for (let i of infom.reads) {
            teks += '@' + i.jid.split('@')[0] + '\n'
            teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
            tagg.push(i.jid)
        }
        mentions(teks, tagg, true)
        break
	    case 'caripesan':
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} _pa7rick`)
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
		case "demote":
		if (!isGroupAdmins) return reply(lang.group);
		if (!isGroup) return;
		if (!isBotGroupAdmins) return reply(lang.badmin);
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Reply members");
		mentionede = mek.message.extendedTextMessage.contextInfo.participant;
		patrick.groupDemoteAdmin(from, [mentionede]);
		teks = `Members @${mentionede.split("@")[0]} succes demote`;
		patrick.sendMessage(from, teks, text, {
			quoted: mek,
			contextInfo: {
				mentionedJid: [mentionede]
			},
		});
		break
		case "promote":
		if (!isGroupAdmins) return reply(lang.group);
		if (!isGroup) return;
		if (!isBotGroupAdmins) return reply(lang.badmin);
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Reply members");
		mentionede = mek.message.extendedTextMessage.contextInfo.participant;
		patrick.groupMakeAdmin(from, [mentionede]);
		teks = `Members @${mentionede.split("@")[0]} succes promote`;
		patrick.sendMessage(from, teks, text, {
			quoted: mek,
			contextInfo: {
				mentionedJid: [mentionede]
			},
		});
		break;
	    case 'add':
		if (!isGroupAdmins) return reply(lang.group);
		if (!isGroup) return;
		if (!isBotGroupAdmins) return reply(lang.badmin);
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
		if (mentioned.length > 1) {
			add(from, mentioned);
			reply(mess.success);
		} else if (mentioned.length < 1) {
			anu = mek.message.extendedTextMessage.contextInfo.participant;
			patrick.groupAdd(from, [anu]);
			reply(mess.success);
		} else {
			add(from, mentioned);
			reply(mess.success);
		}
		break;
	    case 'grup':
	    case 'group':
		if (!isGroup) return replyWithFakeLink(lang.group)
		if (!isGroupAdmins) return replyWithFakeLink(lang.admin)
		if (!isBotGroupAdmins) return replyWithFakeLink(lang.badmin)
		sendButMessage(from, `Please click one of the buttons`, `Created by pa7rick`, 
        [{
			buttonId: `${prefix}oppen`,
			buttonText: {
				displayText: `Open Group`,
			},
			type: 1,
		},
		{
			buttonId: `${prefix}cllose`,
			buttonText: {
				displayText: `Close Group`,
			},
			type: 1,
		}]);
		break 
		case 'oppen':
		if (!isGroup) return
		if (!isGroupAdmins) return
		if (!isBotGroupAdmins) return
		replyWithFakeLink(`*Berhasil Membuka Group*`)
		patrick.groupSettingChange(from, GroupSettingChange.messageSend, false)
		break 
		case 'cllose':
		if (!isGroup) return
		if (!isGroupAdmins) return
		if (!isBotGroupAdmins) return 
		replyWithFakeLink(`*Berhasil Menutup Group`)
		patrick.groupSettingChange(from, GroupSettingChange.messageSend, true)
		break
	    case 'tagme':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isGroup) return replyWithFakeLink(lang.group)
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (!isGroupAdmins) return replyWithFakeLink(lang.admin)
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isGroup) return replyWithFakeLink(lang.group)
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
		/**
           * Islam Menu
         **/
		case 'quran':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {
			method: 'get'
		})
		quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
		patrick.sendMessage(from, quran, text, {
			quoted: ftoko
		})
		await limitAdd(sender)
		break
		/**
           * Game Menu
         **/
        case 'claim':
        if (checkClaimUser(sender, claim, reply)) return 
        var duit = randomNomor(100) + 40
        addClaim(sender, '1d', claim)
        patrick.sendMessage(from, `Sukses!\n+ ${duit} points`, text)
        addKoinUser(sender, duit)
		break 
		case 'kerja':
        if (time2 < "09:38:00") return  reply('Kamu hanya bisa bekerja pada\n*Jam* 09.00 - 12.00 WIB')
        if (time2 > "10:00:00") return  reply('Kamu hanya bisa bekerja pada\n*Jam* 09.00 - 12.00 WIB')
        var duit = randomNomor(100) + 40
        patrick.sendMessage(from, `Sukses!\n+ ${duit} points`, text)
        addKoinUser(sender, duit)
		break
        case 'slot':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
        data = fs.readFileSync('./lib/slot.js');
		jsonData = JSON.parse(data);
		randIndex = Math.floor(Math.random() * jsonData.length);
		anu = jsonData[randIndex];
		faslots = slotsf[Math.floor(Math.random() * slotsf.length)]
		faslotss = slotsff[Math.floor(Math.random() * slotsf.length)]
		var duit = randomNomor(40)
		var duits = randomNomor(20)
		if (anu.hasil === 'Menang') {
			slots = faslots
			slots = anu.slots
			slots = faslotss
			patrick.sendMessage(from, `(( SLOT ))\n${faslots}\n${anu.slots} <\n${faslots}\n*Hasil:* ${anu.hasil}\n\n+ ${duit} points`, text)
			addKoinUser(sender, duit)
		} else
		if (anu.hasil === 'Lumayan') {
			slots = faslots
			slots = anu.slots
			slots = faslotss
			patrick.sendMessage(from, `(( SLOT ))\n${faslots}\n${anu.slots} <\n${faslots}\n*Hasil:* ${anu.hasil}\n\n+ ${duits} points`, text)
			addKoinUser(sender, duits)
		} else 
		if (anu.hasil === 'Kalah') {
			slots = faslots
			slots += anu.slots
			slots += faslotss
			patrick.sendMessage(from, `(( SLOT ))\n${faslots}\n${anu.slots} <\n${faslots}\n*Hasil:* ${anu.hasil}\n\n- ${duit} points`, text)
			confirmATM(sender, duit)
		}
		await limitAdd(sender)
		break
		case 'suit':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
        const userspilih = q 
        var duit = randomNomor(40)
        var ininy = Math.ceil(Math.random() * 30000)
        if (!userspilih.match(/batu|gunting|kertas/)) return reply(`*Wrong Format!!*\nList Option\n• Batu\n• Gunting\n• Kertas\nExample: ${prefix}suit batu`)
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
            	reply(`(( S U I T ))\nKamu memilih *Batu*\nComp memlih *Gunting*\n*Kamu telah menang!*\n\n+ ${duit} points`)  
                addKoinUser(sender, duit)
             } else {
             	reply(`(( S U I T ))\nKamu memilih *Batu*\nComp memlih *Kertas*\n*Kamu telah kalah!\n\n- ${duit} points`)
                 confirmATM(sender, duit)
             }
         } else 
         if (userspilih == 'gunting') {
              if (computer == 'batu') {
                  reply(`(( S U I T ))\nKamu memilih *Gunting*\nComp memlih *Batu*\n*Kamu telah kalah!\n\n- ${duit} points`)  
                  confirmATM(sender, duit)
              } else {
              	reply(`(( S U I T ))\nKamu memilih *Gunting*\nComp memlih *Kertas*\n*Kamu telah menang!\n\n+ ${duit} points`)
                  addKoinUser(sender, duit)
               }
         } else 
         if (userspilih == 'kertas' ) {
             if( computer == 'batu' ) {
             	reply(`(( S U I T ))\nKamu memilih *Kertas*\nComp memlih *Batu*\n*Kamu telah menang!\n\n+ ${duit} points`)  
                 addKoinUser(sender, duit)
             } else {
             	reply(`(( S U I T ))\nKamu memilih *Kertas*\nComp memlih *Gunting*\n*Kamu telah kalah!\n\n- ${duit} points`)  
                 confirmATM(sender, duit)
             }
        }
        await limitAdd(sender)
        break 
        case 'family100':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isfam(from, family100)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let anehaja = await fetchJson(`https://api.zeks.xyz/api/family100?apikey=${zeksApi}`)
        getFamily = anehaja.data
        replyWithFakeLink(`*F A M I L Y 1 0 0*\n\n*Soal :* ${getFamily.pertanyaan}\n*Total Jawaban :* ${getFamily.jawaban.array.length}\n\n*Timeout:* ${gamewaktu}s`)
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
        case 'tebakgambar':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(lang.baned)
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isTebakGambar(from, tebakgambar)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let aneaja = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/tebakgambar?apikey=${dappaApi}`)
        sendFileFromUrl(from, aneaja.result.image, monospace(`*T E B A K  G A M B A R*\n\nPetunjuk : ${aneaja.result.clue}\n*Timeout:* ${gamewaktu}s`), mek)
        let anih = aneaja.result.jawaban.toLowerCase()
        game.addgambar(from, anih, gamewaktu, tebakgambar)
        limitAdd(sender)
        break
        case 'siapakahaku':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(lang.baned)
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isSiapakah(from, siapakah)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let anesk = await fetchJson(`https://api.zeks.xyz/api/siapa-aku?apikey=${zeksApi}`)
        replyWithFakeLink(`*W H O I A M*\n\n*Soal :* ${anesk.data.soal}\n\n*Timeout:* ${gamewaktu}s`)
        let anihp = anesk.data.jawaban.toLowerCase()
        game.addSPK(from, anihp, gamewaktu, siapakah)
        limitAdd(sender)
        break
        case 'tekateki':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(lang.baned)
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isTek(from, tekateki)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let anoohh = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/tekateki?apikey=${dappaApi}`)
        replyWithFakeLink(`*T E K A  T E K I*\n\n*Soal :* ${anoohh.pertanyaan}\n\n*Timeout:* ${gamewaktu}s`)
        let anohc = anoohh.jawaban.toLowerCase()
        game.addTek(from, anohc, gamewaktu, tekateki)
        limitAdd(sender)
        break
        case 'susunkata':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(lang.baned)
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isSK(from, susunkata)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let aneeuh = await fetchJson(`https://dapuhy-api.herokuapp.com/api/fun/susunkata?apikey=${dappaApi}`)
        replyWithFakeLink(`*S U S U N  K A T A*\n\n*Soal :* ${aneeuh.acak}\n*Tipe :* ${aneeuh.tipe}\n\n*Timeout:* ${gamewaktu}s`)
        let anicch = aneeuh.jawaban.toLowerCase()
        game.addSK(from, anicch, gamewaktu, susunkata)
        limitAdd(sender)
        break 
        case 'tebakbendera':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
	    if (isBanned) return replyWithFakeLink(lang.baned)
	    if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isTB(from, tebakbendera)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        let tebakben = await fetchJson(`https://pa7rick-api.herokuapp.com/api/kuis/tebakbendera?apikey=simple`)
        replyWithFakeLink(`*Tebak bendera*\n\n*Bendera :* ${tebakben.flag}\n\n*Timeout:* ${gamewaktu}s`)
        let tebakbenn = tebakben.quiz.toLowerCase()
        game.addTB(from, tebakbenn, gamewaktu, tebakbendera)
        limitAdd(sender)
        break
        case 'tebakangka':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return replyWithFakeLink(limitend(pushname))
        if (game.isAngka(from, tebakangka)) return replyWithFakeLink(`Masih ada soal yang belum di selesaikan`)
        gamewaktuts = 10
        angkaBot = `${Math.floor(Math.random() * 10)}`
        replyWithFakeLink(`*Tebak Angka*\nKetik angka 1-10 yang menurutmu benar!\nContoh: 4\n*Timeout:* ${gamewaktuts}s`)
        let anoehs = angkaBot.toLowerCase()
        game.addAngka(from, anoehs, gamewaktuts, tebakangka)
        limitAdd(sender)
        break
	    case 'buylimit':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		replyWithFakeLink(lang.wait)
		payout = body.slice(10)
		if (payout <= 1) return reply(lang.wrongf + `1. ${prefix + command} 2\n\n*NOTE:* Minimum buy 1!`)
        if (isNaN(payout)) return reply(`*Limit must be a number*`)
		const koinPerlimit = 10
		const total = koinPerlimit * payout
		if (checkATMuser(sender) <= total) return replyWithFakeLink(`1 Limit = 10 Points\nPoints kamu: ${checkATMuser(sender)}`)
		if (checkATMuser(sender) >= total) {
			confirmATM(sender, total)
			bayarLimit(sender, payout)
			await replyWithFakeLink(`        *Successful Payment*\n> *From* : Admin ${botName}\n> *To* : ${pushname}\n> *Nominal Purchase* : ${payout}\n> *Price Limit* : Ub ${koinPerlimit}/Limit\n> *Saldo Mu* : Ub  ${checkATMuser(sender)}\n> *Serial Number : ${createSerial(10)}\n                                              ${time}\n     Melayani Dimanapun dan Kapanpun\n                *${botName} Market*\n`)
		}
		break 
	    case 'listsurah':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		patrick.sendMessage(from, listsurah(), text, tescuk, `${ucapanFakereply}`)
		break
	    case 'delete':
	    case 'del':
	    case 'd':
		if (!isGroup) return replyWithFakeLink(lang.group)
		if (isOwner || isGroupAdmins) {
			patrick.deleteMessage(from, {
				id: mek.message.extendedTextMessage.contextInfo.stanzaId,
				remoteJid: from,
				fromMe: true
			})
		} else
			replyWithFakeLink(lang.admin)
		break
	    case 'jadian':
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isGroup) return replyWithFakeLink(lang.group)
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
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
	    case 'listonline':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isOwner || isGroupAdmins) {
			let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			let online = [...Object.keys(patrick.chats.get(ido).presences), patrick.user.jid]
			patrick.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
				quoted: freply,
				contextInfo: {
					mentionedJid: online
				}
			})
		} else
		replyWithFakeLink(lang.admin)
		break
	    case 'ping':
	    case 'speed':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		const timestamp = speed();
        const latensi = speed() - timestamp 
		await patrick.sendMessage(from, `*Speed:* ${latensi.toFixed(4)}s`, text, { quoted: freply })
		break
		case 'rules':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		mentions(`*Peraturan & Kebijakan ${botName}*\n1. Tolong untuk tidak terlalu spam saat menggunakan ${botName}\n2. Dilarang *Call/Video Call ${botName}* jika tidak aktif.\n3. ${botName} tidak menyimpan foto/gambar yang kamu kirim.\n4. ${botName} berhak *memblokir* ataupun *membanned* user yang nakal!.\n5. Jika ada yang error segera chat owner!.\nJika kamu sudah membaca peraturan & kebijakan ${botName}\nSilahkan ketik *${prefix}menu* untuk memulai!\n*${botName} Created by* @6288989029718 & @0`, [`6288989029718@s.whatsapp.net`, `0@s.whatsapp.net`, `${numberOwner}@s.whatsapp.net`], true)
		break
	    case 'tts': 
	    try {
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		if (args.length < 1) return patrick.sendMessage(from, 'Diperlukan kode bahasa!!', text, {
			quoted: freply
		})
		const gtts = require('./lib/gtts')(args[0])
		if (args.length < 2) return patrick.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {
			quoted: freply
		})
		dtt = body.slice(8)
		ranm = getRandom('.mp3')
		rano = getRandom('.ogg')
		dtt > 500 ?
			replyWithFakeLink('❗ Error, Maksimal 500 Kata') :
			gtts.save(ranm, args[0], function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return replyWithFakeLink(lang.stikga)
					patrick.sendMessage(from, buffer, audio, {
						quoted: fakevn,
						ptt: true
					})
					fs.unlinkSync(rano)
				})
			})
		await limitAdd(sender)
		} catch (e) {
		    reply(e + '\nContoh: .tts id katanya')
		}
		break
	    case 'linkgc':
	    case 'linkgrup':
		if (!isGroup) return replyWithFakeLink(lang.group)
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isBotGroupAdmins) return replyWithFakeLink(lang.badmin)
		linkgc = await patrick.groupInviteCode(from)
		yeh = `*This is Link Group from ${groupName}\nhttps://chat.whatsapp.com/${linkgc}\n~ SB-129`
		patrick.sendMessage(from, yeh, text, {
			quoted: freply
		})
		await limitAdd(sender)
		break
	    case 'tagall':
		if (!isGroup) return replyWithFakeLink(lang.group)
		if (!isGroupAdmins) return replyWithFakeLink(lang.admin)
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += '\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ '
		for (let mem of groupMembers) {
			teks += ` > @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
		/**
           * No Category
         **/
        case 'leaderboard':
	    case 'lb':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(ind.baned())
		if (!isGroup) return replyWithFakeLink(ind.groupo())
		if (isNaN(q)) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command}\n2. ${prefix + command} 15`)
		hadeh = []
		uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
		let leaderboarduang = '*Top Leaderboard Points:*\n\n'
		let nom = 0
		try {
			for (let i = 0; i < `${q ? q : 25}`; i++) {
				nom++
				leaderboarduang += `*[${nom}]* @${uang[i].id.replace('@s.whatsapp.net', '')}\n   • *Points* : ${uang[i].uang}\n   • *Limit* : ${initialLimit - _limit[i].limit}\n`
				hadeh.push(`${uang[i].id}`)
			}
			await mentions(leaderboarduang, hadeh, true)
		} catch (err) {
			console.error(err)
			await replyWithFakeLink(`minimal 10 user untuk bisa mengakses database`)
		}
		break 
		case "inspect":
		try {
			if (!isUrl(args[0]) && !args[0].includes("whatsapp.com")) return reply('Bukan link group whatsapp!');
			if (!q) return reply("Masukkan link group whatsapp");
			cos = args[0];
			var net = cos.split("https://chat.whatsapp.com/")[1];
			if (!net) return reply("pastikan itu link https://chat.whatsapp.com/");
			jids = [];
			let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation } = await patrick.query({
				json: ["query", "invite", net],
				expect200: true,
			});
			let par =
`*• ID Group* : ${id}
${owner ? `*• Owner* : @${owner.split("@")[0]}` : "*• Owner* : -"}
*• Nama Gc* : ${subject}
*• Group dibuat* : ${formatDate(creation * 1000)}
*• Jumlah Member* : ${size}
${desc ? `*• Desc* : ${desc}` : "*• Desc* : -"}
*• ID Desc* : ${descId}
${descOwner ? `*• Desc diubah oleh* : @${descOwner.split("@")[0]}` : "*• Desc diubah oleh* : -"}
*• Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : "-"}

*Kontak yang tersimpan*\n`;
			for (let y of participants) {
				par += `> @${y.id.split("@")[0]}\n*Admin* : ${
                y.isAdmin ? "Ya" : "Tidak"}\n`;
				jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
			}
			jids.push(`${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`);
			jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`: "-"}`);
			patrick.sendMessage(from, par, text, {
				quoted: mek,
				contextInfo: {
					mentionedJid: jids
				},
			});
		} catch (e) {
			reply("Link group telah direvoke!");
		}
		break
        case 'reedem':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isPrem) return replyWithFakeLink('Fitur ini khusus free member!')
		if (args.length === 0) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} xtw17Ka`)
		if (args[0] === `${codeReedem}`) {
		mente = `${sender.split('@','')}@s.whatsapp.net`
		addPremiumUser(mente, '3d', prem)
		replyWithFakeLink(`${a}Kode benar!, Selamat kamu mendapatkan premium trial!${a}`)
		codeReedem = createSerial(10)
        } else {
        reply (`Kode salah!, *Silahkan ketik ${prefix}buycode*\nUntuk membeli kode premium dengan points mu!`)
        }
		break 
		case 'buycode':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `▨ VERIFY ▨`,},type: 1,}]);
		if (isPrem) return replyWithFakeLink('Fitur ini khusus free member!')
		if (checkATMuser(sender) <= uang5) return replyWithFakeLink(`Points mu tidak cukup!\nPoints: ${uang5}`)
		if (checkATMuser(sender) >= uang5) {
			replyWithFakeLink(`*Kode Premium: ${codeReedem}\nJangan bagikan kode ini dengan orang lain\n\n*NOTE:* Ketik ${prefix}reedem ${codeReedem}\nUntuk menjadi member premium!`)
			confirmATM(sender, uang5)
		}
		break 
	    case 'mutual':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isGroup) return replyWithFakeLink('Command ini tidak bisa digunakan di dalam grup!')
		anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
		await replyWithFakeLink('Looking for a partner...')
		sendButImage(from, `Partner ditemukan!\n*wa.me/${anug}*`, `${botName} Created by ${ownerName}`, thumb, [{
			buttonId: `${prefix}mutual`,
			buttonText: {
				displayText: `Next Partner`,
			},
			type: 1,
		}]);
		break
		case 'findchat':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isGroup) return replyWithFakeLink('Command ini tidak bisa digunakan di dalam grup!')
		if (isChats) return replyWithFakeLink(`Kamu masih didalam chat\nKetik *stop untuk berhenti!*`)
		anug = getRegisteredRandomId(_registered)
		reply("Mencari teman chat")
		await sleep(9000)
		patrick.sendMessage(from, `${a}Partner has found!\nSilahkan chat (hanya pesan!)\nKetik stop untuk berhenti${a}`, text)
		var obj = { id: sender, friends: anug }
		mutualChats.push(sender)
		mutualChats.push(anug)
		mutual.push(obj)
		// fs.writeFileSync('./temp/isChats.json', JSON.stringify(mutualChats))
		// fs.writeFileSync('./temp/isChats.json', JSON.stringify(mutualChats))
		// fs.writeFileSync('./temp/chats.json', JSON.stringify(mutual))
		patrick.sendMessage(sender, 'Hai', text)
		patrick.sendMessage(anug, `Halo kamu dipilih menjadi teman chat\n\nKetik stop untuk berhenti\n\n[ Chat Public SB-129 ]`, text)
		break 
		case 'verify':
	    case 'daftar':
		if (isRegistered) return 
		const codeMeme = [`${codeVerification}`, `${codeVerification1}`]
		const codeMeme1 = [`${codeVerification}`, `${codeVerification1}`]
		const codeMeme2 = [`${codeVerification}`, `${codeVerification1}`, `${codeVerification2}`, `${codeVerification2}`]
		const gettNyaa = codeMeme[Math.floor(Math.random() * codeMeme.length)]
		const gettNyaa1 = codeMeme1[Math.floor(Math.random() * codeMeme1.length)]
		let gettNyaa2 = (gettNyaa1 === gettNyaa) ? `${codeVerification2}` : gettNyaa1;
		if (isGroup) replyWithFakeLink(`Cek kodemu di pesan pribadi SB-129*`)
		meeen = `${sender.replace('@s.whatsapp.net','')}@s.whatsapp.net`
		textoing = `[#]: *Kode verifikasimu: ${codeVerification}*\n*NOTE:* Kode ini bersifat privasi!`
        var optios = {
            text: textoing
        }
		patrick.sendMessage(`${meeen}`, optios, text, {quoted: mek})
		const btetemes = {
		    contentText: `*Silahkan klik kode yang dikirimkan oleh bot*\n\n*NOTE:* Jika tidak ada, cukup ketik *${prefix}verify* untuk\nmendapatkan kode ulang!`,
		    footerText: `Jika tombol tidak terlihat\nKetik dan kirim kodenya disini`,
		    buttons: [{
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
		}],
		headerType: 1,
	    };
	    patrick.sendMessage(`${meeen}`, btetemes, MessageType.buttonsMessage)
		break 
		case 'listblock':
		teks = '◉ *BLOCK LIST:*\n'
		for (let block of blocked) {
			teks += `  • @${block.split('@')[0]}\n`
		}
		teks += `𝗧𝗼𝘁𝗮𝗹: ${blocked.length}`
		patrick.sendMessage(from, teks.trim(), extendedText, {
			quoted: freply,
			contextInfo: {
				"mentionedJid": blocked
			}
		})
		break
		case 'listprem':
        teks = '◉ *PREMIUM LIST:*\n'
        let men = [];
        for (let i of prem){
            men.push(i.id)
            let cekvip = ms(i.expired - Date.now())
            teks += `*ID :* @${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
        }
        teks += `𝗧𝗼𝘁𝗮𝗹: ${prem.length}`
        mentions(teks, men, true)
        break
	    case 'listban':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		const benn = JSON.parse(fs.readFileSync('./data/data/banned.json'))
		teks = '◉ *BANNED LIST:*\n'
		for (let benn of ban) {
			teks += `• @${benn.replace('@s.whatsapp.net','')}\n`
		}
		teks += `𝗧𝗼𝘁𝗮𝗹: ${ban.length}`
		patrick.sendMessage(from, teks.trim(), extendedText, {
			quoted: freply,
			contextInfo: {
				"mentionedJid": ban
			}
		})
		break 
		case 'listbadword':
		let lbw = '◉ *BADWORD LIST:*\n'
		for (let i of bad) {
			lbw += `  • ${i.replace(bad)}\n`
		}
		lbw += `𝗧𝗼𝘁𝗮𝗹: ${bad.length}`
		await replyWithFakeLink(lbw)
		break 
		/** 
		   * Anime Menu
		**/
		case 'femdom':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/femdom`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
		   break
		case 'walpaperanime':
		case 'wpanime':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/wallpaper`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		} 
        break
		case 'kawai':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
	   } 
       break
	   case 'kemonomimi':
	   try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
		break
		case 'kuni':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/kuni`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
	    break 
	    case 'yuri':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/yuri`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
	    break
		case 'neko':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/meow`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		} 
        break
		case 'holo':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			axios.get(`https://nekos.life/api/v2/img/holo`).then((res) => {
			imageToBase64(res.data.url).then((response) => {
			var buf = Buffer.from(response, 'base64');
			patrick.sendMessage(from, buf, image, {
			quoted: mek,
			caption: lang.succes })})})
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
		break
		/**
           * Search Menu
         **/
        case "igstalk":
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} _pa7rick`)
		const tod = await fetchJson(`https://api.dhnjing.xyz/stalk/instagram?user=${q}&apikey=${dhApi}`);
		buff = await getBuffer(tod.result.user_profile_hd);
		const tt = `*INSTAGRAM STALK*
 • Username: ${tod.result.username}
 • Fullname: ${tod.result.user_fullname}
 • Bio: ${tod.result.user_bio}
 • Jumlah postingan: ${tod.result.user_post_total}
 • Following: ${tod.result.user_following}
 • Follower: ${tod.result.user_followers}`;
				patrick.sendMessage(from, buff, image, {
					quoted: mek,
					caption: tt
				});
				break;
			case "githubstalk":
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} PatrickStar720`)
			const oi = await fetchJson(`https://api.dhnjing.xyz/stalk/github?user=${q}&apikey=${dhApi}`);
			const mm = `*GITHUB STALK*
 • Username: ${oi.result.username}
 • Fullname: ${oi.result.name}
 • Bio: ${oi.result.user_bio}
 • Jumlah repo: ${oi.result.user_repo}
 • Following: ${oi.result.user_following}
 • Follower: ${oi.result.user_followers}`;
			reply(mm);
			break;
			case "tiktokstalk":
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} _pa7rick`)
			var i = await fetchJson(`https://api.dhnjing.xyz/stalk/tiktok?user=@${q}&apikey=${dhApi}`);
			buff = await getBuffer(i.result.user.avatarLarger);
			var ii = `*TIKTOK STALK*
 • Username: ${q}
 • Nickname: ${i.result.user.nickname}
 • Bio: ${i.result.user.signature}
 • Jumlah postingan: ${i.result.stats.videoCount}
 • Following: ${i.result.stats.followingCount}
 • Follower: ${i.result.stats.followerCount}`;
		patrick.sendMessage(from, buff, image, {
			quoted: mek,
			caption: ii
		});
		break;
		case 'jooxsearch':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(lang.baned)
        if (isLimit(sender)) return reply(lang.limitend)
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
	    case 'gimage':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} pa7rick`)
		if (isLimit(sender)) return reply(lang.limitend)
		replyWithFakeLink(lang.wait)
		foto = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/googleimage?query=${q}&apikey=${dappaApi}`)
		patrick.sendMessage(from, await getBuffer(foto.image), image, {
			quoted: freply,
			caption: lang.succes
		})
		await limitAdd(sender)
		break
	    case 'pinterest':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} pa7rick`)
		if (isLimit(sender)) return reply(lang.limitend)
		teksnyaoi = args[0]
		replyWithFakeLink(lang.wait)
		foto = await getBuffer(`https://dapuhy-api.herokuapp.com/api/search/pinterest-image?query=${teksnyaoi}&apikey=${dappaApi}`)
		patrick.sendMessage(from, foto, image, {
			quoted: freply,
			caption: 'Nih'
		})
		await limitAdd(sender)
		break
	    case 'gsmarena':
		try {
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} vivo y15`)
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isLimit(sender)) return reply(lang.limitend)
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
			replyWithFakeLink(lang.error)
		}
		break 
		case 'ytsearch':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(lang.baned)
        if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} nggyu`)
        if (isLimit(sender)) return reply(lang.limitend)
		replyWithFakeLink(lang.wait)
		anu = await fetchJson(`http://zekais-api.herokuapp.com/yts?query=${q}&apikey=${zekaisApi}`)
		teks = '╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n'
		for (let i of anu.result) {
		teks += `Judul: ${i.title}\nChannel: ${i.channel}\nDurasi: ${i.durasi}\nViews: ${i.views}\nLink : ${i.url}\n=================\n`
		}
		replyWithFakeLink(teks.trim())
		await limitAdd(sender)
		break
		case 'moddroid':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(lang.baned)
        if (isLimit(sender)) return reply(lang.limitend)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} subway surf`)
		replyWithFakeLink(lang.wait)
		dpganzz = args.join(' ')
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${dpganzz}&apikey=${leysApi}`)
		teks = '╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n'
		for (let i of anu.result) {
			teks += `Title : ${i.title}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
		}
		replyWithFakeLink(teks.trim())
		await limitAdd(sender)
		break
		case 'sfile':
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
        if (isBanned) return replyWithFakeLink(lang.baned)
        if (isLimit(sender)) return reply(lang.limitend)
		if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} pubg`)
		replyWithFakeLink(lang.wait)
		dpganzz = args.join(' ')
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sfile?q=${dpganzz}&apikey=${leysApi}`)
		teks = '╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n'
		for (let i of anu.result) {
			teks += `Title : ${i.title}\nSize : ${i.size}\nUrl : ${i.url}\n=================\n`
		}
		replyWithFakeLink(teks.trim())
		await limitAdd(sender)
		break
		/**
           * Download Menu
         **/
	    case 'play':
        if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} nggyu`) 
        if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isLimit(sender)) return reply(lang.limitend)
        replyWithFakeLink(lang.wait)
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
                footerText: `© ${botName}`,
                buttons: gbutsan,
                headerType: 4
            }
            await patrick.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
        })
        await limitAdd(sender)
        break
		case 'ytplay':
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isGroup) return replyWithFakeLink(lang.group)
        if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} query\n2. ${prefix + command} nggyu`)
        replyWithFakeLink(lang.wait)
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
        await limitAdd(sender)
        break 
		case 'ytmp3':
		try {
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} url\n2. ${prefix + command} https://youtu.be/dQw4w9WgXcQ`)
			if (isBanned) return replyWithFakeLink(lang.baned)
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isLimit(sender)) return reply(lang.limitend)
			fakestatus(lang.wait)
			tekss = args[0]
			anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp3?url=${q}`)
			gmteng = anu.result
			textnya = `Judul: ${gmteng.title}\n`
			textnya += `Channel: ${gmteng.channel}\n`
			textnya += `Publish: ${gmteng.published}\n`
			textnya += `Views: ${gmteng.views}\n` 
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
	    case 'ytmp4':
		try {
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} url\n2. ${prefix + command} https://youtu.be/dQw4w9WgXcQ`)
			if (isBanned) return replyWithFakeLink(lang.baned)
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isLimit(sender)) return reply(lang.limitend)
			fakestatus(lang.wait)
			tekss = args[0]
			anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp4?url=${q}`)
			gmteng = anu.result
			textnya = `Judul: ${gmteng.title}\n`
			textnya += `Channel: ${gmteng.channel}\n`
			textnya += `Publish: ${gmteng.published}\n`
			textnya += `Views: ${gmteng.views}\n` 
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
	    case 'tiktokdownload':
	    case 'tiktok':
		try {
			if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
			if (isBanned) return replyWithFakeLink(lang.baned)
			if (isLimit(sender)) return reply(lang.limitend)
			if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} url\n2. ${prefix + command} https://vm.tiktok.com/ZSJkHUCwK/`) 
			replyWithFakeLink(lang.wait)
			link = args.join(' ')
			dppa = await getBuffer(`https://dapuhy-api.herokuapp.com/api/socialmedia/tiktoknowm?url=${q}&apikey=${dappaApi}`)
			patrick.sendMessage(from, dppa, video, {
				quoted: mek,
				caption: lang.succes
			})
			await limitAdd(sender)
		} catch (e) {
			console.log(`Error :`, color(e, 'red'))
			replyWithFakeLink(lang.error)
		}
		break    
		/**
           * Other Menu
         **/
        case 'ocr':
		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await patrick.downloadAndSaveMediaMessage(encmedia)
			reply(lang.wait)
			await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
				.then(teks => {
					reply(teks.trim())
					fs.unlinkSync(media)
				})
				.catch(err => {
					reply(err.message)
					fs.unlinkSync(media)
				})
		} else {
			reply(`*Format Salah!*\nKirim gambar dengan caption *${prefix + command}*`)
		}
		await limitAdd(sender) 
		break
		case "img2url":
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
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
        if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
        if (isLimit(sender)) return reply(lang.limitend)
        if (isBanned) return replyWithFakeLink(lang.baned)
        if (!q) return replyWithFakeLink(lang.wrongf + `1. ${prefix + command} url\n2. ${prefix + command} https://google.com/`)
        link = body.slice(11)
        replyWithFakeLink(lang.wait)
		anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${link}&apikey=${leysApi}`)
		teks = `*ShortLink URL*\n▢ From : ${link}\n▢ To ShortLink : ${anu.result}`
		patrick.sendMessage(from, teks, text, {quoted: fkontak})
		await limitAdd(sender)
		break
        case 'ssweb':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return replyWithFakeLink(limits.limitend(pushname))
		if (!q) return replyWithFakeLink(`*Format salah!*\Penggunaan:\n1. ${prefix + command} query\n2. ${prefix + command} https://google.com/`)
		teks = `${body.slice(7)}`
		replyWithFakeLink(lang.wait)
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
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
					replyWithFakeLink(lang.stikga)
				})
				.on('end', function() {
					muach = getRandom('')
					exif.create(`Created By ${botName}`, '', `take_${muach}`)
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
			replyWithFakeLink(lang.wait)
			await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function(cmd) {
					console.log(`Started : ${cmd}`)
				})
				.on('error', function(err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					replyWithFakeLink(lang.stikga)
				})
				.on('end', function() {
					console.log('Finish')
					exif.create(`Created By ${botName}`, '', `takestick_${sender}`)
					exec(`webpmux -set exif ./temp/takestick_${sender}.exif ${ran} -o ${ran}`, async (error) => {
						if (error) return replyWithFakeLink(lang.stikga)
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
		if (!isAdminban) return replyWithFakeLink("Command only for adminban!")
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (!isQuotedSticker) return replyWithFakeLink('Reply/tag sticker !')
		replyWithFakeLink(lang.wait)
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		media = await patrick.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.png')
		exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return replyWithFakeLink(lang.stikga)
			buffer = fs.readFileSync(ran)
			patrick.sendMessage(from, buffer, image, {
				quoted: freply,
				caption: lang.succes
			})
			fs.unlinkSync(ran)
		})
		await limitAdd(sender)
		break
	    case 'tomp3':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		if (!isQuotedVideo) return replyWithFakeLink(`*Wrong Format!!*\n*Reply the Video!!*`)
		replyWithFakeLink(lang.wait)
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
		case 'brainly':
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		if (isBanned) return replyWithFakeLink(lang.baned)
		if (isLimit(sender)) return reply(lang.limitend)
		brien = body.slice(9)
		brainly(`${brien}`).then(res => {
			teks = '╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n'
			for (let Y of res.data) {
				teks += `*Brainly*\n\n  *• Pertanyaan:* ${Y.pertanyaan}\n  *• Jawaban:* ${Y.jawaban[0].text}\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n`
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
		if (!isRegistered) return sendButMessage(from, `${descButton}`, `${footerButton}`, [{buttonId: `${prefix}verify`, buttonText: {displayText: `Register`,},type: 1,}]);
		try {
			var ppimg = await patrick.getProfilePicture(sender)
		} catch {
			var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
		beffer = await getBuffer(ppimg)
const kanting = 
`*You Profile*
 • Name: ${pushname}
 • Limit: ${isPrem ? 'Unlimited' : `${checkLimitUser(sender)} | 20`}
 • Points: ${checkATMuser(sender)}
 
• is Owner: ${isOwner ? '*true*' : 'false'}
• is Banned: ${isOwner ? '*true*' : 'false'}
• is Premium: ${isPrem ? '*true*' : 'false'}
• is Adminban: ${isAdminban ? '*true*' : 'false'}`
			patrick.sendMessage(from, beffer, image, { quoted: freply, caption: kanting })
			break
		//==========================================BATES NGAB==========================================\\
		//==========================================BATES NGAB==========================================\\
		//==========================================BATES NGAB==========================================\\
		//==========================================BATES NGAB==========================================\\
	default:
	    if (_chats.startsWith(`${codeVerification}`)) {
		if (isRegistered) return
		const serialUser = createSerial(20)
		addRegisteredUser(sender, serialUser)
		addATM(sender)
		const kenver = 
`${a}Succes Registered${a}
${a}❏ Email : ${pushname.replace(' ', '')}@bot.id
❏ Waktu Verify : ${time}
❏ SN : ${serialUser}
❏ Total Register : ${_registered.length}${a}`
        const raVe = Math.floor(Math.random(40) * 564) + 50
        const raVee = Math.floor(Math.random(40) * 487) + 21
        const raVe1 = Math.floor(Math.random(40) * 542) + 87
        const raVee1 = Math.floor(Math.random(40) * 226) + 65
        const raVe2 = Math.floor(Math.random(40) * 331) + 54
        const raVee2 = Math.floor(Math.random(40) * 228) + 43
        codeVerification = raVe
        codeVerification1 = raVe1
        codeVerification2 = raVe2
        sendButMessage(from, `${kenver}`, `${footerButton}`, 
        [{
            buttonId: `${prefix}rules`, 
            buttonText: { 
                displayText: `Rules`,
            }, 
            type: 1,
        }, {
            buttonId: `${prefix}menu`, 
            buttonText: { 
                displayText: `Menu`,
            }, 
            type: 1,
        }]);
		} 
		if (_chats.startsWith(`${codeVerification1}`)) {
		if (isRegistered) return 
		const fraVe = Math.floor(Math.random(40) * 16902) + 50
		const fraVe1 = Math.floor(Math.random(40) * 14686) + 44
		const fraVe2 = Math.floor(Math.random(40) * 15243) + 53
        codeVerification = fraVe
        codeVerification1 = fraVe
        codeVerification2 = fraVe
        sendButMessage(from, `*Failed register wrong code!*\n*Please click the button again!!*`, `if the button is not visible\ntype ${prefix}verify`, 
        [{
            buttonId: `${prefix}verify`, 
            buttonText: { 
                displayText: `Register`,
            }, 
            type: 1,
        }]);
		}
		if (_chats.startsWith(`${codeVerification2}`)) {
		if (isRegistered) return 
		const ffraVe = Math.floor(Math.random(40) * 18947) + 50
		const ffraVe1 = Math.floor(Math.random(40) * 15622) + 44
		const ffraVe2 = Math.floor(Math.random(40) * 16532) + 53
        codeVerification = ffraVe
        codeVerification1 = ffraVe
        codeVerification2 = ffraVe
        sendButMessage(from, `*Failed register wrong code!*\n*Please click the button again!!*`, `if the button is not visible\ntype ${prefix}verify`, 
        [{
            buttonId: `${prefix}verify`, 
            buttonText: { 
                displayText: `Register`,
            }, 
            type: 1,
        }]);
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
