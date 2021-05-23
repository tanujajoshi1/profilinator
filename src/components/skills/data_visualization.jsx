import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DatavisualizationList } from "../markdown";

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

let datavisualizationList = [];

function remove(element) {
    const index = datavisualizationList.indexOf(element);
    if (index > -1) {
        datavisualizationList.splice(index, 1);
    }
}

function add(element) {
    datavisualizationList.push(element);
}

function DataVisualization() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);

    datavisualizationList = [];

    return (
        <div className = "skills-sub">
            <p>Data Visualization</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("d3js") : remove("d3js")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("chartjs") : remove("chartjs")}/><Item img =  "https://www.chartjs.org/media/logo-title.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("canvasjs") : remove("canvasjs")}/><Item img =  "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("kibana") : remove("kibana")}/><Item img =  "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 == true ? add("grafana") : remove("grafana")}/><Item img = "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(datavisualizationList)}
            <DatavisualizationList datavisualizationList = {datavisualizationList} />
        </div>
    );
}

export default DataVisualization;