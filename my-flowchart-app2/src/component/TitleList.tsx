import React, { useEffect } from "react";
import Header from "./Header";
import TitleListHook from "../hook/TitleListHook";
import { Link } from "react-router-dom";
import '../style/TitleList.css'

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
    <div id="center">
      <h1 id="center-text">Titles</h1>
    </div>
    <div id="title-list-box">
      {
        titles.map((title, i) => (
          <div key={i} id="title-list">
            <div id="center2">
              <Link
                to={`createFlowChart?id=${title.id}`}
              >
                <p>{title.title}</p>
              </Link>
            </div>
          </div>
          
        ))
      }
    </div>
    </>
  )
}

export default TitleList;