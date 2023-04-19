import { useState } from "react";

const TitleListHook = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [background, setBackground] = useState<string>("");

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
    unDisplayMessage();
    if(!confirm(`本当に削除しても良いですか?`)) return;
    const result = await window.myAPI.deleteTitleAndNodesByTitleId(titleId);
    if(result === "success") {
      const newTitles = titles.filter((title: Title, i: number) => {
        return title.id !== titleId;
      });
      setTitles(newTitles);
      displayMessage(`削除に成功しました`, "black", "cyan");
    } else {
      displayMessage(`削除に失敗しました。もう一度、実行してみてください`, "crimson", "pink");
    }
  }

  const unDisplayMessage = () => {
    const elem = document.getElementById("message-box");
    elem.style.display = "none";
  }

  const displayMessage = (text: string, color: string, background: string) => {
    const elem = document.getElementById("message-box");
    elem.style.display = "block";
    setMessage(text);
    setColor(color);
    setBackground(background);
  }

  return {
    titles,
    selectAllTitles,
    displayMenu,
    unDisplayMenu,
    deleteTitleAndNodesByTitleId,
    message,
    color,
    background,
  }
}

export default TitleListHook;