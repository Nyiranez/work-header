import React from 'react'
import { useState } from 'react';
export const Home = () => {

  const Persons = [
    {
      name: 'Louise',
      age: 28,
      address: " Kimironko"
    },
    {
      name: 'Alpha',
      age: 28,
      address: " Kimironko"
    },
    {
      name: 'Sando',
      age: 22,
      address: " Kabuga"
    },
    {
      name: 'Amor',
      age: 22,
      address: " Kimironko"
    },
    {
      name: 'Mama',
      age: 28,
      address: " Kabuga"
    },
    {
      name: 'Fiat',
      age: 22,
      address: " Kimironko"
    },

  ]
  const [filteredperson, setFilteredPerson] = useState(Persons);
  const handleFilter = (event) => {
    const value = event.target.value;
    if (value === " " || value === undefined) {
      setFilteredPerson(Persons);
    }
    else {
      const filtered = filteredperson.filter(user => user.name.includes(value));
      setFilteredPerson(filtered);
    }

  };

  const slic = Persons.slice(0, 3)

  return (
    <div className="">
      <h1 className='text-4xl underline '>Slice</h1>

      {slic.map((name, index) => {
        return <div key={index} className='mt-4'>
          <p>{name.name}</p>
          <p>{name.age}</p>
          <p>{name.address}</p>
        </div>
      })}


      <h1 className='text-4xl underline '>Filter</h1>


      <input type="text" onChange={handleFilter} className='border-4 ' placeholder='Enter Name' />
      {filteredperson.map(user => (
        <div key={user.name}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
        </div>
      ))}

    </div>
  )
}
