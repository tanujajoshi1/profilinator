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

function Languages() {
    const classes = useStyles();
    return (
        <div className = "skills-sub">
            <p>Programming Languages</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox"/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    );
}

export default Languages;


{/* <div className = "languages">
                <label><input type="checkbox"/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" /></label>
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            </div>
        
            <div className = "languages">
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            </div>

            <div className = "languages">
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            </div>

            <div className = "languages">
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            </div>

            <div className = "languages">
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" />
                <Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            </div> */}

{/* <MDBInput
                value='Classic checkbox'
                label={
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    className='img-fluid'
                    alt='tst'
                />
                }
                type='checkbox'
                id='checkbox'
            /> */}
