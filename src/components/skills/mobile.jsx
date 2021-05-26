import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MobileList } from "../markdown";

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

let mobileList = [];

function remove(element) {
    const index = mobileList.indexOf(element);
    if (index > -1) {
        mobileList.splice(index, 1);
    }
}

function add(element) {
    mobileList.push(element);
}

function Mobile() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [checked7, setChecked7] = React.useState(false);
    const [checked8, setChecked8] = React.useState(false);
    const [checked9, setChecked9] = React.useState(false);

    mobileList = [];

    return (
        <div className = "skills-sub">
            <p>Mobile App development</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" /> Android</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 === true ? add("https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg") : remove("https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" /> Flutter</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 === true ? add("https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg") : remove("https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" /> Dart</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 === true ? add("https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg") : remove("https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" /> Kotlin</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 === true ? add("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg") : remove("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg")}/><Item img = "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg" /> NativeScript</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 === true ? add("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg") : remove("https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg")}/><Item img =  "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg" /> Xamarin</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 === true ? add("https://reactnative.dev/img/header_logo.svg") : remove("https://reactnative.dev/img/header_logo.svg")}/><Item img =  "https://reactnative.dev/img/header_logo.svg" /> React Native</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 === true ? add("https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg") : remove("https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg")}/><Item img =  "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" /> Ionic</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 === true ? add("https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg") : remove("https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg")}/><Item img = "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg" /> Apache Cordova</Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(mobileList)}
            <MobileList mobileList = {mobileList} />
        </div>
    );
}

export default Mobile;
