import React from "react";

type PropsType = {
  name: string
  onClickHandler: () => void
}
export const Button = ({name, onClickHandler}: PropsType) => {
  return (
      <button
        style={{height: '50px', width: '150px', borderRadius: '5px'}}
        onClick={onClickHandler}
      >
        {name}
      </button>
  )
}
