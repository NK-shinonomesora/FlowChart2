import { useState } from "react";

const TitleListHook = () => {
  const [titles, setTitles] = useState<Title[]>([]);

  const selectAllTitles = async () => {
    const allTitles = await window.myAPI.selectAllTitles();
    setTitles(allTitles);
  }

  const displayMenu = (i: string) => {
    const elem = document.getElementById(`title-list-menu-box${i}`);
    elem.style.display = "block";
  }

  const unDisplayMenu = (i: string) => {
    const elem = document.getElementById(`title-list-menu-box${i}`);
    elem.style.display = "none";
  }

  const deleteTitleAndNodesByTitleId = async (titleId: string) => {
    const elem = document.getElementById("success-message-box");
    const elem2 = document.getElementById("error-message-box");
    elem.style.display = "none";
    elem2.style.display = "none";
    if(!confirm(`本当に削除しても良いですか?`)) return;
    const result = await window.myAPI.deleteTitleAndNodesByTitleId(titleId);
    if(result === "success") {
      const newTitles = titles.filter((title: Title, i: number) => {
        return title.id !== titleId;
      });
      setTitles(newTitles);
      elem.style.display = "block";
    } else {
      elem2.style.display = "block";
    }
  }

  return {
    titles,
    selectAllTitles,
    displayMenu,
    unDisplayMenu,
    deleteTitleAndNodesByTitleId,
  }
}

export default TitleListHook;