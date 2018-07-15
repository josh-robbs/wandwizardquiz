import React from 'react'

import Wizard from './Wizard'


const Wizards = (props) => {

  const wizard = props.wizards.map(wizard => {
    return <Wizard  key={Math.random()} 
                    wizard={wizard} 
                    currentWizard={props.currentWizard} 
                    selectWizard={props.selectWizard} />
  })

  return (
    <div className="wizard-block flex">
      {wizard}
    </div>
  )

}

export default Wizards
