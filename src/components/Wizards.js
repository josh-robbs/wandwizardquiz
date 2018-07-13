import React from 'react';

const Wizards = (props) => {
  const wizards = props.wizards.map(wizard => {
    return <img key={Math.random()+Math.random()}
                className="wizardThumbs"
                src={wizard.image} 
                alt={"picture of " + wizard.name}
                name={wizard.wand.wood}
                onClick={props.selectWizard} />
  })

  return (
    <div className="wizardBlock flex">
      {wizards}
    </div>
  )
}

export default Wizards