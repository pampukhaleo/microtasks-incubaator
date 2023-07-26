import React, { useState } from 'react';
import { FullInput } from './FullInput';

export const InputContainer = () => {
  const [messages, setMessages] = useState([
    { id: 1, title: 'hi' },
    { id: 2, title: 'hihi' },
    { id: 3, title: 'hihihi' },
    { id: 4, title: 'hihihihi' },
    { id: 5, title: 'hihihihihi' },
  ])

  const onclickHandler = (text: string) => {
    setMessages([...messages, {
      id: Math.floor(Math.random() * 90000) + 10000,
      title: text
    }])
  }

  return (
    <div>
      <FullInput onclickHandler={ onclickHandler }/>
      <ul>
        { messages.map(message => (
          <li key={ message.id }>{ message.title }</li>
        )) }
      </ul>

    </div>
  )
}
