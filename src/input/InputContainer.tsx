import React, { useState } from 'react';
import { FullInput } from './FullInput';
import { Input } from './Input';
import { Button } from './Button';

export const InputContainer = () => {
  const [messages, setMessages] = useState([
    { id: 1, title: 'hi' },
    { id: 2, title: 'hihi' },
    { id: 3, title: 'hihihi' },
    { id: 4, title: 'hihihihi' },
    { id: 5, title: 'hihihihihi' },
  ])

  const [text, setText] = useState('')

  const addNewMessage = (text: string) => {
    setMessages([...messages, {
      id: Math.floor(Math.random() * 90000) + 10000,
      title: text
    }])
  }

  const onClickHandler = () => {
    addNewMessage(text)
    setText('')
  }

  return (
    <div>
      <Input text={text} setText={setText}/>
      <Button onClickHandler={onClickHandler}/>
      <ul>
        { messages.map(message => (
          <li key={ message.id }>{ message.title }</li>
        )) }
      </ul>

    </div>
  )
}
