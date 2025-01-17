import React from 'react'

export default function Form({onSubmit, children, ...props}) {
  return (
   <form onSubmit={onSubmit} {...props}>
{children}
   </form>
  )
}
