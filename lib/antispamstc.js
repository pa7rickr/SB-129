const fs = require('fs')

/**
 * AddCount badword in database
 * @param {String} sender
 * @param {Object} data
 */
 exports.addCountStc = function(sender, _dir){
    var found = false;
    Object.keys(_dir).forEach((i) => {
        if(_dir[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _dir[found].count += 1;
        fs.writeFileSync('./database/json/sensticker.json',JSON.stringify(_dir));
    }
}

/**
 * isCOuntKasr badword in database
 * @param {String} sender
 * @param {Object} data
 */
 exports.isCountStc = function(sender, _dir){
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
        fs.writeFileSync('./database/json/sensticker.json', JSON.stringify(_dir))
        return false
    }
}

/**
 * Delete Count Kasar badword in database
 * @param {String} sender
 * @param {Object} data
 */
 exports.delCountStc = function(sender, _dir){
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === sender) {
            _dir.splice(i, 1)
            fs.writeFileSync('./database/json/sensticker.json', JSON.stringify(_dir))
        }
    })
    return true
}