import { useState } from 'react'
import { PetList } from './PetList'

export function PetEgg({ onOpen, tier, amount = 1 }) {
  // Open a pet egg and obtain a random pet
  const [count, setCount] = useState(0)

  const randomPet = () => {
    setCount(count + 1)
    // generate a random pet using the probability of each pet
    // Generate a number between 0 and 100

    if (amount > 1) {
      let petList = []

      for (let i = 0; i < amount; i++) {
        const randomNumber = (Math.random() * (100 + 1.0 - 1.0)).toFixed(4)

        let pet = PetList.find(pet => pet.sum > randomNumber)
        petList.push(pet)
      }
      console.log(petList)
      onOpen(petList)
    } else {
      const randomNumber = (Math.random() * (100 + 1.0 - 1.0)).toFixed(4)
      let pet = PetList.find(pet => pet.sum > randomNumber)
      onOpen(pet)
    }
  }

  return (
    <div className="flex flex-col border border-gray-500 w-auto p-2">
      <button
        className="mx-auto px-6 py-2 border border-blue-300 bg-blue-400 hover:bg-blue-300 rounded-md m-2 transition-all duration-300 ease-in-out"
        onClick={randomPet}
      >
        Radiant Pet Egg {amount !== 1 ? `(x${amount})` : ''}
      </button>
      <span>Opened: {count}</span>
    </div>
  )
}
