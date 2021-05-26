import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useHistory } from "react-router-dom";


let aiml = [];
let languages = [];
let frontend = [];
let backend = [];
let mobile = [];
let database = [];
let datavisualization = [];
let other = [];
let automation = [];
let devops = [];
let baas = [];
let framework = [];
let game = [];
let testing = [];
let software = [];

var flag = 0;

const AiMlList = (props) => {
  aiml = props.aimlList;
  return "";
};

const LanguagesList = (props) => {
  languages = props.languagesList;
  return "";
};

const FrontendList = (props) => {
  frontend = props.frontendList;
  return "";
};

const BackendList = (props) => {
  backend = props.backendList;
  return "";
};

const MobileList = (props) => {
  mobile = props.mobileList;
  return "";
};

const DatabaseList = (props) => {
  database = props.databaseList;
  return "";
};

const DatavisualizationList = (props) => {
  datavisualization = props.datavisualizationList;
  return "";
};

const OtherList = (props) => {
  other = props.otherList;
  return "";
};

const AutomationList = (props) => {
  automation = props.automationList;
  return "";
};

const DevopsList = (props) => {
  devops = props.devopsList;
  return "";
};

const BaasList = (props) => {
  baas = props.baasList;
  return "";
};

const FrameworkList = (props) => {
  framework = props.frameworkList;
  return "";
};

const GameList = (props) => {
  game = props.gameList;
  return "";
};

const TestingList = (props) => {
  testing = props.testingList;
  return "";
};

const SoftwareList = (props) => {
  software = props.softwareList;
  return "";
};

// title being converted to markdown
const TitleMD = (props) => {
  if (props.titlepretext && props.title) {
    return (
      <>
        {`<h1 align="center">${props.titlepretext + " " + props.title}</h1>`}
        <br />
      </>
    );
  }
  return "";
};

// subtitle being converted to markdown
const SubtitleMD = (props) => {
  if (props.subtitle) {
    return (
      <>
        {`<h3 align="center">${props.subtitle}</h3>`}
        <br />
        <br />
      </>
    );
  }
  return "";
};

//work being converted to markdown
const WorkMD = (props) => {
  if (props.x && props.y) {
    if (props.z) {
      return (
        <>
          {" "}
          {`- ${props.x} [${props.y}](${props.z})`} <br /> <br />{" "}
        </>
      );
    } else {
      return (
        <>
          {" "}
          {`- ${props.x} **${props.y}**`} <br /> <br />
        </>
      );
    }
  }
  if (props.x && props.z) {
    return (
      <>
        {" "}
        {`- ${props.x} [${props.z}](${props.z})`} <br /> <br />{" "}
      </>
    );
  }
  return "";
};

let am = [];

function AIML(props) {
  if (props.aiml.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < aiml.length; i++) {
      var s = aiml[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      am.push(c);
      am.push("     ");
    }
    return (
      <>
        <br />
        {`## AI/ML`}
        <br />
        <div>{am}</div>
      </>
    );
  } else {
    return "";
  }
}

let lang = [];

function Languages(props) {
  if (props.languages.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < languages.length; i++) {
      var s = languages[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      lang.push(c);
      lang.push("     ");
    }
    return (
      <>
        {`## Languages`}
        <br />
        <div>{lang}</div>
      </>
    );
  } else {
    return "";
  }
}

let front = [];

function Frontend(props) {
  if (props.frontend.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < frontend.length; i++) {
      var s = frontend[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      front.push(c);
      front.push("     ");
    }
    return (
      <>
        <br />
        {`## Frontend`}
        <br />
        <div>{front}</div>
      </>
    );
  } else {
    return "";
  }
}

let back = [];

function Backend(props) {
  if (props.backend.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < backend.length; i++) {
      var s = backend[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      back.push(c);
      back.push("     ");
    }
    return (
      <>
        <br />
        {`## Backend`}
        <br />
        <div>{back}</div>
      </>
    );
  } else {
    return "";
  }
}

let mob = [];

function Mobile(props) {
  if (props.mobile.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < mobile.length; i++) {
      var s = mobile[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      mob.push(c);
      mob.push("     ");
    }
    return (
      <>
        <br />
        {`## Mobile`}
        <br />
        <div>{mob}</div>
      </>
    );
  } else {
    return "";
  }
}

let data = [];

function Database(props) {
  if (props.database.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < database.length; i++) {
      var s = database[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      data.push(c);
      data.push("     ");
    }
    return (
      <>
        <br />
        {`## Database`}
        <br />
        <div>{data}</div>
      </>
    );
  } else {
    return "";
  }
}

let datavis = [];

function Datavisualization(props) {
  if (props.datavisualization.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < datavisualization.length; i++) {
      var s = datavisualization[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      datavis.push(c);
      datavis.push("     ");
    }
    return (
      <>
        <br />
        {`## Data Visualization`}
        <br />
        <div>{datavis}</div>
      </>
    );
  } else {
    return "";
  }
}

let auto = [];

