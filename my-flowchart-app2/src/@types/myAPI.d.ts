interface MyAPI {
  saveFlowChart: (title: string, nodes: MyNode[]) => void
}

interface Window {
  myAPI: MyAPI
}

declare var window: Window & typeof globalThis