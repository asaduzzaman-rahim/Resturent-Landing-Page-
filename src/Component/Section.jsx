import React from 'react'

const Section = ({className, children}) => {
  return (
    <div className={`${className} py-[75px] px-[30px]`}>
      {children}
    </div>
  )
}

export default Section
