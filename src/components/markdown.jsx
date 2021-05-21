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

  // subtitle being converted to markdown
  // const WorkMD = props => {
  //   if (props.prefix && props.project) {
  //     if (props.link) {
  //       return (
  //         <>
  //           {`- ${props.prefix} [${props.project}](${props.link})`}
  //           <br />
  //           <br />
  //         </>
  //       )
  //     } else {
  //       return (
  //         <>
  //           {`- ${props.prefix} **${props.project}**`}
  //           <br />
  //           <br />
  //         </>
  //       )
  //     }
  //   }
  //   if (props.prefix && props.link) {
  //     return (
  //       <>
  //         {`- ${props.prefix} [${props.link}](${props.link})`}
  //         <br />
  //         <br />
  //       </>
  //     )
  //   }
  //   return ""
  // }


// component Markdown to pass values to the above functions
const Markdown = props => {
  console.log(props)
  let data=props.location.data
    return (
        <div>    
        <SubtitleMD subtitle={data.intro.subtitle} /> 
        <TitleMD titlepretext={data.intro.titlepretext} title={data.intro.title}/>
        {/* <WorkMD/> */}
        </div>
    )
}

export default Markdown;