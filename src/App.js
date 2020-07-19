import React,{useState, useEffect} from 'react';

import './App.css';
import NavTop from './Components/NavTop';
import NavDown from './Components/NavDown';
import Wrapper from './Components/Wrapper';

function App() {

  const [isLoading, setIsLoading] = useState(false)

  const limitWrapperHeight = () => {
    const nav1 = document.getElementById("first-nav").clientHeight;
    const nav2 = document.getElementById("second-nav").clientHeight;
    const body = document.documentElement.clientHeight;
    const wrapper = document.getElementById("wrapper");
    wrapper.style.maxHeight = (body - nav1 - nav2 - 5) + "px";
    wrapper.style.minHeight = (body - nav1 - nav2 - 5) + "px";
  }
  useEffect(()=> {
    limitWrapperHeight();
  },[]);

  return (
    <div className="App">
     <NavTop isLoading={isLoading}></NavTop>
     <NavDown></NavDown>
     <Wrapper setIsLoading={setIsLoading}></Wrapper>
    </div>
  );
}

export default App;
