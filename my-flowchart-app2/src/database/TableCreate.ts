import * as sqlite3 from "sqlite3";
import { join } from "path";

const db = new sqlite3.Database(join(__dirname, '../../flowchart'));

db.run(`CREATE TABLE if not exists 'title' (
  id TEXT PRIMARY KEY NOT NULL,
  title TEXT NOT NULL
)`);

db.run(`PRAGMA foreign_keys = ON`);
db.run(`CREATE TABLE if not exists 'node' (
  id TEXT PRIMARY KEY NOT NULL,
  text TEXT NOT NULL,
  detail TEXT,
  parent TEXT,
  child TEXT,
  child2 TEXT,
  status TEXT NOT NULL CHECK(status = 'created' or status = 'notCreated'),
  type TEXT NOT NULL CHECK(type = 'start' or type = 'process' or type = 'branch'),
  title_id TEXT,
  foreign key (title_id) references title(id)
)`);