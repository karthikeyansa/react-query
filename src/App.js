import React, { useState } from "react";
import { useMutation } from "react-query";
import AppOne from "./components/AppOne";
import AppTwo from "./components/AppTwo";
import "./App.css";
import * as helper from "./helpers/HelperFunction";

function App() {
  const { mutate } = useMutation(helper.addUser);
  const [userName, setUserName] = useState("");

  return (
    <React.Fragment>
        <div>
          <h3>Add a user</h3>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={() => mutate(userName)}>add user</button>
        </div>
        <div style={{ display: "flex" }}>
          <AppOne />
          <h1>&nbsp;VS&nbsp;</h1>
          <AppTwo />
        </div>
    </React.Fragment>
  );
}

export default App;
