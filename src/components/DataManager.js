import StateContext from "./StateContext";
import { useState, useEffect } from "react";



function DataManager(props) {
  const [states, setStates] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('states') !== null){
      const x = localStorage.getItem('states')
      console.log(JSON.parse(x))
    setStates(JSON.parse(x))}
  },[])

  
  return (
    <StateContext.Provider value={{ states: states, setStates }}>
      {props.children}
    </StateContext.Provider>
  );
}

export default DataManager;
