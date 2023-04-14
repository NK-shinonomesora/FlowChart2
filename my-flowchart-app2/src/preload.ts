import MyNode from "./class/MyNode";

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  saveFlowChart: (title: string, nodes: MyNode[]) => ipcRenderer.invoke('saveFlowChart', title, nodes),
});