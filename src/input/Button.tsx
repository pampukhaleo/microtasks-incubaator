import React from 'react'

type Button = {
  onClickHandler: () => void
}

export const Button = ({ onClickHandler }: Button) => {
  return (
    <button onClick={ () => onClickHandler() }>+</button>
  )
}
