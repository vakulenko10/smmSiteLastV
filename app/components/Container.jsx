import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`max-w-[1240px] mx-auto p-0`}>{children}</div>
  )
}

export default Container