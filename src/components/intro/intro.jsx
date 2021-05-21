import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Work from './work';

function Intro(props){
   
    
   function handleClick(key,value) {
      console.log('Click happened', value);
      props.introUpdate('intro',key,value)
    }

   return(
   <div className="intro">
    <h1>Title</h1>
    <Title title={props.intro.title} titlepretext={props.intro.titlepretext} handleUpdate= {handleClick}/>

    <h1 >Subtitle</h1>
    <Subtitle  subtitle={props.intro.subtitle} handleUpdate={handleClick} />

    <h1>Work</h1>
    <Work/>
    
   </div> 
)
}

export default Intro;