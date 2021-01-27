import React from "react";
import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import SideBar from "./components/SideBar";
import { AppProvider } from "./ContextAPI/AppContext";

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
          {/* Graph */}
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
