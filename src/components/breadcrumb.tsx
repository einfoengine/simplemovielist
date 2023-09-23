import React from 'react'

const Breadcrumb = ({text}) => {
  return (
    <div className="px-module px-mod-breadcrumb">
      <span className="px-breadcrumb">{text}</span>
    </div>
  )
}

export default Breadcrumb