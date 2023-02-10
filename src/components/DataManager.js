import StateContext from "./StateContext";
import { useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import { getDate } from "../Api";

function DataManager(props) {
  const [states, setStates] = useState(null);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [isUpData, setIsUpData] = useState(false);
  const [login, setLogin] = useState(false);
  const { decodedToken, isExpired } = useJwt(token);
  useEffect(() => {
    if (decodedToken) {
      setEmail(decodedToken.email);
      setPicture(decodedToken.picture);
      setName(decodedToken.name);
    }
    if (decodedToken && window.localStorage.getItem("token") === "") {
      getDate(decodedToken.email).then((data) =>
        data.states
          ? setLogin(data.states)
          : window.localStorage.setItem("token", token)
      );
    }
  }, [decodedToken]);

  useEffect(() => {
    if (
      localStorage.getItem("states") !== null &&
      localStorage.getItem("states") !== "undefined"
    ) {
      const x = localStorage.getItem("states");
      setStates(JSON.parse(x).sort((a, b) => (a.date < b.date ? 1 : -1)));
    }
    if (localStorage.getItem("token")) {
      const x = localStorage.getItem("token");
      setToken(x);
    }
    if (localStorage.getItem("isUpData") !== null) {
      const x = localStorage.getItem("isUpData");
      setIsUpData(x);
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        states: states,
        setStates,
        email: email,
        setEmail,
        token: token,
        setToken,
        name: name,
        picture: picture,
        isUpData: isUpData,
        setIsUpData,
        login: login,
        setLogin,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}

export default DataManager;
