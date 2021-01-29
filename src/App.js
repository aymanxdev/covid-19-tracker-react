import React from "react";
import { AppProvider } from "./ContextAPI/AppContext";
import Header from "./components/Header";
import Map from "./components/Map";
import SideBar from "./components/SideBar";

import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <div className="app__left">
          <Header />
          <Map />
        </div>

        <div className="app__right_bar">
          <SideBar />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
