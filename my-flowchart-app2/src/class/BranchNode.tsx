import React from "react";
import MyNode from "./MyNode";
import Branch from "../component/Branch";
import { Color } from "../enum/Color";

export default class BranchNode extends MyNode {
  private child2: MyNode | null = null;

  constructor(parent: MyNode | null, text: string,) {
    super(parent, text);
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

  public static createNode(parent: MyNode, text: string): MyNode {
    return new BranchNode(parent, text);
  }
}