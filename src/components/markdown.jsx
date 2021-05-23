import React from 'react';

let aiml = [];
let languages = [];
let frontend = [];
let backend = [];
let mobile =[];
let database =[];
let datavisualization = [];
let other = [];
let automation = [];
let devops = [];
let baas = [];
let framework = [];
let game = [];
let testing = [];
let software = [];

const AiMlList = props => {
    aiml = props.aimlList;
    return "";
}

const LanguagesList = props => {
  languages = props.languagesList;
  return "";
}

const FrontendList = props => {
  frontend = props.frontendList;
  return "";
}

const BackendList = props => {
  backend = props.backendList;
  return "";
}

const MobileList = props => {
  mobile = props.mobileList;
  return "";
}

const DatabaseList = props => {
  database = props.databaseList;
  return "";
}

const DatavisualizationList = props => {
  datavisualization = props.datavisualizationList;
  return "";
}

const OtherList = props => {
  other = props.otherList;
  return "";
}

const AutomationList = props => {
  automation = props.automationList;
  return "";
}

const DevopsList = props => {
  devops = props.devopsList;
  return "";
}

const BaasList = props => {
  baas = props.baasList;
  return "";
}

const FrameworkList = props => {
  framework = props.frameworkList;
  return "";
}

const GameList = props => {
  game = props.gameList;
  return "";
}

const TestingList = props => {
  testing = props.testingList;
  return "";
}

const SoftwareList = props => {
  software = props.softwareList;
  return "";
}

const TitleMD = props => {
  if (props.titlepretext && props.title) {
    return (
      <>
        {`<h1 align="center">${props.titlepretext + " " + props.title}</h1>`}
        <br />
      </>
    )
  }
  return ""
}

const SubtitleMD = props => {
  if (props.subtitle) {
    return (
      <>
        {`<h3 align="center">${props.subtitle}</h3>`}
        <br />
        <br />
      </>
    )
  }
  return ""
}

const WorkMD = props => {  
  if (props.x && props.y) {
    if (props.z) {
      return (<> {`- ${props.x} [${props.y}](${props.z})`} <br /> <br />  </> )
    }
    else {
      return (<> {`- ${props.x} **${props.y}**`} <br /> <br /> </> )
    }
  }
  if (props.x && props.z) {
    return (<> {`- ${props.x} [${props.z}](${props.z})`} <br /> <br /> </> )
  }
  return ""
}

function AIML(props) {
    if(props.aiml.length > 0) {
      return(
        <>
            {`<h1 align="center">${aiml}</h1>`}
            <br />
        </>
      );
    }
    else {
      return "";
    }
}

function Languages(props) {
  if(props.languages.length > 0) {
    return(
      <>
          {`<h1 align="center">${languages}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Frontend(props) {
  if(props.frontend.length > 0) {
    return(
      <>
          {`<h1 align="center">${frontend}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Backend(props) {
  if(props.backend.length > 0) {
    return(
      <>
          {`<h1 align="center">${backend}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Mobile(props) {
  if(props.mobile.length > 0) {
    return(
      <>
          {`<h1 align="center">${mobile}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Database(props) {
  if(props.database.length > 0) {
    return(
      <>
          {`<h1 align="center">${database}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Datavisualization(props) {
  if(props.datavisualization.length > 0) {
    return(
      <>
          {`<h1 align="center">${datavisualization}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Automation(props) {
  if(props.automation.length > 0) {
    return(
      <>
          {`<h1 align="center">${automation}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Other(props) {
  if(props.other.length > 0) {
    return(
      <>
          {`<h1 align="center">${other}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Devops(props) {
  if(props.devops.length > 0) {
    return(
      <>
          {`<h1 align="center">${devops}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Baas(props) {
  if(props.baas.length > 0) {
    return(
      <>
          {`<h1 align="center">${baas}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Framework(props) {
  if(props.framework.length > 0) {
    return(
      <>
          {`<h1 align="center">${framework}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Game(props) {
  if(props.game.length > 0) {
    return(
      <>
          {`<h1 align="center">${game}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Testing(props) {
  if(props.testing.length > 0) {
    return(
      <>
          {`<h1 align="center">${testing}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}

function Software(props) {
  if(props.software.length > 0) {
    return(
      <>
          {`<h1 align="center">${software}</h1>`}
          <br />
      </>
    );
  }
  else {
    return "";
  }
}
  
// component Markdown to pass values to the above functions
const Markdown = props => {
  console.log(props)
  let data = props.location.data 

    return (
        <div>    
        <SubtitleMD subtitle={data.intro.subtitle} /> 
        <TitleMD titlepretext={data.intro.titlepretext} title={data.intro.title}/>
        <WorkMD x={data.work.w1} y={data.work.w2} z={data.work.w3}/> <WorkMD x={data.work.w4} y={data.work.w5} z={data.work.w6}/>      
        <WorkMD x={data.work.w7} y={data.work.w8}/> <WorkMD x={data.work.w9} y={data.work.w10}/> <WorkMD x={data.work.w11} y={data.work.w12}/> <WorkMD x={data.work.w13} y={data.work.w14}/>  <WorkMD x={data.work.w15} y={data.work.w16}/>    
        <AIML aiml = {aiml} />
        <Languages languages = {languages} />
        <Frontend frontend = {frontend} />
        <Backend backend = {backend} />
        <Mobile mobile = {mobile} />
        <Database database = {database} />
        <Datavisualization datavisualization = {datavisualization} />
        <Devops devops = {devops} />
        <Baas baas = {baas} />
        <Framework framework = {framework} />
        <Game game = {game} />
        <Testing testing = {testing} />
        <Software software = {software} />
        <Automation automation = {automation} />
        <Other other = {other} />        
        </div>
    )
}

export default Markdown;

export {AiMlList, LanguagesList, FrontendList, BackendList, MobileList, DatabaseList, DatavisualizationList, AutomationList, OtherList, DevopsList, BaasList, FrameworkList, GameList, TestingList, SoftwareList};

