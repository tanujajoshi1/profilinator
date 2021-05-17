import React from "react";
import Header from "./header";
import Footer from "./footer";
import Skills from "./skills/skills";
import Social from "./social/social";
import Addons from "./addons";
import Intro from "./intro/intro";

function App() {
    return (<div>
        <Header />
        <Intro />
        <Skills />
        <Social />
        <Addons />
        <Footer />
    </div>);
}

export default App;
