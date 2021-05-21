import React from "react";
import Header from "./header";
import Footer from "./footer";
import Skills from "./skills/skills";
import Social from "./social/social";
import Addons from "./addons"
import Intro from "./intro/intro";
import Markdown from "./markdown";

import { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    intro: {
      subtitle: "A passionte frontend developer from India",
      titlepretext: "Hi 👋, I'm",
      title:'',
    },
  });
  function show(event) {
    console.log(data)
    // const history = useHistory();
    // history.push('/componentURL');
   
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
      <Markdown data={data} />
      <Footer />
    </div>
  );
    
}

export default App;
