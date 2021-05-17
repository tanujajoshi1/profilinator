import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {      
        padding: theme.spacing(2),  
        textAlign:'left',
        boxShadow: 'none', 
        width: '100%',
      },

  input:{
      width:'50%',
  }
}));
function Subtitle(){
    const classes = useStyles();
    return(
        <div className="subtitle">
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item  xs={12}>
        <Paper className={classes.paper}><Input  className={classes.input} defaultValue="A passionate frontend developer from India" inputProps={{ 'aria-label': 'description' }} /></Paper>
        </Grid>
        </Grid>
        </div>
        </div>
        
    )
}

export default Subtitle;