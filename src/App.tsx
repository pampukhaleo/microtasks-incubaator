import React from 'react';
import './App.css';
import {Money} from "./money/Money";
import {ContainerForButton} from "./button/ContainerForButton";
import {TopCars} from "./topCars/TopCars";
import { InputContainer } from './input/InputContainer';

function App() {
  return (
    <div className="App">
      {/*<TopCars />*/}
      {/*<ContainerForButton />*/}
      {/*<Money />*/}
      <InputContainer />
    </div>
  );
}

export default App;
