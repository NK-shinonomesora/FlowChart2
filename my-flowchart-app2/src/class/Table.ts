import MyDatabase from "./MyDatabase";
import { v4 as uuidv4 } from 'uuid';

export default class Table extends MyDatabase {
  public async saveFlowChart(event: Event, title: string, nodes: NodeProperty[]) {
    const title_id = uuidv4();
    const nullVal: null = null;
    try {
      await this.dbRun(`
        INSERT INTO title (id, title)
        VALUES ("${title_id}", "${title}")
      `);
      for(let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if(node.type === "start") {
          await this.dbRun(`
            INSERT INTO node (id, text, detail, parent, child, child2, status, type, title_id)
            VALUES ("${node.id}", "${node.text}", "${nullVal}", "${nullVal}", "${node.child !== null ? node.child.id : nullVal}",
            "${nullVal}", "${node.status}", "start", "${title_id}")
          `);
        } else if(node.type === "process") {
          await this.dbRun(`
            INSERT INTO node (id, text, detail, parent, child, child2, status, type, title_id)
            VALUES ("${node.id}", "${node.text}", "${node.detail}", "${node.parent.id}",
            "${node.child !== null ? node.child.id : nullVal}", "${nullVal}", "${node.status}", "process", "${title_id}")
          `);
        } else {
          await this.dbRun(`
            INSERT INTO node (id, text, detail, parent, child, child2, status, type, title_id)
            VALUES ("${node.id}", "${node.text}", "${nullVal}", "${node.parent.id}",
            "${node.child !== null ? node.child.id : nullVal}", "${node.child2 !== null ? node.child2.id : nullVal}"
            , "${node.status}", "branch", "${title_id}")
          `);
        }
      }
    } catch(err) {
      console.log(err);
    }
  }

  public async selectAllTitles() {
    return await this.dbAll(`SELECT * FROM title`);
  }
}