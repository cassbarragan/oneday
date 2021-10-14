import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Form from "./components/form.jsx";
import EntryList from "./components/entryList.jsx";
import Calendar from "./components/calendar.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "regenerator-runtime/runtime";
import { dataContext } from "./context/dataContext.js";
import styled from "styled-components";
import WebFont from "webfontloader";
import SearchField from "react-search-field";

WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

const JournalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getEntries = async () => {
    await axios
      .get(`/getentries`)
      .then((result) => setEntries(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <dataContext.Provider
      value={{
        entries,
        setEntries,
        getEntries,
      }}
    >
      <div className="App">
        <Typography variant="h2" style={{ textAlign: "center" }}>
          One A Day: Engineering Journal
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
          Capture short term goals, motivations, actions taken, and results
          observed.
        </Typography>
        <Typography variant="body2" style={{ textAlign: "center" }}>
          Create a daily calendar reminder by clicking the button below.
        </Typography>
        <Calendar/>
        <Form />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Typography variant="h2" style={{ textAlign: "center" }}>
          Journal Entries
        </Typography>
        <JournalContainer>
        <SearchField
          placeholder="Search..."
          // onChange={onChange}
          searchText="search..."
          classNames="test-class"
        />
          <EntryList />
        </JournalContainer>
      </div>
    </dataContext.Provider>
  );
};

export default App;
