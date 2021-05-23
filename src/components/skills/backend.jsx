import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BackendList } from "../markdown";

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

let backendList = [];

function remove(element) {
    const index = backendList.indexOf(element);
    if (index > -1) {
        backendList.splice(index, 1);
    }
}

function add(element) {
    backendList.push(element);
}

function Backend() {

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

    backendList = [];

    return (
        <div className = "skills-sub">
            <p>Backend development</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("nodejs") : remove("nodejs")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("spring") : remove("spring")}/><Item img =  "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("express") : remove("express")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("graphql") : remove("graphql")}/><Item img =  "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 == true ? add("kafka") : remove("kafka")}/><Item img = "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 == true ? add("solr") : remove("solr")}/><Item img =  "https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 == true ? add("rabbitmq") : remove("rabbitmq")}/><Item img =  "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 == true ? add("hadoop") : remove("hadoop")}/><Item img =  "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 == true ? add("nginx") : remove("nginx")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked10} onChange={() => setChecked10(!checked10)} {...checked10 == true ? add("openresty") : remove("openresty")}/><Item img =  "https://openresty.org/images/logo.png" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(backendList)}
            <BackendList backendList = {backendList} />
        </div>
    );
}

export default Backend;
