import React from "react";
import { Route, Routes } from "react-router";
import Passcode from "./components/Passcode";
import HomeScreen from "./components/HomeScreen";
import Voicemail  from "./components/Voicemail";
import Phone from "./components/Phone";
import "./App.css";
import Message from "./components/Message";
import Podcasts from "./components/Podcasts";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Passcode />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/voicemail" element={<Voicemail />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </>
  );
};

export default App;
