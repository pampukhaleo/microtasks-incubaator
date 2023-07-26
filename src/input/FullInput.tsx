import React, { useState } from 'react'

type FullInputPropsType = {
  onclickHandler: (text: string) => void
}

export const FullInput = ({ onclickHandler }: FullInputPropsType) => {
  const [text, setText] = useState('')

  const onChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input value={ text }
             type="text"
             onChange={ onChangeHandler }/>
      <button onClick={ () => onclickHandler(text) }>+</button>
    </div>
  )
}
