import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@material-ui/core";
import { dataContext } from "../context/dataContext.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EntryList = () => {
  var { entries, setEntries } = useContext(dataContext);

  return (
    <div>
      <Stack spacing={10}>
        {entries.map((item) => {
          return (
            <Item onClick={() => console.log("clicked")}>
              <Typography variant="h6" gutterBottom component="div">
                {`${item.name} - ${item.date} - ${item.entry}`}
              </Typography>
            </Item>
          );
        })}
      </Stack>
    </div>
  );
};

export default EntryList;