function Automation(props) {
  if (props.automation.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < automation.length; i++) {
      var s = automation[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      auto.push(c);
      auto.push("     ");
    }
    return (
      <>
        <br />
        {`## Automation`}
        <br />
        <div>{auto}</div>
      </>
    );
  } else {
    return "";
  }
}

let oth = [];

function Other(props) {
  if (props.other.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < other.length; i++) {
      var s = other[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      oth.push(c);
      oth.push("     ");
    }
    return (
      <>
        <br />
        {`## Other`}
        <br />
        <div>{oth}</div>
      </>
    );
  } else {
    return "";
  }
}

let dev = [];

function Devops(props) {
  if (props.devops.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < devops.length; i++) {
      var s = devops[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      dev.push(c);
      dev.push("     ");
    }
    return (
      <>
        <br />
        {`## Devops`}
        <br />
        <div>{dev}</div>
      </>
    );
  } else {
    return "";
  }
}

let bs = [];

function Baas(props) {
  if (props.baas.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < baas.length; i++) {
      var s = baas[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      bs.push(c);
      bs.push("     ");
    }
    return (
      <>
        <br />
        {`## Baas`}
        <br />
        <div>{bs}</div>
      </>
    );
  } else {
    return "";
  }
}

let frame = [];

function Framework(props) {
  if (props.framework.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < framework.length; i++) {
      var s = framework[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      frame.push(c);
      frame.push("     ");
    }
    return (
      <>
        <br />
        {`## Framework`}
        <br />
        <div>{frame}</div>
      </>
    );
  } else {
    return "";
  }
}

let gm = [];

function Game(props) {
  if (props.game.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < game.length; i++) {
      var s = game[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      gm.push(c);
      gm.push("     ");
    }
    return (
      <>
        <br />
        {`## Game Engine`}
        <br />
        <div>{gm}</div>
      </>
    );
  } else {
    return "";
  }
}

let test = [];

function Testing(props) {
  if (props.testing.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < testing.length; i++) {
      var s = testing[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      test.push(c);
      test.push("     ");
    }
    return (
      <>
        <br />
        {`## Testing`}
        <br />
        <div>{test}</div>
      </>
    );
  } else {
    return "";
  }
}

let soft = [];

function Software(props) {
  if (props.software.length > 0) {
    flag = 1;
    var i;
    for (i = 0; i < software.length; i++) {
      var s = software[i];
      var c = "<img src = " + '"' + s + '"' + " width = '40' height = '40'/>";
      soft.push(c);
      soft.push("     ");
    }
    return (
      <>
        <br />
        {`## Software`}
        <br />
        <div>{soft}</div>
      </>
    );
  } else {
    return "";
  }
}

var myValue1 = "";

const Githubuser = (props) => {
  myValue1 = props.myValue1;
  console.log(myValue1);
  return "";
};

var myValue2 = "";

const Linkedinuser = (props) => {
  myValue2 = props.myValue2;
  console.log(myValue2);
  return "";
};

var myValue3 = "";

const Codepenuser = (props) => {
  myValue3 = props.myValue3;
  console.log(myValue3);
  return "";
};

var myValue4 = "";

const Stackoverflowuser = (props) => {
  myValue4 = props.myValue4;
  console.log(myValue4);
  return "";
};

var myValue5 = "";

const Devuser = (props) => {
  myValue5 = props.myValue5;
  console.log(myValue5);
  return "";
};

var myValue6 = "";

const Mediumuser = (props) => {
  myValue6 = props.myValue6;
  console.log(myValue6);
  return "";
};

var stats;

const Githubstats = (props) => {
  stats = props.stats;
  console.log(stats);
  return "";
};

function GithubStats() {
  if (stats === true) {
    return (
      <>
        <br />
        <div>
          {`<div align="center">
            <p>&nbsp;<img  src="https://github-readme-stats.vercel.app/api?username=${myValue1}&show_icons=true&locale=en" /></p>
        </div>`}
        </div>
      </>
    );
  } else {
    return "";
  }
}

var visitors;

const Githubvisitors = (props) => {
  visitors = props.visitors;
  console.log(visitors);
  return "";
};

function GithubVisitors() {
  if (visitors === true) {
    return (
      <>
        <br />
        <div>
          {`<div align="center">
          <p> <img src="https://komarev.com/ghpvc/?username=${myValue1}&label=Profile%20views&color=0e75b6&style=flat" /> </p>
        </div>`}
        </div>
      </>
    );
  } else {
    return "";
  }
}

function Github() {
  if (myValue1.length > 0) {
    return (
      <>
        <br />
        {`<a href="https://github.com/${myValue1}" target="_blank">`}
        <br />
        {`<img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white style="margin-bottom: 15px;" />`}
        <br />
        {`</a>`}
        <br />
      </>
    );
  } else {
    return "";
  }
}

function Linkedin() {
  if (myValue2.length > 0) {
    return (
      <>
        <br />
        {`<a href="https://linkedin.com/in/${myValue2}" target="_blank">`}
        <br />
        {`<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white style="margin-bottom: 15px;" />`}
        <br />
        {`</a>`}
        <br />
      </>
    );
  } else {
    return "";
  }
}

