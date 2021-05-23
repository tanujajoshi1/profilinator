import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BaasList } from "../markdown";

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

let baasList = [];

function remove(element) {
    const index = baasList.indexOf(element);
    if (index > -1) {
        baasList.splice(index, 1);
    }
}

function add(element) {
    baasList.push(element);
}

function Baas() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

    baasList = [];

    return (
        <div className = "skills-sub">
            <p>Baas</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("firebase") : remove("firebase")}/><Item img = "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("appwrite") : remove("appwrite")}/><Item img =  "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("amplify") : remove("amplify")}/><Item img =  "https://docs.amplify.aws/assets/logo-dark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("heroku") : remove("heroku")}/><Item img =  "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(baasList)}
            <BaasList baasList = {baasList} />
        </div>
    );
}

export default Baas;