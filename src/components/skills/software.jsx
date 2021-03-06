import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SoftwareList } from "../markdown";

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

let softwareList = [];

function remove(element) {
    const index = softwareList.indexOf(element);
    if (index > -1) {
        softwareList.splice(index, 1);
    }
}

function add(element) {
    softwareList.push(element);
}

function Software() {

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

    softwareList = [];

    return (
        <div className = "skills-sub">
            <p>Software</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 === true ? add("https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg") : remove("https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg")}/><Item img = "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" /> Adobe Illustrator</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" /> Photoshop</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 === true ? add("https://cdn.worldvectorlogo.com/logos/adobe-xd.svg") : remove("https://cdn.worldvectorlogo.com/logos/adobe-xd.svg")}/><Item img =  "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" /> Adobe Xd</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 === true ? add("https://www.vectorlogo.zone/logos/figma/figma-icon.svg") : remove("https://www.vectorlogo.zone/logos/figma/figma-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" /> Figma</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 === true ? add("https://download.blender.org/branding/community/blender_community_badge_white.svg") : remove("https://download.blender.org/branding/community/blender_community_badge_white.svg")}/><Item img = "https://download.blender.org/branding/community/blender_community_badge_white.svg" /> Blender</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 === true ? add("https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg") : remove("https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg" /> Sketch</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 === true ? add("https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg") : remove("https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg" /> InVision</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 === true ? add("https://www.vectorlogo.zone/logos/framer/framer-icon.svg") : remove("https://www.vectorlogo.zone/logos/framer/framer-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" /> Framer</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 === true ? add("https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/mathworks.svg") : remove("https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/mathworks.svg")}/><Item img = "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/mathworks.svg" /> Matlab</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked10} onChange={() => setChecked10(!checked10)} {...checked10 === true ? add("https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg") : remove("https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" /> Postman</Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(softwareList)}
            <SoftwareList softwareList = {softwareList} />
        </div>
    );
}

export default Software;
