import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Skills from "./skills/skills";
import Social from "./social/social";
import Intro from "./intro/intro";


import { useHistory } from "react-router-dom";

function App(props) {
  const history = useHistory();
  const [data, setData] = useState({
    intro: {
      subtitle: "A passionate frontend developer from India",
      titlepretext: "Hi š, I'm",
      title: '',

    }, work: {
      w1: "š­ Iām currently working on",
      w2: '',
      w3: '',
      w4: "šÆ Iām looking to collaborate on",
      w5: '',
      w6: '',
      w7: "š« How to reach me",
      w8: '',
      w9: "šØāš» All of my projects are available at",
      w10: '',
      w11: "š I regularly write articles on",
      w12: '',
      w13: "š Know about my experiences",
      w14: '',
      w15: "ā” Fun fact",
      w16: '',

    }
  });
  function show(event) {
    console.log(data)


    props.history.push({
      pathname: '/markdown',
      data
    })

  }

  function updateData(section, key, value) {
    console.log(section, key, value)
    let _data = data;

    _data[section][key] = value
    setData(_data)
  }

  return (
    <div>
      <Header />
      <Intro intro={data.intro} work={data.work} introUpdate={updateData} />
      <Skills />
      <Social />
      <button onClick={show}>Generate ReadMe</button>
      <Footer />
    </div>
  );

}

export default App;
