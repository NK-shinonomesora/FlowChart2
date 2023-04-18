
const sqlite3 = require("sqlite3");
const { join } = require("path");
const { promisify } = require("util");

const db = new sqlite3.Database(join(__dirname, '../../flowchart'));
const dbGet = promisify(db.get.bind(db));
const dbAll = promisify(db.all.bind(db));
const dbRun = promisify(db.run.bind(db));

dbAll(`SELECT * FROM title`).then(a => console.log(a));
dbAll(`SELECT * FROM node`).then(a => console.log(a));
//dbRun(`DELETE FROM title`).then(a => console.log(a));
//dbRun(`DELETE FROM node`).then(a => console.log(a));
