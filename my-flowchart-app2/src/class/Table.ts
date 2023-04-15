import MyDatabase from "./MyDatabase";
import { v4 as uuidv4 } from 'uuid';

export default class Table extends MyDatabase {
  public async saveFlowChart(event: Event, title: string, nodes: NodeProperty[]) {
    const title_id = uuidv4();
    try {
      await this.createTitle(title, title_id);
      await this.createNodes(title_id, nodes);
    } catch(err) {
      console.log(err);
    }
  }

  public async updateFlowChart(event: Event, newTitle: string, titleId: string, nodes: NodeProperty[]) {
    try {
      await this.updateTitle(newTitle, titleId);
      await this.deleteNodesByTitleId(titleId);
      await this.createNodes(titleId, nodes);
    } catch(err) {
      console.log(err);
    }
  }

  public async selectAllTitles(): Promise<Title[]> {
    return await this.dbAll(`SELECT * FROM title`);
  }

  public async selectTitleById(id: string): Promise<Title> {
    return await this.dbGet(`SELECT * FROM title WHERE id = "${id}"`);
  }

  public async selectNodesByTitleId(titleId: string): Promise<NodePropertyAfterSavedToDB[]> {
    return await this.dbAll(`SELECT id, text, detail, parent, child, child2, status, type FROM node WHERE title_id = "${titleId}"`);
  }

  public async createTitle(title: string, title_id: string) {
    await this.dbRun(`INSERT INTO title (id, title) VALUES ("${title_id}", "${title}")`);
  }

  public async createNodes(title_id: string, nodes: NodeProperty[]) {
    const nullVal: null = null;
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
  }

  public async updateTitle(newTitle: string, titleId: string) {
    await this.dbRun(`UPDATE title SET title = "${newTitle}" WHERE id = "${titleId}"`)
  }

  public async deleteNodesByTitleId(titleId: string) {
    await this.dbRun(`DELETE FROM node WHERE title_id = "${titleId}"`);
  }
}