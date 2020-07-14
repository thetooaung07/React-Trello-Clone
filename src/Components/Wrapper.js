import React, { useEffect, useState } from "react";
import "./Wrapper.css";
import Axios from "axios";
import List from "./List";
import AnotherList from "./AnotherList";


function Wrapper({ setIsLoading }) {
  const [lists, setLists] = useState([]);

  const fetchLists = async () => {
    // setIsLoading(true);
    try {
      const res = await Axios.get("http://localhost:8080/list");
      setLists(res.data);
      // console.log(res);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
      setLists([]);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="wrapper" className="Wrapper d-flex p-1 text-secondary">


      {lists.map((list) => (
        <List key={list.id}
        list={list} />
      ))}
      <AnotherList/> 
      <span>&thinsp;</span>
    </div>
  );
}

export default Wrapper;
