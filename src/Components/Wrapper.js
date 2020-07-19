import React, { useEffect, useState } from "react";
import "./Wrapper.css";
import Axios from "axios";
import List from "./List";
import AnotherList from "./AnotherList";

function Wrapper({ setIsLoading }) {
  const [lists, setLists] = useState([]);

  const lastList = lists[lists.length - 1];

  const fetchLists = async () => {
    try {
      const res = await Axios.get("https://trello-clone-ppm.herokuapp.com/list");
      setLists(res.data);
    } catch (error) {
      console.log(error);
      setLists([]);
    }
  };

  const addNewCardToExistingLists = list => {
    setLists(prevLists => setLists([...prevLists, list]));
  }

  useEffect(() => {
    fetchLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="wrapper" className="Wrapper d-flex p-1 text-secondary">
      {lists.map((list) => (
        <List key={list.id} list={list} fetchLists={fetchLists}/>
      ))}

      <div className="d-flex justify-content-start align-items-center rounded m-1 anotherList">
        <AnotherList lastList={lastList} addNewCardToExistingLists={addNewCardToExistingLists} />
      </div>

      <span>&thinsp;</span>
    </div>
  );
}

export default Wrapper;
