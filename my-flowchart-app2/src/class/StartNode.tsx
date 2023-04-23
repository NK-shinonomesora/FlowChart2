import React from "react";
import MyNode from "./MyNode";
import Start from "../component/Start";
import { Color } from "../enum/Color";

export default class StartNode extends MyNode {
  constructor(parent: MyNode | null, text: string, detail: string) {
    super(parent, text, detail, "start");
    this.setColor(Color.Start);
  }

  public displayShape(): JSX.Element {
    return <Start color={this.getColor()} />
  }

  public static createNode(parent: null, text: string, detail: string): MyNode {
    return new StartNode(parent, text, detail);
  }

  public static restoreNode(nodeInfo: NodePropertyAfterSavedToDB) {
    const node = new StartNode(null, nodeInfo.text, nodeInfo.detail);
    node.setId(nodeInfo.id);
    node.setStatus(nodeInfo.status);
    return node;
  }
}