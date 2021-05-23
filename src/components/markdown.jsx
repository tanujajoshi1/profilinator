import React from 'react'

// title being converted to markdown
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

// subtitle being converted to markdown
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

//work being converted to markdown
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



// component Markdown to pass values to the above functions
const Markdown = props => {
  console.log(props)
  let data = props.location.data
  return (
    <div>
      <SubtitleMD subtitle={data.intro.subtitle} />
      <TitleMD titlepretext={data.intro.titlepretext} title={data.intro.title} />
      <WorkMD x={data.work.w1} y={data.work.w2} z={data.work.w3}/> <WorkMD x={data.work.w4} y={data.work.w5} z={data.work.w6}/>      
      <WorkMD x={data.work.w7} y={data.work.w8}/> <WorkMD x={data.work.w9} y={data.work.w10}/> <WorkMD x={data.work.w11} y={data.work.w12}/> <WorkMD x={data.work.w13} y={data.work.w14}/>  <WorkMD x={data.work.w15} y={data.work.w16}/>    
    </div>
  )
}

export default Markdown;