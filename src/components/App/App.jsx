import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../views/Header/Header";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../views/Home/HomePage.";
import SettingsPage from "../../views/Settings/SettingsPage";
import Footer from "../../views/Footer/Footer";
import GlobalContext from "../../store/Context";
import { sensorsData as sensorsDataInit } from "../../store/fake-sensors";

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

  const contextVal = {
    userData: userInfo,
    setUserData: setUserInfo,
    sensorsData: sensorsData,
    "setSensorsData": setSesorsData,
    sensorsToShow: [shownSensors, setShownSensors],
  }

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
