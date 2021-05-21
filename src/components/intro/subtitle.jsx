import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Markdown from "../markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    boxShadow: "none",
    width: "100%",
  },

  input: {
    width: "50%",
  },
}));

function Subtitle(props) {
  const classes = useStyles();

  function handleChange(e) {
    props.handleUpdate('intro',e.target.id, e.target.value);
  }

  return (
    <div className="subtitle">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Input
                id="subtitle"
                className={classes.input}
                defaultValue={props.subtitle}
                inputProps={{ "aria-label": "description" }}
                onChange={handleChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Subtitle;
