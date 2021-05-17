import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Work from './work';
function Intro(){
return(
   <div className="intro">

    <h1>Title</h1>
    <Title/>

    <h1>Subtitle</h1>
    <Subtitle/>

    <h1>Work</h1>
    <Work/>
    
   </div> 
)
}

export default Intro;