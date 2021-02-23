var moment = require('moment-timezone');

exports.generateTimestampUnix = async () => {
    var moment = require('moment-timezone');
    let timestamp = await moment.tz("America/Bogota").unix();
    return parseInt(timestamp);
}