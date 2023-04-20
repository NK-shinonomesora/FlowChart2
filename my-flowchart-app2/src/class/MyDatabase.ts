import * as sqlite3 from "sqlite3" 
import { join } from "path";
import { promisify } from "util";

export default abstract class MyDatabase {
  protected dbGet;
  protected dbAll;
  protected dbRun;

  constructor() {
      const db = new sqlite3.Database(join(__dirname, '../../flowchart'));
      this.dbGet = promisify(db.get.bind(db));
      this.dbAll = promisify(db.all.bind(db));
      this.dbRun = function(arg: string) {
          return new Promise<any>((resolve, reject) => {
              db.run.apply(db, [
                  arg,
                  function(this: sqlite3.Database, err: Error) {
                      err ? reject(err) : resolve(this)
                  }
              ]
              );
          });
      }
      this.tableCreate();
  }

  private async tableCreate()  {
    await this.dbRun(`CREATE TABLE if not exists 'title' (
        id TEXT PRIMARY KEY NOT NULL,
        title TEXT NOT NULL
      )`);

    await this.dbRun(`PRAGMA foreign_keys = ON`);
    await this.dbRun(`CREATE TABLE if not exists 'node' (
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
  }
}
