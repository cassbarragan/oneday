import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import Form from "./components/form.jsx";
import EntryList from "./components/entryList.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import 'regenerator-runtime/runtime'
import {dataContext} from './context/dataContext.js';

import WebFont from "webfontloader";
WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

const App = () => {
  const [entries, setEntries] = useState([]);
  console.log("entries from App:", entries);

  const getEntries = async () => {
    await axios
    .get(`/getentries`)
    .then((result) =>
      setEntries(result.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <dataContext.Provider
      value={{
        entries,
        setEntries,
      }}
    >
      <div className="App">
        <Typography variant="h3" style={{ textAlign: "center" }}>
          One A Day Journal
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Form />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <EntryList />
      </div>
    </dataContext.Provider>
  );
};

export default App;
