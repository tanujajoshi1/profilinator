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

function SocialItem() {
    const classes = useStyles();
    return (
        <div className = "skills">
            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"}/>{'  '}<TextField /></Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"}/>{'  '}<TextField /></Paper>
                  </Grid>
              </Grid>  
            </div>

            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg"}/>{' '}<TextField /></Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"}/>{' '}<TextField /></Paper>
                  </Grid>
              </Grid>  
            </div>

            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"}/>{'  '}<TextField /></Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/leetcode.svg"}/>{' '}<TextField /></Paper>
                  </Grid>
              </Grid>  
            </div>

        </div>
    );
} 

export default SocialItem;