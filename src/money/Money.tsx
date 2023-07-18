import React, {useState} from "react";

type FilterType = 'All' | 'Dollars' | 'Rubls'
export const Money = () => {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [banknotName, setBanknotName] = useState<FilterType>('All')

  const onClickHandler = (name: FilterType) => {
    setBanknotName(name)
  }
  let filteredMoney = money
  if (banknotName === 'Rubls') {
    filteredMoney = money.filter(el => el.banknots === 'RUBLS')
  }
  if (banknotName === 'Dollars') {
    filteredMoney = money.filter(el => el.banknots === 'Dollars')
  }

  return (
    <div>
      <ul>
        {filteredMoney.map((el, index) => {
          return (
            <li key={index} style={{listStyle: 'none'}}>
              <span>{el.banknots}</span>
              <span>{el.value}</span>
              <span>{el.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{marginLeft: '40px'}}>
        <button onClick={() => onClickHandler('All')}>All</button>
        <button onClick={() => onClickHandler('Rubls')}>Rubls</button>
        <button onClick={() => onClickHandler('Dollars')}>Dollars</button>
      </div>
    </div>
  )
}
