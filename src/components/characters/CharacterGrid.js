import React from 'react'
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading}) => {
  //Terany Operator, if it's loading, display "Loading...", otherwise show cards
  return isLoading ? (<Spinner />) : 
      <section className='cards'>
        {items.map(item => (  //This converts "items" to "item" as the new keyword for accessing the API object
          <CharacterItem key={item.char_id} item={item}></CharacterItem> //key is set to id pre-defined by API
        ))}
      </section>
}

export default CharacterGrid