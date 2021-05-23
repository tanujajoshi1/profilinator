import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {AiMlList} from "../markdown";

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

let aimlList = [];

function remove(element) {
    const index = aimlList.indexOf(element);
    if (index > -1) {
        aimlList.splice(index, 1);
    }
}

function add(element) {
    aimlList.push(element);
}

function AIML() {
    const classes = useStyles();
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

    aimlList = [];

    return (
        <div className = "skills-sub">
            <p>AI/ML</p>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg") : remove("https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg")}/><Item img = "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg") : remove("https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg") : remove("https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg") : remove("https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg")}/><Item img =  "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(aimlList)}
            <AiMlList aimlList = {aimlList} />
        </div>
    );
}

export default AIML;