function Codepen() {
  if (myValue3.length > 0) {
    return (
      <>
        <br />
        {`<a href="https://codepen.io/${myValue3}" target="_blank">`}
        <br />
        {`<img src=https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white style="margin-bottom: 15px;" />`}
        <br />
        {`</a>`}
        <br />
      </>
    );
  } else {
    return "";
  }
}

function Stackoverflow() {
  if (myValue2.length > 0) {
    return (
      <>
        <br />
        {`<a href="https://stackoverflow.com/users/${myValue4}" target="_blank">`}{" "}
        <br />
        {`<img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white style="margin-bottom: 15px;" />`}
        <br />
        {`</a>`}
        <br />
      </>
    );
  } else {
    return "";
  }
}

function Dev() {
  if (myValue5.length > 0) {
    return (
      <>
        <br />
        {`<a href="https://dev.to/${myValue5}" target="_blank">`}
        <br />
        {`<img src=https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev-dot-to&logoColor=white style="margin-bottom: 15px;" />`}
        <br />
        {`</a>`}
        <br />
      </>
    );
  } else {
    return "";
  }
}

function Medium() {
  if (myValue6.length > 0) {
    return (
      <>
        <br />
        {`<a href="https://medium.com/@${myValue6}" target="_blank">`} <br />
        {`<img src=https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white style="margin-bottom: 15px;" />`}
        <br />
        {`</a>`}
        <br />
      </>
    );
  } else {
    return "";
  }
}

// function Skill() {
//   if(flag === 1) {
//     return (
//       <>
//         {`<h1 align="center">My Skills</h1>`}
//         <br/>
//         <br/>
//       </>
//     );
//   }
//   else {
//     return "";
//   }
// }

// component Markdown to pass values to the above functions
const Markdown = (props) => {
  const history = useHistory();
  const [isCopied, setIsCopied] = useState(false);
 

  function handleClick() {
    
    const myValue = document.getElementById("md").innerText;
    navigator.clipboard.writeText(myValue).then(()=>{
        console.log("Copied to clipboard");
        setIsCopied(true);
      },
      (err)=>{
        alert("Could not copy text");
      }
    );
  }

  let data = props.location.data;
  return (
    <div>

      <Header />      
      <div className="markdownbutton">

        <button className="back" onClick={() => history.push("/")}>Back</button>
        <button onClick={handleClick} className="copy">{isCopied ? "✅ Copied" : "Copy"}</button>
        <button className="preview">Preview</button>

      </div>

      <div className="markdown" id="md">
        <>
          {`<div align="center">
              <img src="https://rishavanand.github.io/static/images/greetings.gif" align="center" style="width: 100%" />
            </div>`}
          <br />
          <br />
          <br />
        </>
        {console.log(flag)}
        <TitleMD
          titlepretext={data.intro.titlepretext}
          title={data.intro.title}
        />
        <SubtitleMD subtitle={data.intro.subtitle} />
        <WorkMD x={data.work.w1} y={data.work.w2} z={data.work.w3} />{" "}
        <WorkMD x={data.work.w4} y={data.work.w5} z={data.work.w6} />
        <WorkMD x={data.work.w7} y={data.work.w8} />{" "}
        <WorkMD x={data.work.w9} y={data.work.w10} />{" "}
        <WorkMD x={data.work.w11} y={data.work.w12} />{" "}
        <WorkMD x={data.work.w13} y={data.work.w14} />{" "}
        <WorkMD x={data.work.w15} y={data.work.w16} />
        <>
          {`<h1 align="center">My Skills</h1>`}
          <br />
          <br />
        </>
        <Languages languages={languages} />
        <Frontend frontend={frontend} />
        <Backend backend={backend} />
        <Mobile mobile={mobile} />
        <AIML aiml={aiml} />
        <Database database={database} />
        <Datavisualization datavisualization={datavisualization} />
        <Devops devops={devops} />
        <Baas baas={baas} />
        <Framework framework={framework} />
        <Game game={game} />
        <Testing testing={testing} />
        <Software software={software} />
        <Automation automation={automation} />
        <Other other={other} />
        <Github myValue1={myValue1} />
        <Linkedin myValue2={myValue2} />
        <Codepen myValue3={myValue3} />
        <Stackoverflow myValue4={myValue4} />
        <Dev myValue5={myValue5} />
        <Medium myValue6={myValue6} />
        <GithubStats myValue1={myValue1} />
        <GithubVisitors myValue1={myValue1} />
      </div>
      <Footer />
    </div>
  );
};

export default Markdown;

export {AiMlList, LanguagesList, FrontendList, BackendList, MobileList, DatabaseList, DatavisualizationList, AutomationList, OtherList, DevopsList, BaasList, FrameworkList, GameList, TestingList, SoftwareList, Githubuser, Githubstats, Githubvisitors, Linkedinuser, Codepenuser, Stackoverflowuser, Mediumuser, Devuser};