import { useState } from "react";

const TitleListHook = () => {
  const [titles, setTitles] = useState<Title[]>([]);

  const selectAllTitles = async () => {
    const allTitles = await window.myAPI.selectAllTitles();
    setTitles(allTitles);
  }

  return {
    titles,
    selectAllTitles,
  }
}

export default TitleListHook;