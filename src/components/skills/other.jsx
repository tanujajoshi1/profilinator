import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { OtherList } from "../markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none', 
    width: '100%',
    display:'flex',
  },
}));

function Item(props) {
    return (
        <img src = {props.img} />
    );
}

let otherList = [];

function remove(element) {
    const index = otherList.indexOf(element);
    if (index > -1) {
        otherList.splice(index, 1);
    }
}

function add(element) {
    otherList.push(element);
}

function Other() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);

    otherList = [];

    return (
        <div className = "skills-sub">
            <p>Other</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" /> Linux</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 === true ? add("https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg") : remove("https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" /> <i class="fa fa-github" aria-hidden="true"></i> Git</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 === true ? add("https://cdn.worldvectorlogo.com/logos/arduino-1.svg") : remove("https://cdn.worldvectorlogo.com/logos/arduino-1.svg")}/><Item img =  "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" /> Arduino</Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(otherList)}
            <OtherList otherList = {otherList} />
        </div>
    );
}

export default Other;
