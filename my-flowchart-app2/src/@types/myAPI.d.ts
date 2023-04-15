interface MyAPI {
  saveFlowChart: (title: string, nodes: MyNode[]) => void
  selectAllTitles: () => Title[]
  selectTitleById: (id: string) => Title
  selectNodesByTitleId: (titleId: string) => NodePropertyAfterSavedToDB[]
  updateFlowChart: (title: string, titleId: string, nodes: MyNode[]) => void
}

interface Window {
  myAPI: MyAPI
}

declare var window: Window & typeof globalThis