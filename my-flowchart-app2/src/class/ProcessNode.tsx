import React from "react";
import MyNode from "./MyNode";
import Process from "../component/Process";
import { Color } from "../enum/Color";

export default class ProcessNode extends MyNode {
  private detail: string;

  constructor(parent: MyNode | null, text: string, detail: string) {
    super(parent, text, "process");
    this.detail = detail;
    this.setColor(Color.Process);
  }

  public getDetail() {
    return this.detail;
  }

  public setDetail(detail: string) {
    this.detail = detail;
  }

  public displayShape(): JSX.Element {
    return <Process text={this.getText()} color={this.getColor()} />
  }

  public static createNode(parent: MyNode, text: string, detail: string): MyNode {
    return new ProcessNode(parent, text, detail);
  }

  public static restoreNode(nodeInfo: NodePropertyAfterSavedToDB, parent: MyNode) {
    const node = new ProcessNode(parent, nodeInfo.text, nodeInfo.detail);
    node.setId(nodeInfo.id);
    node.setStatus(nodeInfo.status);
    return node;
  }
}