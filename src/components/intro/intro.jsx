import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Work from './work';

function Intro(props){
   
    
   function handleClick(section,key,value) {
      
      props.introUpdate(section,key,value)
    }

   return(
   <div className="intro">
    <h1>Title</h1>
    <Title title={props.intro.title} titlepretext={props.intro.titlepretext} handleUpdate= {handleClick}/>

    <h1 >Subtitle</h1>
    <Subtitle  subtitle={props.intro.subtitle} handleUpdate={handleClick} />

    <h1>Work</h1>
    <Work work={props.work} handleUpdate={handleClick}/>
    
   </div> 
)
}

export default Intro;