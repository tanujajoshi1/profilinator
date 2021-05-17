import React from "react";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none', 
    width: '100%',
  },
}));

function Addons() {
    const classes = useStyles();
    return (
        <div className = "skills">
          <h1>Add-ons</h1>
            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                  <label><Paper className={classes.paper}><input type="checkbox"/><p>Add github stats card</p></Paper></label>
                  </Grid>
                  <Grid item xs={6}>
                  <label><Paper className={classes.paper}><input type="checkbox"/><p>Add github visitors counter</p></Paper></label>
                  </Grid>
              </Grid>  
            </div>

        </div>
    );
} 

export default Addons;