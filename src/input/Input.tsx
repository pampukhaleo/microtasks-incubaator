import React from 'react'

type InputPropsType = {
  text: string
  setText: (text: string) => void
}



export const Input = ({ text, setText }: InputPropsType) => {
  const onChangeHandler = (event: { target: { value: string } }) => {
    setText(event.target.value)
  }

  return (
    <div style={ { display: 'inline-block' } }>
      <input value={ text }
             type="text"
             onChange={ onChangeHandler }/>
    </div>
  )
}
