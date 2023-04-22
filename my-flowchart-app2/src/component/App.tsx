import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateFlowChart from "./CreateFlowChart";
import TitleList from "./TitleList";
import Usage from "./Usage";

const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<TitleList />} />
      <Route path="/createFlowChart" element={<CreateFlowChart />} />
      <Route path="/usage" element={<Usage />} />
    </Routes>
    </>
  )
}

export default App;