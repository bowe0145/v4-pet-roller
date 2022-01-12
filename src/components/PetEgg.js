import { useState } from 'react'
import { PetList } from './PetList'

export function PetEgg({ onOpen, tier }) {
  // Open a pet egg and obtain a random pet
  const [count, setCount] = useState(0)

  const randomPet = () => {
    setCount(count + 1)
    // generate a random pet using the probability of each pet
    // Generate a number between 0 and 100
    const randomNumber = (Math.random() * (100 + 1.0 - 1.0)).toFixed(4)

    // Find the pet with the lowest sum thats higher than the random number
    let pet = PetList.find(pet => pet.sum > randomNumber)
    pet.rng = randomNumber
    console.log(`pet`, pet)
    onOpen(pet)
    // return pet
  }

  return (
    <>
      <button
        className="mx-auto px-6 py-2 border border-blue-300 bg-blue-400 hover:bg-blue-300 rounded-md m-4 transition-all duration-300 ease-in-out"
        onClick={randomPet}
      >
        Radiant Pet Egg
      </button>
      <p>Opened: {count}</p>
    </>
  )
}
