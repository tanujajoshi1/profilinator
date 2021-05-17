import React from "react";
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
    width: '100%'
  },
}));

function Item(props) {
    return (
        <img src = {props.img} />
    );
}

function AIML() {
    const classes = useStyles();
    return (
        <div className = "skills-sub">
            <p>AI/ML</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img = "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    );
}

export default AIML;
