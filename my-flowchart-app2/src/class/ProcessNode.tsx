import React from "react";
import MyNode from "./MyNode";
import Process from "../component/Process";
import { Color } from "../enum/Color";

export default class ProcessNode extends MyNode {
  constructor(parent: MyNode | null, text: string,) {
    super(parent, text);
    this.setColor(Color.Process);
  }

  public displayShape(): JSX.Element {
    return <Process text={this.getText()} color={this.getColor()} />
  }

  public static createNode(parent: MyNode, text: string): MyNode {
    return new ProcessNode(parent, text);
  }
}