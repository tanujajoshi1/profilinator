import React from 'react';
import Paper from '@material-ui/core/Paper';
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
        // console.log(e.target.id)
        console.log(e.target.value)
        // props.handleUpdate(e.target.id,e.target.value)

    }


    const classes = useStyles();
    return(
        <div className="work">
             <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper} defaultValue="🔭 I’m currently working on" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={4}>                      
                  <Input className={classes.paper} placeholder="Project Name" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
                  <Grid item  xs={4}>                      
                  <Input className={classes.paper} placeholder="Project Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper} defaultValue="👯 I’m looking to collaborate on" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={4}>                      
                  <Input className={classes.paper} placeholder="Project Name" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
                  <Grid item  xs={4}>                      
                  <Input className={classes.paper} placeholder="Project Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper}   defaultValue="🤝 I’m looking for help with" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={4}>                      
                  <Input  className={classes.paper} placeholder="Project Name" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
                  <Grid item  xs={4}>                      
                  <Input className={classes.paper} placeholder="Project Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>

              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper} defaultValue="📫 How to reach me" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input className={classes.input} placeholder="example@gmail.com" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper}  defaultValue="👨‍💻 All of my projects are available at" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input className={classes.input} placeholder="Portfolio Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper} defaultValue="📝 I regularly write articles on" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input className={classes.input} placeholder="Blog Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper}  defaultValue="📄 Know about myperiences" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input className={classes.input} placeholder="Resume Link" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


              <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item  xs={4}>
                  <Input className={classes.paper}  defaultValue="⚡ Fun fact" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>                 
                  <Grid item  xs={8}>                      
                  <Input className={classes.input} placeholder="I think I'm funny" inputProps={{ 'aria-label': 'description' }} onChange={handleChange}/>
                  </Grid>
              </Grid>  
              </div>


             
        </div>
        
    )
}

export default Work;