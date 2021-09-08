const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
const fs = require('fs')
lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

require('./index.js')
nocache('./index.js'), module => console.log(`${module} is now updated!`)
function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
  cb(module)
  })
}
 function uncache(module = '.') {
    return new Promise((resolve, reject) => {
       try {
          delete require.cache[require.resolve(module)]
          resolve()
          } catch (e) {
            reject(e)
          }
     })
}

function start() {
  let args = [path.join('index.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}
start()