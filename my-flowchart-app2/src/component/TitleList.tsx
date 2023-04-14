import React, { useEffect } from "react";
import Header from "./Header";
import TitleListHook from "../hook/TitleListHook";
import { Link } from "react-router-dom";

const TitleList: React.FC = () => {
  const {
    titles,
    selectAllTitles,
  } = TitleListHook();

  useEffect(() => {
   selectAllTitles(); 
  }, [])

  return (
    <>
    <Header />
    <ul>
      {
        titles.map((title, i) => (
          <Link
            key={i}
            to={`createFlowChart?id=${title.id}`}
          >
            <li>{title.title}</li>
          </Link>
          
        ))
      }
    </ul>
    </>
  )
}

export default TitleList;