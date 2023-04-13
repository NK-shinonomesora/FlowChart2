import { Color } from "../enum/Color";
import { v4 as uuidv4 } from 'uuid';

export default abstract class MyNode {
  private id: string;
  private parent: MyNode | null;
  private child: MyNode | null = null;
  private text: string;
  private color: Color;
  private status: "created" | "notCreated";

  constructor(parent: MyNode | null, text: string) {
    this.id = uuidv4();
    this.parent = parent;
    this.text = text;
    this.status = "notCreated";
  }

  public getId() {
    return this.id;
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

  public setId(id: string) {
    this.id = id;
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

  public static getStartNode(node: MyNode) {
    let n: MyNode;
    for(n = node; n.getParent() !== null; n = n.getParent()){}
    return n;
  }
  
  public abstract displayShape(): JSX.Element;
}