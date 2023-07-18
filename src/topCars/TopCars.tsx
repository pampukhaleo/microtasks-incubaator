import React from "react";

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

export const TopCars = () => {
  return (
    <table>
      <tr>
        <th>Manufacturer</th>
        <th>Model</th>
      </tr>
      {topCars.map(car => (
        <tr>
          <td>{car.manufacturer}</td>
          <td>{car.model}</td>
        </tr>
      ))}
    </table>
  )
}
