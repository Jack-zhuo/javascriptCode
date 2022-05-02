const custom = require('./02_custom_module.js');
const moment = require('moment');
const ymd = moment(new Date()).format('YYYY-MM-DD HH:mm:SS');
console.log(custom);
console.log(ymd);