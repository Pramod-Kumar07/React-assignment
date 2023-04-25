import React from 'react'

function CTP(props) {
    const obj={
        name:"pramod",
        color:"green",
    }
  return (
    <>
      <button onClick={()=> props.click(obj)}>click</button>
    </>
  )
}

export default CTP