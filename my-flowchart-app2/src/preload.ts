import MyNode from "./class/MyNode";

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  saveFlowChart: (title: string, nodes: MyNode[]) => ipcRenderer.invoke('saveFlowChart', title, nodes),
  selectAllTitles: () => ipcRenderer.invoke('selectAllTitles'),
  selectTitleById: (id: string) => ipcRenderer.invoke('selectTitleById', id),
  selectNodesByTitleId: (titleId: string) => ipcRenderer.invoke('selectNodesByTitleId', titleId),
  updateFlowChart: (title: string, titleId: string, nodes: MyNode[]) => ipcRenderer.invoke('updateFlowChart', title, titleId, nodes),
});