import React from 'react'

const Loading = () => {
  return (
   <div className="container">
     <div className=" flex w-full h-screen flex-col gap-4">
    <div className="skeleton h-2/4 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
   </div>
  )
}

export default Loading