import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateFlowChart from "./CreateFlowChart";
import TitleList from "./TitleList";

const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<TitleList />} />
      <Route path="/createFlowChart" element={<CreateFlowChart />} />
    </Routes>
    </>
  )
}

export default App;