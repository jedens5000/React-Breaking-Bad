import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          {/* "item" pulled from props above, imported from CharacterGrid .map conversion */}
          <img src={item.img} alt=''/>
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation[0]}{item.occupation[1] ? ", " + item.occupation[1] : ""}{item.occupation[2] ? ", " + item.occupation[2] : ""}{item.occupation[3] ? ", " + item.occupation[3] : ""}{item.occupation[4] ? ", " + item.occupation[4] : ""}
            </li>            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem