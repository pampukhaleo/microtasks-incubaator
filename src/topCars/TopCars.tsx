import React from "react";

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

export const TopCars = () => {
  return (
    <table style={{border: '1px solid black', width: '250px'}}>
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Model</th>
        </tr>
      </thead>
      <tbody>
        {topCars.map((car, i) => (
          <tr key={i}>
            <td>{car.manufacturer}</td>
            <td>{car.model}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
