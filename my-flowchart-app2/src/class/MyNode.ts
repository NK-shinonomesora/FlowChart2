import { Color } from "../enum/Color";

export default abstract class MyNode {
  private parent: MyNode | null;
  private child: MyNode | null = null;
  private text: string;
  private color: Color;
  private status: "created" | "notCreated";

  constructor(parent: MyNode | null, text: string) {
    this.parent = parent;
    this.text = text;
    this.status = "notCreated";
  }

  public getText() {
    return this.text;
  }

  public getColor() {
    return this.color;
  }

  public getParent() {
    return this.parent;
  }

  public getChild() {
    return this.child;
  }

  public getStatus() {
    return this.status;
  }

  public setText(text: string) {
    this.text = text;
  }

  public setColor(color: Color) {
    this.color = color;
  }

  public setParent(parent: MyNode | null) {
    this.parent = parent;
  }

  public setChild(child: MyNode | null) {
    this.child = child;
  }

  public setStatus(status: "created" | "notCreated") {
    this.status = status;
  }
  
  public abstract displayShape(): JSX.Element;
}