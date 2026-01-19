import React from 'react'

const Grid = ({className, children}) => {
  return (
    <div className={`${className} grid items-center gap-[30px] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1`}>
      {children}
    </div>
  )
}

export default Grid
