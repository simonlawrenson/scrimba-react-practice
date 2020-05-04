import React from"react"

function Joke( props ) {
  return (
    <div>
      <h3 style={{ display: !props.question && "none" }}>Question: {props.question}</h3>
      <h5 style={{ color: !props.question && "red"}}>Answer: {props.punchLine}</h5>
      <hr />
    </div>
  )
}

export default Joke