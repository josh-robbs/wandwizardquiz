import React from 'react'

import Answer from './Answer'


const Message = (props) => {

  const greeting = props.wand ? "" : <h1 id="greeting">Welcome.</h1>

  return (
    <div className="message-block flex">
      {greeting}
      <Answer wand={props.wand} 
              wizard={props.wizard} />
      <img  src="https://vignette.wikia.nocookie.net/jspotter/images/1/18/Hogwarts_Crest_1.png/revision/latest?cb=20140720035204"
            alt="Hogwarts Crest" />
      <button id="accioButton" onClick={props.newWand}>Accio Wand!</button>
    </div>
  )

}

export default Message