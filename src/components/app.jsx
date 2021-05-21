import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Skills from "./skills/skills";
import Social from "./social/social";
import Addons from "./addons"
import Intro from "./intro/intro";
import Markdown from "./markdown";

import { useHistory } from "react-router-dom";

function App(props) {
  const history = useHistory();
  const [data, setData] = useState({
    intro: {
      subtitle: "A passionte frontend developer from India",
      titlepretext: "Hi 👋, I'm",
      title:'',
      work:{
        w1:"🔭 I’m currently working on",
        w2:'',
        w3:'',
        w4:"👯 I’m looking to collaborate on",
        w5:'',
        w6:'',
        w7:"📫 How to reach me",
        w8:'',
        w9:"👨‍💻 All of my projects are available at",
        w10:'',
        w11:"📝 I regularly write articles on",
        w12:'',
        w13:"📄 Know about myperiences",
        w14:'',
        w15:"⚡ Fun fact",
        w16:'',

      }
      
    },
  });
  function show(event) {
    console.log(data)
    
    // history.push('/componentURL');   

      props.history.push({
      pathname: '/markdown',
      data
    })
   
  }

  function updateData(section,key,value){
      console.log(section, key,value)
      let _data=data;

     _data[section][key]= value
      setData(_data)
  }

  return (
    <div>
      <Header />
      <Intro intro={data.intro} introUpdate={updateData}/>
      <Skills />
      <Social />
      <Addons />      
      <button onClick={show}>Generate ReadMe</button>

      {/*temporarily put here to check the value */}
      {/* <Markdown data={data} />  */}
      
      <Footer />
    </div>
  );
    
}

export default App;
