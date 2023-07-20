import React from "react";
import {Button} from "./Button";

export const ContainerForButton = () => {

  const onclickHandler = (info?:string, age?:number) => {
    if(age){
      console.log(age)
    }
    if(info) {
      console.log(info)
    }
  }

  return (
    <div style={{display: "flex", height: "100vh", margin: 'auto', justifyContent: 'center', alignItems: 'center'}}>
      <Button name={'Create'} onClickHandler={() => onclickHandler('information', 25)}/>
      <Button name={'Delete'} onClickHandler={() => onclickHandler('none')}/>
    </div>
  )
}
