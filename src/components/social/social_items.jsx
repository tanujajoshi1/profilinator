import React, { useState } from "react";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {Githubuser}  from "../markdown";
import {Linkedinuser}  from "../markdown";
import {Codepenuser}  from "../markdown";
import {Stackoverflowuser}  from "../markdown";
import {Devuser}  from "../markdown";
import {Mediumuser}  from "../markdown";
import {Githubstats} from "../markdown";
import {Githubvisitors} from "../markdown";

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
    const [myValue1, setValue1] = useState('');
    const [myValue2, setValue2] = useState('');
    const [myValue3, setValue3] = useState('');
    const [myValue4, setValue4] = useState('');
    const [myValue5, setValue5] = useState('');
    const [myValue6, setValue6] = useState('');
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    return (
      <div>
          <div className = "skills">
            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"}/>{'  '}<TextField value={myValue1} onChange={(e) => setValue1(e.target.value)} /></Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"}/>{'  '}<TextField value={myValue2} onChange={(e) => setValue2(e.target.value)} /></Paper>
                  </Grid>
              </Grid>  
            </div>

            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"}/>{' '}<TextField value={myValue3} onChange={(e) => setValue3(e.target.value)} /></Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"}/>{' '}<TextField value={myValue4} onChange={(e) => setValue4(e.target.value)} /></Paper>
                  </Grid>
              </Grid>  
            </div>

            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"}/>{'  '}<TextField value={myValue5} onChange={(e) => setValue5(e.target.value)} /></Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}><img src={"https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/medium.svg"}/>{' '}<TextField value={myValue6} onChange={(e) => setValue6(e.target.value)}/></Paper>
                  </Grid>
              </Grid>  
            </div>

        </div>
        <div>
          <h1>Add-ons</h1>
            <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                  <label><Paper className={classes.paper}><input type="checkbox" defaultChecked={checked1} onChange={() => setChecked1(!checked1)} disabled={myValue1.length<1}/>{'  '}Add github stats card</Paper></label>
                  </Grid>
                  <Grid item xs={6}>
                  <label><Paper className={classes.paper}><input type="checkbox" defaultChecked={checked2} onChange={() => setChecked2(!checked2)} disabled={myValue1.length<1}/>{'  '}Add github visitors counter</Paper></label>
                  </Grid>
              </Grid>  
            </div>
        </div>
        <Githubuser myValue1 = {myValue1} />
        <Linkedinuser myValue2 = {myValue2} />
        <Codepenuser myValue3 = {myValue3} />
        <Stackoverflowuser myValue4 = {myValue4} />
        <Devuser myValue5 = {myValue5} />
        <Mediumuser myValue6 = {myValue6} />
        <Githubstats stats = {checked1} />
        <Githubvisitors visitors = {checked2} /> 
      </div>
        
    );
} 

export default SocialItem;
