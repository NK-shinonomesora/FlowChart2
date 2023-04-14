type NodeType = "start" | "process" | "branch";

interface  NodeProperty {
  id: string
  text: string
  detail?: string
  parent?: NodeProperty
  child?: NodeProperty
  child2?: NodeProperty
  status: "created" | "notCreated"
  type: NodeType
}