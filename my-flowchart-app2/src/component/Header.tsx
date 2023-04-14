import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <span><p><Link to={`/`}>タイトル一覧へ</Link></p></span>
      <span><p><Link to={`/createFlowChart`}>フローチャートを作成する</Link></p></span>
    </div>
  )
}

export default Header;