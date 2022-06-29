import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../views/Header/Header";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../views/Home/HomePage.";
import SettingsPage from "../../views/Settings/SettingsPage";
import Footer from "../../views/Footer/Footer";
import GlobalContext from "../../store/Context";
// import { sensorsData as sensorsDataInit } from "../../store/fake-sensors";
import formatLoggerData from "../../utils/loggerFormater";

const baseUserInfo = {
  login: "User",
  color: "lightgray",
}

function App() {
  const [userInfo, setUserInfo] = useState(baseUserInfo);
  const [sensorsData, setSensorsData] = useState([]);
  const [shownSensors, setShownSensors] = useState([]);
  const [loggedData, setLoggedData] = useState(formatLoggerData([], 'Initialization'))

  const contextVal = {
    userData: userInfo,
    setUserData: setUserInfo,
    sensorsData: sensorsData,
    "setSensorsData": setSensorsData,
    sensorsToShow: [shownSensors, setShownSensors],
    logger: {
      loggedData: loggedData,
      setLoggedData: setLoggedData,
    },
  }

  useEffect(() => {
    fetch(`http://localhost:8080/API/users/${userInfo.login}`)
    .then(resp => resp.json())
    .then(result => {
      setUserInfo({
        login: userInfo.login,
        color: result.color
      })
      setShownSensors([])
      setSensorsData(result.sensors)
    });
  }, []);

  useEffect(() => {
    setShownSensors(sensorsData.map(val => {
      const defs = {
        name: val.name,
        isShown: true,
      }
      return (defs)
    }))
  }, [sensorsData])

  return (
    <GlobalContext.Provider value={contextVal}>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
