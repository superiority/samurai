import React from "react";
import './styles/App-style/App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
        <div>
            <Dialogs />
        </div>
        <Footer />
      </div>
  )
}

export default App;
