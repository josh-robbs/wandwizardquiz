import React from 'react'


const Header = () => {

  return (
    <header>
      <div className="header flex">
        <img  src="https://vignette.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest?cb=20161124074004" 
              alt="gryffindor crest" />
        <img  src="https://vignette.wikia.nocookie.net/harrypotter/images/4/40/Ravenclaw_Crest_1.png/revision/latest?cb=20150413213520" 
              alt="ravenclaw crest"/>

        <h1>The Wand Chooses the Wizard.</h1>
        
        <img  src="https://vignette.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest?cb=20161020182557" 
              alt="slytherin crest"/>
        <img  src="https://vignette.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest?cb=20161020182518" 
              alt="hufflepuff crest"/>
      </div>
    </header>
  )

}

export default Header