import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AutomationList } from "../markdown";

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

let automationList = [];

function remove(element) {
    const index = automationList.indexOf(element);
    if (index > -1) {
        automationList.splice(index, 1);
    }
}

function add(element) {
    automationList.push(element);
}

function Automation() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    automationList = [];

    return (
        <div className = "skills-sub">
            <p>Automation</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg") : remove("https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg")}/><Item img = "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(automationList)}
            <AutomationList automationList = {automationList} />
        </div>
    );
}

export default Automation;
