import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../views/Header/Header";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../views/Home/HomePage.";
import SettingsPage from "../../views/Settings/SettingsPage";
import Footer from "../../views/Footer/Footer";
import GlobalContext from "../../store/Context";
import { sensorsData as sensorsDataInit } from "../../store/fake-sensors";
import formatLoggerData from "../../utils/loggerFormater";

function App() {
  const baseUserInfo = {
    login: "User",
    color: "lightgray",
  }
  const [userInfo, setUserInfo] = useState(baseUserInfo);
  const [sensorsData, setSesorsData] = useState(sensorsDataInit);

  const defSensorsData = sensorsData.map(val => {
    const defs = {
      name: val.name,
      isShown: true,
    }
    return (defs)
  })

  const [shownSensors, setShownSensors] = useState(defSensorsData);

  const [loggedData, setLoggedData] = useState(formatLoggerData([], 'Initialization'))

  const contextVal = {
    userData: userInfo,
    setUserData: setUserInfo,
    sensorsData: sensorsData,
    "setSensorsData": setSesorsData,
    sensorsToShow: [shownSensors, setShownSensors],
    logger: {
      loggedData: loggedData,
      setLoggedData: setLoggedData,
    },
  }

  return (
    <GlobalContext.Provider value={contextVal}>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="smart-home-react/" element={<HomePage />} />
          <Route path="smart-home-react/settings" element={<SettingsPage />} />
          <Route path="*" element={<div>Routing error</div>} />
        </Routes>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
