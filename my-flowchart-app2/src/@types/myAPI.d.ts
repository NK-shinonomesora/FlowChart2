interface MyAPI {
  saveFlowChart: (title: string, nodes: MyNode[]) => string[] | "fail"
  selectAllTitles: () => Title[]
  selectTitleById: (id: string) => Title
  selectNodesByTitleId: (titleId: string) => NodePropertyAfterSavedToDB[]
  updateFlowChart: (title: string, titleId: string, nodes: MyNode[]) => "success" | "fail"
  deleteTitleAndNodesByTitleId: (titleId: string) => "success" | "fail"
}

interface Window {
  myAPI: MyAPI
}

declare var window: Window & typeof globalThis