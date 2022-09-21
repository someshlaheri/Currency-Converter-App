import React from 'react'
import Heading from './ContainerHeader/Heading'
import ChildContainer from './ContainerBody/ChildContainer'
import './MainContainer.css'

const MainContainer = () => {

  return (
    <>
      <div className="container">
        <Heading/>
        <ChildContainer/>
      </div>
    </>
  )
}

export default MainContainer