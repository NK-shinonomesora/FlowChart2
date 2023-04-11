import React from "react";
import MyNode from "./MyNode";
import Start from "../component/Start";
import { Color } from "../enum/Color";

export default class StartNode extends MyNode {
  constructor(parent: MyNode | null, text: string,) {
    super(parent, text);
    this.setColor(Color.Start);
  }

  public displayShape(): JSX.Element {
    return <Start color={this.getColor()} />
  }
}