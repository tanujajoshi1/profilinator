import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GameList } from "../markdown";

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

let gameList = [];

function remove(element) {
    const index = gameList.indexOf(element);
    if (index > -1) {
        gameList.splice(index, 1);
    }
}

function add(element) {
    gameList.push(element);
}

function GameEngine() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);

    gameList = [];

    return (
        <div className = "skills-sub">
            <p>Game Engine</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 == true ? add("https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg") : remove("https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg")}/><Item img = "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg" /></Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 == true ? add("https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg") : remove("https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" /></Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(gameList)}
            <GameList gameList = {gameList} />
        </div>
    );
}

export default GameEngine;
