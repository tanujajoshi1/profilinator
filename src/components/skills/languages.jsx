import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { LanguagesList } from "../markdown";

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

let languagesList = [];

function remove(element) {
    const index = languagesList.indexOf(element);
    if (index > -1) {
        languagesList.splice(index, 1);
    }
}

function add(element) {
    languagesList.push(element);
}

function Languages() {

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

    languagesList = [];

    return (
        <div className = "skills-sub">
            <p>Programming Languages</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("cpp") : remove("cpp")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("c") : remove("c")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 == true ? add("golang") : remove("golang")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 == true ? add("java") : remove("java")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 == true ? add("csharp") : remove("csharp")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 == true ? add("javascript") : remove("javascript")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 == true ? add("php") : remove("php")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 == true ? add("perl") : remove("perl")}/><Item img =  "https://api.iconify.design/logos-perl.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 == true ? add("python") : remove("python")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked10} onChange={() => setChecked10(!checked10)} {...checked10 == true ? add("ruby") : remove("ruby")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked11} onChange={() => setChecked11(!checked11)} {...checked11 == true ? add("rust") : remove("rust")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked12} onChange={() => setChecked12(!checked12)} {...checked12 == true ? add("typescript") : remove("typescript")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked13} onChange={() => setChecked13(!checked13)} {...checked13 == true ? add("coffeescript") : remove("coffeescript")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked14} onChange={() => setChecked14(!checked14)} {...checked14 == true ? add("scala") : remove("scala")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked15} onChange={() => setChecked15(!checked15)} {...checked15 == true ? add("swift") : remove("swift")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked16} onChange={() => setChecked16(!checked16)} {...checked16 == true ? add("objectivec") : remove("objectivec")}/><Item img =  "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked17} onChange={() => setChecked17(!checked17)} {...checked17 == true ? add("erlang") : remove("erlang")}/><Item img = "https://www.vectorlogo.zone/logos/erlang/erlang-official.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked18} onChange={() => setChecked18(!checked18)} {...checked18 == true ? add("elixir") : remove("elixir")}/><Item img =  "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked19} onChange={() => setChecked19(!checked19)} {...checked19 == true ? add("haskell") : remove("haskell")}/><Item img =  "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked20} onChange={() => setChecked20(!checked20)} {...checked20 == true ? add("clojure") : remove("clojure")}/><Item img =  "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(languagesList)}
            <LanguagesList languagesList = {languagesList} />
        </div>
    );
}

export default Languages;
