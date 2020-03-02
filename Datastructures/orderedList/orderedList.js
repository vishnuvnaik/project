const path = require('./orderedListBL')
const fs = require('fs')
let files = fs.readFileSync('numbers.txt', 'utf8');
path.ordered(files.split(','));