import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
      },
      paper: { 
      padding: theme.spacing(2),     
      textAlign:'left',
      boxShadow: 'none', 
      width: '80%',
    },
    input:{
        padding: theme.spacing(2), 
        width:'60%',
    }
  }));
function Work(props){

    function handleChange(e){              
        props.handleUpdate( e.target.id , e.target.value )

    }


    const classes = useStyles();
    return(
        <div className="work">
             <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input id="w1" className={classes.paper} defaultValue="🔭 I’m currently working on" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={4}>                      
                  <Input id="w2" className={classes.paper} placeholder="Project Name" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
                  <Grid item  xs={4}>                      
                  <Input id="w3" className={classes.paper} placeholder="Project Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input id="w4" className={classes.paper} defaultValue="👯 I’m looking to collaborate on" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={4}>                      
                  <Input id="w5" className={classes.paper} placeholder="Project Name" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
                  <Grid item  xs={4}>                      
                  <Input id="w6" className={classes.paper} placeholder="Project Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input id="w7" className={classes.paper} defaultValue="📫 How to reach me" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input id="w8" className={classes.input} placeholder="example@gmail.com" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input id="w9" className={classes.paper}  defaultValue="👨‍💻 All of my projects are available at" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input id="w10" className={classes.input} placeholder="Portfolio Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input id="w11" className={classes.paper} defaultValue="📝 I regularly write articles on" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input id="w12" className={classes.input} placeholder="Blog Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input id="w13" className={classes.paper}  defaultValue="📄 Know about myperiences" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input id="w14" className={classes.input} placeholder="Resume Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input id="w15" className={classes.paper}  defaultValue="⚡ Fun fact" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input id="w16" className={classes.input} placeholder="I think I'm funny" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


             
        </div>
        
    )
}

export default Work;