import React from 'react'


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

const Markdown = props => {
  console.log(props)
    return (
        <div>    
        <Sub subtitle={props.data.intro.subtitle} />  
        </div>
    )
}

export default Markdown;