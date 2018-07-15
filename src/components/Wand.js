import React from 'react'


const Wand = (props) => {

  let wood = props.wand.wood ? props.wand.wood : "unknown"
  let length = props.wand.length ? `${props.wand.length} inches in length` : "has an unkown length"
  let core = props.wand.core ? `a core of ${props.wand.core}` : "an unknown core"
  
  let wandDescription = <h2>This wizard or witches' wand is {length}, made of {wood} with {core}.</h2>

  const wandMessage = props.wand.wood ? wandDescription : ""

  return (
    <div className="wand-block flex">
      {wandMessage}
    </div>
  )

}

export default Wand