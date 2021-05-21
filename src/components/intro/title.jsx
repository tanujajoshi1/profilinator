import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

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

function Title(props) {
  console.log(props);
  function handleChange(e) {
    console.log(e.target.id);
    props.handleUpdate(e.target.id, e.target.value);
  }

  const classes = useStyles();
  return (
    <div className="title">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Input
                id="titlepretext"
                defaultValue={props.titlepretext}
                inputProps={{ "aria-label": "description" }}
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <Input
                id="title"
                placeholder="Name"
                className={classes.input}
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

export default Title;
