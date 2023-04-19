import React, { Fragment, useEffect } from "react";
import Header from "./Header";
import Message from "./Message";
import TitleListHook from "../hook/TitleListHook";
import { Link } from "react-router-dom";
import '../style/TitleList.css'

const TitleList: React.FC = () => {
  const {
    titles,
    selectAllTitles,
    displayMenu,
    unDisplayMenu,
    deleteTitleAndNodesByTitleId,
  } = TitleListHook();

  useEffect(() => {
   selectAllTitles(); 
  }, [])

  return (
    <>
    <Header />
    <Message 
      successMessage={`削除に成功しました。`}
      errorMessage={`削除に失敗しました。もう一度、実行してみてください。`}
    />
    <div id="center">
      <h1 id="center-text">Titles</h1>
    </div>
    <div id="title-list-box">
      {
        titles.map((title, i) => (
          <Fragment key={i}>
          <Link
            id="title-link"
            to={`createFlowChart?id=${title.id}`}
          >
            <div
              onMouseOver={() => displayMenu(`${i}`)}
              onMouseLeave={() => unDisplayMenu(`${i}`)}
              id="title-list"
            >
              <div id="center2">
                <p>{title.title}</p>
              </div>
            </div>
          </Link>
          <div
            onMouseOver={() => displayMenu(`${i}`)}
            onMouseLeave={() => unDisplayMenu(`${i}`)}
            className="title-list-menu-box"
            id={`title-list-menu-box${i}`}
            style={{ display: "none" }}
          >
            <p
              onClick={() => deleteTitleAndNodesByTitleId(title.id)}
            >
              Delete
            </p>
          </div>
          </Fragment>
        ))
      }
    </div>
    </>
  )
}

export default TitleList;