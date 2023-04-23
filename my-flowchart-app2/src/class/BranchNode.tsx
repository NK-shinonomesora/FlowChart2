import React from "react";
import MyNode from "./MyNode";
import Branch from "../component/Branch";
import { Color } from "../enum/Color";

export default class BranchNode extends MyNode {
  private child2: MyNode | null = null;

  constructor(parent: MyNode | null, text: string, detail: string) {
    super(parent, text, detail, "branch");
    this.setColor(Color.Branch);
  }

  public getChild2() {
    return this.child2;
  }

  public setChild2(child: MyNode | null) {
    this.child2 = child;
  }

  public displayShape(): JSX.Element {
    return <Branch text={this.getText()} color={this.getColor()} />
  }

  public static createNode(parent: MyNode, text: string, detail: string): MyNode {
    return new BranchNode(parent, text, detail);
  }

  public static restoreNode(nodeInfo: NodePropertyAfterSavedToDB, parent: MyNode) {
    const node = new BranchNode(parent, nodeInfo.text, nodeInfo.detail);
    node.setId(nodeInfo.id);
    node.setStatus(nodeInfo.status);
    return node;
  }
}