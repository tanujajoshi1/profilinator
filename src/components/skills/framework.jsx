import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FrameworkList } from "../markdown";

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

let frameworkList = [];

function remove(element) {
    const index = frameworkList.indexOf(element);
    if (index > -1) {
        frameworkList.splice(index, 1);
    }
}

function add(element) {
    frameworkList.push(element);
}

function Framework() {

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

    frameworkList = [];

    return (
        <div className = "skills-sub">
            <p>Framework</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" /> Django</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" /> .NET</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" /> Electron</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 === true ? add("https://symfony.com/logos/symfony_black_03.svg") : remove("https://symfony.com/logos/symfony_black_03.svg")}/><Item img =  "https://symfony.com/logos/symfony_black_03.svg" /> Symfony</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" /> Laravel</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 === true ? add("https://cdn.worldvectorlogo.com/logos/codeigniter.svg") : remove("https://cdn.worldvectorlogo.com/logos/codeigniter.svg")}/><Item img =  "https://cdn.worldvectorlogo.com/logos/codeigniter.svg" /> Codeigniter</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" /> Rails</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 === true ? add("https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg") : remove("https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" /> Flask</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 === true ? add("https://cdn.quasar.dev/logo/svg/quasar-logo.svg") : remove("https://cdn.quasar.dev/logo/svg/quasar-logo.svg")}/><Item img = "https://cdn.quasar.dev/logo/svg/quasar-logo.svg" /> Quasar</Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(frameworkList)}
            <FrameworkList frameworkList = {frameworkList} />
        </div>
    );
}

export default Framework;
