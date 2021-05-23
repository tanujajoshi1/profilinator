import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FrontendList } from "../markdown";

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

let frontendList = [];

function remove(element) {
    const index = frontendList.indexOf(element);
    if (index > -1) {
        frontendList.splice(index, 1);
    }
}

function add(element) {
    frontendList.push(element);
}

function Frontend() {

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
    const [checked11, setChecked11] = React.useState(false);
    const [checked12, setChecked12] = React.useState(false);
    const [checked13, setChecked13] = React.useState(false);
    const [checked14, setChecked14] = React.useState(false);
    const [checked15, setChecked15] = React.useState(false);
    const [checked16, setChecked16] = React.useState(false);
    const [checked17, setChecked17] = React.useState(false);
    const [checked18, setChecked18] = React.useState(false);
    const [checked19, setChecked19] = React.useState(false);
    const [checked20, setChecked20] = React.useState(false);
    const [checked21, setChecked21] = React.useState(false);
    const [checked22, setChecked22] = React.useState(false);
    const [checked23, setChecked23] = React.useState(false);

    frontendList = [];

    return (
        <div className = "skills-sub">
            <p>Frontend Development</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("vuejs") : remove("vuejs")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("react") : remove("react")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("angular") : remove("angular")}/><Item img =  "https://angular.io/assets/images/logos/angular/angular.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("svelte") : remove("svelte")}/><Item img =  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 == true ? add("angularjs") : remove("angularjs")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 == true ? add("backbonejs") : remove("backbonejs")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 == true ? add("bootstrap") : remove("bootstrap")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 == true ? add("vuetify") : remove("vuetify")}/><Item img =  "https://bestofjs.org/logos/vuetify.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 == true ? add("css3") : remove("css3")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked10} onChange={() => setChecked10(!checked10)} {...checked10 == true ? add("html5") : remove("html5")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked11} onChange={() => setChecked11(!checked11)} {...checked11 == true ? add("pug") : remove("pug")}/><Item img =  "https://cdn.worldvectorlogo.com/logos/pug.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked12} onChange={() => setChecked12(!checked12)} {...checked12 == true ? add("gulp") : remove("gulp")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked13} onChange={() => setChecked13(!checked13)} {...checked13 == true ? add("sass") : remove("sass")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked14} onChange={() => setChecked14(!checked14)} {...checked14 == true ? add("redux") : remove("redux")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked15} onChange={() => setChecked15(!checked15)} {...checked15 == true ? add("webpack") : remove("webpack")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked16} onChange={() => setChecked16(!checked16)} {...checked16 == true ? add("babel") : remove("babel")}/><Item img =  "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked17} onChange={() => setChecked17(!checked17)} {...checked17 == true ? add("tailwind") : remove("tailwind")}/><Item img = "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked18} onChange={() => setChecked18(!checked18)} {...checked18 == true ? add("materialize") : remove("materialize")}/><Item img =  "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked19} onChange={() => setChecked19(!checked19)} {...checked19 == true ? add("bulma") : remove("bulma")}/><Item img =  "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked20} onChange={() => setChecked20(!checked20)} {...checked20 == true ? add("gtk") : remove("gtk")}/><Item img =  "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked21} onChange={() => setChecked21(!checked21)} {...checked21 == true ? add("qt") : remove("qt")}/><Item img = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked22} onChange={() => setChecked22(!checked22)} {...checked22 == true ? add("wx_widgets") : remove("wx_widgets")}/><Item img =  "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked23} onChange={() => setChecked23(!checked23)} {...checked23 == true ? add("ember") : remove("ember")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(frontendList)}
            <FrontendList frontendList = {frontendList} />
        </div>
    );
}

export default Frontend;
