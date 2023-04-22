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
    if(!confirm(`Are you really sure that's OK?`)) return;
    const result = await window.myAPI.deleteTitleAndNodesByTitleId(titleId);
    if(result === "success") {
      const newTitles = titles.filter((title: Title, i: number) => {
        return title.id !== titleId;
      });
      setTitles(newTitles);
      displayMessage(`Deleted successfully.`, "black", "cyan");
    } else {
      displayMessage(`Deleted unsuccessfully. Please try again.`, "crimson", "pink");
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