import React from 'react'

const Flex = ({className, children}) => {
  return (
    <div className={`${className} flex items-center flex-wrap`}>
      {children}
    </div>
  )
}

export default Flex
