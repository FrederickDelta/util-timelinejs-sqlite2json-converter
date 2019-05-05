#!/usr/bin/env node

let lib = require('../lib/index.js')
let inputSqlite = process.argv[2]
let outputJSON = process.argv[3]
lib.convert(inputSqlite, outputJSON)