import React from 'react'

// title being converted to markdown
const Title = props => {
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

const Sub = props => {
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


// component Markdown to pass values to the above functions
const Markdown = props => {
  console.log(props)
    return (
        <div>    
        <Sub subtitle={props.data.intro.subtitle} /> 
        <Title titlepretext={props.data.intro.titlepretext} title={props.data.intro.title}/>
        </div>
    )
}

export default Markdown;