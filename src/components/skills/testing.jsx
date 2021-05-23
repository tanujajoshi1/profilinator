import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TestingList } from "../markdown";

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

let testingList = [];

function remove(element) {
    const index = testingList.indexOf(element);
    if (index > -1) {
        testingList.splice(index, 1);
    }
}

function add(element) {
    testingList.push(element);
}

function Testing() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [checked7, setChecked7] = React.useState(false);

    testingList = [];

    return (
        <div className = "skills-sub">
            <p>Testing</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg") : remove("https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg")}/><Item img = "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg") : remove("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg")}/><Item img =  "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg") : remove("https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg") : remove("https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 == true ? add("https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg") : remove("https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg")}/><Item img = "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 == true ? add("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg") : remove("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg")}/><Item img =  "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 == true ? add("https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg") : remove("https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(testingList)}
            <TestingList testingList = {testingList} />
        </div>
    );
}

export default Testing;
