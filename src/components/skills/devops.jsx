import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DevopsList } from "../markdown";

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

let devopsList = [];

function remove(element) {
    const index = devopsList.indexOf(element);
    if (index > -1) {
        devopsList.splice(index, 1);
    }
}

function add(element) {
    devopsList.push(element);
}

function Devops() {

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
    const [checked10, setChecked10] = React.useState(false);

    devopsList = [];

    return (
        <div className = "skills-sub">
            <p>Devops</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg") : remove("https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg") : remove("https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 == true ? add("https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg") : remove("https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg")}/><Item img = "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 == true ? add("https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg") : remove("https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 == true ? add("https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg") : remove("https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 == true ? add("https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg") : remove("https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 == true ? add("https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg") : remove("https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg")}/><Item img = "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked10} onChange={() => setChecked10(!checked10)} {...checked10 == true ? add("https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg") : remove("https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(devopsList)}
            <DevopsList devopsList = {devopsList} />
        </div>
    );
}

export default Devops;
