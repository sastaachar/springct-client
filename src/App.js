import "./App.css";

import Login from "./components/login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Mainpage from "./components/mainpage";

function App() {
  const [loggedIn, updateLogin] = useState(false);

  const [user, udpateUser] = useState({ userid: "", admin: false });

  return (
    <div className="App">
      <Router>
        <Routes>
          {loggedIn ? (
            <Route
              path="/"
              element={<Mainpage user={user} udpateUser={udpateUser} />}
            />
          ) : (
            <Route
              path="/"
              element={
                <Login updateLogin={updateLogin} udpateUser={udpateUser} />
              }
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
